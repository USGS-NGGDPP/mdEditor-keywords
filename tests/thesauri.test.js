import fs from 'fs-extra';
import path from 'path';
import validator from './validator.js';

const thesaurusDir = path.join(__dirname, '../../resources/thesaurus/');

describe('Thesaurus Validation', () => {
  const thesaurusFiles = fs.readdirSync(thesaurusDir);

  thesaurusFiles.forEach(file => {
    test(`validates ${file}`, () => {
      const thesaurus = require(path.join(thesaurusDir, file));
      const valid = validator.validate('thesaurusConfig', thesaurus);

      if (!valid) {
        console.log(validator.errors);
        console.log(JSON.stringify(thesaurus, null, 2));
      }

      expect(valid).toBe(true);
    });
  });
});
