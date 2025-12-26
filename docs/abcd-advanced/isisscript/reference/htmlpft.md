---
title: <htmlpft>
description: Interprets and formats external HTML files containing PFT instructions.
---

# Element `<htmlpft>`

The `<htmlpft>` element is used to load, interpret, and format an external file that contains a mix of HTML code and ISIS formatting language (PFT).

It is frequently used to separate presentation logic (HTML templates) from script logic.

## Usage
- **Allowed content:** `<pft>` (usually containing the file path or `cat()` instructions).
- **Parent elements:** `<display>`

## Attributes

| Attribute | Description |
| :--- | :--- |
| `action` | Defines a specific action, such as `convert`. |

## Actions

### `action="convert"`
Converts an HTML with format specifications into a pure format. It does not interpret the final result, only shows the generated specification. Useful for debugging or dynamic format generation.

## Examples

### Basic Usage
Loads the file `Test.htm`, processes the PFT variables inside it, and sends it to the output.

```xml
<display>
   <htmlpft>
      <pft>cat('Test.htm')</pft>
   </htmlpft>
</display>

```

### Format Conversion

Reads `TEST.PFT` and processes it as a converted template.

```xml
<display>
   <htmlpft action="convert">
      <pft>cat('TEST.HTML')</pft>
   </htmlpft>
</display>

```
