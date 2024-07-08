import { GNIS_HARVESTERS_ENUM } from './gnisConfig';

const { DOMESTIC_NAMES } = GNIS_HARVESTERS_ENUM;

export async function harvestDomesticNames() {
  console.log('Harvesting Domestic Names', DOMESTIC_NAMES);
}
