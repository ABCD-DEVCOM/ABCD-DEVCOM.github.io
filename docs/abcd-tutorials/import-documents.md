---
title: Batch Import Documents
sidebar_label: Batch Import (Digital)
---

# Document Batch Import

For digital libraries, uploading files one by one is inefficient. The **Batch Import** utility allows you to upload hundreds of PDFs, Word docs, or images at once and automatically create metadata records for them.

## Prerequisites
1.  **Apache Tika**: The `tika.jar` must be installed and configured in `config.php` to extract text from PDFs.
2.  **Collection Folder**: A folder on the server (defined in `dr_path.def`) where files will be stored.

## The Workflow

### 1. Upload Files
Upload your files via FTP/SFTP to the `ABCDImportRepo` folder inside your collection directory.
* **Tip**: You can organize files into subfolders (e.g., `/Thesis`, `/Articles`). These subfolder names can be automatically mapped to a "Section" field in the database.

### 2. Run the Import Utility
1.  Go to **Utilities > Document Batch Import**.
2.  The system scans the folder. *Note: On Linux, it might take a few seconds to load the Tika server.*

### 3. Configure Mapping
You must map the file properties to your database tags (FDT):

| Property | Target Tag (Example) | Description |
| :--- | :--- | :--- |
| **Section** | `Tag 97` | The subfolder name (e.g., "Thesis"). |
| **Source Path** | `Tag 98` | The link to the PDF file. |
| **ID** | `Tag 111` | Unique file identifier. |
| **Full Text** | `Tag 99` | (Optional) The extracted text content for indexing. |

### 4. Processing
Click **Update**. The script will:
* Iterate through every file.
* Extract metadata (Author, Title) if available in the PDF properties.
* Extract full text (if configured).
* Create a new record in the database.
* Move the processed file from `ImportRepo` to `SourceRepo`.

## Post-Processing: Indexing
After import, you must run a **Full Inverted File Generation** using a specialized FST (often `fulltext.fst`) to make the contents searchable.

:::warning Record Size
Storing full text in Tag 99 can create very large records. Ensure you are using **BigISIS** (CISIS 16-60 restricted records to 32KB; BigISIS allows up to 2GB).
:::