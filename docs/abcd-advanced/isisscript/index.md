---
sidebar_position: 1
title: IsisScript Language
description: Overview of the scripting language developed by BIREME for ISIS databases.
slug: /isisscript
---

# IsisScript Language

**IsisScript** is a scripting language based on XML (Extensible Markup Language), developed by BIREME. Its primary goal is to enhance the functions available to the WEB ISIS server ("WWWISIS") and enable the dynamic creation of web pages using elements from ISIS databases.

IsisScript was a key element in the evolution from the original WWWISIS to **WXIS**, which is the underlying web server used by the ABCD software.

## Key Characteristics

* **File Extension:** Scripts are stored as text files with the `.xis` extension.
* **Case Sensitive:** Unlike HTML, IsisScript tags are **case sensitive**. You must use, for example, `<IsisScript>` and not `<isisscript>`.
* **XML Structure:** Instructions follow the XML standard. For example, a print format is placed between `<pft>` tags and can be displayed using `<display>` tags.

## Integration with ABCD

ABCD makes extensive use of IsisScripts to manipulate data flexibly before presenting it on the web.
* Most central scripts are located in: `central/dataentry/wxis`.
* The iAH module uses scripts located in: `/iah/scripts`.

In combination with **PHP**, IsisScript allows for sophisticated results, contributing significantly to ABCD's advanced functionality.

## Parameters and Variables

All WXIS parameters can be set within `<parm>` tags. Fields can be defined or manipulated directly.

Example of assigning a value:
```xml
<field action="replace" tag="6000">Field_Value_6000</field>

```

> **Note:** High tag values (typically above 999) are used in ISIS applications as temporary variables or "virtual records" and are not physically stored in the database.

## How to use this documentation

This documentation section is organized into two main levels:

1. **Guides:** Explanations of fundamental concepts such as Tasks, Loops, Flow Control, and variables.
2. **Reference:** A hierarchical command dictionary detailing the syntax, attributes, and examples for each instruction.

:::tip Additional Resource
For a deeper historical and technical dive, please refer to [The WWWISIS Handbook (Andrew Buxton)](https://www.google.com/search?q=pathname:///download/the-wwwisis-handbook-modelo-da-bvs-bireme.pdf) available in the Downloads section.
:::