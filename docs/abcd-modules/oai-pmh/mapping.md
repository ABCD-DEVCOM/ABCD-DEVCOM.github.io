---
title: Metadata Mapping (XML Crosswalks)
sidebar_label: Metadata Mapping
sidebar_position: 3
---

# Metadata Mapping

ABCD records are stored in ISIS format (Fields/Subfields), but OAI harvesters expect XML (Dublin Core, MARCXML). The **Mapping** layer handles this translation.

The definition files are located in `isis-oai-provider/map/`.

## 1. The Structure
For each format (e.g., `dubcore`), you need two files:
1.  **`dubcore.i2x`**: The XML structure definition (ISO-2709 to XML).
2.  **`dubcore_dc.pft`**: The ISIS formatting script to extract data.

## 2. Editing the PFT (`_dc.pft`)
This is where you map your tags to Dublin Core fields.
* **File:** `map/dubcore_dc.pft` (or `marc_dc.pft`).

**Example Logic:**
If your database uses **Tag 245** for Title and **Tag 100** for Creator:

```pft
/* Map Title to dc:title */
if p(v245) then
    '<dc:title><![CDATA[', v245^a, ']]></dc:title>'/
fi,

/* Map Author to dc:creator */
if p(v100) then
    '<dc:creator><![CDATA[', v100^a, ']]></dc:creator>'/
fi

```

:::tip CDATA Sections
Always wrap your content in `<![CDATA[ ... ]]>` to prevent special characters (like `&` or `<`) from breaking the XML syntax.
:::

## 3. Supported Formats

The module comes with pre-configured maps for:

* **oai_dc** (Dublin Core): The mandatory minimum for OAI-PMH.
* **marcxml**: Rich metadata for library exchange.

To enable a format, ensure it is listed in `oai-metadataformats.php`.
