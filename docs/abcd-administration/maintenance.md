---
title: Database Maintenance
sidebar_label: Maintenance & Utilities
sidebar_position: 7
---

# Database Maintenance Utilities

ABCD provides a set of utilities based on the **CISIS** library to maintain the health of your databases. These are accessed via the **Administration > Database Maintenance** or **Utilities** menu.

## 1. Inverted File Generation (Indexing)

The Inverted File (`.cnt`, `.ifp`, `.n01`, etc.) is the search index. If users report that "a record exists but cannot be found," the index is likely out of sync with the Master File.

### Full Generation vs. Update
* **Update**: Adds new records to the index. Usually happens automatically when saving records.
* **Full Generation**: Deletes the old index and rebuilds it from scratch using the FST (Field Selection Table).

**To perform a Full Generation:**
1. Go to **Utilities > Maintenance > Full Inverted File Generation**.
2. Select the database.
3. Click **Execute**.
4. Wait for the process to finish (do not close the window).

## 2. Unlocking Databases and Records

ABCD uses a locking mechanism (semaphore) to prevent two users from editing the same data simultaneously. Sometimes, due to browser crashes, power failures, or server restarts, these locks remain active erroneously.

### Unlocking a Database (Global Lock)
If operators see a message like "Database is locked", it means a global administrative process was interrupted.

1. Go to **Utilities > Maintenance > Unlock Database**.
2. Select the database.
3. Confirm the action.
4. **Technical Action:** This deletes the `write.lock` or `exclusive.lock` files inside the database `data` folder.

### Unlocking Records (CNTLMFN)
If a specific record says "Entry locked by operator X", but that operator is not online.

1. Go to **Utilities > Maintenance > Unlock Records**.
2. This runs the `ctlmfn` utility (Control MFN) to clear the "operator" tag in the record itself (typically stored in the control record).

## 3. Destructive Operations

:::danger High Risk Area
The following operations involve **permanent data loss**. Ensure you have a valid backup (ISO file) before proceeding.
:::

### Initializing (Clearing) a Database
**Initialize** means wiping all data (records) from a database while keeping its structure (FDT, FST, PFT, Worksheets).

* **Use Case:** You created a test database, filled it with dummy data, and now want to empty it to start production.
* **Action:**
    1. Go to **Administration > Database maintenance**.
    2. Click **Initialize database**.
    3. **Result:** It deletes the `.mst` (Master File) and `.xrf` (Cross Reference) files and replaces them with empty ones.

### Deleting a Database
To completely remove a database (including structure, definition files, and data) from the server.

* **Action:**
    1. Go to **Administration > Database maintenance**.
    2. Click **Delete database**.
    3. Confirm the folder name.
* **Result:** The entire folder in `/bases/folder_name` is removed.
* **Important:** You must manually remove the entry from `bases.dat` afterwards to stop it from appearing in the menu.

## 4. Troubleshooting Common Errors

### "Effect of Fatal Error"
If you see this message during a search or save, the **Master File (.mst)** might be corrupted.
1. Try running **Full Inverted File Generation**.
2. If that fails, try restoring from the latest Backup/ISO.
3. Advanced users can try the CLI tool `mkf` to attempt a repair.

### "Write Protection"
If you cannot edit records:
* **Check Permissions:** The web server user (e.g., `www-data`, `apache`, or `IUSR`) must have **write/modify** access to the `bases` folder.
* **Check Status:** Verify if the database status is set to "Read Only" in the `dr_path.def` file.