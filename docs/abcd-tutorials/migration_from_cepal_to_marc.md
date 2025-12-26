---
title: Migration from CEPAL to MARC
sidebar_label: CEPAL to MARC Migration
---

# Migration from CEPAL to MARC

**Author:** Marcos Mirabal Garcia (Universidad de Pinar del Río)
**System:** ABCD (Automation of Libraries and Documentation Centers)

This guide describes the procedure to migrate a serials database from the **CEPAL** format (common in Latin America) to the **MARC** format, which is widely used in ABCD.

## 1. Analysis and Field Mapping

The first and most critical step is to map the fields from the source format (CEPAL) to the destination format (MARC). Below is the mapping table used in this example.

| CEPAL Field | Field Name | MARC Field |
| :--- | :--- | :--- |
| **2** | Control Number | **1** |
| **3** | Topographic Signature | **84** |
| **16** | Personal Author (M) | **100** |
| **17** | Corporate Author (M) | **110** |
| **18** | Title (M) | **245** |
| **19** | Translated Title (M) | **242** |
| **20** | Pages | **300** |
| **38** | Publisher | **260** |
| **39** | City | **260** |
| **40** | Country | **43** |
| **41** | Edition | **250** |
| **43** | Year | **260** |
| **47** | ISBN | **20** |
| **64** | Text Language | **41** |
| **72** | Notes | **500** |
| **76** | Topical term | **650** |
| **104** | Location | **852** |

## 2. Creating the Migration Script

Based on the mapping above, you need to create a **Procedure Script** (`.prc`). This script uses the CISIS formatting language to transform the data during the process.

Create a file named `migration.prc` with the following content:

```pft
/* Delete all existing fields first */
'd*',

/* Add fixed MARC Leader fields (Tags 3000+) */
'<3005>n</3005>',
'<3006>a</3006>',
'<3007>m</3007>',
'<3008>0</3008>',
'<3017>5</3017>',
'<3018>a</3018>',
'<3019>0</3019>',

/* Migrate Data Fields */
/* If field exists in CEPAL (p), wrap content in MARC tags */

if p(v2)   then '<1>',v2,'</1>' else '<1>',mfn,'</1>' fi,
if p(v3)   then '<84>^a',v3,'</84>' fi,
if p(v16)  then '<100>^a',v16,'</100>' fi,
if p(v17)  then '<110>^a',v17,'</110>' fi,
if p(v18)  then '<245>^a',v18,'</245>' fi,
if p(v19)  then '<242>^a',v19,'</242>' fi,
if p(v20)  then '<300>^a',v20,'</300>' fi,
if p(v38)  then '<260>^b',v38,'</260>' fi,
if p(v39)  then '<260>^a',v39,'</260>' fi,
if p(v40)  then '<43>^a',v40,'</43>' fi,
if p(v41)  then '<250>^a',v41,'</250>' fi,
if p(v43)  then '<260>^c',v43,'</260>' fi,
if p(v47)  then '<20>^a',v47,'</20>' fi,
if p(v64)  then '<41>^a',v64,'</41>' fi,
if p(v72)  then '<500>^a',v72,'</500>' fi,
if p(v76)  then '<650>^a',v76,'</650>' fi,
if p(v104) then '<852>^a',v104,'</852>' fi

```

## 3. Executing the Migration

The migration is performed using the `mx` utility via the command line.

### Preparation

1. Create a working folder.
2. Copy your database files (e.g., `cepal.mst`, `cepal.xrf`) to this folder.
3. Copy the `migration.prc` file created in Step 2 to this folder.
4. Ensure you have the `mx` executable (compatible with your database version) accessible.

### Step-by-Step Commands

#### A. Prepare the Source Database

If your source is an ISO file, import it first.

**Windows:**

```cmd
mx iso=source.iso create=cepal -all now

```

**Linux:**

```bash
./mx iso=source.iso create=cepal -all now

```

#### B. Run the Migration

Apply the procedure script to convert records from CEPAL to MARC. This creates a temporary database (e.g., `temp_marc`).

**Windows:**

```cmd
mx cepal proc=@migration.prc create=temp_marc -all now

```

**Linux:**

```bash
./mx cepal proc=@migration.prc create=temp_marc -all now

```

#### C. Export to ISO for ABCD Import

Export the converted database to an ISO file. We use `outisotag1=3000` to preserve the standard MARC leader fields generated in the script.

**Windows:**

```cmd
mx temp_marc iso=marc_import.iso outisotag1=3000 -all now

```

**Linux:**

```bash
./mx temp_marc iso=marc_import.iso outisotag1=3000 -all now

```

## 4. Final Import into ABCD

1. Access your ABCD interface.
2. Create a **New Database** (e.g., `Books`) using the standard **MARC** structure.
3. Go to **Utilities > Import ISO**.
4. Select the `marc_import.iso` file generated in Step 3C.
5. Run the import.

You have now successfully converted a CEPAL database structure into a MARC database structure. This logic can be adapted to migrate between any other formats by modifying the mapping table and the `.prc` script.