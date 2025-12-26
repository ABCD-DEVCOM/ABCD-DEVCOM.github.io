---
title: Field & Subfield Selection
description: Learn how to extract specific parts of a field using offsets, lengths, and subfield delimiters.
---

# Field & Subfield Selection

The most fundamental operation in PFT is extracting data from the record. While `v10` gets the whole field, CISIS provides powerful modifiers to extract exactly what you need.

## 1. Basic Extraction (`v`)

The command `v` (Value) followed by the Tag Number extracts the field's content.

* **Format:** `vTag`
* **Example:** `v24` gets the content of the Title field.

## 2. Subfields (`^`)

In MARC and ABCD records, fields are often divided into subfields using a delimiter (usually `^` or `$`) and a single letter/number identifier.

**Example Data (Tag 70):** `^aDoe^bJohn`

| Command | Result | Notes |
| :--- | :--- | :--- |
| `v70` | `DoeJohn` | **Warning:** Standard extraction removes delimiters but does *not* add spaces. |
| `v70^a` | `Doe` | Extracts only subfield `a`. |
| `v70^b` | `John` | Extracts only subfield `b`. |

**Best Practice:**
Always format subfields explicitly to control punctuation:
```pft
v70^b, " ", v70^a
/* Result: John Doe */

```

## 3. Offset and Length

You can extract a substring based on character position (byte offset) and length.

**Syntax:** `vTag*Offset.Length`

* **`*Offset`**: The starting character position (0-based).
* **`.Length`**: The number of characters to extract.

**Example Data (Tag 10):** `2023-10-27`

| Command | Result | Explanation |
| --- | --- | --- |
| `v10.4` | `2023` | Get first 4 chars (Year). |
| `v10*5.2` | `10` | Skip 5 chars (`2023-`), take next 2 (Month). |
| `v10*8` | `27` | Skip 8 chars, take the rest (Day). |

## 4. Mode Modifiers

You can define how the extracted data behaves regarding repeated occurrences or display formatting.

### Separators for Repeatable Fields

If Tag 70 has 3 occurrences (Authors), `v70` joins them together. You can specify a separator using the `+|...|` syntax.

* **Syntax:** `vTag+|Separator|`
* **Example:** `v70+|; |`
* **Output:** `Author A; Author B; Author C`

### Empty/Absent Fields (`d` and `n`)

Sometimes you want to display a label only if the field exists (or doesn't).

* **`dTag "Label"`**: Displays "Label" if Tag exists (Dummy selector).
* `d24 "Title: "`


* **`nTag "Label"`**: Displays "Label" if Tag is ABSENT (Null selector).
* `n20 "ISBN Missing!"`



## Summary Table

| Syntax | Name | Use Case |
| --- | --- | --- |
| `v10` | Value | Full content. |
| `v10^a` | Subfield | Specific part (e.g., surname). |
| `v10*0.5` | Substring | Fixed-width data (dates, codes). |
| `(v10/)` | Group | Iterate repeatable fields on new lines. |

```
