---
title: CISIS Database Architecture
sidebar_label: Physical Architecture
---

# Physical Database Architecture

ABCD uses the **CISIS** technology (compatible with CDS/ISIS). A "Database" in ABCD is not a single file, but a collection of related files with the same name but different extensions.

## Core Files

For a database named `users`, you will find the following files on the server disk:

### Master File (`.mst`)
* **Purpose**: Stores the actual data (content) of the records.
* **Criticality**: **Extreme**. If this file is lost, data is lost.
* **Format**: Binary. Cannot be opened with a text editor.

### Cross-Reference File (`.xrf`)
* **Purpose**: An index pointing to the physical location (offset) of each active record in the `.mst` file.
* **Relation**: There is one entry per MFN (Master File Number).
* **Recovery**: Can often be reconstructed from the `.mst` file if corrupted.

### Inverted File (`.cnt`, `.n01`, `.n02`, `.l01`, `.l02`, `.ifp`)
* **Purpose**: The search index. Allows fast retrieval of records.
* **Structure**: B-Tree structure.
* **Maintenance**: Needs to be regenerated (Full Inverted File Generation) if the `.mst` is updated externally or if the FST (Field Selection Table) changes.

## Control Files

* **Field Definition Table (`.fdt`)**: Defines the fields (tags), names, and input types.
* **Field Selection Table (`.fst`)**: Defines how fields are indexed for searching.
* **Print Formats (`.pft`)**: Scripts defining how records are displayed on screen or print.