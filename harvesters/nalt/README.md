# NALT

## Overview

The NALT Harvester processes NALT RDF/XML data to generate structured JSON keyword and thesaurus configuration files. It parses the XML data, builds hierarchical relationships, and saves the output for use in the mdEditor.

## Configuration

### Input File

- Path: harvesters/nalt/data/nalt-full.rdf
- Description: The RDF/XML file containing NALT metadata to be harvested.

### Output Directory

- Path: `resources/`
- Description: Directory where the generated JSON files will be saved.
  - `resources/keywords/`: Contains JSON files for each keyword hierarchy.
  - `resources/thesaurus/`: Contains thesaurus configuration JSON files.

### Dependencies

- **Node.js:** Ensure you have Node.js installed.
- **Packages:**
  - `dayjs`
  - `fs/promises`
  - `xml2js`

### Data Source

The harvester reads data from the `nalt-full.rdf` file located in the `harvesters/nalt/data/` directory. This file should contain the RDF/XML formatted metadata to be processed.

### Metadata Structure

- **Format**: RDF/XML
- **Structure**: The harvester parses RDF descriptions, extracts primary and definition entries, and builds hierarchical nodes based on narrower relationships.

### Output

- **Keywords Files:** JSON files representing keyword hierarchies saved in `resources/keywords/`.
- **Thesaurus Configuration Files:** JSON configuration files for thesaurus metadata saved in `resources/thesaurus`.

## Usage

Run the NALT Harvester using the following command:

```
node harvesters/index.js nalt
```

This command executes the NALT harvester, which reads the input RDF file, processes the data, and saves the output JSON files to the specified directories.
