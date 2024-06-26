const fs = require('fs-extra');

const copyJsonFilesToDist = async () => {
  await fs.copy(
    './harvesters/gcmd/vocabularies.json',
    './dist/harvesters/gcmd/vocabularies.json'
  );
  await fs.copy(
    './harvesters/sciencebase/vocabularies.json',
    './dist/harvesters/sciencebase/vocabularies.json'
  );
  await fs.copy(
    './harvesters/usgs/thesaurusConfig.json',
    './dist/harvesters/usgs/thesaurusConfig.json'
  );
};

copyJsonFilesToDist();
