---
sidebar_position: 3
title: Data Entry and Forms (FMT)
---

# Data Entry and Forms (FMT)

While the FDT and FST define the database's underlying structure and indexes, the **Data Entry Worksheet (FMT)** defines the user interface for cataloging. The FMT is the web form that operators use to create and edit records.

A well-designed FMT is essential for efficient, accurate, and consistent data entry. ABCD allows you to create and customize these forms to perfectly match your cataloging needs.

To manage your data entry worksheets, navigate to **Administration** → **Database management**, select your database, and then choose the **Worksheet editor (FMT)**.

### Key Features of Data Entry Forms (FMT)

The FMT editor provides a powerful interface to control every aspect of the data entry form:

* **Field Selection and Order:** You can choose which fields from the FDT appear on the form and arrange them in a logical order for the cataloger.
* **Custom Labels:** Each field on the form has a descriptive label (e.g., "Main Title," "Author") that is independent of the field name in the FDT, making the form more user-friendly.
* **Field Type and Size:** You can define whether a field is a single-line text box, a multi-line text area, or another type of input. You can also specify its size on the screen.
* **Subfield Management:** For complex fields, you can define which subfields are available for data entry and in what order they should appear.
* **Help and Picklists:** You can link a field to a help text, a simple picklist (from a `.tab` file), or a more advanced authority control database (like a thesaurus or an authors database) to ensure data consistency.
* **Validation and Default Values:** Assign validation formats to ensure data is entered correctly and set default values for fields that often contain the same information.

### Multiple Forms per Database

A single database can have multiple FMTs. This is a very useful feature for handling different types of materials. For example, in a single bibliographic database, you could have:
* An FMT for cataloging **books**.
* A simplified FMT for **articles**.
* A detailed FMT for **theses**.

When creating a new record, the cataloger can choose the appropriate worksheet, ensuring that only the relevant fields for that specific material type are displayed.