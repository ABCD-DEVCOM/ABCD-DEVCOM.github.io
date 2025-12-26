---
title: isofile_iso_to_utf Utility
description: Read ISO-2709 files encoded in ISO-8859-1 (or compatible single-byte encodings)
---

# isofile_iso_to_utf

## Overview

`isofile_iso_to_utf` is a CISIS utility designed to **read ISO-2709 files encoded in ISO-8859-1 (or compatible single-byte encodings)** and produce a new ISO-2709 file **normalized to UTF-8 encoding**.

This tool is especially useful in **ABCD environments** where legacy databases or imported records may still be encoded in ISO or Latin character sets, while modern deployments increasingly require **UTF-8–compliant ISO files** for interoperability and indexing.

---

## Purpose

The utility performs the following tasks:

* Reads an ISO-2709 input file record by record
* Parses:

  * Leader
  * Directory entries
  * Variable fields
* Converts textual data from ISO encoding to UTF-8
* Writes a new ISO-2709 output file with:

  * Correct record structure
  * Normalized field and record terminators
  * UTF-8 encoded content

---

## Supported Standards

* **Input format:** ISO 2709 (MARC-compatible)
* **Input encoding:** ISO-8859-1 (or compatible)
* **Output format:** ISO 2709
* **Output encoding:** UTF-8

---

## Command-Line Usage

```bash
isofile_iso_to_utf -i <input.iso> -o <output.iso> [options]
```

---

## Command-Line Options

| Option      | Description                                      |
| ----------- | ------------------------------------------------ |
| `-i`        | Path to the ISO input file                       |
| `-o`        | Path to the ISO output file                      |
| `-n`        | Normalize record structure and directory offsets |
| `-f <num>`  | Maximum number of fields to process per record   |
| `-t <mode>` | Terminator mode for the output file              |
| `-v`        | Displays version information                     |
| `-h`        | Displays help and usage information              |

---

## Terminator Modes (`-t`)

The `-t` option defines how **field and record terminators** are written in the output file:

### `hash` (default)

* Field terminator: `#`
* Record terminator: `#`

### `norm`

* Field terminator: **IS2 (RS – Record Separator)**
* Record terminator: **IS3 (GS – Group Separator)**

This mode produces an ISO-2709 file strictly compliant with the standard.

---

## Examples

### Basic conversion

```bash
./isofile_iso_to_utf -i mydownload.iso -o myupload.iso
```

### Normalized ISO-2709 output

```bash
./isofile_iso_to_utf -i mydownload.iso -o myupload.iso -n -t norm -f 3
```

---

## Internal Processing Flow

1. **Open input ISO file**
2. **Read record leader**
3. **Calculate directory size and entry count**
4. **Read directory entries**

   * Includes internal validation
   * Stops execution if directory exceeds internal limits
5. **Read and convert variable fields**

   * Converts ISO-encoded strings to UTF-8
6. **Write converted record to output ISO file**
7. **Repeat until EOF**

---

## Error Handling

The utility performs consistency checks, including:

* Directory entry overflow
* Invalid directory entry length
* Unexpected record terminators

Example error message:

```
*** Record <n>: too many directory entries for this program
*** Computed <x> entries. Program limit is <y>
```

If an error is detected, processing stops to prevent output corruption.

---

## Limitations

* Maximum number of directory entries is bounded by an internal constant (`MaxDeEntries`)
* Assumes a **single-byte character encoding** on input
* Does not attempt automatic encoding detection

---

## Typical Use Cases in ABCD

* Migrating legacy ISO databases to UTF-8
* Preparing ISO files for Solr indexing
* Normalizing records exchanged between heterogeneous library systems
* Preventing character corruption during import/export operations

---

## Compilation

This utility is normally compiled together with the CISIS toolchain:

```bash
gcc -o isofile_iso_to_utf isofile_iso_to_utf.c [cisis libraries]
```

Exact compilation flags depend on your CISIS build environment.

---

## Related Tools

* `mx`
* `i2id`
* `isisutf8`
* `isofile_normalize`



