---
title: Data Conversion & Export
description: Using PFT to generate CSV, XML, and other structured export formats.
---

# Data Conversion with PFT

The Formatting Language is not just for screen display; it is a powerful **Report Generator** capable of transforming binary CISIS records into structured text formats like CSV, XML, JSON, or IDIF.

## 1. Generating CSV (Comma Separated Values)

Creating CSV files requires handling delimiters (commas or semicolons) and ensuring that data containing the delimiter is properly quoted.

### Basic Structure
The goal is to produce one line per record, with fields separated by `;`.

```pft
/* Field 10 */
v10, ';',
/* Field 20 */
v20, ';',
/* Field 30 (Last field, no semicolon at the end) */
v30
/* Newline for next record */
/

```

### Handling "Dirty" Data (Quoting)

If a title contains a semicolon (e.g., `History; A Novel`), the simple format above breaks the CSV. You must wrap fields in quotes.

```pft
'"', v10, '"', ';',
'"', v20, '"'
/

```

*Advanced:* If the data *also* contains quotes, standard CSV requires escaping them (double quotes `""`). PFT's `replace` function can handle this:

```pft
'"', replace(v10, '"', '""'), '"', ';', ...

```

### Handling Repeatable Fields in CSV

CSV is flat (2D). Repeatable fields (3D) can be handled in two ways:

1. **Concatenation:** Join all occurrences with a different separator (e.g., `|`).
```pft
'"', (v70 + | \| |), '"', ';'

```


2. **Explosion:** Generate multiple lines per record (one per author).
```pft
(
   v10, ';', v70, /
)

```



## 2. Generating XML

XML generation is straightforward with PFT because you can output tags directly as literals.

```pft
'<record>', /
   '<mfn>', f(mfn, 0, 0), '</mfn>', /
   
   /* Title */
   if p(v24) then
      '<title>', v24, '</title>', /
   fi,
   
   /* Authors (Repeatable) */
   (
      '<creator>', v70, '</creator>', /
   ),
   
'</record>', /

```

### XML Safety

You must ensure special characters (`<`, `>`, `&`) in your data do not break the XML structure.

* **CDatas:** Wrap content in CDATA sections.
```pft
'<title><![CDATA[', v24, ']]></title>'

```


* **HTML Encoding:** Use a lookup table or `replace` to convert `&` to `&amp;`.

## 3. Generating JSON

JSON requires strict comma placement (no comma after the last item). This is tricky in PFT but solvable using the `size` or `nocc` checks, or by using the `+` conditional suffix effectively.

**Example: Simple Record to JSON**

```pft
'{', /
   '"mfn": ', f(mfn,0,0), ',', /
   '"title": "', v24, '"',
   
   /* Authors Array */
   if p(v70) then
      ', "authors": [', /
      (
         '"', v70, '"',
         if iocc < nocc(v70) then ', ' fi
      )
      ']'
   fi
   
'}', /

```

## 4. Generating IDIF (ISO 2709 Text Representation)

IDIF is a text-based format used by CISIS to represent the structure of an ISO-2709 file. It is often used for data migration (`id2i`).

**Format:**
`!ID MFN`
`!vTAG!Field Content`

**PFT Script:**

```pft
/* Record Header */
'!ID ', f(mfn, 6, 0), /

/* Iterate through all fields (if you know the tags) */
(
   if p(v10) then '!v010!', v10, / fi
),
(
   if p(v70) then '!v070!', v70, / fi
)

```

## 5. Converting Character Sets

*See also: [System Commands](https://www.google.com/search?q=../reference/system-data) for `proc*`

When exporting, you may need to convert from ANSI to UTF-8 or vice-versa. While `mx` handles this with `-gi`/`-go` parameters, PFT can do simple replacements if needed.

```pft
/* Replace accented 'a' with HTML entity */
replace(v10, 'á', '&aacute;')

```
