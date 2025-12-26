---
sidebar_position: 1
sidebar_label: 'Prerequisites'
sidebar_custom_props:
  myEmoji: 📋
---

# Installation Prerequisites

Before installing ABCD, ensure your environment meets the following requirements. ABCD is designed to run on standard web servers using the **LAMP** (Linux) or **WAMP** (Windows) stack.

## Hardware Requirements
Although ABCD is lightweight, we recommend the following to ensure enough space for backups, logs, and database growth:

* **Processor:** 2 GHz dual-core or better.
* **RAM:** Minimum 4 GB (8 GB recommended for large databases).
* **Disk Space:** We recommend allocating at least **2 GB** for the application and initial logs. The actual space required will depend on the size of your collection (images, digital documents, etc.).

## Operating Systems
The community officially supports and tests ABCD on:
* **Linux:** Ubuntu LTS (20.04, 22.04, 24.04) or Debian Stable.
* **Windows:** Windows 10/11 or Windows Server 2016+.

## Software Dependencies

### Required Components
* **Web Server:** Apache HTTP Server 2.4+ (Must support CGI execution).
* **PHP:** Version **8.0** or higher (Support for PHP 7.x has been discontinued).
* **Database Engine:** CISIS Utilities (included in the ABCD package).

### PHP Extensions
Ensure the following PHP extensions are enabled in your `php.ini`. The **ZIP** extension is critical for the *Update Manager*.

* `mbstring` (for Unicode/UTF-8 support)
* `gd` or `imagick` (for image processing)
* `curl` (for external APIs)
* `xml` or `simplexml`
* **`zip`** (Required for updates, backups, and imports)
* `yaz` (Optional: only required if using the Z39.50 client)