---
sidebar_position: 1
title: iAH - Search Interface Configuration
---

# iAH: Search Interface Configuration

The iAH (Advanced Interface for Health Information) is a sophisticated public search interface developed by BIREME and integrated into the ABCD suite. It serves as a powerful alternative to the standard OPAC, offering a more modern user experience and advanced features like meta-search (searching multiple local and remote databases simultaneously), result clustering, and relevance ranking.

Configuring iAH is a more involved process than setting up the standard OPAC and is handled through a series of dedicated parameter files.

### Core Configuration (`dbn.par`)

The primary configuration file for making databases available in iAH is `dbn.par`. This file acts as a registry, telling iAH which databases exist and where to find them.

For each database you want to include in the iAH interface, you must add an entry to the `dbn.par` file, which follows a key-value format.

**Example entry in `dbn.par`:**

    [your_db_name]
    path = /var/opt/ABCD/bases/your_db/

* **Action:** You must create an entry for each database, specifying its name and the absolute path to its folder.

### Configuring Search Indexes and Forms

The search options available to the user in the iAH interface (e.g., the fields in the advanced search form and the dropdown menus) are defined in configuration files that map user-friendly labels to the database's technical search indexes.

1.  **Index Files (`*.ix`):** For each database, you must create an index configuration file (e.g., `your_db.ix`). This file links a descriptive name like `Title` to the corresponding index prefix from the FST, such as `TI_`.

2.  **Search Form Configuration:** The layout and fields of the search forms (basic, advanced) are defined in specific parameter files. Here you can control which indexes are presented to the user, the available boolean operators (AND, OR, AND NOT), and other advanced search functionalities.

This granular configuration allows administrators to build a very powerful and tailored search experience, exposing different search capabilities for different collections.