---
title: System Diagnostics & Stats
sidebar_label: System Diagnostics
sidebar_position: 9
---

# System Diagnostics (Info & Stats)

ABCD includes a built-in diagnostic dashboard that allows administrators to instantly verify the server health, PHP extensions, and the physical integrity of the database files.

**Access:** **Administration > ABCD Configuration > System Info & Stats**

## 1. Server Capabilities (PHP Extensions)

The top section of the report checks if the required PHP extensions are loaded. This is the critical troubleshooting step if a specific feature (like Z39.50 import or LDAP login) fails silently.

| Extension | Importance | Function in ABCD |
| :--- | :--- | :--- |
| **mbstring** | **CRITICAL** | Handles Unicode/UTF-8 characters. If missing, data may appear corrupted. |
| **gd** | **Required** | Used for barcode generation and image processing. |
| **yaz** | Optional | Required for the **Z39.50 Client** (importing records from LoC, Oxford, etc.). |
| **curl** | Recommended | Used for checking updates and communicating with external APIs. |
| **ldap** | Optional | Required only if you use remote user authentication (Active Directory/OpenLDAP). |
| **xml** | Required | Parsing XML configuration files (ABCD Site). |

### PHP Info
The dashboard usually provides a link to the standard `phpinfo()` output. This allows you to check:
* The location of `php.ini`.
* The `upload_max_filesize` (often needs increasing for digital libraries).
* The `max_execution_time`.

## 2. Database Health Check

The tool scans the `bases.dat` registry and then physically inspects every database folder listed there. It generates a summary table:

* **Database:** The internal folder name.
* **Total Records (MFN):** The current count of records in the Master File (`.mst`).
* **Encoding:** Detects if the database is configured as ANSI or UTF-8 based on the control files (`dr_path.def` or `.cnv`).
* **Status:** Performs a file existence check.

### Interpreting the Status

| Status | Meaning | Action Required |
| :--- | :--- | :--- |
| **OK** | All core files (`.mst`, `.xrf`, `.fdt`, etc.) are present. | None. |
| **Missing files** | Critical files are missing (e.g., `.mst` not found). | Check folder permissions or restore from backup. |
| **Writable** | Checks if the web server has permission to write to the `data` folder. | If "No", fix Linux/Windows permissions immediately. |

:::tip Troubleshooting
If a database appears in the main menu selection but gives an error (e.g., "breaks") when you try to open it, check this report first. It acts as a "sanity check" to ensure the operating system can actually see and touch the database files.
:::