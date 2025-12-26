---
title: <extract>
description: Extracts keys from the current record for indexing.
---

# Element `<extract>`

The `<extract>` element processes the current record using a Field Select Table (FST) to generate keys (terms) for the inverted file.

It requires several parameters to be set up:
1. **FST**: Defined by `<parm name="fst">`.
2. **Destination DB**: Defined by `<parm name="keysdb">` (temporary database to hold keys).
3. **Internal Mappings**: You must map `Isis_Key` and `Isis_Posting` to virtual tags.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Configuration
Before calling `<extract>`, you must define specific fields:
* `<field action="define" tag="...">Isis_Key</field>`: Holds the extracted term.
* `<field action="define" tag="...">Isis_Posting</field>`: Holds the posting information (MFN, Tag, Occ, etc.).

## Example
Extracting keys from records in `CDS` to a temporary `keysdb`.

```xml
<do task="mfnrange">
   <parm name="fst">1 0 v1</parm>
   <parm name="keysdb">tmp1</parm>
   
   <field action="define" tag="1">Isis_Posting</field>
   <field action="define" tag="2">Isis_Key</field>
   
   <loop>
      <extract>this</extract>
   </loop>
</do>

```
