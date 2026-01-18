---
title: Facets Configuration
sidebar_label: Facets
sidebar_position: 2
---

# Facets Configuration

Facets are the filters that appear on the side of the search results (e.g., "Filter by Year", "Filter by Author"). They allow users to refine a broad search into a specific set of records.

**Script:** `facetas_cnf.php`
**File Created:** `bases/[db]/opac/[lang]/[db]_facetas.dat`

## 1. How Facets Work
Facets rely entirely on the **Inverted File (Index)**. You cannot create a facet for a field that is not indexed in the database's **FST** (Field Selection Table).

* **Correct Indexing:** Ideally, fields used for facets should be indexed using **Technique 0 (Line)** or **Technique 2 (Term)**.
* **Warning:** If you use Technique 4 (Word) for an Author facet, "Steve Jobs" will appear as two separate facets: "Steve" and "Jobs".

## 2. Configuration Interface
The interface provides a table where you map database tags to visible labels.

### Fields
* **Tag:** The numeric tag of the field in the database (e.g., `50` for Author).
* **Label:** The title of the box that will appear in the OPAC (e.g., "Authors").

### Helper: The FST Viewer
To assist you, the script reads and displays the `[base].fst` file at the bottom of the screen inside an accordion.
1.  Open the **"View FST Help"** panel.
2.  Identify the Tag you want to use.
3.  Ensure it has a valid indexing technique.

## 3. Example Configuration
For a typical Library catalog:

| Tag | Label | Result in OPAC |
| :-- | :-- | :-- |
| `50` | Authors | A list of authors found in the current result set. |
| `60` | Subjects | A list of subject descriptors. |
| `10` | Year | Allows filtering by publication date. |

:::danger Multilingual Configuration
Remember that this configuration is saved inside the language folder (e.g., `/en/`). You must replicate this configuration for Spanish (`/es/`) and Portuguese (`/pt/`), translating the **Labels** accordingly.
:::