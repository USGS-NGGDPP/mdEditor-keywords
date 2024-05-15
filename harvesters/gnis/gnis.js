const fs = require('fs');
const path = require('path');

// const convertTxtFileToJson = require('./convertTxtFileToJson');

const tmpPath = path.join(__dirname, 'tmp');

async function main() {
  const directories = fs.readdirSync(tmpPath);
  for (const directory of directories) {
    const directoryPath = path.join(tmpPath, directory);
    const subDirectories = fs.readdirSync(directoryPath);

    for (const subDirectory of subDirectories) {
      const subDirectoryData = {};
      const subDirectoryPath = path.join(directoryPath, subDirectory, 'Text');
      const files = fs.readdirSync(subDirectoryPath);
      for (const file of files) {
        if (path.extname(file) !== '.txt') continue;
        const filename = file.split('.')[0];
        const filePath = path.join(subDirectoryPath, file);
        console.log('filename', filename);
        console.log('filePath', filePath);
        console.log('subDirectoryPath', subDirectoryPath);
        console.log('\n');
        // const jsonArray = await convertTxtFileToJson(filePath);
        // subDirectoryData[filename] = jsonArray;
      }

      const outputDirectoryPath = path.join(tmpPath, 'JSON');
      const outputFilePath = path.join(
        outputDirectoryPath,
        `${subDirectory}.json`
      );
      fs.writeFileSync(
        outputFilePath,
        JSON.stringify(subDirectoryData, null, 2)
      );
    }
  }
}

module.exports = {
  main
};
