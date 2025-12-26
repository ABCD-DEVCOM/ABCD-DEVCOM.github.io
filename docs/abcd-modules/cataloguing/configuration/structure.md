---
title: Database Structure (FDT & FST)
sidebar_label: Structure (FDT & FST)
sidebar_position: 1
---

# Database Structure

The power and flexibility of the ABCD Cataloging module come from its underlying CISIS database structure. Unlike SQL databases that use fixed tables, ISIS databases are defined by flexible core components managed via **Administration > Database Configuration**.

## 1. Field Definition Table (FDT)

The **FDT** defines the logical structure of the records. It lists all available fields, their data types, and input rules. It essentially tells the system "what data can be stored here".

* **Location:** `bases/db_name/def/lang/db_name.fdt`

### Field Properties

When configuring a field in ABCD, you must define the following properties:

| Property | Description |
| :--- | :--- |
| **Tag** | The numeric identifier of the field (1-999). Tags do not need to be sequential. |
| **Name** | The label displayed to the cataloger (e.g., "Title", "Publication Date"). |
| **Type** | The input format (Text, Date, Picklist, etc.). See *Data Types* below. |
| **Repetitive** | Check this if the field can have multiple occurrences (e.g., Multiple Authors). |
| **Subfields** | Defined patterns for data subdivision (e.g., `^aTitle^bSubtitle`). |

### Data Types (Input Formats)

The **Type** column determines how the field appears in the Data Entry Worksheet.

| Type | Code | Description |
| :--- | :--- | :--- |
| **Text** | `T` | Single-line text input (Standard). |
| **Text Area** | `M` | Multi-line text box (Memo). Used for Abstracts, Notes. |
| **Date** | `D` | Date picker or validated date format (ISO). |
| **Select** | `S` | Dropdown list (Single selection). Requires a Picklist file. |
| **Radio** | `R` | Radio buttons (Single selection). Requires a Picklist file. |
| **Checkbox** | `C` | Checkboxes (Multiple selection). Requires a Picklist file. |
| **Upload** | `U` | File upload button (for Digital Libraries). |
| **Hidden** | `H` | Field is stored but not visible in the worksheet (System fields). |
| **ReadOnly** | `L` | Label/ReadOnly field. |

---

## 2. Field Selection Table (FST)

The **FST** is the "brain" of the search engine. While the FDT defines storage, the FST defines **access**. It tells ABCD which fields should be searchable and how to process them into the Inverted File (Index).

* **Location:** `bases/db_name/data/db_name.fst`

An FST entry consists of three parts: **Identifier (ID)**, **Indexing Technique (IT)**, and **Extraction Format**.

### Indexing Techniques (IT)

The Technique determines how the extracted text is split into keys (search terms).

| IT | Name | Description | Example Input | Index Entry |
| :-- | :--- | :--- | :--- | :--- |
| **0** | **Full Field** | Indexes the entire line as a single phrase. | `History of Art` | `History of Art` |
| **1** | **Subfield** | Indexes specific subfields defined in the format. | `^aDoe^bJohn` | `Doe` |
| **2** | **`<>` Bracket** | Indexes only text enclosed in `<` and `>`. | `History of <Art>` | `Art` |
| **3** | **// Slashes** | Indexes text in `/.../` as a phrase, rest as words. | `/History of Art/` | `History of Art` |
| **4** | **Word** | Indexes every word individually. | `History of Art` | `History`, `of`, `Art` |
| **8** | **Word (Stopword)** | Same as 4, but ignores words in a Stopword List (`.stw`). | `History of Art` | `History`, `Art` |

### Extraction Format (PFT)

This uses the ISIS Formatting Language to precise exactly *what* to index.

#### A. Basic Indexing
* **Full Text (Technique 4):** Index every word in the Title.
    * Format: `v245`
* **Phrase Indexing (Technique 0):** Index the full author name as one string.
    * Format: `v100`

#### B. Using Prefixes
To distinguish between an Author "Green" and a Color "Green", use prefixes.
* **Technique:** 0 (Line) or 1 (Prefix).
* **Format:** `"TI_"v245`
* **Result:** `TI_GREEN` (Searchable as `TI_GREEN`).

#### C. Handling Repeatable Fields (Crucial)
If a field is repeatable (e.g., Tag 70 Authors), using `v70` concatenates all authors into one long line. To index them separately, you **must** use a repeatable group with a line break.
* **Incorrect:** `v70` (Result: `SmithJohnsonDoe`)
* **Correct:** `(v70/)`
* **Result:**
    ```text
    Smith
    Johnson
    Doe
    ```
    *(The FST processes each line as a separate key).*

#### D. Conditional Indexing
You can use logic to decide what to index.
* **Example:** Index Tag 10 only if the status (Tag 20) is "Active".
    * Format: `if v20='Active' then v10 fi`

:::warning Re-Indexing
Changes to the FST do not take effect immediately. You must run a **Full Inverted File Generation** (Maintenance Menu) to apply changes to existing records.
:::