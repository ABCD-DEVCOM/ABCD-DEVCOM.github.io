---
title: Database Configuration (Checklist)
sidebar_label: Database Config
sidebar_position: 4
---

# Specific Database Configuration

In the ABCD OPAC, each database (e.g., Books, Articles, Theses) operates as an independent entity. For a database to be "searchable" and presentable, it requires a mandatory set of configuration files.

**File Location:** `/bases/[base_name]/opac/[lang]/`
*Example:* `/bases/marc/opac/en/` (English configuration for the MARC database).

:::danger Location Golden Rule
Since configurations reside within language folders (`pt`, `en`, `es`), **you must replicate any changes across all languages**. If you configure facets only in the `pt` folder, a user browsing in English will see no filters at all.
:::

## 1. Mandatory Configurations (The "Engine")

Without these files, the database might appear in the menu, but searches will fail or results will remain invisible.

### A. General Definition (`.def`)
**File:** `[base].def` (e.g., `marc.def`)

Defines the vital parameters for data interpretation.
* **`Link`**: The internal name of the database.
* **`Descriptores`**: The field used for related terms (Thesaurus).
* **`Pft`**: The default display format.
* **`Free Text Prefix (TW_)`**: **Critical.** The OPAC performs free searches (Google-style) using a default prefix (usually `TW_`). If your FST generates word indexes with a different prefix (e.g., `TXT_`), you must specify it here, or the free search will return zero results.

### B. Parameter File (`dbn.par`)
**Location:** Database root (`/bases/[base]/data/dbn.par`)

Although not located in the OPAC folder, this file is the bridge between the system and the physical data. It must point correctly to the Master (`.mst`) and Inverted (`.cnt`/`.n01`) files.
* **Syntax:** `base_name.mst=%path_database%base_name/data/base_name.mst`
* **Common Error:** If the path is wrong, the OPAC will return "Database not found" or "Error reading control record".

### C. Facets and Filters (`_facetas.dat`)
**File:** `[base]_facetas.dat`

Facets are essential for modern navigation. They allow refining a broad search (e.g., "Law") by specific filters (e.g., "Year: 2023", "Author: Smith").
* **Requirement:** The field used in the facet **must be indexed** in the FST.
* **Technique:** Prefer whole term indexing (technique 2 or 0) to avoid breaking compound names.

### D. Display Formats (`_formatos.dat`)
The OPAC needs to know how to transform MARC/LILACS codes into readable HTML.

1.  **Results List (Summary):** Generally controlled by a PFT called `select_record.pft`. It should be lightweight, showing only Title, Author, and Year.
2.  **Detailed View (Full):** Controlled by the format defined in the `.def` (e.g., `opac_expanded.pft`). It should show all fields, the cover image, and holdings/items.
3.  **Auxiliary Formats:** Export options that appear to the user (e.g., "View MARC", "Citation").

### E. Relevance and Ranking (`relevance.def`)
Without relevance configuration, the OPAC displays results by order of arrival (MFN), which is poor for the user.
* **Function:** Defines weights for fields.
* **Example:** A term in the **Title (245)** should be worth 100 points; in the **Abstract (520)**, 50 points. This ensures that books *about* the subject appear before books that simply *cite* the subject.

---

## 2. Usability Improvements (The "Finishing Touches")

These configurations transform a simple database into a professional research portal.

### A. Advanced Search Form (`_avanzada.tab`)
Creates the interface for complex Boolean searches (AND/OR/NOT).
* **Structure:** Maps a Label (e.g., "Corporate Author") to an index prefix (e.g., `AI_`).

### B. Alphabetic Indexes (`.ix`)
Enables the "Dictionary" or "A-Z Index" button. Allows the user to browse the list of existing terms instead of trying to guess the spelling.

### C. "Did you mean?" (Static Terms)
A curated list of terms to help with spell checking when a search returns zero results.

### D. Toolbar (`record_toolbar.tab`)
Defines which icons appear above the detailed record.
* **Options:** Print, Reserve, Export RIS, Permalink, Add to Selection.

### E. Interoperability (XML/OAI)
For your database to be "harvested" by Google Scholar or OAI-PMH, you need to configure the export scripts:
* **Dublin Core:** `dublinecore.pft`
* **MARCXML:** `marcxml.pft`

### F. Database Homepage (`home_link.html`)
You can create a specific "Landing Page" for a database (e.g., Theses Database), with introductory text, news, or quick links that only appear when the user selects that specific database.