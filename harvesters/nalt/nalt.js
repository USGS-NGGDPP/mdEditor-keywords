import fs from 'fs/promises';

import {
  buildJsonStructure,
  parseXmlData,
  processEntries,
  readXmlFile,
  saveJsonFile
} from './utils';

const INPUT_FILE_PATH = 'harvesters/nalt/data/nalt-full.rdf';
const OUTPUT_FILE_PATH = 'harvesters/nalt/data/nalt-hierarchy.json';

export default async function main() {
  console.log('Starting NALT Harvester...');

  try {
    // Step 1: Read the XML File
    const xmlData = await readXmlFile(INPUT_FILE_PATH);

    // Step 2: Parse the XML Data
    const parsedData = await parseXmlData(xmlData);
    const parsedDataFilePath = 'harvesters/nalt/data/nalt-parsed.json';
    const parsedJsonData = JSON.stringify(parsedData, null, 2);
    await fs.writeFile(parsedDataFilePath, parsedJsonData, 'utf-8');

    // Step 3: Process Entries
    const processedData = processEntries(parsedData);
    const processedDataFilePath = 'harvesters/nalt/data/nalt-processed.json';
    const serializableData = {
      primaryEntries: Object.fromEntries(processedData.primaryEntries),
      defEntries: Object.fromEntries(processedData.defEntries),
      rootNodes: processedData.rootNodes
    };
    const processedJsonData = JSON.stringify(serializableData, null, 2);
    await fs.writeFile(processedDataFilePath, processedJsonData, 'utf-8');

    // Step 4: Build the Final JSON Structure
    const finalStructure = buildJsonStructure(processedData);

    // Step 5: Save Result
    await saveJsonFile(OUTPUT_FILE_PATH, finalStructure);

    console.log('Harvesting Complete');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
