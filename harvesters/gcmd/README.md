# GCMD (Global Change Master Directory)

## Overview

The GCMD harvester gathers keywords from various vocabularies related to Earth science data, climate research, and environmental monitoring. These vocabularies help standardize the terminology used in metadata to ensure consistency across datasets.

The vocabularies harvested from GCMD include:

- Chronostratigraphic Units
- Platforms
- Disciplines
- IDN Nodes
- ISO Topic Categories
- Horizontal Resolution Ranges
- Vertical Resolution Ranges
- Temporal Resolution Ranges
- Instruments
- Projects
- Persistent Identifier
- Private
- Phone Type
- Product Flag
- Dataset Progress
- Dataset Language
- Metadata Association Type
- Organization Personnel Role
- Personnel Role
- Organization Type
- Duration Unit
- Platform Type
- Collection Data Type
- Coordinate System
- Granule Spatial Representation
- Product Level Id
- Spatial Coverage Type
- Multimedia Format
- Metadata Language
- Contact Type
- Mime Type
- Distribution Size Unit
- Related URL Content Types
- Data Format
- Measurement Name
- Projection Name
- Projection Authority
- Chained Operations
- Operations
- Projection Datum Names
- Science Keywords

These vocabularies are essential for maintaining structured and consistent metadata within Earth science datasets.

## Configuration

The GCMD harvester retrieves keywords and thesauri from the Global Change Master Directory (GCMD) for various vocabularies. These vocabularies cover a wide range of topics such as climate-related datasets, global environmental data, and scientific terms used in Earth and environmental science research.

### Vocabularies

The vocabularies harvested from GCMD are stored in the `vocabularies.json` file, which contains a list of unique IDs and names for each vocabulary. These vocabularies are retrieved via the GCMD API and processed to generate two types of files:

1. **Keyword Files** – Saved in `resources/keywords/` as JSON files.
2. **Thesaurus Files** – Saved in `resources/thesaurus/` as JSON files.

Some of the vocabularies included are:

- Chronostratigraphic Units
- Platforms
- Disciplines
- ISO Topic Categories
- Instruments
- Science Keywords
- Spatial Coverage Type
- Data Format

### Fetching Data

The GCMD harvester uses a combination of functions to:

1. **Fetch Concept Data** – Retrieves detailed concept information for each vocabulary, including hierarchical structures.
2. **Fetch Keyword Data** – Retrieves keyword-specific information for each vocabulary.

#### Metadata Structure

The harvester builds a hierarchical structure for each vocabulary, with parent-child relationships preserved. Each vocabulary is associated with metadata such as:

- UUID
- PrefLabel (name)
- Definition
- Broader and narrower concepts (for hierarchical vocabularies)

#### Output

For each vocabulary, two files are generated:

1. **Thesaurus Configuration File** – A JSON file stored in `resources/thesaurus/`. This file includes metadata such as the title, edition, and links to online resources.
2. **Keyword JSON File** – A JSON file stored in `resources/keywords/`. This file contains the hierarchical structure of keywords for the specific vocabulary.

These files are automatically generated and saved locally when the GCMD harvester is run.

#### Running the GCMD Harvester

To execute the GCMD harvester and generate both keyword and thesaurus files for each vocabulary, the following process is followed:

- The `vocabularies.json` file provides the list of vocabularies to process.
- Each vocabulary is fetched from the GCMD API and processed in sequence.
- The `gcmd.js` file handles the main logic for fetching, processing, and writing the output files.

---

This configuration overview will likely need to be adjusted once we define the overall configuration structure, but it lays the foundation for the specifics of the GCMD harvester.

Let me know if you’d like to proceed with the overall configuration section next, or if any adjustments are needed here!

### Data Source

[Source of the data (API, download, etc.).]

### Metadata Structure

[Metadata format and structure.]

### Output

[Types and locations of output files.]

## Usage

[Commands or scripts to run the harvester.]
