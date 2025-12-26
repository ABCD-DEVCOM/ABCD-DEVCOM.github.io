---
sidebar_position: 5
title: Cataloging Utilities (Import, Export)
---

# Cataloging Utilities (Import, Export)

Beyond single-record data entry, the ABCD Cataloging module provides a powerful suite of **Utilities** for batch processing and database maintenance. These tools are essential for migrating data, sharing records with other institutions, and performing large-scale updates.

To access these tools, navigate to the **Utilities** submenu within the Cataloging module.

### Importing Records

The import utility allows you to load bibliographic records from an external file into an ABCD database. This is commonly used for migrating data from a previous system or loading a dataset from a provider.

* **Supported Format:** The primary format for data exchange is **ISO 2709**, a standard for bibliographic information interchange. These files typically have a `.iso` or `.mrc` extension.

* **How to Import:**
    1.  Navigate to **Utilities** → **Import records**.
    2.  Select the ISO file to import. You can choose a file already on the server or upload one from your computer.
    3.  Choose the target database for the import.
    4.  Configure the import options, which allow you to:
        * **Load, add, or update:** Decide if the imported records should overwrite, be added to, or merge with the existing database.
        * **Apply formatting:** Use a PFT to reformat or clean up data during the import process.
    5.  Execute the import process.

### Exporting Records

The export utility allows you to generate a file containing records from your ABCD database. This is useful for backups, sharing your data with other libraries, or migrating to another system.

* **Supported Format:** The standard export format is also **ISO 2709**.

* **How to Export:**
    1.  Navigate to **Utilities** → **Export records**.
    2.  Select the database from which you want to export.
    3.  Specify which records to include in the export. You can choose:
        * A range of Master File Numbers (MFNs).
        * The results of a search expression.
        * All records in the database.
    4.  Configure export options, such as applying a reformatting PFT.
    5.  Execute the export and download the generated ISO file.

### Other Important Utilities

The Utilities menu also contains other powerful tools for database administrators, including:

* **Global Changes:** Apply changes to a large number of records at once using scripts and update rules. This is useful for correcting systematic errors or enriching data.
* **Inverted File Utilities:** Perform maintenance on the database indexes, such as a full re-indexing, which is sometimes necessary after large data imports or changes to the FST.
* **Unlock Records/Database:** Release locks on records or an entire database that may have been left by an interrupted session.