# mdEditor Keywords

This repository contains keyword and vocabulary configuration files for use with [mdEditor](https://github.com/adiwg/mdEditor). It includes schemas for validation, test scripts, and harvesters to generate and validate keyword files.

## Contents

- [Resources](#resources)
  - [Keywords](#keywords)
  - [Vocabularies](#vocabularies)
  - [Manifest](#manifest)
- [Schemas](#schemas)
- [Scripts](#scripts)
- [Tests](#tests)
- [Harvesters](#harvesters)
- [Usage](#usage)
- [Contributing](#contributing)

## Resources

The `resources/` directory contains:

- `keywords/`: Individual keyword files.
- `thesaurus/`: Vocabulary configuration files.
- `manifest.json`: Automatically generated manifest file listing all resources.

### Keywords

The `keywords/` directory contains keyword files in JSON format.

### Vocabularies

The `thesaurus/` directory contains vocabulary configuration files in JSON format.

### Manifest

The `manifest.json` file lists all available keyword and vocabulary files in the repository. It is structured as an array of objects, each with a `url` and `name` property.

## Schemas

The `schemas/` directory contains JSON Schema files used for validating the keyword and vocabulary configuration files. The schemas include:

- `keyword.json`: Schema for keyword files.
- `thesaurus-config.json`: Schema for vocabulary configuration files.
- `manifest.json`: Schema for the manifest file.

_Placeholder: Detailed descriptions of the schemas will be added here once the files are reviewed._

## Scripts

The `scripts/` directory contains scripts for:

- **Building the Manifest**: `build-manifest.js` script to regenerate the `manifest.json` file based on the contents of the `resources/` directory.
- **Utilities**: Other utility scripts for repository maintenance.

_Placeholder: Additional script descriptions will be added here._

## Tests

The `tests/` directory contains tests that use [ajv](https://ajv.js.org/) to validate the files in `resources/` against the schemas in `schemas/`.

To run the tests:

```bash
yarn test
```

## Harvesters

### Overview

This repository contains various data harvesting scripts that can be run individually or all at once. The available harvesters include `gcmd`, `gnis`, `sciencebase`, and `usgs`.

### Prerequisites

- Node.js installed on your machine.
- Yarn package manager for managing dependencies and scripts.

#### GCMD Prerequisites

- The file `harvesters/gcmd/vocabularies.json` should be reviewed to only include the desired vocabularies and updated to include any new ones.

#### GNIS Prerequisites

- Download the GNIS data and store it in the directory `harvesters/gnis/data/` and be sure to extract the zip files.

#### ScienceBase Prerequisities

- The file `harvesters/sciencebase/vocabularies.json` should be reviewed to only include the desired vocabularies and updated to include any new ones.

#### USGS Prerequisites

- The file `harvesters/usgs/thesaurusConfig.json` should be reviewed for accuracy and completeness.

### Setup

First, clone the repository and install the dependencies:

```
git clone <repository-url>
cd <repository-name>
```

### Running Harvesters

You can run harvesters individually or all together using the scripts defined in `package.json`.

#### Running All Harvesters

To run all harvesters at once, use the `start` script:

_Caution! This can take several hours to complete._

`yarn start`

Once completed, to verify the resource files conform to the schemas run the tests:

`yarn test`

#### Running Individual Harvesters

To run a specific harvester, use the corresponding script name:

```
yarn gcmd   # Runs the GCMD harvester
yarn gnis   # Runs the GNIS harvester
yarn sb     # Runs the ScienceBase harvester
yarn usgs   # Runs the USGS harvester
```

#### Additional Scripts

**Linting**: To check the code quality with ESLint

`yarn lint`

**Formatting**: To format the code with Prettier

`yarn format`

**Cleaning**: To remove the dist/ directory

`yarn clean`

**Building**: To build the dist/ directory

This command will build the harvesters, schemas, and tests compiling ES6+ to the common ES5 syntax. It does not run the harvesters, it simply builds (transpiles) the code.

`yarn build`

_Note: While building is required to run the harvesters and tests, the package.json scripts handle everything, including the install._

### License

This project is licensed under the ISC License.
