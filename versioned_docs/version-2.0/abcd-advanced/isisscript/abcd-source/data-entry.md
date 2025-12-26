---
sidebar_position: 2
title: Data Entry Scripts (CRUD)
description: Analysis of scripts responsible for creating, reading, updating and deleting records.
---

# Data Entry Scripts

These scripts are the workhorses of the Cataloging module. They handle the physical manipulation of Master File records.

## 1. Updating Records (`actualizar.xis`)

This is arguably the most critical script in the system. It handles the saving of edited records.

* **File:** `wxis/actualizar.xis`
* **Primary Task:** `<do task="update">`
* **Key Operations:**
    1.  Receives the MFN and database name.
    2.  Receives field data via POST (CGI).
    3.  Locks the record (conceptually) or checks for locks.
    4.  Executes the update.
    5.  Unlocks the record using `<write>Unlock</write>`.

**Relation to IsisScript Reference:**
* Uses [`<do task="update">`](../reference/do#do-task-update)
* Uses [`<write>`](../reference/write)
* Uses [`<field action="cgi">`](../reference/field#field-action-cgi)

## 2. Creating New Records (`crear_registro.xis`)

Responsible for initializing a new record in the database.

* **File:** `wxis/crear_registro.xis`
* **Primary Task:** `<do task="update">` with `mfn="New"`
* **Key Operations:**
    * It typically calls `<parm name="mfn">New</parm>`.
    * It may assign a control number automatically if configured.

## 3. Reading Records (`leer.xis` / `leer_mfnrange.xis`)

ABCD uses different strategies to read records depending on the context (single record edit vs. browsing).

* **`leer.xis`**: Reads a single record, usually for editing.
    * *Technique:* Likely uses `<do task="mfnrange">` limited to a single MFN count.
* **`leer_mfnrange.xis`**: Used for the "Browse" buttons (Next/Prev).
    * *Technique:* Uses `<do task="mfnrange">` with `from` and `count` parameters defined by the user's navigation.

**Relation to IsisScript Reference:**
* Uses [`<do task="mfnrange">`](../reference/do#do-task-mfnrange)
* Uses [`<pft>`](../reference/pft) to format the output for the editor.

## 4. Deleting Records (`eliminarregistro.xis`)

Handles the logical or physical deletion of records.

* **File:** `wxis/eliminarregistro.xis`
* **Primary Task:** `<do task="update">`
* **Key Operation:**
    * It locates the record by MFN.
    * It uses the `<write>Delete</write>` command (or sets a flag indicating deletion depending on implementation).

**Relation to IsisScript Reference:**
* Uses [`<write>Delete</write>`](../reference/write)

## 5. Record Validation (`validar_registro.xis`)

Executed before saving to ensure data integrity based on validation rules (usually defined in `.val` files).

* **File:** `wxis/validar_registro.xis`
* **Key Operations:**
    * Loads the record data.
    * Runs a conditional PFT or a specifically crafted validation script.
    * Returns success or error messages to the PHP interface.