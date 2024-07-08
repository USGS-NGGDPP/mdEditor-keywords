import { GNIS_HARVESTERS_ENUM } from './gnisConfig';

const { TOPICAL } = GNIS_HARVESTERS_ENUM;

export async function harvestTopical() {
  console.log('Harvesting Topical', TOPICAL);
}
