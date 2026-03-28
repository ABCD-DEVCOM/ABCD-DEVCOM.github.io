---
title: Search Forms (Advanced & Free)
sidebar_label: Search Forms
sidebar_position: 1
---

# Search Forms Configuration

The ABCD OPAC offers two distinct search interfaces that require specific configurations. This module allows you to define which fields are available for the user to query.

**Script:** `edit_form-search.php`

## 1. Advanced Search (`_avanzada.tab`)
This configuration builds the form used for Boolean searches (AND/OR/NOT).

* **Mechanism:** It relies on **Prefixes**. When a user selects "Title" and types "History", the system searches for `TI_History`.
* **Requirement:** The field must be indexed in the FST with a distinct prefix.

### Configuration Columns
* **Label:** The text shown in the dropdown (e.g., "Title").
* **Tag:** The field tag (e.g., `245`).
* **Prefix:** The search prefix defined in the FST (e.g., `TW_`).

## 2. Free Search (`_libre.tab`)
This configuration builds the field selection for the "Sequential Search" mode.

* **Mechanism:** Unlike Advanced Search, this method *can* scan the text of the records directly (if configured to do so), or use indexes for faster retrieval.
* **Usage:** Used when the user wants to search specifically within a field (e.g., "Search for 'Einstein' only in the 'Notes' field").

## 3. The "Search Fields" Helper
The script reads the `camposbusqueda.tab` file (from the Central module configuration) to suggest valid indexes.

* **Green Check:** Indicates a valid mapping.
* **Usage:** Use the helper panel at the bottom to find the correct Prefixes (`TI_`, `AU_`, `SU_`) to ensure your search form actually retrieves data.