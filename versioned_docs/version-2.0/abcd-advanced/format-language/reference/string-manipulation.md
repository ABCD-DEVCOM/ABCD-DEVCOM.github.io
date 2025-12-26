---
title: String Manipulation
sidebar_label: String Manipulation
sidebar_position: 6
---

# String Manipulation

Raw data is not always ready for display. You might need to capitalize names, extract abbreviations, or clean up punctuation.

## Case Conversion Modes
These "Mode" commands affect all subsequent fields until changed or reset.

| Command | Name | Description | Example Input | Example Output |
| :--- | :--- | :--- | :--- | :--- |
| **`mpl`** | **Proof Read** | First letter Upper, rest lower. | `JOHN DOE` | `John doe` |
| **`mhu`** | **Heading Upper** | All Uppercase. | `John Doe` | `JOHN DOE` |
| **`mhl`** | **Heading Lower** | All Lowercase. | `John Doe` | `john doe` |
| **`mdu`** | **Data Upper** | First letter of *every word* Upper. | `history of art` | `History Of Art` |
| **`mdl`** | **Data Standard** | Resets formatting to default (as entered). | - | - |

**Usage:** `mhu, v10, mpl` (Prints v10 in Uppercase, then switches mode to Proof).

## Substring Extraction
You can extract parts of a field using offsets and lengths.

* **Syntax:** `vTag*Offset.Length`

| Code | Meaning | Example (v10="2024-12-25") | Result |
| :--- | :--- | :--- | :--- |
| **`*n`** | **Skip** n characters | `v10*5` | `12-25` |
| **`.n`** | **Take** n characters | `v10.4` | `2024` |
| **Combined** | Skip and Take | `v10*5.2` | `12` |

## Text Searching (`s` function)
Searches for a substring within a field. Returns the *position* of the string (or 0 if not found).

* **Syntax:** `s('search_term', vTag)`
* **Usage in IF:** `if s('Physics', v245) > 0 then ...`

