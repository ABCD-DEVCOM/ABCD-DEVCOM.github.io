---
title: Backup and Restore
sidebar_label: Backup & Restore
sidebar_position: 8
description: Strategies for data preservation, including the Backup Manager tool, ISO 2709 exports, and file-system backups.
---
import Video from '@site/src/components/Video';

# Backup and Restore Strategies

Data preservation in ABCD relies on multiple layers of security. You can use the built-in **Backup Manager** for quick snapshots of your environment, the **ISO 2709 standard** for bibliographic data exchange/preservation, or manual **file-system backups** for server-level redundancy.

---

## 1. The Backup Manager (New)

The **Backup Manager** is a built-in tool introduced in recent versions that allows system administrators to create compressed backups (`.zip`) of the database structures and records directly from the administrative interface.

### Accessing the Tool
1. Go to the **System Configuration** menu (Central Module).
2. Click on **Backups**.

<Video src="https://www.youtube.com/embed/pX8h9m5SPbk" />

:::info
You must have administrative privileges (`adm` profile) to access this tool.
:::

### Creating a Backup
The tool offers three specific backup strategies:

#### A. Full Backup (No Media)
* **Filename tag:** `FULL_NOMEDIA`
* **Includes:** All databases found in the `bases/` directory.
* **Excludes:** Temporary files (`wrk/`) and digital object folders (`collection/`).
* **Best for:** Routine backups. It saves all bibliographic data and structures without heavy digital files, resulting in a lightweight `.zip` file.

#### B. Full Backup (With Media)
* **Filename tag:** `FULL_MEDIA`
* **Includes:** All databases in `bases/`, **including** the `collection/` folders (digital objects).
* **Excludes:** Only the `wrk/` folder.
* **Best for:** Complete system snapshots including PDFs and images.
* **⚠️ Warning:** Depending on your collection size, this file can be extremely large and take a long time to generate.

#### C. Single Database
* **Filename tag:** `DB-[BASENAME]`
* **Includes:** Only the folder of the specific database selected.
* **Excludes:** The `collection/` folder of that specific base.
* **Best for:** When you have made changes to a specific database definition or want to export a single set of records.

### Operating System Detection
Since ABCD uses ISIS database technology, files generated on Windows are not always compatible with Linux/Unix (due to case-sensitivity). The system automatically adds a prefix to the filename:
* **`Win_`**: Created on a **Windows** server.
* **`Lin_`**: Created on a **Linux/Unix** server.

### Managing Backups
The tool lists all available backups stored on the server (in `/bases/wrk/backups/`). You can **Download** them to your local computer or **Delete** them to save server space.

---

## 2. ISO 2709 Export/Import (Standard)

While the Backup Manager zips the physical files, the **ISO 2709** format is the international standard for bibliographic data interchange. This is the safest way to migrate data between different operating systems (e.g., moving from Windows to Linux) or between different library software (e.g., Koha to ABCD).

### Exporting to ISO (Backup)
1. Navigate to **Utilities > Export/Import > Export ISO**.
2. Select the Database.
3. **Parameters**:
    * **FST**: Usually leave blank to export all fields (or select an FST to export only indexed fields).
    * **Type of conversion**: ANSI or UTF-8 (depending on your target system).
    * **Separator**: Usually `#` or another unique character.
4. Click **Export**.
5. Download the resulting `.iso` file to your local machine.

### Importing from ISO (Restore)
To restore data or migrate from another system:

1. Navigate to **Utilities > Export/Import > Import ISO**.
2. **Upload** your `.iso` file to the server.
3. Select the target Database.
4. **Options**:
    * **Append**: Adds records to the end of the existing database.
    * **Create/New**: **Erases** the existing database and creates a new one from the ISO.
5. Click **Import**.

:::warning Data Loss Risk
Using the "Create" option will delete all existing records in the selected database. Ensure you have a backup before proceeding.
:::

---

## 3. Manual Server-Side Backup

If you are a system administrator with access to the server's file system, you may prefer to use tools like `rsync`, `tar`, or standard backup software.

The **Backup Manager** (Section 1) essentially automates the zipping of the `/bases/` directory, but for a total system restoration (including the software executables), you should ensure the following directories are preserved:

* **`/bases/`**: Contains all data, FDTs, PFTs, and uploaded documents.
* **`/htdocs/central/config.php`**: The main configuration file containing paths and URLs.
* **`/cgi-bin/*.par`**: Parameter files defining database paths.
* **`/htdocs/`**: If you have customized PHP scripts or added a custom OPAC design.