---
title: <export>
description: Exports the current record to a file.
---

# Element `<export>`

The `<export>` element adds the current record to an output file. The destination filename must be specified in advance using `<parm name="file">`.

The default export format is **ISO-2709**. To change the format, use `<parm name="type">`.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Supported Types
Defined via `<parm name="type">`:
* **`ISO2709`** (Default): Standard bibliographic exchange format.
* **`HLine`**: Horizontal line format.
* **`VLine`**: Vertical line format.

## Example
Exporting the "CDS" database to an ISO file named `CDS.ISO`.

```xml
<do task="mfnrange">
   <parm name="db">CDS</parm>
   <parm name="file">CDS.ISO</parm>
   <loop>
      <export>this</export>
   </loop>
</do>

```
