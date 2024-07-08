import { harvestAntarctica } from './antarctica';
import { harvestDomesticNames } from './domesticNames';
import { harvestTopical } from './topical';

export default async function main() {
  console.log('Starting GNIS Harvester...');
  await harvestAntarctica();
  await harvestDomesticNames();
  await harvestTopical();
  console.log('Harvesting Complete');
}
