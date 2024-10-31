# USGS-NGGDPP mdEditor-keywords Harvesters

## Overview

This repository provides a collection of harvesters designed to automate the process of gathering keyword data from various authoritative sources. These keyword files are integral to the mdEditor tool, which facilitates metadata management for researchers and institutions by standardizing keyword vocabularies across different datasets.

Each harvester focuses on extracting keywords from a specific data source or system, processing them into two types of files:

1. **Keyword files** – These are saved in `resources/keywords/`.
2. **Thesaurus files** – These are saved in `resources/thesaurus/`.

The primary function of these harvesters is to ensure that the keyword data remains current, structured, and formatted for easy integration into mdEditor, improving the consistency and accuracy of metadata.

### Available Harvesters

The following harvesters are included in this repository, each targeting a specific system or database:

- **GCMD (Global Change Master Directory)**:

### GNIS (Geographic Names Information System)

The GNIS harvester collects geographic names and feature data, organized by U.S. states, territories, Canadian provinces, and other global regions. The harvested data includes names for natural and cultural geographic features, administrative boundaries, and other relevant spatial data. This ensures that geographic features across different regions are standardized and accurately represented in metadata.

In addition to the 50 U.S. states, the GNIS harvester includes data for the following regions:

- Antarctica
- American Samoa
- Guam
- Puerto Rico
- U.S. Minor Outlying Islands
- U.S. Virgin Islands
- Canadian Provinces and Territories
  - Alberta
  - British Columbia
  - Manitoba
  - New Brunswick
  - Newfoundland and Labrador
  - Nova Scotia
  - Nunavut
  - Ontario
  - Prince Edward Island
  - Quebec
  - Saskatchewan
  - Yukon
- Baja California Norte
- Commonwealth of the Northern Mariana Islands

These vocabularies are treated as individual thesauri within the mdEditor, ensuring that each region’s geographic data is available separately for precise metadata management.

- **NALT (National Agricultural Library Thesaurus)**:  
  The NALT harvester collects keywords from vocabularies related to agricultural sciences, economics, and human nutrition. These vocabularies support research and metadata management in fields related to agriculture, food safety, and public health.

  The vocabularies harvested from NALT include:

  - **Taxonomic Hierarchy**: A classification of organisms, reflecting their biological hierarchy.
  - **Fields of Study**: Categories of scientific fields and disciplines within the agricultural sciences.
  - **Animals, Livestock, One Health**: Covers topics related to animal health, livestock management, and the interdisciplinary "One Health" approach to public health.
  - **Economics, Trade, Law, Business, Industry**: Describes topics related to economics, trade, law, and industry within agriculture.
  - **Farms, Agricultural Production Systems**: Focuses on agricultural practices, farm systems, and production processes.
  - **Human Nutrition, Food Safety and Quality**: Encompasses human nutrition and related fields, including food safety and quality.
  - **Forestry, Wildland Management**: Focuses on topics related to forestry and wildland management practices.
  - **Geographical Locations**: A collection of geographic names and locations relevant to agricultural research.
  - **Natural Resources, Conservation, Environment**: Covers topics related to the conservation of natural resources and environmental management.
  - **Plant Production, Gardening**: Focuses on topics related to the production of plants and gardening practices.
  - **Research, Technology, Methods**: Describes methodologies, technologies, and research in agricultural sciences.
  - **Rural Development, Communities, Education, Extension**: Covers topics related to rural development, community education, and agricultural extension services.

  These vocabularies help standardize terms across agricultural datasets, aiding in research and information retrieval.

- **ScienceBase**:  
  The ScienceBase harvester collects keywords from vocabularies related to conservation, collection management, and scientific data cataloging. These vocabularies are critical for categorizing and maintaining metadata about collections and specimens in scientific databases.

  The vocabularies harvested from ScienceBase include:

  - Favret Conservation Status (dry)
  - Favret Conservation Status (fluid)
  - Favret Conservation Status (slide)
  - Favret Container Condition (dry)
  - Favret Container Condition (fluid)
  - Favret Container Condition (slide)
  - Favret Processing State (dry)
  - Favret Processing State (fluid)
  - Favret Processing State (slide)
  - CollectionTheme
  - primaryPurpose
  - userGroup
  - category
  - unit
  - type
  - Known To Contain Types
  - Hazardous Materials
  - NGGDPP ReSciColl ScienceBase Type Tags

  These vocabularies ensure consistency in how collection items, conditions, and their conservation statuses are described across datasets.

- **USGS (United States Geological Survey)**:  
  The USGS harvester retrieves various thesauri related to geographic, geologic, and environmental data. These thesauri help organize and standardize terms used in metadata for geological and hydrological datasets. The harvester queries the USGS API to fetch the relevant thesauri, ensuring up-to-date information is collected.

  The thesauri harvested by USGS include:

  - **Common geographic areas**: Names and identifiers of commonly-known geographic areas, including oceans, continents, countries, states, and provinces in North America, counties in the United States, USGS map quadrangles, and hydrologic units.
  - **USGS Thesaurus**: Covers topics and methods of scientific study carried out by USGS, including product types, scientific disciplines, geologic time, and types of institutional structure and activities.
  - **Alexandria Digital Library Feature Type Thesaurus**: Describes types of named geographic features, reflecting the detail typically shown on maps. Not highly specific for scientific studies.
  - **Lithologic classification of geologic map units**: Classifies rock types commonly found on geologic maps, including unconsolidated materials. Not specific enough for hand samples or outcrops.
  - **ISO 19115 Topic Category**: General subjects for which geospatial data may be relevant, categorized by broad terms.
  - **Data Categories for Marine Planning**: Spans categories required for ocean planning from a national, multidisciplinary perspective, covering governance, resources, uses, and infrastructure.
  - **Thesaurus categories**: Defines characteristics of thesauri, including structural or functional attributes such as hierarchy and transitivity, and general subjects like place or theme.

  These thesauri are essential for maintaining structured, consistent metadata for scientific and geographic data managed by USGS.

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

```
yarn clean
```

### Testing:

There are also basic tests included that can be run as part of the build process.

## Troubleshooting

If you encounter any issues while running the harvesters, consult the following troubleshooting tips:

- Error when fetching data: Ensure the API access is properly configured.
- Files not saving correctly: Double-check permissions and file paths.
- Build issues: Clean the build and try again.

## License

This repository follows the same licensing structure as the main repository.
