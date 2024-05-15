# mdEditor-keywords

## Overview

This repository contains various data harvesting scripts that can be run individually or all at once. The available harvesters include `gcmd`, `gnis`, `sciencebase`, and `usgs`.

## Prerequisites

- Node.js installed on your machine.
- Yarn package manager for managing dependencies and scripts.

## Setup

First, clone the repository and install the dependencies:

```
git clone <repository-url>
cd <repository-name>
yarn install
```

## Running Harvesters

You can run harvesters individually or all together using the scripts defined in `package.json`.

### Running All Harvesters

To run all harvesters at once, use the `start` script:

`yarn start`

### Running Individual Harvesters

To run a specific harvester, use the corresponding script name:

```
yarn gcmd         # Runs the GCMD harvester
yarn gnis         # Runs the GNIS harvester
yarn sciencebase  # Runs the ScienceBase harvester
yarn usgs         # Runs the USGS harvester
```

### Additional Scripts

**Linting**: To check the code quality with ESLint

`yarn lint`

**Formatting**: To format the code with Prettier

`yarn format`

**Prepare**: To setup Husky for git hooks

`yarn prepare`

## Contributions

Feel free to fork the repository and submit pull requests with enhancements.

## License

This project is licensed under the ISC License.
