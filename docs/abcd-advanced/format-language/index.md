---
sidebar_position: 1
title: Formatting Language (PFT)
description: Overview of the CISIS Formatting Language syntax and structure.
slug: /formatting-language
---

# CISIS Formatting Language

The **Formatting Language** (often referred to as **PFT**) is the core mechanism in CISIS for extracting, transforming, and displaying data from records. It is used in:
* **Display Formats:** To present records on the screen (HTML/Text).
* **FST (Field Select Tables):** To define indexing rules.
* **FMT (Worksheets):** To validate input data.
* **Sorting:** To define sort keys.

## Basic Syntax

A format is a set of commands that tells the system how to process fields.

### Field Selection
* **`v10`**: Extracts the content of Tag 10.
* **`v10^a`**: Extracts only subfield `^a` from Tag 10.
* **`v10*3`**: Extracts from character position 3 onwards (Offset).
* **`v10.5`**: Extracts the first 5 characters (Length).

### Literals
Text enclosed in specific delimiters is treated as a literal string.
* **`'Text'`** or **`"Text"`**: Unconditional literal (always displayed).
* **`|Text|`**: Conditional literal (displayed only if the preceding field is present).

### Repeatable Groups
Used to handle repeatable fields.
* **`(v10/)`**: Iterates over all occurrences of Tag 10, adding a new line after each.
* **`+`**: Suffix. Displayed after the field if it exists.
* **`*`**: Prefix. Displayed before the field if it exists.

## Execution Modes

The language behaves differently depending on the context:
1.  **Proof Mode**: Default display mode. Shows data as-is.
2.  **Data Entry Mode**: Used in validation.
3.  **Heading Mode**: Used in sorting and indexing. Ignores non-filing characters (like HTML tags or enclosed in `<>`).

## Command Structure
Commands can be nested and combined:
```pft
if p(v10) then "Title: " v10 else "No Title" fi
```
