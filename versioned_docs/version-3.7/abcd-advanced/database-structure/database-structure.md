---
title: General Structure of an ABCD Database
description: Detailed technical documentation of the folder and file structure that composes an ABCD database.
---

An ABCD database is not a single file, but a complex collection of folders and files that manage data, configurations, and interface rules for different modules. 

Below is the detailed breakdown of the folders and files that constitute a complete ABCD database.

## Directory Structure Overview

Each database resides in a subfolder within the `bases` directory of your ABCD installation. For a database, the folder structure is as follows:

- **ayudas/**: Local of field-level help files for data entry.
- **cnv/**: Contains conversion files (`.cnv`) responsible for converting external files (like CSV) into the database structure.
- **data/**: The actual data storage, the database itself.
- **def/**: Directory with Field Definition Tables (FDT), worksheets (FMT), validation files (.val), and auxiliary tables (.tab).
- **loans/**: Specific configuration and display rules for the circulation/loans module.
- **opac/**: Configuration and structure specific to the public search interface.
- **pfts/**: Print formats, advanced search forms, and statistics definitions.

---

## 1. ayudas (Field Help)
This folder contains HTML files that provide contextual help for each field during data entry. 
- Help pages are typically named after the field tag (e.g., `tag_001.html`).
- These are linked in the Field Definition Table (FDT) to assist catalogers during the input process.

## 2. cnv (Conversions)
Contains `.cnv` files used for data transformation and migration.
- These files define the rules for converting external formats (like CSV or MARC ISO) into the internal ABCD database structure.

## 3. data (Core Data Storage)
This is the heart of the database where the actual information and its indexes are stored. Key file extensions include:
- **.mst (Master File)**: Contains the actual variable-length records.
- **.xrf (Cross-Reference File)**: Acts as a primary index, keeping track of the position of each record (MFN) in the `.mst` file.
- **.n01 / .n02 / .l01 / .l02 (Inverted File)**: These files form the B-Tree index (Dictionary) for fast searching.
- **.cnt (Control File)**: Manages the status and integrity of the inverted file.
- **.ifp**: The main inverted file index.
- **.prc**: Format for procedures and data processing.
- **control_number.cn**: A file used by the auto-increment mechanism to assign unique identifiers.

## 4. def (Definitions)
This directory stores the structural definitions of the database, often organized into language-specific subfolders (e.g., `def/en`, `def/pt`).
- **.fdt (Field Definition Table)**: Defines tags, names, types (repeatable, subfields), and basic behavior.
- **.fmt (Worksheets)**: Defines the layout and sequence of fields presented during cataloging.
- **.val (Validation)**: Contains rules to ensure data quality and mandatory field completion.
- **.tab (Tables)**: Auxiliary text files used for picklists or code conversions.

## 5. loans (Circulation Configuration)
Since every database has its own field structure (different tags for title, control number, etc.), the Loans module requires specific mappings.
- It defines which fields are used for identification and display within the circulation module.
- Contains specific PFTs to show item status during loan transactions.

## 6. opac (Public Access Configuration)
Following the same logic as the loans folder, each database requires a specific configuration for the OPAC.
- It defines how the public search will behave for this specific database.
- Maps the internal indexes to the search interface filters and facets.

## 7. pfts (Print Formats & Search Forms)
Contains the ISIS Formatting Language scripts (`.pft`) that define record visualization.
- **Display Formats**: Rules to generate HTML or text from database fields.
- **camposbusqueda.tab**: Defines the structure of the internal advanced search form.
- **Statistics**: Statistical configurations and definitions for reporting are typically managed within the PFT structures.

---

## Visual Representation of the Structure

A simplified view of the hierarchy looks like this:

```text
bases/
└── database/
    ├── ayudas/ (tag_xxx.html)
    ├── cnv/    (.cnv)
    ├── data/   (.mst, .xrf, .cnt, .ifp, .fst)
    ├── def/    (.fdt, .fmt, .val, .tab)
    ├── loans/  (mapping pfts)
    ├── opac/   (interface config)
    └── pfts/   (.pft scripts)
```

