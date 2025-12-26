---
title: <update>
description: Defines the block of instructions for modifying or adding a record.
---

# Element `<update>`

The `<update>` element delimits the specific block of instructions that will modify the fields of a record before it is written back to the database.

It is always nested within a `<do task="update">` task. Inside this block, you typically use `<field>` commands to add, replace, or delete content, and finally the `<write>` command to commit the changes.

## Usage
- **Allowed content:** `<call>`, `<cgitable>`, `<define>`, `<display>`, `<do>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<hl>`, `<label>`, `<list>`, `<parm>`, `<proc>`, `<return>`, `<trace>`, `<write>`
- **Parent element:** `<do>` (specifically `task="update"`)

## Syntax

```xml
<do task="update">
    <parm name="db">DATABASE_NAME</parm>
    <parm name="mfn">MFN_NUMBER | New</parm>
    
    <update>
        <field action="...">...</field>
        
        <write>Unlock</write>
    </update>
</do>

```

## Example

This example creates a **new record** in the `CDS` database, adds the text "One more" to field 1, saves it, and displays the full record content.

```xml
<do task="update">
    <parm name="db">CDS</parm>
    <parm name="mfn">New</parm>
    
    <field action="define" tag="1102">Isis_Status</field>
    
    <update>
        <field action="append" tag="1">One more</field>
        <write>Unlock</write>
        <display><pft>ALL</pft></display>
    </update>
</do>

```
