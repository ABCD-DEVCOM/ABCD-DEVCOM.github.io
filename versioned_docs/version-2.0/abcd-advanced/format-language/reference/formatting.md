---
title: Visual Formatting & Layout
description: Commands for controlling output layout, spacing, and templates.
---

# Visual Formatting & Layout

These commands control how the data is presented on the screen, manage whitespace, and allow the inclusion of external content.

## Modes (Case Conversion)
*See also: `mode` command*

* **`mpl`** (Mode Proof Lower): Does not convert case (Proof mode).
* **`mpu`** (Mode Proof Upper): Converts output to UPPERCASE.
* **`mhl`** (Mode Heading Lower): Standard heading mode (sorting), keeps case.
* **`mhu`** (Mode Heading Upper): Heading mode, converts to UPPERCASE.


## Spacing & Newlines

### `/` - Unconditional Newline
Forces a carriage return / line break immediately.
* **Syntax:** `/`


### `#` - Conditional Newline
Inserts a new line only if the previous line is not blank. Prevents multiple blank lines.
* **Syntax:** `#`


### `%` - Reset Blank Line
Resets the blank line counter logic, ensuring the next conditional newline (`#`) works as expected even at the start of output.
* **Syntax:** `%`


### `newline` - Set Newline String
Changes the character sequence used for line breaks. Extremely useful for web output where you want `<BR>` instead of a standard text line break.
* **Syntax:** `newline(Format)`
* **Example:**
    ```pft
    /* Use HTML breaks */
    newline('<br>')
    
    /* Restore standard CR/LF */
    newline(if v1='unix' then '\n' else '\r\n' fi)
    ```


### `x` - Space
Inserts `N` spaces.
* **Syntax:** `xN`
* **Example:** `v10, x5, v20` (inserts 5 spaces between fields)


## Literals

### `'...'` - Unconditional Literal
Text enclosed in single or double quotes is always displayed.
* **Syntax:** `'Text'` or `"Text"`


### `|...|` - Conditional Literal
Text enclosed in pipes is displayed **only if** the immediately preceding field was present (not empty).
* **Syntax:** `v10 | -- |`
* **Usage:** Useful for separators.


### `+` and `*` - Repeatable Literals
Used within repeatable groups.
* **`+`**: Suffix. Displayed *after* the field if present.
* **`*`**: Prefix. Displayed *before* the field if present.


## Alignment & Layout

### `c` - Column
Moves the cursor to a specific column position.
* **Syntax:** `cN`
* **Example:** `c20` (move to column 20)


### `lw` - Line Width
Sets the maximum line width for wrapping.
* **Syntax:** `lw(N)`


## Content Inclusion

### `cat` - Dump File
Outputs the content of an external file directly into the format stream. It is widely used in ABCD to include HTML headers, footers, or standard templates.
* **Syntax:** `cat(FilenameFormat)`
* **Example:**
    ```pft
    cat('header.html'),
    v10,
    cat('footer.html')
    ```