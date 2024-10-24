# USGS-NGGDPP mdEditor-keywords Harvesters

## Overview

This repository provides a collection of harvesters designed to automate the process of gathering keyword data from various sources. The collected keywords can be used with the mdEditor tool for metadata management, ensuring data consistency and efficient keyword application.

## Available Harvesters

The following harvesters are included in this repository:

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

## Installation

To install dependencies, run the following command:

`code for installing dependencies goes here`

## Usage

You can run specific harvesters or all harvesters from the command line.

### Running a specific harvester:

- Example command for running an individual harvester:
  `command to run individual harvester goes here`

### Running all harvesters:

- Example command to run all harvesters at once:
  `command to run all harvesters goes here`

## Configuration

Configuration files are required to set up API endpoints, authentication tokens, and other parameters needed by the harvesters. Customize them as necessary for new data sources or modifications to the existing ones.

`placeholder for explaining the configuration of files`

## Output

The output of each harvester is a set of keyword files saved in a predefined location. These files are formatted as JSON, ensuring compatibility with the mdEditor tool.

`details about output locations and format`

## Troubleshooting

If you encounter any issues while running the harvesters, consult the following troubleshooting tips:

- Error when fetching data: Ensure the API access is properly configured.
- Files not saving correctly: Double-check permissions and file paths.

## License

This repository follows the same licensing structure as the main repository.
