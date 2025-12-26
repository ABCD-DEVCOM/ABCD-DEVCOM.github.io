---
sidebar_position: 4
title: Maintenance & Utilities
description: Scripts for database maintenance, indexing, sorting, and unlocking.
---

# Maintenance & Utilities Scripts

These scripts perform administrative tasks that affect the physical structure or the status of the databases. They are typically accessed via the "Maintenance" menu in the ABCD Central module.

## 1. Full Inversion (`fullinv.xis`)

This is one of the most resource-intensive scripts. It regenerates the Inverted File (Search Index) based on the database's FST (Field Select Table).

* **File:** `wxis/fullinv.xis`
* **Primary Task:** `<do task="fullinvertion">`
* **Key Parameters:**
    * `db`: The database to index.
    * `fst`: The path to the `.fst` file containing extraction rules.
    * `stw`: (Optional) Stopwords file.
    * `actab` / `uctab`: Character conversion tables to ensure correct sorting/indexing.
* **Process:**
    1.  It locks the database to prevent writes during indexing.
    2.  It executes the inversion (extraction + sorting + loading keys).
    3.  It updates the `control` number (Next MFN).

**Relation to IsisScript Reference:**
* Uses [`<do task="fullinvertion">`](../reference/do#do-task-fullinvertion)
* Uses [`<parm name="actab">`](../reference/parm)

## 2. Database Initialization (`inicializar_bd.xis`)

**Warning:** This script creates a new, empty database structure. If run on an existing database without backup, **it wipes all data**.

* **File:** `wxis/inicializar_bd.xis`
* **Primary Operation:** `<file action="create">`
* **Logic:**
    1.  Receives the database name.
    2.  Executes `<file action="create" type="database">` which creates the Master File (.mst/.xrf) and an empty Inverted File.
    3.  Often resets the Control Number (CN) to 0.

**Relation to IsisScript Reference:**
* Uses [`<file action="create" type="database">`](../reference/file)

## 3. Sorting Records (`sort.xis`)

Physically sorts the Master File records based on a PFT expression or a Key.

* **File:** `wxis/sort.xis`
* **Primary Task:** `<do task="mastersort">`
* **Key Parameters:**
    * `key`: The PFT expression that defines the sort order (e.g., `v100^a`).
* **Usage:** Used when the library needs records physically ordered by Author or Title (e.g., for printing sequential catalogs), although virtual sorting is preferred in modern usage.

**Relation to IsisScript Reference:**
* Uses [`<do task="mastersort">`](../reference/do#do-task-mastersort)

## 4. Unlocking (`unlock.xis` / `lock.xis`)

Handles the concurrency control mechanisms.

* **File:** `wxis/unlock.xis`
* **Primary Operation:** `<file action="unlock">`
* **Usage:** Sometimes a web server crash or a user closing the browser improperly leaves a record or database in a "locked" state. This script forces the removal of these locks.

**Relation to IsisScript Reference:**
* Uses [`<file action="unlock">`](../reference/file)