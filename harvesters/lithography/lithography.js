import axios from 'axios';
import { writeToLocalFile } from '../utils';
import config from './config.json';

const {
  LITHOGRAPHY_CODE,
  LITHOGRAPHY_LABEL,
  BASE_REPO_URL,
  BASE_URL,
  KEYWORDS_DIR,
  TERM,
  THESAURUS,
  THESAURUS_DIR
} = config;

async function getThesaurus(thcode) {
  const thesaurusUrl = `${BASE_URL}${THESAURUS}?thcode=${thcode}`;
  const getThesaurusResponse = await axios.get(thesaurusUrl);
  if (getThesaurusResponse.status !== 200) {
    throw new Error(
      `Failed to fetch thesaurus: ${getThesaurusResponse.status}: ${getThesaurusResponse.statusText}`
    );
  }
  if (!getThesaurusResponse.data || !getThesaurusResponse.data.vocabulary) {
    throw new Error('No vocabulary found');
  }
  return getThesaurusResponse.data.vocabulary;
}

async function getTerm(thcode, code) {
  const termUrl = `${BASE_URL}${TERM}?thcode=${thcode}&code=${code}`;
  const term = await axios.get(termUrl);
  if (term.status !== 200) {
    throw new Error(
      `Failed to fetch term ${code}: ${term.status}: ${term.statusText}`
    );
  }
  if (!term.data) {
    throw new Error(`No term ${code} found`);
  }
  return term.data;
}

function generateKeyword(term) {
  return {
    uuid: term.code,
    label: term.name,
    definition: term.scope,
    children: []
  };
}

async function buildTree(node, thcode) {
  if (!node.nt || node.nt.length === 0) {
    return [];
  }
  const childrenRequests = node.nt.map(child => getTerm(thcode, child.code));
  const childrenResponses = await Promise.all(childrenRequests);
  const childrenKeywords = await Promise.all(
    childrenResponses.map(async response => {
      const childKeyword = generateKeyword(response.term);
      childKeyword.children = await buildTree(response, thcode);
      return childKeyword;
    })
  );
  return childrenKeywords;
}

async function generateKeywords(name, thcode, root_code) {
  console.log('Building vocabulary:', name);
  const root = await getTerm(thcode, root_code);
  const rootKeyword = generateKeyword(root.term);
  rootKeyword.children = await buildTree(root, thcode);
  return rootKeyword;
}

function generateThesaurusConfig(thesaurus, filename) {
  console.log('Generating thesaurus config');
  if (!thesaurus.name) {
    throw new Error('Thesaurus name is required');
  }
  if (!filename) {
    throw new Error('Keywords URL is required');
  }
  return {
    citation: {
      date: [
        {
          date: thesaurus.date || null,
          dateType: 'revision'
        }
      ],
      description: thesaurus.scope || 'No description available',
      title: thesaurus.name,
      edition: thesaurus.edition || null,
      onlineResource: [
        {
          uri: thesaurus.uri || null
        }
      ],
      identifier: [
        {
          identifier: thesaurus.thcode
        }
      ]
    },
    label: LITHOGRAPHY_LABEL,
    keywordsUrl: `${BASE_REPO_URL}/${KEYWORDS_DIR}/${filename}`
  };
}

async function harvestVocabulary(thcode) {
  const thesaurus = await getThesaurus(thcode);
  const { name, root_code, prefix } = thesaurus;
  const filename = `usgs-${thcode}-${prefix}.json`;
  const keywords = [await generateKeywords(name, thcode, root_code)];
  writeToLocalFile(keywords, `${KEYWORDS_DIR}/${filename}`);
  const thesaurusConfig = generateThesaurusConfig(thesaurus, filename);
  writeToLocalFile(thesaurusConfig, `${THESAURUS_DIR}/${filename}`);
}

export default async function main() {
  try {
    await harvestVocabulary(LITHOGRAPHY_CODE);
  } catch (error) {
    console.error('Error:', error);
  }
}
