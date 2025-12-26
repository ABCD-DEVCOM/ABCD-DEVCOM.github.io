---
title: Backup and Restore
sidebar_label: Backup & Restore
sidebar_position: 8
---

# Backup and Restore Strategies

Data preservation in ABCD relies on the ISO 2709 standard (for bibliographic data) and file-system backups (for configuration and documents).

## Exporting to ISO (Backup)

The safest way to backup an ISIS database is exporting it to an ISO 2709 file. This format is independent of the operating system (Linux/Windows).

### Via Central Module
1. Navigate to **Utilities > Export/Import > Export ISO**.
2. Select the Database.
3. **Parameters**:
   * **FST**: Usually leave blank to export all fields (or select an FST to export only indexed fields).
   * **Type of conversion**: ANSI or UTF-8 (depending on your target system).
   * **Separator**: usually `#` or another unique character.
4. Click **Export**.
5. Download the resulting `.iso` file to your local machine.

## Importing from ISO (Restore)

To restore data or migrate from another system:

1. Navigate to **Utilities > Export/Import > Import ISO**.
2. **Upload** your `.iso` file to the server.
3. Select the target Database.
4. **Options**:
   * **Append**: Adds records to the end of the database.
   * **Create/New**: **Erases** the existing database and creates a new one from the ISO.
5. Click **Import**.

:::warning
Using the "Create" option will delete all existing records in the selected database. Ensure you have a backup before proceeding.
:::

## Full System Backup

Besides the database records, you must backup the physical files to preserve configurations, print formats, and digital documents.

**Directories to Backup:**
* `/bases/`: Contains all data, FDTs, PFTs, and uploaded documents.
* `/htdocs/central/config.php`: Main configuration file.
* `/cgi-bin/*.par`: Parameter files defining database paths.