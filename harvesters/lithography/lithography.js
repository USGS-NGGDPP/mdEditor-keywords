import axios from 'axios';

import config from './config.json';
const { BASE_URL, THESAURUS, TERM, THCODE } = config;

async function getLithographyThesaurus() {
  const thesaurusUrl = `${BASE_URL}${THESAURUS}?thcode=${THCODE}`;
  const lithography = await axios.get(thesaurusUrl);
  if (lithography.status !== 200) {
    throw new Error(
      `Failed to fetch lithography thesaurus: ${lithography.status}: ${lithography.statusText}`
    );
  }
  if (!lithography.data) {
    throw new Error('No lithography thesaurus data found');
  }
  return lithography.data;
}

export default async function main() {
  const lithographyThesaurus = await getLithographyThesaurus();
  console.log('Lithography thesaurus:', lithographyThesaurus);
}
