# NALT Harvester

## Purpose

The NALT Harvester processes RDF/XML data from the NALT (National Agricultural Library Thesaurus) dataset to generate structured JSON files for keywords and thesaurus configuration. These files are designed for integration with mdEditor, supporting metadata workflows by providing hierarchical keyword structures.

This harvester ensures the NALT data is transformed into a format suitable for use in the USGS NGGDPP project and other metadata management workflows.

## Input and Output

### Input File

- **Path:** harvesters/nalt/data/nalt-full.rdf
- **Description:** The RDF/XML file containing NALT metadata to be harvested.

### Output Directory

- **Path:** `resources/`
- **Description:** Directory where the generated JSON files will be saved.
  - `resources/keywords/`: Contains JSON files for each keyword hierarchy.
  - `resources/thesaurus/`: Contains thesaurus configuration JSON files.

## How It Works

The harvester performs the following steps:

1. Reads the Input File:
   - The harvester loads the RDF/XML file from harvesters/nalt/data/nalt-full.rdf.
2. Parses the XML Data:
   - Extracts entries and relationships from the RDF data.
3. Builds Hierarchies:
   - Creates a hierarchical structure of keywords based on narrower relationships in the metadata.
4. Generates JSON Files:
   - Outputs structured JSON files to the resources/keywords/ and resources/thesaurus/ directories.

### Running the NALT Harvester

To run the NALT harvester, execute the following command **from the root directory**:
`yarn nalt`

**Important Notes**

- Run from Root Directory: The harvester must be executed from the root directory of the repository to ensure proper resolution of paths and dependencies.
- Dependencies: Ensure all dependencies are installed by running yarn install in the root directory.

### Debugging and Common Errors

1. File Not Found:
   - Ensure `nalt-full.rdf` exists at `harvesters/nalt/data/`.
   - Verify the input file path in `nalt.js`.
2. Malformed RDF/XML:
   - Check the source file for syntax errors or incomplete data.
3. Output Directory Issues:
   - Ensure the `resources/` directory exists and has write permissions.

### Validation and Testing

The NALT harvester generates files, schema validation is handled separately. Refer to the README in the root directory for details on how to validate the generated files using jest.

## Learn More

Refer to the README in the root of this repository for more information about how these harvesters work.
