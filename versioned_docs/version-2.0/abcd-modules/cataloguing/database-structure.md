---
sidebar_position: 2
title: Database Structure (FDT, FST)
---

# Database Structure (FDT, FST)

The power and flexibility of the ABCD Cataloging module come from its underlying CDS/ISIS database structure. This structure is primarily defined by two core components: the **Field Definition Table (FDT)** and the **Field Selection Table (FST)**.

These components determine what data can be stored, how it is organized, and how it is indexed for retrieval. They can be managed via **Administration** → **Database management**.

### Field Definition Table (FDT)

The **FDT** is the blueprint of your database. It defines every field that can exist in a record, much like defining columns in a traditional database table. For each field, the FDT specifies:

* **Tag (ID):** A unique number that identifies the field (e.g., `245` for the main title in MARC).
* **Name:** A descriptive name for the field (e.g., `Title`).
* **Type:** The type of data the field will contain (e.g., alphanumeric, alphabetic, numeric).
* **Repeatable:** Whether the field can have multiple occurrences in a single record (e.g., a book can have multiple authors).
* **Subfields:** If the field can be broken down into smaller components (e.g., in MARC, field `100` for Author has subfields like `$a` for the name and `$d` for the dates). Subfields are defined with a delimiter, typically `^`.

ABCD provides a web-based editor to manage the FDT, allowing you to add, modify, or delete fields as needed to suit your cataloging standard.

### Field Selection Table (FST)

The **FST** defines the database's "inverted file," which is essentially its index. It tells the system which fields (or parts of fields) should be indexed to make them searchable. Without an entry in the FST, the data in a field cannot be searched efficiently.

An FST entry consists of three parts:

1.  **Field Identifier (ID):** The tag of the field to be indexed.
2.  **Indexing Technique:** A code that specifies how the content should be indexed. For example, technique `0` indexes the entire field as is, while technique `4` breaks the content down into individual words.
3.  **Formatting Language (PFT):** A powerful expression, using the CDS/ISIS Formatting Language, that precisely selects and formats the data before it is added to the index. This allows you to extract specific subfields, combine data from multiple fields, or add prefixes to create different types of search keys.

**Example FST entry:**
`245 4 v245^a, v245^b`

* **ID:** `245` (Title field)
* **Technique:** `4` (Index word by word)
* **Format:** `v245^a, v245^b` (Select the content of subfields 'a' and 'b' from field 245)

This entry would make the words in the main title and subtitle searchable. Like the FDT, the FST can be managed through a dedicated editor within ABCD.

> Understanding the relationship between FDT and FST is fundamental. The **FDT defines *what* you can store**, and the **FST defines *how* you can search for it**.