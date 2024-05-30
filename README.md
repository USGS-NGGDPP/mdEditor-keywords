# mdEditor-keywords

## Overview

This repository contains various data harvesting scripts that can be run individually or all at once. The available harvesters include `gcmd`, `gnis`, `sciencebase`, and `usgs`.

## Prerequisites

- Node.js installed on your machine.
- Yarn package manager for managing dependencies and scripts.

### GCMD Prerequisites

- The file `harvesters/gcmd/vocabularies.json` should be reviewed to only include the desired vocabularies and updated to include any new ones.

### GNIS Prerequisites

- Download the GNIS data and store it in the directory `harvesters/gnis/data/` and be sure to extract the zip files.

### ScienceBase Prerequisities

- The file `harvesters/sciencebase/vocabularies.json` should be reviewed to only include the desired vocabularies and updated to include any new ones.

### USGS Prerequisites

- The file `harvesters/usgs/thesaurusConfig.json` should be reviewed for accuracy and completeness.

## Setup

First, clone the repository and install the dependencies:

```
git clone <repository-url>
cd <repository-name>
```

## Running Harvesters

You can run harvesters individually or all together using the scripts defined in `package.json`.

### Running All Harvesters

To run all harvesters at once, use the `start` script:

_Caution! This can take several hours to complete._

`yarn start`

Once completed, to verify the resource files conform to the schemas run the tests:

`yarn test`

### Running Individual Harvesters

To run a specific harvester, use the corresponding script name:

```
yarn gcmd   # Runs the GCMD harvester
yarn gnis   # Runs the GNIS harvester
yarn sb     # Runs the ScienceBase harvester
yarn usgs   # Runs the USGS harvester
```

### Additional Scripts

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

## License

This project is licensed under the ISC License.
