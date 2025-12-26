---
title: <define>
description: Maps system variables to fields for use inside loops.
---

# Element `<define>`

The `<define>` element defines special fields that will be populated and available inside a `<loop>` element. It is primarily used to map internal IsisScript system state variables (like current record number or total count) to accessible tags.

Each line in the argument is equivalent to the definition:
`<field action="define" tag="...">Isis_Variable_Name</field>`

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Common System Variables
* `Isis_Current`: The current record number being processed.
* `Isis_Total`: The total number of records in the set.
* `Isis_Item`: The current item in a list loop.

## Example

This block ensures that inside the loop, tag `1001` will contain the current MFN/Index and tag `2002` will contain the total count.

```xml
<define>
   <pft>
      '1001 Isis_Current'/
      '2002 Isis_Total'/
   </pft>
</define>

```
