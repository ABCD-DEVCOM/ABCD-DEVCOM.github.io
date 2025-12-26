---
title: String & Numeric Functions
description: Commands for manipulating text strings and performing calculations.
---

# String & Numeric Functions

PFT provides a robust set of functions to manipulate data on the fly.

## String Manipulation

### `s` - String Function
Evaluates a format and returns the result as a string variable/literal. This is crucial for comparing values in `if` statements or passing arguments.
* **Syntax:** `s(Format)`
* **Example:** `if s(v10) = 'Architecture' then ... fi`


### `size` - String Size
Returns the length (number of characters) of a string or field.
* **Syntax:** `size(String)`
* **Example:** `if size(v10) > 100 then "Long Title" fi`


### `instr` - Find String
Searches for the position of a substring within a text.
* **Syntax:** `instr(Haystack, Needle)`
* **Returns:** The position (index) of the subtext, or 0 if not found.
* **Example:** `if instr(v10, "History") > 0 then ... fi`


### `replace` - Replace String
Replaces occurrences of a substring with another string.
* **Syntax:** `replace(String, Old, New)`
* **Example:** `replace(v10, "USA", "United States")`


### Substrings (`left`, `right`, `mid`)
Extract specific parts of a string.
* **`left(String, N)`**: Returns the first N chars.
* **`right(String, N)`**: Returns the last N chars.
* **`mid(String, Start, Len)`**: Extracts Len chars starting at Start.

---

## Numeric Conversion & Formatting

### `val` - String to Value
Converts a numeric string into a number for calculations.
* **Syntax:** `val(String)`
* **Example:** `val(v10) + 1`


### `f` - Format Value
Converts a number to a string with specific formatting (decimals, zero-padding).
* **Syntax:** `f(Number, Length, Decimals)`
* **Example:**
    * `f(10, 5, 0)` -> `"   10"`
    * `f(3.14159, 0, 2)` -> `"3.14"`


---

## Mathematical Functions

PFT supports basic arithmetic operators (`+`, `-`, `*`, `/`) and aggregate functions for repeatable fields.

* **`sum(Expression)`**: Sums the values of a repeatable expression.
* **`avg(Expression)`**: Calculates the average.
* **`max(Expression)`**: Returns the maximum value.
* **`min(Expression)`**: Returns the minimum value.

**Example:**
```pft
"Total Cost: " f( sum(val(v50)), 0, 2 )

```
