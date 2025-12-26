---
title: Import and Export (ISO 2709)
sidebar_label: Import & Export
sidebar_position: 1
---

# Import and Export Data

ABCD uses the **ISO 2709** standard (the underlying format of MARC21) for data exchange. This ensures compatibility with other library systems like Koha, Aleph, or other ISIS-based software.

## Exporting Data (Backup)

Exporting your database to an ISO file is the best way to create a portable backup or share data.

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

## Importing Data

Importing allows you to add records from other libraries or restore a backup.

1. Go to **Cataloging > Utilities > Import ISO**.
2. **Upload File**: Select the `.iso` file from your computer and upload it to the server.
3. **Import Options**:
   * **Append**: Adds the new records to the end of the existing database. Use this for adding new books.
   * **Create/New**: **Erases** the current database and replaces it with the content of the ISO file. Use this for restoration.
4. **Tag Reformatting** (Advanced):
   * If the incoming ISO uses different tags (e.g., Tag 100 for Author) than your database (e.g., Tag 70), you can use a conversion table to map them.
5. Click **Import**.

:::warning Control Numbers (MFN)
When importing with **Append**, ABCD assigns new **MFN** (Master File Numbers) to the incoming records. The original MFNs inside the ISO file are ignored to prevent overwriting existing data.
:::