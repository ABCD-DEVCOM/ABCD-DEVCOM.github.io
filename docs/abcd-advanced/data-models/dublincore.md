---
title: Dublin Core Repository
sidebar_label: Dublin Core (Repository)
---

# Dublin Core Repository Model

The **`dubcore`** database is an implementation of the **Dublin Core Metadata Initiative (DCMI)** standard.

Unlike the library catalogs (MARC) or archival bases (ISAD-G), this model is optimized for **Digital Repositories**. It is designed to store not just the description of a resource, but the resource itself (PDFs, Images, Office documents) and, crucially, to index the **full text** of these documents.

## Database Definition

* **Internal Name:** `dubcore`
* **Standard:** Simple Dublin Core (15 Elements) + Technical Metadata extensions.
* **Key Feature:** Full-text indexing and Batch Import capabilities.

## 1. Field Structure (FDT)

The FDT is divided into three logical blocks: the standard descriptive metadata, technical metadata for images, and system control fields for the digital library.

### Core Elements (Tags 1-15)
These follow the international standard 1:1.

| Tag | Name | Description |
| :--- | :--- | :--- |
| **1** | **Title** | A name given to the resource. |
| **2** | **Creator** | Entity primarily responsible for making the resource. |
| **3** | **Subject** | The topic of the resource (Keywords). |
| **4** | **Description** | An account of the resource (Abstract). |
| **7** | **Date** | A point or period of time associated with an event in the lifecycle. |
| **9** | **Format** | The file format, physical medium, or dimensions (e.g., `application/pdf`). |
| **10** | **Identifier** | An unambiguous reference to the resource within a given context. |
| **15** | **Rights** | Information about rights held in and over the resource. |

### Technical Extensions (Images)
If the record is an image, the system (via extraction tools) can populate EXIF data.

| Tag | Name | Description |
| :--- | :--- | :--- |
| **50-51** | **Height/Width** | Image dimensions in pixels. |
| **52-53** | **Resolution** | DPI (X/Y). |
| **61-66** | **GPS Data** | Latitude, Longitude, and Altitude (for georeferenced photos). |
| **59-60** | **Camera** | Make and Model of the device. |

### System & Digital Library (Tags 90+)
Fields used by ABCD to manage the file storage.

| Tag | Name | Usage |
| :--- | :--- | :--- |
| **95** | **HTML URL** | Path to the converted HTML version of a document. |
| **96** | **Record Type** | Classification (e.g., `text`, `image`) used to select the worksheet. |
| **97** | **Section** | Virtual collection folder (e.g., "Thesis", "Photos"). |
| **98** | **Document URL** | Path to the original downloaded file (PDF, DOCX). |
| **99** | **Doc Text** | **Hidden Field**. Contains the extracted full text of the document for indexing. |

## 2. Document Types (Worksheets)

The system automatically selects the worksheet based on the type of file being imported or cataloged.

* **`text.fmt`**: For textual documents. Focuses on Title, Author, and the **Full Text** content.
* **`image.fmt`**: For visual assets. Hides text-specific fields and displays the EXIF/GPS data tags.

## 3. Indexing Strategy (FST)

The `dubcore.fst` is aggressive. It indexes almost everything to ensure retrievability, including the contents of the files.

| Prefix | Name | Technique | Scope |
| :--- | :--- | :--- | :--- |
| **TW_** | **Text Word** | Word (8) | **Global Search**. Indexes Title, Description, Subject, AND **Tag 99 (Full Text)**. |
| **TI_** | **Title** | Word (5) | Search within titles. |
| **CR_** | **Creator** | Word (5) | Search for authors/photographers. |
| **SU_** | **Subject** | Word (5) | Search within keywords. |
| **IMS_** | **Image Size** | Prefix | Allows filtering by dimensions. |

## 4. Full Text Extraction (Apache Tika)

The power of the `dubcore` model relies on **Apache Tika**.

* **The Concept:** When you upload a PDF or Word document to ABCD using this model, the system calls a Java process (`tika.jar`).
* **The Process:** Tika reads the binary file, extracts all readable text, and injects it into **Tag 99** of the record.
* **The Result:** When a user searches for a phrase in the OPAC (e.g., "Quantum Mechanics"), ABCD finds the record even if those words only appear on page 45 of the attached PDF, not in the Title or Subject.

:::info Server Requirement
For full-text extraction to work, **Java (JRE)** must be installed on the server, and the `tika.jar` file must be present in the `cgi-bin` or configured utilities folder.
:::

## 5. Visualizing Data (PFT)

* **`dubcore.pft`**: Designed to be media-aware.
    * If the record is an **Image**: It displays a thumbnail and the technical specs (Camera, GPS).
    * If the record is a **Document**: It displays the metadata and a "Download" icon linking to the file (Tag 98).