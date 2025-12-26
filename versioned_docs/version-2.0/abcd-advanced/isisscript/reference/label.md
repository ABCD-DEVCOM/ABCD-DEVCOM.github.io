---
title: <label>
description: Defines a destination point (anchor) for execution jumps (GOTO).
---

# Element `<label>`

The `<label>` element creates a tag (marker) in the code. The IsisScript interpreter can deviate the flow of execution to this point using the [`<flow action="jump">`](./flow) command.

It functions as the destination of a "GOTO" command in traditional languages.

## Usage
- **Content:** Simple text (the name of the label).
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<label>LABEL_NAME</label>

```

## Practical Example

In this example, the script checks if the `db` parameter exists.

1. If it exists, it jumps to the `OK` label.
2. If it doesn't exist, it displays an error and exits (`exit`).
3. The `OK` label allows the script to continue only if the condition is met.

```xml
<field action="cgi" tag="2001">db</field>

<flow action="jump">
   <pft>if p(v2001) then 'OK' fi</pft>
</flow>

<display>Error: 'db' parameter absent. Exiting.</display>
<flow action="exit">0</flow>

<label>OK</label>

<display>Database parameter found, proceeding...</display>

```

