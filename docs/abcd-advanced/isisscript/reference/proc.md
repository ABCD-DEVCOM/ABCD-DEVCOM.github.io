---
title: <proc>
description: Modifies the content of the current record in memory.
---

# Element `<proc>`

The `<proc>` element allows you to modify the content of the current record (the record currently loaded in memory) using ISIS Formatting Language (PFT).

Unlike `<display>`, which sends output to the browser/file, `<proc>` executes the PFT and applies the result internally to the record's fields. It is commonly used for temporary data transformations or to prepare a record before an update.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<proc>
    <pft>PFT_INSTRUCTIONS</pft>
</proc>

```

## Example

In this example, the script adds a prefix 'a' to field `v2024` and appends field `v2027`, separating them with tildes (`~`).

```xml
<proc>
    <pft>
        'd2024',
        'a2024~', v2024, '~', v2027, '~'
    </pft>
</proc>

```
