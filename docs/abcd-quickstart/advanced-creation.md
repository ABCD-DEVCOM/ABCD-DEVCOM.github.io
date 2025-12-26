---
sidebar_position: 3
title: Advanced Methods (Scratch / WinISIS)
---

# Advanced Creation Methods

If the standard models do not fit your needs, ABCD allows for complete customization.

## Option 2: Create from Scratch
This method is for **Information Professionals** who need to design a custom metadata structure (e.g., for a Museum, an Art Gallery, or a specific Archive).

To create a database from scratch, you will use the **Database Wizard**, which guides you through defining the four pillars of an ISIS database:

1.  **FDT (Field Definition Table):** You define every field (Tag, Name, Type).
2.  **FST (Field Selection Table):** You define how the search engine indexes the data.
3.  **FMT (Worksheet):** You design the input forms for data entry.
4.  **PFT (Print Format):** You code how the data is displayed on the screen.

:::info
This is an advanced topic. Detailed instructions on defining FDTs and FSTs can be found in the **[Cataloging Module](../modules/cataloging/index)** documentation.
:::

## Option 3: Import from WinISIS
If you have legacy data from **CDS/ISIS (DOS)** or **WinISIS**, ABCD can import it directly, preserving your data structure.

### Prerequisites
You need the `.mst` (Master File) and `.xrf` (Cross Reference) files from your old system.

### Steps
1.  Go to **Administration > Create new database**.
2.  Enter the name and description.
3.  In "Create from", select **WinISIS**.
4.  **Upload:** You will be prompted to upload your `.mst` and `.xrf` files (and optionally `.fdt` and `.fst` if you have them).

ABCD will attempt to convert the Windows-1252 (ANSI) encoding to UTF-8 automatically during this process.