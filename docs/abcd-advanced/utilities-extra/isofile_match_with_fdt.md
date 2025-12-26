---
title: isofile_match_with_fdt
description: Validate and match ISO-2709 records against a Field Definition Table (FDT)
---

# isofile_match_with_fdt

## Overview

`isofile_match_with_fdt` is a CISIS utility designed to **validate and match ISO-2709 records against a Field Definition Table (FDT)**.

Its primary goal is to ensure that the **fields present in an ISO file are compatible with the field structure defined in a given FDT**, identifying inconsistencies, undefined fields, and structural mismatches before database loading or migration.

This tool is particularly useful in **ABCD workflows**, where FDT consistency is critical for correct indexing, data entry forms, and record validation.

---

## Purpose

The utility performs the following tasks:

* Reads an ISO-2709 input file record by record
* Loads and parses an FDT file
* Extracts field tags from each ISO record
* Compares record fields against:

  * Defined FDT field tags
  * Field properties and constraints
* Reports mismatches and inconsistencies
* Optionally filters or flags problematic records

---

## Supported Standards

* **Input format:** ISO 2709
* **FDT format:** CDS/ISIS Field Definition Table
* **Output:** Validation messages (stdout / log-style output)

---

## Command-Line Usage

```bash
isofile_match_with_fdt -i <input.iso> -f <database.fdt> [options]
```

---

## Command-Line Options

| Option | Description                                      |
| ------ | ------------------------------------------------ |
| `-i`   | Path to the ISO input file                       |
| `-f`   | Path to the FDT file                             |
| `-r`   | Reports records with undefined or invalid fields |
| `-s`   | Silent mode (only critical errors reported)      |
| `-v`   | Displays version information                     |
| `-h`   | Displays help and usage instructions             |

---

## Processing Logic

### 1. FDT Loading

* Opens the specified FDT file
* Parses:

  * Field tags
  * Field attributes
* Stores FDT entries internally for fast lookup

### 2. ISO Record Processing

For each ISO-2709 record:

1. Read record leader
2. Parse directory entries
3. Extract field tags
4. Compare each field tag with the loaded FDT definitions

---

## Matching Rules

A field is considered **valid** if:

* The field tag exists in the FDT
* The tag follows expected numeric formatting
* The entry does not violate internal FDT constraints

A field is considered **invalid** if:

* The tag does not exist in the FDT
* The directory entry is malformed
* The field structure exceeds predefined limits

---

## Output Behavior

The utility reports:

* Record number
* Field tag involved
* Description of the inconsistency

Example output:

```
Record 124:
  Undefined field: 950
Record 130:
  Field not declared in FDT: 990
```

This output is intended for **diagnostic and corrective workflows**, not for direct machine consumption.

---

## Error Handling

The utility includes protections against:

* Invalid directory entry counts
* Malformed ISO records
* Missing or unreadable FDT files

When a fatal error is detected, processing stops to avoid misleading results.

---

## Limitations

* The utility performs **structural matching only**
* It does not validate:

  * Subfield content
  * Repeatability rules
  * Input masks or value ranges
* Assumes the ISO file is structurally correct (ISO-2709 compliant)

---

## Typical Use Cases in ABCD

* Pre-validation of ISO files before database import
* Ensuring legacy records match current database structures
* Debugging indexing or search issues caused by undefined fields
* Auditing ISO exchanges between different ABCD installations

---

## Compilation

Typically compiled as part of the CISIS toolchain:

```bash
gcc -o isofile_match_with_fdt isofile_match_with_fdt.c [cisis libraries]
```

Compilation flags depend on the CISIS version and local build configuration.

---

## Related Utilities

* `mx`
* `isofile_iso_to_utf`
* `i2id`
* `isisvalidate`
