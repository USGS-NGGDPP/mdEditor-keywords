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

You can run specific harvesters or all harvesters from the command line.

### Running a specific harvester:

- Example command for running an individual harvester:
  `command to run individual harvester goes here`

### Running all harvesters:

- Example command to run all harvesters at once:
  `command to run all harvesters goes here`

## Troubleshooting

If you encounter any issues while running the harvesters, consult the following troubleshooting tips:

- Error when fetching data: Ensure the API access is properly configured.
- Files not saving correctly: Double-check permissions and file paths.

## License

This repository follows the same licensing structure as the main repository.
