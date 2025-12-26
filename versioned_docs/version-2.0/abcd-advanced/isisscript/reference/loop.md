---
title: <loop>
description: Defines the block of code to be repeated for each task item.
---

# Element `<loop>`

The `<loop>` element delimits the block of instructions that will be executed for every item processed by the parent `<do>` task.

For example, if the task is `search`, the `<loop>` block executes once for every record found. If the task is `mfnrange`, it executes for every record in the range.

## Usage
- **Allowed content:** `<call>`, `<cgitable>`, `<define>`, `<display>`, `<do>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<hl>`, `<label>`, `<list>`, `<parm>`, `<proc>`, `<return>`, `<trace>`
- **Parent element:** `<do>`

## Syntax

```xml
<do task="...">
    <loop>
        </loop>
</do>

```

## Example

Iterating through a search result:

```xml
<do task="search">
   <parm name="db">LIBRARY</parm>
   <parm name="expression">WATER</parm>
   
   <loop>
      <display><pft>mfn/</pft></display>
   </loop>
</do>

```
