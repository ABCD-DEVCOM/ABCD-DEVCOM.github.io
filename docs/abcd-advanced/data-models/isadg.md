---
title: ISAD(G) Archival Structure
sidebar_label: ISAD(G) (Archives)
---

# ISAD(G) Archival Model

The **`isadg`** database in ABCD implements the **General International Standard Archival Description** (2nd Edition). Unlike library catalogs which deal with discrete items (books), this model is designed for **hierarchical descriptions** of archival funds.

## Database Definition

* **Internal Name:** `isadg`
* **Standard:** ICA ISAD(G) 2nd Edition.
* **Structure:** Hierarchical (Multi-level description).
* **Encoding:** UTF-8.

## 1. The Hierarchical Model (Tree View)

The core feature of this database is the ability to link records in a "Parent-Child" relationship, creating a dendrogram (tree) structure in the interface.

### Levels of Description
Defined in `def/pt/nivel.tab`. The system validates that a lower level is always linked to a higher level.

1.  **Fonds (F)**: The whole of the records (highest level).
2.  **Sub-fonds (SF)**: Major subdivision.
3.  **Series (S)**: Documents arranged in accordance with a filing system.
4.  **Sub-series (SS)**: Subdivision of a series.
5.  **File (D)**: An organized unit (Folder/Process).
6.  **Item (I)**: The smallest unit (Letter, Photo, Report).

### Linking Mechanism
* **Reference Code (Tag 11)**: The unique identifier of the unit (e.g., `BR-RJ-001`).
* **Tree Construction**: ABCD uses the reference code structure or a specific parent pointer field to build the visual hierarchy in the OPAC and Data Entry.

---

## 2. Field Structure (FDT)

This implementation maps the 7 ISAD(G) areas directly to the Field Tags using a mnemonic logic: **Tag XY** corresponds to **Area X, Element Y**.

### Area 1: Identity Statement (Tags 1x)
Defines "What is this unit?".

| Tag | ISAD(G) Rule | Element Name | Description |
| :--- | :--- | :--- | :--- |
| **11** | 3.1.1 | **Reference Code** | Unique ID (Country-Repo-Collection-Item). |
| **12** | 3.1.2 | **Title** | Name of the unit. |
| **13** | 3.1.3 | **Dates** | Date of creation (Start/End). |
| **14** | 3.1.4 | **Level of Description** | Picklist (Fond, Series, Item...). |
| **15** | 3.1.5 | **Extent & Medium** | Quantity (e.g., "5 boxes", "300 photos"). |

### Area 2: Context (Tags 2x)
Defines "Who created it and why?".

| Tag | ISAD(G) Rule | Element Name | Description |
| :--- | :--- | :--- | :--- |
| **21** | 3.2.1 | **Name of Creator** | Authority controlled field (Person/Corporate). |
| **22** | 3.2.2 | **Admin/Bio History** | History of the creator. |
| **23** | 3.2.3 | **Archival History** | Custodial history (chain of ownership). |
| **24** | 3.2.4 | **Acquisition Source** | Donor or transfer origin. |

### Area 3: Content and Structure (Tags 3x)
Defines "What is inside?".

| Tag | ISAD(G) Rule | Element Name | Description |
| :--- | :--- | :--- | :--- |
| **31** | 3.3.1 | **Scope and Content** | Summary of the subject matter. |
| **32** | 3.3.2 | **Appraisal** | Destruction or retention schedules. |
| **33** | 3.3.3 | **Accruals** | Expected future additions. |
| **34** | 3.3.4 | **Arrangement** | Internal organization system. |

### Area 4: Conditions of Access (Tags 4x)
Defines "Can I see it?".

| Tag | ISAD(G) Rule | Element Name | Description |
| :--- | :--- | :--- | :--- |
| **41** | 3.4.1 | **Legal Status** | Laws affecting access (e.g., Secrecy Act). |
| **42** | 3.4.2 | **Access Conditions** | Restrictions (Public, Restricted, Closed). |
| **43** | 3.4.3 | **Copyright** | Reproduction restrictions. |
| **44** | 3.4.4 | **Language/Scripts** | Languages used in the documents. |
| **45** | 3.4.5 | **Physical Characteristics** | Conservation status (e.g., "Fragile"). |

### Area 5: Allied Materials (Tags 5x)
Defines "Where are other copies?".

| Tag | ISAD(G) Rule | Element Name |
| :--- | :--- | :--- |
| **51** | 3.5.1 | Location of originals |
| **52** | 3.5.2 | Existence of copies |
| **53** | 3.5.3 | Related units of description |
| **54** | 3.5.4 | Publication note |

### Area 6: Notes (Tags 6x)
* **Tag 61**: General Notes.

### Area 7: Description Control (Tags 7x)
Defines "Who wrote this description?".

| Tag | ISAD(G) Rule | Element Name |
| :--- | :--- | :--- |
| **71** | 3.7.1 | Archivist's Note |
| **72** | 3.7.2 | Rules or Conventions |
| **73** | 3.7.3 | Date of description |

---

## 3. Worksheets & Tabs

To make data entry manageable, the worksheet (`isadg.fmt`) is divided into logical tabs corresponding to the areas above, defined by the `.tab` files in `def/lang/`:

* **Identificação** (`isadg.fdt` tags 11-15)
* **Contexto** (`acceso.tab` tags 21-24)
* **Conteúdo** (`alcance.tab` tags 31-34)
* **Acesso** (`instrumento.tab` tags 41-45)
* **Fontes Relacionadas** (`normas.tab` tags 51-54)
* **Notas/Controle**

## 4. Indexing Strategy (FST)

The `isadg.fst` file defines how users can find these records.

| Prefix | Field Name | Technique | Logic |
| :--- | :--- | :--- | :--- |
| **(Text)** | **Global Search** | Word (4) | Indexes Title, Scope, and History. |
| **TI_** | **Title** | Word (4) | Individual words from Tag 12. |
| **CR_** | **Creator** | Phrase (0) | Exact name from Tag 21. |
| **DE_** | **Descriptors** | Phrase (0) | Subject access points. |
| **FE_** | **Dates** | Numeric | Search by year/range (Tag 13). |
| **LC_** | **Reference Code** | Full | Exact search for ID (Tag 11). |

## 5. Visualizing Data (PFT)

* **`isadg.pft`**: The main display format used in the Central module. It dynamically assembles the record, hiding empty fields and adding labels based on the active language (`Tag 11` becomes "Reference Code:" or "Código de Referência:").
* **`publico.pft`**: A simplified format optimized for the OPAC, often suppressing administrative notes (Area 7).

:::tip Digital Objects
You can attach digital files (PDFs, Images) to any level of the hierarchy (e.g., a photo of the Item or a PDF finding aid for the Series) using the standard **Tag 900+** digital library fields.
:::