---
sidebar_position: 4
title: Authority Control and Thesaurus
---

# Authority Control and Thesaurus

Authority control is the process of using a single, distinct, and authorized form for a name or a subject heading to ensure consistency across a bibliographic catalog. This practice prevents variations (e.g., "Twain, Mark" vs. "Clemens, Samuel Langhorne") and guarantees that users can find all relevant materials under a single search.

ABCD's primary tool for managing authority control is its integrated **Thesaurus module**.

### The ABCD Thesaurus Module

A thesaurus in ABCD is a special type of database designed to manage a controlled vocabulary. While often used for subject headings, it can be adapted to manage any controlled list, such as authors, corporate bodies, or geographical locations.

A thesaurus database has a predefined structure that allows you to manage terms and the relationships between them, including:
* **Broader Terms (BT):** More general terms.
* **Narrower Terms (NT):** More specific terms.
* **Related Terms (RT):** Associated terms.
* **Use For (UF):** Non-preferred terms or synonyms that point to the authorized term.

The module provides a specialized interface for thesaurus maintenance, allowing you to browse terms alphabetically, search for them, and view their hierarchical relationships.

### Using the Thesaurus in Cataloging

The real power of the thesaurus is realized when it is integrated into the data entry workflow.

1.  **Configuration:**
    The link between a bibliographic database and a thesaurus is established in the **Data Entry Worksheet (FMT)**. When editing a worksheet, you can configure a specific field (e.g., field `650` for Subject) to use the thesaurus database as its "help" or "picklist" source.

2.  **Data Entry:**
    During cataloging, any field linked to the thesaurus will display a special icon next to it. When the operator clicks this icon, a new window opens with the thesaurus search interface.
    * The cataloger can search for the correct term within the thesaurus.
    * Once the authorized term is found, they can select it.
    * The selected term is automatically and accurately copied back into the field in the cataloging form.

This integration streamlines the cataloging process and eliminates typographical errors and inconsistencies, significantly improving the quality and reliability of the catalog's search indexes.