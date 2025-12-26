---
title: Database Specific Configuration
sidebar_label: Database Config
sidebar_position: 4
---

# Database Specific Configuration

While the **Global Configuration** sets the look and feel, the behavior of each specific catalog (e.g., Books, Articles) is defined inside its own directory.

**Location:** `/bases/[database_name]/opac/[lang]/`
*Example:* `/bases/marc/opac/en/` (English configuration for MARC database).

:::warning Localization
Because these files are inside language folders (`en`, `es`, `pt`), you must replicate your changes across all languages you support. Otherwise, a facet created in English will not appear for a user browsing in Portuguese.
:::

## 1. The Main Definition (`.def`)
**File:** `[db].def` (e.g., `marc.def`)

This file tells the OPAC how to interpret the database structure.
* **`Link`**: Specifies the database name.
* **`Descriptores`**: The name of the field used for subjects (used in "Related Terms").
* **`Pft`**: The default display format.

## 2. Advanced Search Form (`_avanzada.tab`)
**File:** `[db]_avanzada.tab` (e.g., `marc_avanzada.tab`)

This file builds the rows of the **Advanced Search** page. Each line creates a search input with a label and maps it to a database field.

**Syntax:**
```text
Label|Tag|Prefix

```

* **Label:** Text displayed to the user (e.g., "Title").
* **Tag:** The FDT tag number (e.g., `245`).
* **Prefix:** The FST prefix used in the index (e.g., `TI_`).

**Example:**

```text
Title|245|TI_
Author|100|AU_
Subject|650|SU_
ISBN|020|IS_

```

## 3. Search Indexes Dropdown (`.ix`)

**File:** `[db].ix` (e.g., `marc.ix`)

This controls the **"Search in"** dropdown menu found on the Home Page and simple search bar. It allows users to limit their keyword search to a specific index (e.g., "Search for 'Einstein' in *Authors* only").

**Syntax:**

```text
Label|Prefix|Description_Column_Header

```

* **Label:** The option name in the dropdown (e.g., "Authors").
* **Prefix:** The FST prefix (e.g., `AU_`).
* **Description:** Used if the user opens the dictionary browser.

## 4. Facets Configuration (`_facetas.dat`)

**File:** `[db]_facetas.dat` (e.g., `marc_facetas.dat`)

Facets are the side filters that appear after a search (e.g., "Refine by Year").

**Syntax:**

```text
Tag|Label

```

* **Tag:** The field tag to aggregate.
* **Label:** The title of the facet box.

**Requirements for Facets:**

1. The field MUST be indexed in the **FST**.
2. The indexing technique should ideally be **Line (0)** or **Term (2)**. If you use Word (4), the facet will split names (e.g., "Steve" and "Jobs" will be separate facets).
3. **Prefix:** The system assumes the prefix defined in the configuration.

## 5. Display Formats (`_formatos.dat`)

**File:** `[db]_formatos.dat`

Defines the options in the "Export/View" menu when viewing a record.

**Syntax:**

```text
PFT_Filename|Label|Output_Type

```

* **PFT_Filename:** Name of the `.pft` file in the `pfts/[lang]/` folder.
* **Label:** Text shown in the menu (e.g., "MARC Tags").
* **Output_Type:** usually `H` (HTML) or `T` (Text).