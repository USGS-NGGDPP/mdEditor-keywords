import { writeToLocalFile } from '../utils';
import {
  DomesticNamesConfig,
  GNIS_HARVESTERS_ENUM,
  gnisConfig
} from './gnisConfig';
import { parseCitationFromXml, parseTxtFileToJson } from './gnisUtils';
import { v4 as uuidv4 } from 'uuid';

const { DOMESTIC_NAMES } = GNIS_HARVESTERS_ENUM;
const { CITATION_FILANAME, DST_FILENAME_PREFIX, TXT_FILENAME } =
  DomesticNamesConfig;
const { KEYWORDS_DIR, THESAURUS_DIR } = gnisConfig;

export async function harvestDomesticNames() {
  console.log('Harvesting Domestic Names');

  // Load the data from the file and parse it into JSON
  // The resulting JSON will have an array of objects with the following properties:
  //  "feature_id"
  //  "feature_name"
  //  "feature_class"
  //  "state_name"
  //  "state_numeric"
  //  "county_name"
  //  "county_numeric"
  //  "map_name"
  //  "date_created"
  //  "date_edited"
  // The JSON data also contains additional keys not listed above, which contain coordinates for the features
  const jsonData = await parseTxtFileToJson(
    `${DOMESTIC_NAMES}/${TXT_FILENAME}`
  );

  const hierarchy = [];
  const stateMap = {};

  jsonData.forEach(item => {
    const {
      state_name: state,
      state_numeric: stateNumeric,
      feature_class: featureClass,
      feature_name: featureName,
      feature_id: featureId
    } = item;

    if (!stateMap[state]) {
      const stateNode = {
        uuid: `${stateNumeric}-${state}`,
        label: state,
        definition: `${state} is a state in the United States.`,
        children: []
      };
      stateMap[state] = stateNode;
      hierarchy.push(stateNode);
    }

    const stateNode = stateMap[state];

    let featureClassNode = stateNode.children.find(
      child => child.label === featureClass
    );

    if (!featureClassNode) {
      featureClassNode = {
        uuid: uuidv4(),
        label: featureClass,
        definition: `${featureClass} is a type of feature found in ${state}.`,
        children: []
      };
      stateNode.children.push(featureClassNode);
    }

    const featureExists = featureClassNode.children.some(
      child => child.label === featureName
    );

    if (!featureExists) {
      featureClassNode.children.push({
        uuid: featureId,
        label: featureName,
        definition: `${featureName} is a specific ${featureClass} in ${state}.`,
        children: []
      });
    }
  });

  const citation = await parseCitationFromXml(
    `${DOMESTIC_NAMES}/${CITATION_FILANAME}`
  );

  hierarchy.forEach(state => {
    let statename = state.label;
    if (statename === '') {
      statename = 'Unknown';
    }
    const filename = `${DST_FILENAME_PREFIX}${statename}.json`;
    writeToLocalFile([state], filename);
    const keywordsUrl = `${BASE_REPO_URL}/${KEYWORDS_DIR}/${filename}`;
    const thesaurusConfig = generateThesaurusConfig(keywordsUrl, citation);
    writeToLocalFile(
      thesaurusConfig,
      `${BASE_REPO_URL}/${THESAURUS_DIR}/${filename}`
    );
  });
}
