# USGS-NGGDPP mdEditor-keywords Harvesters

## Overview

This repository provides a collection of harvesters designed to automate the process of gathering keyword data from various sources. The collected keywords can be used with the mdEditor tool for metadata management, ensuring data consistency and efficient keyword application.

## Available Harvesters

The following harvesters are included in this repository, each requiring specific configurations:

- GCMD
- GNIS
- NALT
- ScienceBase
- USGS

## Prerequisites

Ensure that the following software and data requirements are met before running any of the harvesters:

- Node.js
- Required API access for the relevant harvesters (e.g., GNIS, ScienceBase).
- Access to the mdEditor for keyword management.

## Configuration

Each harvester requires specific configuration, detailed below.

### GCMD

`Insert configuration details for GCMD harvester here`

### GNIS

`Insert configuration details for GNIS harvester here`

### NALT

`Insert configuration details for NALT harvester here`

### ScienceBase

`Insert configuration details for ScienceBase harvester here`

### USGS

`Insert configuration details for USGS harvester here`

## Output

Each harvester generates two files for each vocabulary:

1. A keyword file, which is saved in `resources/keywords/`.
2. A thesaurus file, which is saved in `resources/thesaurus/`.

Ensure that both directories are correctly set up, and note that these files are not generated within the `harvesters/` directory. The harvesters are run from the root directory, not from within `harvesters/`.

## Usage

You can run specific harvesters or all harvesters from the command line using Yarn.

### Running a specific harvester:

Each harvester has a specific Yarn command associated with it:

- GCMD: **yarn gcmd**
- GNIS: **yarn gnis**
- NALT: **yarn nalt**
- ScienceBase: **yarn sciencebase**
- USGS: **yarn usgs**

These commands will:

1. Build the necessary assets.
2. Execute the harvester.
3. Generate the output files in `resources/keywords/` and `resources/thesaurus/`.
4. Update the manifest file to reflect the changes.

### Running all harvesters:

To run all harvesters in sequence, you can use the following approach:

- Build all assets.
- Run each harvester sequentially.
- Update the manifest after each harvester completes.

### Cleaning the Build:

If you need to clean up your build, you can run the associated clean command.

### Testing:

There are also basic tests included that can be run as part of the build process.

## Troubleshooting

If you encounter any issues while running the harvesters, consult the following troubleshooting tips:

- Error when fetching data: Ensure the API access is properly configured.
- Files not saving correctly: Double-check permissions and file paths.
- Build issues: Clean the build and try again.

## License

This repository follows the same licensing structure as the main repository.
