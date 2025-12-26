---
title: The 4 Pillars of ABCD Databases
sidebar_label: The 4 Pillars (FDT/FST/PFT/FMT)
---

# The 4 Pillars of ABCD Databases

Every database in ABCD (like `books`, `users`, `providers`) is built upon four configuration files. Understanding these is mandatory for any system administrator.

## 1. FDT (Field Definition Table)
* **File extension:** `.fdt`
* **Purpose:** Defines **what** data can be entered. It lists the fields (Tags), their names, and their input types.
* **Example:**
  * Tag 245: Title (Text box)
  * Tag 100: Author (Repeatable)

## 2. FST (Field Selection Table)
* **File extension:** `.fst`
* **Purpose:** Defines **how** data is indexed for searching. Without an entry here, a field is not searchable.
* **Technique:** It extracts content from the record and sends it to the Inverted File (Index).
* **Example:** `245 0 v245` (Index the full title).

## 3. PFT (Print Format Table)
* **File extension:** `.pft`
* **Purpose:** Defines **how** data is displayed on the screen or printed. ABCD uses the CISIS formatting language.
* **Example:** `v245^a, " / ", v100^a` (Display Title / Author).

## 4. FMT (Worksheets/Format)
* **File extension:** `.fmt`
* **Purpose:** Defines the **interface** for data entry. It selects which fields from the FDT appear on the screen for the librarian to fill out.
* **Relation:** You can have multiple FMTs for one database (e.g., one for Books, one for DVDs), all feeding into the same structure.