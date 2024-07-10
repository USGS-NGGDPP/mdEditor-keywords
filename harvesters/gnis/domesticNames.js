import { writeToLocalFile } from '../utils';
import { DomesticNamesConfig, GNIS_HARVESTERS_ENUM } from './gnisConfig';
import { parseTxtFileToJson } from './gnisUtils';

const { DOMESTIC_NAMES } = GNIS_HARVESTERS_ENUM;
const { NATIONAL_FILENAME } = DomesticNamesConfig;

export async function harvestDomesticNames() {
  console.log('Harvesting Domestic Names');
  const jsonData = await parseTxtFileToJson(
    `${DOMESTIC_NAMES}/${NATIONAL_FILENAME}`
  );

  const statesSet = new Set(jsonData.map(item => item.state_name));
  const states = Array.from(statesSet);

  const namesByState = {};
  states.forEach(state => {
    const stateData = jsonData.filter(item => item.state_name === state);
    const uniqueNames = Array.from(
      new Set(stateData.map(item => item.feature_name))
    );

    const uniqueData = uniqueNames.map(feature_name => {
      const matchingItems = jsonData.filter(
        item => item.feature_name === feature_name
      );
      return {
        feature_name,
        state_names: Array.from(
          new Set(matchingItems.map(item => item.state_name))
        ),
        feature_ids: matchingItems.map(item => item.feature_id),
        feature_class: matchingItems[0].feature_class,
        county_names: Array.from(
          new Set(matchingItems.map(item => item.county_name))
        )
      };
    });

    namesByState[state] = uniqueData;
  });

  const numberOfRecordsByState = {};
  states.forEach(state => {
    const count = namesByState[state].length;
    numberOfRecordsByState[state] = count;
  });

  writeToLocalFile(numberOfRecordsByState, 'tmp/numberOfRecordsByState.json');

  states.forEach(state => {
    let filename = state;
    if (filename === '') {
      filename = 'unknown';
    }
    writeToLocalFile(
      namesByState[state].sort((a, b) =>
        a.feature_name.localeCompare(b.feature_name)
      ),
      `tmp/${filename}.json`
    );
  });
}
