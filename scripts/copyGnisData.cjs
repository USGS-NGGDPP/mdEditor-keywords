const fs = require('fs-extra');

const copyGnisData = async () => {
  await fs.copy('./harvesters/gnis/data', './dist/harvesters/gnis/data');
};

copyGnisData();
