---
sidebar_position: 1
title: Search Interface Configuration
---

# Search Interface Configuration

The ABCD OPAC (Online Public Access Catalog) is the standard public search interface that allows library patrons to search the bibliographic collections. Its appearance and functionality are highly customizable to meet the needs of the institution.

The core of the OPAC's configuration revolves around defining which databases are searchable and how the search options are presented to the end-user. These settings are primarily managed in a configuration file specific to the OPAC.

### Main OPAC Configuration File

The behavior of the OPAC is controlled by a central configuration file, typically `opac.def` or a similar file located within the OPAC's configuration directory. This file allows administrators to set general parameters, such as:
* The default language of the interface.
* The number of results to display per page.
* The title and header text of the OPAC site.

### Configuring Searchable Databases

One of the most important steps is to define which of your ABCD databases will be available for searching in the OPAC.

1.  This is managed through a configuration file, often named `bases.dat` or configured within the main `opac.def` file.
2.  For each database you want to make searchable, you must provide its name and a descriptive label that will appear in the OPAC's database selection list.
3.  This allows you to offer searches across multiple catalogs (e.g., "General Collection," "Journal Articles," "Theses") from a single interface.

### Defining Search Indexes

For each searchable database, you must configure the search indexes that will be available to users. This determines the options that appear in the "search by" dropdown menu (e.g., "Author," "Title," "Subject").

* This configuration links a user-friendly label (like "Author") to a specific search prefix or index defined in the database's **FST**.
* For example, you would map the label "Title" to the search prefix `TI_`, which corresponds to the index for words in the title field.
* This allows you to create simple and intuitive search forms, hiding the complexity of the underlying database indexes from the end-user.

By managing these configurations, you can build a powerful and user-friendly search portal tailored to your library's collections and user needs.