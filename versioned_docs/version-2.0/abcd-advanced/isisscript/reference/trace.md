---
title: <trace>
description: Enables or disables the debugging trace mode.
---

# Element `<trace>`

The `<trace>` element is a debugging tool that controls the display of the instructions being executed by the IsisScript interpreter.

It activates or deactivates the echo of the code to the standard output, helping developers follow the execution flow.

## Usage
- **Allowed content:** Text (`On`, `Off`, `BR`, `Table`) or `<pft>`.
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<IsisScript>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<trace>MODE</trace>

```

## Modes (Content)

* **`On`**: Activates **normal** trace mode.
* **`BR`**: Activates **line-by-line** mode (adds HTML line breaks `<br>` for readability in browsers).
* **`Table`**: Activates **table** mode (displays execution trace inside an HTML table structure).
* **`Off`**: Deactivates tracing.

## Example

```xml
<trace>BR</trace>
<field action="replace" tag="100">Debug this value</field>
<trace>Off</trace>

```
