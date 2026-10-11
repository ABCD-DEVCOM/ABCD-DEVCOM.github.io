---
title: Import and Export (ISO 2709 & JSON)
sidebar_label: Import & Export
sidebar_position: 1
---

# Import and Export Data

ABCD uses the **ISO 2709** standard (the underlying format of MARC21) for traditional library data exchange. This ensures compatibility with other library systems like Koha, Aleph, or other ISIS-based software. Additionally, ABCD supports modern **JSON** exports for seamless web and API integration.

## Exporting Data (ISO 2709 Backup)

Exporting your database to an ISO file is the best way to create a portable backup or share data with other traditional library systems.

1. Go to **Cataloging > Utilities > Export ISO**.
2. **Output Filename**: Give your file a name (e.g., `books_backup_2023.iso`).
3. **Selection Criteria** (Optional):
   * Leave blank to export the entire database.
   * Enter a range of MFNs (e.g., `1/100`) to test.
   * Use a search expression to export specific records (e.g., `PY=2023`).
4. **Fields Specification**:
   * Leave blank to export all fields.
   * Use an FST selection to export only indexed fields.
5. **Encoding**: Choose **UTF-8** or **ANSI** depending on the destination system.
6. Click **Export**.
7. Download the resulting file from the server to your computer.

## Exporting Data (JSON)

Exporting to JSON provides a highly readable and web-compatible format, ideal for API seeding, external web portals, or custom reporting. The ABCD JSON exporter features an armored extraction engine that safely sanitizes control characters and preserves HTML content.

1. Go to **Cataloging > Utilities > Export JSON**.
2. **Selection Criteria**:
   * **By MFN Range**: Choose a specific sequence of records (e.g., From `1` To `5000`).
   * **By Search Expression**: Click the search icon to filter specific records using the CISIS query language.
3. **Data Output Format**:
   * **Native**: Exports the raw structure of the database using the exact numeric ISIS FDT tags, indicators, and subfields. Ideal for complete data migration.
   * **Dublin Core (dc)**: Outputs a simplified, internationally standardized JSON mapped to the 15 Dublin Core elements (e.g., `title`, `creator`, `subject`). *Note: This option is only available if a mapping file (`.i2x` or `_dc.pft`) has been configured for the database in the API Manager.* This format safely preserves any HTML markup stored in the fields.
4. **Folder and Filename**: 
   * The system defaults to storing the files in the `/wrk` directory.
   * Provide a custom name for your file (e.g., `museum_collection`).
5. Click **Generate** (Download icon). A loading spinner will appear while the system processes the conversion. It is capable of handling very large databases smoothly.
6. **Download and Manage**: Once the process finishes, the new file will appear in the **Generated JSON files (WRK folder)** list at the bottom of the screen. From this table, you can see the creation date and file size, and easily **Download** or **Delete** the generated files with a single click.

## Importing Data (ISO 2709)

Importing allows you to add records from other libraries or restore a backup.

1. Go to **Cataloging > Utilities > Import ISO**.
2. **Upload File**: Select the `.iso` file from your computer and upload it to the server.
3. **Import Options**:
   * **Append**: Adds the new records to the end of the existing database. Use this for adding new books.
   * **Create/New**: **Erases** the current database and replaces it with the content of the ISO file. Use this for restoration.
4. **Tag Reformatting** (Advanced):
   * If the incoming ISO uses different tags (e.g., Tag 100 for Author) than your database (e.g., Tag 70), you can use a conversion table to map them.
5. Click **Import**.

:::warning
Control Numbers (MFN)
When importing with **Append**, ABCD assigns new **MFN** (Master File Numbers) to the incoming records. The original MFNs inside the ISO file are ignored to prevent overwriting existing data.
:::

