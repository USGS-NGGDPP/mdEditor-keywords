const fs = require('fs');
const readline = require('readline');

// Convert txt file to JSON
// The txt file is a pipe-delimited file with headers in the first line
async function convertTxtFileToJson(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let headers;
  const jsonArray = [];

  for await (const line of rl) {
    if (!headers) {
      headers = line.split('|');
    } else {
      const values = line.split('|');
      const jsonEntry = headers.reduce((obj, header, index) => {
        obj[header] = values[index] || ''; // Handle undefined values
        return obj;
      }, {});
      jsonArray.push(jsonEntry);
    }
  }

  return jsonArray;
}

module.exports = convertTxtFileToJson;
