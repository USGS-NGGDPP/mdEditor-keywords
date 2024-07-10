// These are named the same as their directories,
// so they can be used to dynamically load the config data
export const GNIS_HARVESTERS_ENUM = {
  ANTARCTICA: 'Antarctica',
  DOMESTIC_NAMES: 'DomesticNames',
  TOPICAL: 'Topical'
};

export const gnisConfig = {
  BASE_REPO_URL:
    'https://cdn.jsdelivr.net/gh/USGS-NGGDPP/mdEditor-keywords@main',
  DATA_DIR: 'harvesters/gnis/data',
  KEYWORDS_DIR: 'resources/keywords',
  THESAURUS_DIR: 'resources/thesaurus'
};

export const AntarcticaConfig = {
  CITATION_FILENAME: 'Gazetteer_Antarctica_Text.xml',
  DST_FILENAME: 'gnis-antarctica.json',
  TXT_FILENAME: 'AntarcticaNamesAntarctica.txt'
};

export const DomesticNamesConfig = {
  NATIONAL_CITATION_FILANAME: 'DomesticNames_National_Text.xml',
  NATIONAL_FILENAME: 'DomesticNames_National.txt',
  NATIONAL_DST_FILENAME: 'gnis-domestic-names.json',
  STATES_CITATION_FILENAME: 'DomesticNames_AllStates_Text.xml',
  STATES_DIRECTORY: 'States',
  STATES_FILENAME_PREFIX: 'DomesticNames_'
};

// These are named the same as their directories,
// so they can be used to dynamically load the config data
export const TOPICAL_ENUM = {
  GOVERNMENT_UNITS: 'GovernmentUnits',
  HISTORICAL_FEATURES: 'HistoricalFeatures',
  POPULATED_PLACES: 'PopulatedPlaces'
};

export const TopicalConfig = {
  // Must match the value of the TOPICAL_ENUM
  GovernmentUnits: {
    CITATION_FILENAME: 'GovernmentUnits_National_Text.xml',
    FILENAME: 'GovernmentUnits_National.txt',
    DST_FILENAME: 'gnis-government-units.json'
  },
  // Must match the value of the TOPICAL_ENUM
  HistoricalFeatures: {
    CITATION_FILENAME: 'HistoricalFeatures_National_Text.xml',
    FILENAME: 'HistoricalFeatures_National.txt',
    DST_FILENAME: 'gnis-historical-features.json'
  },
  // Must match the value of the TOPICAL_ENUM
  PopulatedPlaces: {
    CITATION_FILENAME: 'PopulatedPlaces_National_Text.xml',
    FILENAME: 'PopulatedPlaces_National.txt',
    DST_FILENAME: 'gnis-populated-places.json'
  }
};
