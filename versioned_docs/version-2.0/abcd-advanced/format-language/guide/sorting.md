---
title: Sorting Records
description: Creating sort keys using PFT for reports and ordered lists.
---

# Sorting with PFT

In ABCD and CISIS, sorting is not "dynamic" like in SQL. Instead, you define a **Sort Key** using a PFT format. The system generates this key for every record and sorts the output based on it.

## Key Generation Rules
1.  **Single String:** The PFT must produce a single, continuous string.
2.  **Fixed Length:** For accurate sorting, keys should be padded to a fixed length (e.g., ensure Title always takes 50 chars).
3.  **Structure:** `Primary Key + Secondary Key + Tertiary Key`.

## Sorting Modes

### Heading Mode (`mhl`, `mhu`)
When generating sort keys, it is best practice to use **Heading Mode**.
* **Function:** It ignores characters enclosed in `<...>` (non-filing characters).
* **Example:** If a title is stored as `<The >History of Time`:
    * `mpu` (Proof Mode): Sorts under **T** ("THE HISTORY...").
    * `mhu` (Heading Mode): Sorts under **H** ("HISTORY...").

## Common Sort Formats

### 1. Simple Alphabetic Sort (Title)
Sort by Title (Tag 24).
```pft
mhu, v24
```

### 2. Hierarchical Sort (Author + Date)

Sort by Author (Tag 70), and for the same author, sort by Date (Tag 26).

**Problem:** If Author is "Smith" and Date is "2023", simply writing `v70 v26` might fail if another record has Author "Smithson" and Date "2021" (Smithson > Smith).
**Solution:** Pad the first field with spaces to a fixed length.

```pft
mhu,
/* Author: 60 characters fixed width */
v70, s(v70, x60)*0.60,
/* Date: 4 characters */
v26
```

### 3. Numeric Sorting

CISIS sorts strings alphabetically (`"10" < "2"`). To sort numbers correctly (`2 < 10`), you must pad them with zeros using `f()`.

**Example: Sorting by Call Number (Tag 50)**

```pft
/* Format number to 10 digits with leading zeros */
f(val(v50), 10, 0)
```

*Result:* `2` becomes `0000000002`, which sorts before `0000000010`.

### 4. Descending Order (Inverted Sort)

CISIS only sorts in ascending order (A-Z, 0-9). To get descending order (e.g., most recent year first), you must mathematically invert the value using the **Complement of 9**.

**Example: Sort by Year (Tag 64) Descending**

```pft
f(9999 - val(v64), 4, 0)
```

*Logic:*

* Year 2023 -> 9999-2023 = 7976
* Year 2000 -> 9999-2000 = 7999
* Since 7976 < 7999, the year 2023 comes first in ascending sort.