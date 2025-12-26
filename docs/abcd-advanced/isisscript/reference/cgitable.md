---
title: <cgitable>
description: Maps CGI variables to ISIS fields in bulk.
---

# Element `<cgitable>`

The `<cgitable>` element allows you to map multiple CGI variables (input values) to ISIS fields in a single block.

For each line of the specified argument, IsisScript appends the content of the CGI variable (the "value") corresponding to the specified name to a target field.

Effectively, each line inside `<cgitable>` is a shorthand equivalent to:
`<field action="cgi" tag="...">name</field>`

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<cgitable>
    <pft>
        'TAG_NUMBER CGI_VARIABLE_NAME'/
        'TAG_NUMBER CGI_VARIABLE_NAME'/
    </pft>
</cgitable>

```

## Example

In this example, the script grabs the value of the CGI variable `db` and puts it into field `2001`, and `from` into field `2002`. It also dynamically builds a mapping line using a `ref` command.

```xml
<cgitable>
   <pft>
      '2001 db'/
      '2002 from'/
      ref(['CONFIG']1,(v1^t,x1,v1^n/))
   </pft>
</cgitable>

```
