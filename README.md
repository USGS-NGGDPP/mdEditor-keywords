# mdEditor-keywords

## Table of Contents

- [mdEditor-keywords](#mdeditor-keywords)
  - [Overview](#overview)
    - [Purpose](#purpose)
    - [Key Audience](#key-audience)
    - [Interaction with Other Projects](#interaction-with-other-projects)
    - [Validation](#validation)
    - [Harvesters](#harvesters)
    - [Quick Features Summary](#quick-features-summary)
    - [Next Steps](#next-steps)
  - [Features](#features)
    - [Thesauri and Vocabularies](#thesauri-and-vocabularies)
    - [Schemas for Validation and Configuration](#schemas-for-validation-and-configuration)
    - [Automated Harvesters](#automated-harvesters)
    - [Profiles Integration](#profiles-integration)
    - [Customizability for Other Projects](#customizability-for-other-projects)
    - [Schema Validation and Testing](#schema-validation-and-testing)
  - [Build Process](#build-process)
    - [What Happens During the Build?](#what-happens-during-the-build)
    - [Steps Involved in the Build](#steps-involved-in-the-build)
    - [Output of the Build](#output-of-the-build)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Steps to Install](#steps-to-install)
  - [Usage](#usage)
    - [Integrating Thesauri and Vocabularies in mdEditor](#integrating-thesauri-and-vocabularies-in-mdeditor)
    - [Running Harvesters](#running-harvesters)
    - [Validating Files Against Schemas](#validating-files-against-schemas)
    - [Updating Profiles in mdEditor](#updating-profiles-in-mdeditor)
  - [Contributing](#contributing)
  - [License](#license)
  - [Future Enhancements](#future-enhancements)

## Overview

This repository provides a structured approach for managing custom vocabularies and thesauri, designed to be integrated with [mdEditor](https://github.com/adiwg/mdEditor), which is part of the broader [adiwg/mdToolkit](https://github.com/adiwg). The primary goal of this repository is to support the **USGS NGGDPP** project by offering a comprehensive collection of standardized thesauri and vocabularies. It also serves as a reference for others who wish to create or manage their own custom thesauri for use within mdEditor.

### Purpose

The repository is essential for:

- Storing and managing domain-specific vocabularies and thesauri.
- Automating the generation of keyword and thesaurus files through a modular harvester system.
- Ensuring the integrity of files through schema validation (run separately via testing).
- Enabling mdEditor users to easily reference, import, and utilize these custom resources as part of metadata management workflows.

### Key Audience

This repository is intended for:

- **USGS NGGDPP** project participants who need access to these predefined vocabularies.
- Developers and users of **mdEditor** who wish to integrate or customize their own thesauri and vocabularies for managing metadata.
- Anyone seeking to replicate this setup for their own metadata-driven projects.

### Interaction with Other Projects

This repository works in conjunction with the [mdEditor-profiles](https://github.com/USGS-NGGDPP/mdEditor-profiles) repository, which allows users to load custom profiles that reference these thesauri. Future updates to mdEditor may allow direct loading of custom thesauri, but at present, profiles are the main integration point.

### Validation

Schema validation is handled separately through `jest` testing, using predefined schemas (`keyword.json`, `manifest.json`, `thesaurus-config.json`) to ensure that the resources in the repository conform to expected structures. The tests validate that files in the `resources/` directory (thesauri, keywords, and manifests) are well-formed and consistent.

### Harvesters

The harvester system is modular, with individual harvesters (e.g., GCMD, GNIS, NALT) run via command-line arguments. Each harvester fetches and processes external data sources to generate thesauri and vocabulary files, which are later compiled into manifests. The harvesters are not directly tied to the schema validation process, which is handled separately in the testing phase.

### Quick Features Summary

- Stores thesauri configuration files and associated vocabularies, allowing mdEditor users to access well-defined keyword structures.
- Includes **automated harvesting processes** that generate and maintain these resources.
- Facilitates **integration with mdEditor profiles**, making it easier to manage metadata within the mdEditor interface.
- **Schema validation**: Ensures the integrity of thesauri and vocabulary structures through automated tests.
- **Modular harvester system**: Allows individual harvesters to be run based on specific external data sources, with manifest generation occurring after each run.

### Next Steps

To get started, users should:

1. Review the [Features](#features) section to understand the structure of the repository.
2. Follow the [Installation](#installation) instructions to set up the repository locally.
3. Refer to the [Usage](#usage) section for integrating the thesauri with mdEditor.

## Features

This repository provides a range of features focused on managing and automating the creation of vocabularies and thesauri for mdEditor. Below is a breakdown of key features:

### Thesauri and Vocabularies

- The `resources/` directory contains two key subdirectories:

  - **`thesaurus/`**: This directory houses configuration files for each thesaurus. These files specify important metadata such as the thesaurus name, description, and URLs that point to the associated vocabulary files.
  - **`keywords/`**: This directory contains the actual vocabulary files in JSON format. Each vocabulary file supports a nested structure, allowing for hierarchical keyword definitions, with some vocabularies containing nested children up to several levels deep.
  - **`manifest.json`**: An automatically generated manifest file listing all resources, including thesauri and keywords.

- **Keyword Structure**: Vocabulary files in the `keywords/` directory can have multiple levels of nested children. This flexible structure allows users to organize terms hierarchically, accommodating complex metadata structures.
- **Manifest Files**: Located in `resources/manifest.json` and `resources/devManifest.json`, these files list the available thesauri and link to the corresponding vocabulary files. These manifests allow mdEditor and related tools to reference the appropriate thesauri for metadata purposes.

### Schemas for Validation and Configuration

- The `schemas/` directory contains JSON schema files that define the structure of both thesauri and vocabulary files. These schemas ensure that the configuration files and vocabulary structures comply with the expected formats for use in mdEditor.

- **Keyword Schema** (`schemas/keyword.json`): Validates the structure of keyword files, ensuring they follow the correct hierarchical format.

- **Thesaurus Schema** (`schemas/thesaurus.json` and `schemas/thesaurus-config.json`): Ensures that thesaurus configuration files adhere to the expected structure and format, making them compatible with mdEditor and other tools that reference them.

- **Validation Process**: Validation of these schemas is handled separately through `jest` tests, ensuring that the files in the `resources/` directory comply with the schemas.

### Automated Harvesters

- The `harvesters/` directory contains scripts and processes that automate the generation of thesauri and keyword files from source data. Each harvester processes specific external data sources and creates the necessary configuration and vocabulary files.

- **Harvester Capabilities**:

  - **Generate Thesauri**: Automates the creation of thesaurus configuration files, ensuring that they are consistent and up to date.
  - **Generate Keywords**: Pulls data from external sources to generate and update vocabulary files.
  - **Generate Manifest**: After running a harvester, a manifest is generated or updated to ensure that the thesauri are correctly referenced by mdEditor.

- Users can run these harvester scripts via command-line arguments to generate or update specific thesauri and keywords.

### Profiles Integration

- This repository is designed to integrate with the [mdEditor-profiles](https://github.com/USGS-NGGDPP/mdEditor-profiles) repository. Profiles in mdEditor can reference thesauri defined in this repository using the manifest file structure.
- **Profiles Manifest**: mdEditor profiles include a section that points to the URLs of thesaurus configuration files, which are generated in this repository. These profiles are a key part of enabling mdEditor users to import and reference these custom vocabularies during metadata editing.

### Customizability for Other Projects

- While primarily designed for USGS NGGDPP, this repository can be easily adapted for other projects that require custom vocabularies or thesauri for metadata management.
- **Custom Vocabularies**: Users can replicate the structure of this repository and generate their own thesauri and vocabularies by modifying the files in `resources/`. The harvesting tools can be configured to generate custom sets of terms.

- **Extending the Harvesters**: The harvesting scripts can be extended or customized to pull from different data sources or to follow different patterns for thesauri and vocabulary generation.

### Schema Validation and Testing

- **Testing with Jest**: The repository uses `jest` to run automated tests that validate the thesauri, keywords, and manifest files against their respective schemas. These tests ensure that the resources conform to expected structures and are properly formatted.
  - **Keywords**: Tests validate that each keyword file complies with the `keyword.json` schema.
  - **Thesauri**: Tests validate that each thesaurus file complies with the `thesaurus-config.json` schema.
  - **Manifest**: Tests ensure that the manifest file correctly references the existing thesauri and complies with the `manifest.json` schema.

---

This more detailed **Features** section breaks down the key components and highlights the role of the schemas, harvesting, and validation. Let me know if you'd like any further adjustments or additions!

## Build Process

The build process is a crucial step in preparing the repository for use. It ensures that the necessary resources, such as schemas, thesauri, and vocabulary files, are properly transpiled and copied into the appropriate directories for use by the harvesters.

### What Happens During the Build?

1. **Transpiling the Code**  
   The JavaScript files in the `harvesters/`, `schemas/`, and `tests/` directories are written using modern ES6+ syntax. During the build process, these files are transpiled using **Babel** to ensure compatibility with a broader range of environments. The transpiled files are outputted to the `dist/` directory.

2. **Copying Resources**  
   The build process also copies essential files such as JSON schema files, thesauri, and manifest files into the `dist/` directory. This step is crucial because the `dist/` directory is where the harvesters and other processes access these resources.

3. **Manifest Generation**  
   After running a harvester, a manifest is generated or updated. This manifest file references all the available thesauri and vocabularies and is essential for mdEditor integration. The manifest generation script ensures that all newly generated resources are properly referenced.

### Steps Involved in the Build

- **`yarn build`**:  
   This command runs the entire build process. It triggers several sub-tasks, including:

  - **Transpiling code** with Babel (`build:harvesters`, `build:schemas`, and `build:tests`).
  - **Copying schemas** and necessary resource files to the `dist/` directory.

- **Scripts**:
  - `build:harvesters`: Transpiles JavaScript files in the `harvesters/` directory.
  - `build:schemas`: Copies schema files and transpiles code in the `schemas/` directory.
  - `build:tests`: Transpiles the test files located in `tests/`.
  - `build:manifest`: Updates or creates the manifest file, ensuring it reflects the latest thesauri and vocabulary files.

### Output of the Build

- After running the build, the final transpiled and processed files are available in the `dist/` directory:
  - **Schemas** are ready for validation.
  - **Transpiled scripts** can be executed to run harvesters.
  - **Manifests** reference the latest generated thesauri and vocabulary files.

This entire process ensures the repository is in a state ready for generating and managing thesauri and vocabulary files and ensures compatibility across environments.

## Installation

### Requirements

Before you begin, make sure you have the following installed on your system:

- **Node.js**: Version 16.x or higher
- **Yarn**: Ensure it's installed globally on your system

```
yarn -v || npm install --global yarn
```

### Steps to Install

To set up and use this repository, follow these steps:

1. **Clone the repository**  
   Clone the repository from GitHub to your local machine:

   ```
   git clone https://github.com/USGS-NGGDPP/mdEditor-keywords.git
   ```

2. **Install dependencies**  
   Ensure you have **Node.js** and **Yarn** installed. Then, install the project's dependencies:

   ```
   yarn install
   ```

3. **Build the project**  
   After installing dependencies, build the project to transpile the necessary files:

   ```
   yarn build
   ```

4. **Run Harvesters**  
   To run the harvesters and generate thesauri or vocabulary files, refer to the instructions in the [`harvesters/README.md`](harvesters/README.md) file.

5. **Running Tests**  
   To ensure that the generated files conform to the expected schema structures, you can run the automated tests:

   ```
   yarn test
   ```

## Usage

Once the repository is installed and built, there are several key use cases for interacting with thesauri and vocabulary files, as well as validating them against schemas. Below are the main usage scenarios:

### Integrating Thesauri and Vocabularies in mdEditor

- To use the thesauri and vocabularies from this repository in **mdEditor**, follow these steps:

  1. **Load profiles in mdEditor**  
     In the mdEditor application, load a profile by referencing the appropriate manifest file in the [`mdEditor-profiles`](https://github.com/USGS-NGGDPP/mdEditor-profiles) repository. The profiles point to the correct thesauri and vocabulary configurations in this repository.
  2. **Reference the thesauri in the manifest**  
     Ensure that the thesauri and vocabularies referenced in your mdEditor profile match the files in this repository’s `resources/manifest.json` file. This manifest provides a list of available thesauri and links to the corresponding vocabulary files.

  3. **Custom Profiles**  
     If you're creating custom profiles, ensure that they reference the correct thesauri configuration files in the `resources/thesaurus/` directory and the related vocabulary files in `resources/keywords/`.

### Running Harvesters

- To generate and update thesauri and vocabulary files, you’ll need to run the appropriate harvesters. This process is handled separately from the main usage workflow. Please refer to the instructions in the [`harvesters/README.md`](harvesters/README.md) file for detailed steps on running individual harvesters for data sources such as GCMD, GNIS, NALT, and others.

### Validating Files Against Schemas

- Validation is an important step in ensuring that the thesauri and vocabulary files conform to the required structure. You can run validation tests using `jest` to ensure that these files are well-formed:

  1. **Run the Tests**  
     Run the test suite to validate the schemas and ensure compliance with the expected structure:

     ```bash
     yarn test
     ```

  - These tests ensure that:

  - **Keywords**: Each keyword file complies with the `keyword.json` schema.
  - **Thesauri**: Each thesaurus file complies with the `thesaurus-config.json` schema.
  - **Manifest**: The manifest file correctly references existing thesauri and complies with the `manifest.json` schema.

### Updating Profiles in mdEditor

To use any vocabularies from this repository, you need to update your mdEditor profile accordingly. For more information, please refer to the [USGS-NGGDPP/mdEditor-profiles repository](https://github.com/USGS-NGGDPP/mdEditor-profiles).

## How to replicate this repository

If you wish to create a repository similar to `mdEditor-keywords` for your own custom use case, you can either **fork this repository** or **create a new one from scratch**. In either case, there are minimum requirements that must be met for the repository to work with mdEditor.

**Minimum Requirements:**

- **Directory Structure:**

  - **`resources/` Directory:**  
    This is the main directory that must contain the following:

    - **`manifest.json`**  
      An essential file that informs mdEditor (or users inspecting the file manually) about the contents of the repository. It lists the available thesauri and links to the corresponding vocabulary files.

    - **`thesaurus/` Directory:**  
      Contains thesaurus configuration files. Each file describes a thesaurus, including metadata such as the name, description, and URLs pointing to the vocabulary files.

    - **`keywords/` Directory:**  
      Contains the actual vocabulary files in JSON format. Each vocabulary file supports a nested structure, allowing for hierarchical keyword definitions.

- **Files Must Conform to Schemas:**

  - **Schema Compliance:**  
    All files within the `resources/` directory must conform to the predefined schemas (`keyword.json`, `thesaurus-config.json`, `manifest.json`). This ensures compatibility with mdEditor and proper functionality.

**Optional but Recommended:**

- **Validation Schemas and Tests:**

  - Including the validation schemas and tests helps ensure that your files conform to the required formats. If you want to use the existing schemas and tests, consider forking this repository to maintain access to them.

**Notes:**

- **Harvesters Are Not Required:**

  - The harvester scripts used to generate thesauri and vocabulary files are optional. You can manually create the necessary files in the `resources/` directory as long as they adhere to the expected structure and schemas.

- **Risk of Not Validating Files:**

  - If you choose not to include the validation schemas and tests, there is a risk your files may not work properly with mdEditor if they do not conform to the required formats.

**Steps to Create Your Own Repository:**

1. **Option A: Create a New Repository**

   - **Initialize a New Repository:**

     - Set up a new repository on your preferred version control platform.

   - **Create the Required Directory Structure:**

     ```
     your-repo/
     └── resources/
         ├── manifest.json
         ├── thesaurus/
         └── keywords/
     ```

   - **Add Your Files:**

     - Place your thesauri configuration files in the `thesaurus/` directory.
     - Place your vocabulary files in the `keywords/` directory.
     - Ensure `manifest.json` correctly references all thesauri and vocabulary files.

   - **Ensure Schema Compliance:**

     - Make sure all your files conform to the required schemas.

2. **Option B: Fork This Repository**

   - **Fork `mdEditor-keywords`:**

     - Use the "Fork" feature on GitHub to create a copy under your account.

   - **Modify the `resources/` Directory:**

     - Replace or add your custom thesauri and vocabulary files in the `thesaurus/` and `keywords/` directories.
     - Update the `manifest.json` file accordingly.

   - **Retain Schemas and Tests (Optional but Recommended):**

     - Keep the existing schemas and tests to validate your files.

**Recommendations:**

- **Maintain Proper File Structure:**

  - Adhere to the directory and file structure outlined above to ensure compatibility with mdEditor.

- **Validate Your Files:**

  - Use the provided schemas and tests to validate your files, ensuring they conform to the expected formats.

- **Conform to Schemas:**

  - Ensure all thesauri and vocabulary files strictly follow the predefined schemas to prevent any issues with mdEditor.

**Summary:**

By meeting these minimum requirements and following the recommended practices, you can successfully create a repository that works seamlessly with mdEditor for your custom metadata management needs.

## Contributing

Contributions are welcome. Please fork the repository, submit pull requests, and ensure code follows formatting rules specified in `.eslintrc` and `.prettierrc`.

## License

> Placeholder for license information

## Future Enhancements

Direct support for loading custom thesauri in mdEditor is under consideration for future releases.
