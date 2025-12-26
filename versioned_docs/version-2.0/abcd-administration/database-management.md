---
sidebar_position: 1
title: Database Management (Backup, Restore)
---

# Database Management (Backup & Restore)

Proper database management is a critical task for any system administrator, ensuring data integrity and enabling disaster recovery. ABCD provides tools and relies on best practices for performing backups and restoring data.

### Database Backup

A backup is a complete copy of your database files that can be used to restore the system to a previous state in case of data corruption, hardware failure, or human error.

ABCD does not have a built-in "backup button" in its web interface. A backup is performed by making a direct copy of the database folders on the server's file system.

**How to perform a backup:**

1.  **Identify your database folders:** All ABCD databases are located in the path you defined in `config.php` (e.g., `/var/opt/ABCD/bases/`). Each subfolder within this directory (like `/marc/`, `/users/`, etc.) represents a single database.
2.  **Ensure no users are connected:** To guarantee a consistent copy, it's best to perform backups when the system is not in use or by temporarily stopping the web server. This prevents files from being locked or in the middle of a write operation.
3.  **Copy the entire database folder:** The simplest and most reliable backup method is to create a compressed archive (like a `.zip` or `.tar.gz` file) of the entire `bases` directory.

    ```bash
    # Example command to create a compressed backup on Linux
    tar -czvf /path/to/your/backups/abcd_bases_backup_YYYY-MM-DD.tar.gz /var/opt/ABCD/bases/
    ```

It is crucial to establish a regular backup routine (e.g., daily) and to store the backup files in a separate and secure location.

### Database Restoration

Restoring a database is the process of replacing a corrupted or lost database with a copy from a backup.

ABCD provides a utility within the Central module to facilitate this process.

1.  Navigate to **Administration** → **Database Management** → **Database Utilities** → **Restore Database**.
2.  This tool helps you manage the restoration process by replacing the contents of an existing database with the files from a backup.
3.  You will typically need to upload your backup file or place it in a specific directory on the server for the utility to access it.

> **Warning:** Restoration is a destructive process. It will completely overwrite the current database with the version from the backup. Always be certain you are restoring the correct database and that you have a recent backup of the current state before proceeding.