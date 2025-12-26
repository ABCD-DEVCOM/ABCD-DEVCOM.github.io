---
title: A-Z Browsing Configuration
sidebar_label: A-Z Browsing
sidebar_position: 6
---

# A-Z Browsing Configuration

The "Browse" feature allows users to navigate lists of Authors, Subjects, or Titles alphabetically. This behavior is controlled by specific configuration tables located in `bases/opac_conf/alpha/`.

## 1. The Alphabet Tables (`.tab`)
The system needs to know the correct sorting order for your language (e.g., treating 'Á' as 'A' or as a separate letter).

**Location:** `bases/opac_conf/alpha/[charset]/`
**Key Files:**
* `LATIN.tab`: Standard western sorting.
* `ARABIC.tab`, `CYRILLIC.tab`: For non-latin scripts.

**Structure:**
The file maps the "User Selection" to a "Search Prefix range".
```text
A   | A
B   | B
...

```

## 2. Configuring Browsable Indexes

To make a field available for browsing (e.g., "Browse by Author"):

1. **Index Creation:** Ensure the field is indexed in the database (FST) with a distinct prefix (e.g., `AU_` for Authors).
2. **Mapping (`indice.ix`):** Edit the `indice.ix` file in the database configuration folder.
* **Format:** `Label|Prefix|Column_Title`
* **Example:** `Authors|AU_|Select an Author`



## 3. Display PFT

When a user clicks a letter (e.g., "B"), the system lists terms starting with B. When they click a term (e.g., "Brown, Dan"), the system executes a search.

* The display of these results is often controlled by a specific PFT (usually `guia.pft` or defined in the generic display configuration).
