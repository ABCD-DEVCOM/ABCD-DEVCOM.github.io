---
title: <write>
description: Commits the changes made to the current record to the database.
---

# Element `<write>`

The `<write>` element commits the modifications made to the current record into the database.

Its behavior depends on the `<parm name="mfn">` setting of the parent task:
* If `mfn` is **New**, a new record is added.
* Otherwise, the existing record specified by the argument is updated.

## Usage
- **Allowed content:** Text (Lock mode) or `<pft>`
- **Parent element:** `<update>`

## Syntax

```xml
<write>LOCK_MODE</write>

```

## Arguments (Lock Modes)

The content of the `<write>` tag determines the locking state of the record after saving:

* **`Unlock`**: Stores the record and unlocks it immediately.
* **`Lock`**: Stores the record but keeps it locked.
* **`NoUnlock`**: Stores the record, keeps it locked, and the lock information remains unchanged.
* **`Delete`**: The record is logically deleted from the database.

## Example

```xml
<do task="update">
   <parm name="db">CDS</parm>
   <parm name="mfn">New</parm>
   <field action="define" tag="1102">Isis_Status</field>
   
   <update>
      <field action="add" tag="1">One more</field>
      
      <write>Unlock</write>
      
      <display><pft>ALL</pft></display>
   </update>
</do>

```
