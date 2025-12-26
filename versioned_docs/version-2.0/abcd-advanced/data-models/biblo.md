---
title: CEPAL / LILACS Format (Biblo)
sidebar_label: CEPAL / LILACS (Biblo)
---

# CEPAL / LILACS Format (Biblo)

The **`biblo`** database is an implementation of the bibliographic methodology developed by **ECLAC (CEPAL)** and widely adapted by **BIREME** for the LILACS methodology.

Unlike MARC 21, which centers on the physical item, this model centers on the **Bibliographic Level**, making it exceptionally good for linking parts to wholes (e.g., an Article linked to a Journal, or a Chapter linked to a Book).

## Database Definition

* **Internal Name:** `biblo`
* **Standard:** CEPAL / UNISIST / LILACS Methodology.
* **Encoding:** UTF-8 or ANSI (depending on installation).

## 1. Document Types (Worksheets)

The data entry workflow is driven by the **Type of Material** and **Bibliographic Level**. The worksheets (`.fmt`) are named using a two-letter code:

| Worksheet | Code | Description | Usage |
| :--- | :--- | :--- | :--- |
| **`sa.fmt`** | **Serial Analytic** | Article in a Journal. | Most common for academic libraries. Links an article to the journal title (Tag 30). |
| **`ma.fmt`** | **Monograph Analytic** | Chapter in a Book. | Links a chapter (Analytic) to the book (Monograph). |
| **`mm.fmt`** | **Monograph** | Book / Pamphlet. | Standard books, manuals, reports. |
| **`tm.fmt`** | **Thesis** | Thesis / Dissertation. | Specifically for academic degrees (includes Tag 50/51 for Institution/Degree). |
| **`mc.fmt`** | **Collection** | Series / Multi-volume. | Collection level records. |

## 2. Field Structure (FDT)

The fields are defined by numerical tags, but the usage varies slightly depending on the active worksheet.

### Main Fields

| Tag | Name | Description |
| :--- | :--- | :--- |
| **10** | **Personal Author** | Main author (Surname, Name). Repeatable. |
| **11** | **Corporate Author** | Institution responsible for the content. |
| **12** | **Title** | The title of the item (Article title or Book title). |
| **13** | **Thesis Degree** | Specific for `tm` worksheet. |
| **14** | **Pagination** | Range of pages (e.g., "15-30"). |
| **16** | **Author Affiliation** | Institution where the author works. |
| **18** | **Conference** | Name of the meeting/conference (for proceedings). |
| **30** | **Serial Title** | Name of the Journal (Used in `sa` worksheets). |
| **72** | **Descriptors** | Controlled vocabulary subjects (often linked to `agrovoc` or `decs`). |
| **83** | **Abstract** | Summary of the content. |
| **02** | **Publication Year** | Year of publication (YYYY). |

### Control Fields
* **Tag 001 (CN)**: Control Number (Unique ID).
* **Tag 006**: Record Status/Type.

## 3. Indexing Strategy (FST)

The `biblo.fst` uses standard prefixes to allow specific field retrieval.

| Prefix | Field | Technique | Notes |
| :--- | :--- | :--- | :--- |
| **(None)** | **Global** | Word (4) | Indexes Title, Abstract, and Descriptors for general search. |
| **TI_** | **Title** | Word (4) | Searches words in Tag 12 and 30. |
| **AU_** | **Author** | Phrase (0) | Exact name search (Tags 10, 11, 16). |
| **DE_** | **Descriptors** | Phrase (0) | Subject search (Tag 72, 76). |
| **PY_** | **Year** | Full | Publication year (Tag 02, 64). |
| **CN_** | **Control No.** | Full | Tag 001. |
| **IS_** | **ISBN/ISSN** | Full | Tag 35 (ISSN) and 47 (ISBN). |

## 4. Display & Export (PFT)

The `biblo` database comes with a rich set of display formats tailored for academic output.

### Display Formats
* **`biblo.pft`**: The standard view, presenting a complete bibliographic reference followed by the abstract and holdings.
* **`opac.pft`**: Optimized for the public interface, hiding administrative fields.

### Export Formats
The `pfts` folder includes scripts to generate citations for reference managers:
* **`export_BibTex.pft`**: For LaTeX/BibTeX users.
* **`export_EndNote.pft`**: `.enw` format.
* **`export_Refworks.pft`**: For RefWorks import.
* **`export_ProCite.pft`**: Legacy format.

## 5. Thesaurus Integration

This model is designed to work tightly with a Thesaurus (like `agrovoc` or `macrothesaurus`).
* **Field 72 (Descriptors)** usually has a "Lookup" button configured in the FDT to search the authority database and retrieve validated terms.