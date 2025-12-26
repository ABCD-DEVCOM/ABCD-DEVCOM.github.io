---
title: MARC 21 Structure
sidebar_label: MARC 21
---

# MARC 21 Database Model

The **`marc`** database in ABCD is a full implementation of the **MARC 21 Format for Bibliographic Data**. It is the recommended model for general libraries that require Z39.50 interoperability.

## Database Definition

* **Internal Name:** `marc`
* **Standard:** Library of Congress MARC 21
* **Encoding:** UTF-8 (Recommended)

## 1. Worksheets (FMT)

The ABCD implementation breaks down the complex MARC standard into manageable worksheets tailored for specific material types.

| Worksheet | Name | Use Case | Key Fields |
| :--- | :--- | :--- | :--- |
| **`books`** | **Monographs** | Books, Theses, Single items. | 100 (Author), 245 (Title), 020 (ISBN) |
| **`serials`** | **Serials** | Journals, Magazines, Periodicals. | 022 (ISSN), 362 (Date/Vol), 310 (Freq) |
| **`m_video`** | **Visual Material** | DVDs, Streaming, Projectors. | 508 (Credits), 520 (Summary) |
| **`m_audio`** | **Sound Recording** | CD, Vinyl, Podcasts. | 511 (Performer), 028 (Publisher No.) |
| **`cartos`** | **Maps** | Maps, Globes, Atlases. | 255 (Scale), 034 (Coords) |

## 2. Indexing Rules (FST)

The default Field Selection Table (`marc.fst`) ensures that records are retrievable by standard search criteria.

| Index | Prefix | Technique | Fields Indexed |
| :--- | :--- | :--- | :--- |
| **Keyword** | (None) | Word (4) | All text fields (Title, Notes, Abstracts) |
| **Title** | `TI_` | Phrase (0) & Word (4) | 245, 246, 740 |
| **Author** | `AU_` | Phrase (0) | 100, 110, 111, 700, 710 |
| **Subject** | `SU_` | Phrase (0) | 600, 610, 650, 651, 653 |
| **Control No.** | `CN_` | Full Field | 001, 002 (and MFN) |
| **ISBN/ISSN** | `IS_` | Full Field | 020, 022 |
| **Year** | `PY_` | Full Field | 260^c |

## 3. Display Formats (PFT)

ABCD includes several Print Format Tables to visualize MARC data.

* **`marc.pft` (ISBD)**: The default view. Renders the record like a traditional catalog card (Title / Author. - Place : Publisher, Year).
* **`marc_tag.pft` (Technical)**: Displays the raw data with Tag numbers and subfield codes (e.g., `245 ^aTitle^bSubtitle`). Useful for catalogers.
* **`xmlexport.pft` (Interoperability)**: Transforms the ISIS record into valid **MARCXML**, used for OAI-PMH harvesting.

## 4. OPAC Configuration

To expose the MARC database in the Public OPAC, verify the `opac/marc.xml` configuration.

**Key Settings:**
* **Highlights:** Usually configured to highlight words in Titles (245) and Authors (100).
* **Facets:**
    * **Type of Material:** Uses the Leader (`3000`) or specific fields.
    * **Authors:** Extracted from 100/700.
    * **Subjects:** Extracted from 650.
    * **Year:** Extracted from 260^c.