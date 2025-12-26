---
title: Administration Overview
sidebar_label: Overview
slug: /abcd-administration
sidebar_position: 1
---

# Administration & Maintenance

The **Administration** section of ABCD is designed for Library Systems Administrators and IT staff. While librarians handle the daily workflow (Cataloging, Loans), the Administrator ensures the system is healthy, secure, and properly configured.

This section covers the core architectural tasks required to keep ABCD running.

## Key Administrative Areas

### 1. Server & Global Configuration
Settings that affect the entire installation, acting as the foundation for all modules.
* **[Global Settings (config.php)](global-settings.md)**: Configuring paths, database drivers, and character sets.
* **[UI & Logos (abcd.def)](ui-configuration.md)**: Customizing visual identity, colors, and institution logos.
* **[Email Settings (correo.ini)](email-configuration.md)**: Setting up SMTP for notifications and alerts.
* **[Database Registry (bases.dat)](databases-registry.md)**: Managing the list of active databases visible in the menu.

### 2. Access Management
Controlling who can login and what they can do.
* **[Access Management](access-management/index.md)**: A complete guide to managing **Operators** (users) and **Profiles** (permissions).

### 3. Database Maintenance
Regular maintenance is crucial for the health of the ISIS technology behind ABCD.
* **[Maintenance & Utilities](maintenance.md)**: How to unlock records, regenerate inverted files (indexes), and fix corruption.
* **[Backup & Restore](backup-restore.md)**: Procedures for exporting data to ISO 2709 and restoring backups.
* **[System Diagnostics](system-diagnostics.md)**: Tools to check server health, PHP extensions, and file integrity.

### 4. Technical Reference
Deep dive into the internal structures of ABCD.
* **[System Databases](system-databases/index.md)**: Technical documentation of internal databases like `users`, `trans`, `copies`, etc.
* **[CISIS Utilities](../abcd-advanced/cisis-utilities/cisis-utilities.md)**: Command-line reference for `mx`, `retag`, etc.

:::tip Best Practice
We recommend that all administrators schedule a weekly **Full Inverted File Generation** for active databases to ensure search results remain accurate.
:::