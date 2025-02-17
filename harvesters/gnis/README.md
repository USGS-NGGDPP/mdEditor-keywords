# GNIS Harvester

## Purpose

The **GNIS Harvester** processes geographic names and feature data from the Geographic Names Information System (GNIS). This includes natural and cultural geographic features, administrative boundaries, and other relevant spatial data. The harvester generates hierarchical JSON files that can be integrated into **mdEditor**, supporting metadata workflows in the **USGS NGGDPP** project.

## Vocabularies Processed

The GNIS Harvester generates thesauri and keyword files for the following regions:

- 50 U.S. states
- U.S. territories and regions:
  - American Samoa
  - Guam
  - Puerto Rico
  - U.S. Minor Outlying Islands
  - U.S. Virgin Islands
  - Commonwealth of the Northern Mariana Islands
- Antarctica
- Canadian provinces and territories:
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

These vocabularies are treated as individual thesauri, allowing precise metadata management for each region.

## Input and Output

### Input Files

Input file location: `harvesters/gnis/data/`

So you need to create the `data/` directory and then add the necessary content to it.

There is a config file called `gnisConfig.js` where you could update the directory, but this is not recommended. Instead, refer to this file for the names of the directories where the harvester is expecting to look for the data. **One important detail** is that the data needs to be nested inside the proper directory, which is the `GNIS_HARVESTERS_ENUM` in the config file. Note that you can modify anything in the `gnisConfig.js` but make sure you understand what you're changing. The following is based on the existing `gnisConfig.js` file.

The domestic data is located in `harvesters/gnis/data/DomesticNames/` and the 2 required files are `DomesticNames_National.txt` and `DomesticNames_National_Text.xml` for the names and citation data respectively.

The Antarctica data is located in `harvesters/gnis/data/Antarctica/` and the 2 required files are `AntarcticaNamesAntarctica.txt` and `Gazetteer_Antarctica_Text.xml` for the names and citation data respectively.

Also note that this is not necessarily how the GNIS data will be provided, you might need to move some stuff around.

- **Antarctica**:

  - `AntarcticaNamesAntarctica.txt`: Contains names of geographic features in Antarctica.
  - `Gazetteer_Antarctica_Text.xml`: Citation metadata for Antarctica names.

- **Domestic Names**:
  - `DomesticNames_National.txt`: Contains names of domestic geographic features.
  - `DomesticNames_National_Text.xml`: Citation metadata for domestic names.

### Output Directory

- **Path:** `resources/`
- **Description:** Directory where the generated JSON files are saved.
  - `resources/keywords/`: Contains JSON files for each keyword hierarchy.
  - `resources/thesaurus/`: Contains thesaurus configuration JSON files.

## How It Works

1. **Load Input Files**:
   - Reads geographic name data from `AntarcticaNamesAntarctica.txt` and `DomesticNames_National.txt`.
2. **Process Metadata**:
   - Constructs hierarchical keyword structures based on geographic feature classifications (e.g., feature class, state).
3. **Generate JSON Files**:
   - Outputs keyword and thesaurus JSON files to `resources/keywords/` and `resources/thesaurus/`.

## Running the GNIS Harvester

To run the harvester, execute the following command from the root directory:

`yarn gnis`

**Important Notes:**

- Ensure all dependencies are installed by running `yarn install` before execution.
- The command must be run from the repository’s root directory.

## Validation and Testing

The GNIS harvester generates files that are validated against schemas. Refer to the root README for detailed instructions on validation.
