---
title: <hl> (Highlight)
description: Highlights specific terms within a display block.
---

# Element `<hl>`

The `<hl>` element starts a block of instructions where the generated text will be processed to highlight specific terms. It is commonly used in information retrieval systems to show the user where search terms appear in the record.

## Usage
- **Allowed content:** `<call>`, `<cgitable>`, `<define>`, `<display>`, `<do>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<label>`, `<list>`, `<parm>`, `<proc>`, `<trace>`
- **Parent elements:** `<do>`, `<function>`, `<loop>`, `<section>`, `<update>`

## Required Parameters
To make the highlighting work, you must define three parameters inside the `<hl>` block using the `<parm>` tag:

1.  **`prefix`**: The HTML code (or text) to insert **before** the found term (e.g., `<b>` or `<span class="highlight">`).
2.  **`suffix`**: The HTML code to insert **after** the term (e.g., `</b>` or `</span>`).
3.  **`keys`**: The list of terms to highlight (usually derived from the search expression).

## Example

In this example, the script highlights the words contained in variable `v1022` (search terms) within the content of field `v18`.

```xml
<hl>
   <parm name="prefix"><b></parm>
   <parm name="suffix"></b></parm>
   
   <parm name="keys"><pft>(v1022/)</pft></parm>
   
   <field action="hl" tag="18"><pft>v18</pft></field>
   <display>
      <pft>ALL</pft>
   </display>
</hl>

```
