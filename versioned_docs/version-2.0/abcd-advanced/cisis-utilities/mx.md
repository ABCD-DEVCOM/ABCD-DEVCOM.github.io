---
title: MX Utility
sidebar_label: MX (The Swiss Army Knife)
sidebar_position: 2
---

# MX Utility

**MX** is the general-purpose utility for CDS/ISIS databases (CISIS). It acts as the "Swiss Army Knife" of the suite, capable of reading, writing, filtering, formatting, and exporting data.

Unlike other specific tools (like `id2i` or `mst2iso`), MX unifies almost all operations in a single executable. It allows free-text searches even without an inverted file and can perform complex data transformations on the fly.

## Basic Syntax

Execution without parameters shows the help screen and version:

```bash
mx [cipar=<file>] [db=]<database> [parameters...]

```

### Full Parameter List

Based on the official help output, here are the available parameters grouped by function:

| Parameter | Description |
| --- | --- |
| **Input/Output** |  |
| `db=<name>` | The master file (database) to read from. |
| `iso=<file>` | Input or Output ISO-2709 file. |
| `in=<file>` | Input text file (optional alternative to DB). |
| `out=<file>` | Output text file (redirects standard output). |
| `create=<name>` | Creates a **new** database with the records processed. |
| `append=<name>` | Appends records to an **existing** database. |
| `copy=<name>` | Copies records to another database (similar to create/append). |
| **Selection & filtering** |  |
| `from=<mfn>` | Start processing from this MFN. |
| `to=<mfn>` | Stop processing at this MFN. |
| `count=<n>` | Process a maximum of `n` records. |
| `bool=<expr>` | Filter records using a Boolean expression (Search). |
| **Processing** |  |
| `pft=<format>` | Apply a PFT format to the output. |
| `proc=<format>` | Apply a modification procedure (add/delete fields) in memory. |
| `gizmo=<db>` | Apply a global search/replace using a Gizmo database. |
| `join=<db>` | Merge data from another database. |
| **System** |  |
| `cipar=<file>` | Path to the configuration file mapping database paths. |
| `tell=<n>` | Display progress status every `n` records processed. |
| `-all` | Process deleted records (logically deleted records are usually skipped). |
| `now` | Suppress "Press any key" prompts (Batch mode). |

---

## Core Operations

### 1. Import & Export (ISO-2709)

MX converts records between Master Files (`.mst`) and the exchange format ISO-2709.

* **Export to ISO:**
```bash
mx mydb iso=output.iso -all now

```


*Tip:* Append parameters to `iso=` to modify the format.
* `iso=output.iso,marc`: Creates a MARC-tagged ISO (tags 1-999).
* `iso=output.iso,linux`: Uses Line Feed (LF) instead of CRLF.


* **Import from ISO:**
```bash
/* Create a new database */
mx iso=input.iso create=newdb -all now

/* Append to existing database */
mx iso=input.iso append=existingdb -all now

```



### 2. Database Maintenance

* **Copying a Database:**
Useful for backups or compacting (removing deleted records).
```bash
mx db=source create=backup -all now

```


* **Modifying Records (Proc):**
The `proc` parameter allows you to manipulate fields on the fly using the formatting language.
```bash
/* Delete tag 50 and add tag 99 */
mx mydb "proc='d50a99~New Data~'" copy=newdb

```



### 3. Filtering and Searching

MX can filter records sequentially or using the inverted file.

* **Sequential Search (No Index needed):**
Using the `p` (presence) or `val` commands in a conditional PFT.
```bash
mx mydb "pft=if p(v10) then mfn/ fi" now

```


* **Boolean Search (Uses Index):**
Uses the `bool` parameter.
```bash
mx mydb "bool=WATER * SOIL" iso=subset.iso

```



### 4. Joining Databases

Merges data from another database into the current stream based on a common key.

* **Syntax:** `join=<db>:<format_key>=<format_display>`
* **Example:**
Join `users` database into `loans` where `v10` in loans matches the key in users.
```bash
mx loans join=users:v10="User Name: "v20

```



### 5. Global Changes (Gizmo)

Uses a dictionary database to replace strings globally.

* **Syntax:** `gizmo=<gizmo_db>,<taglist>`
* **Usage:** Useful for cleaning up authority lists (e.g., changing "USA" to "United States" in all records automatically).

---

## Inverted File Generation

While `fullinv` is the dedicated tool for indexing, `mx` can also generate Inverted Files (`.ifp`, `.cnt`, `.n01`, etc.). This is often preferred in scripts because `mx` is more robust.

**Syntax:**

```bash
mx <db> fst=@<fst_file> fullinv=<db_name> [actab=...] [uctab=...] -all now

```

**Parameters:**

* **`fst=@file.fst`**: The path to the Field Selection Table.
* **`fullinv=<name>`**: The name of the inverted file to create (usually matches the DB name).
* **`actab/uctab`**: Character conversion tables (optional but recommended for ANSI/UTF-8 consistency).
* **`tell=100`**: Show progress every 100 records.

**Example:**

```bash
mx cds fst=@cds.fst fullinv=cds -all now tell=100

```

---

## Q&A / Common Issues

### Exporting tags > 3000

The original ISO-2709 standard limits tags to 3 digits (001-999). CISIS supports 4 or 5 digits, but exporting them to ISO requires special handling.

* **Problem:** Tags like `3000` might be truncated or ignored in standard ISO export.
* **Solution:** Use the parameter `outisotag1=<tag>`.
```bash
mx mydb iso=output.iso outisotag1=3000 now

```


This forces MX to treat tags starting from 3000 correctly in the extension block.

### Unix vs. Windows Line Breaks

When moving data between Linux and Windows, line endings in ISO files can cause issues.

* Use `iso=filename,linux` to force LF (Unix style).
* Use `iso=filename,dos` to force CRLF (Windows style).

