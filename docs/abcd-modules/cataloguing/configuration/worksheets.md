---
title: Data Entry Worksheets (FMT)
sidebar_label: Worksheets (FMT)
sidebar_position: 2
---

# Data Entry Worksheets (FMT)

While the **FDT** defines all possible fields in a database, the **Worksheet (FMT)** defines which fields are actually displayed to the cataloger and in what order.

A single database can have multiple worksheets (e.g., one for Books, one for Journals, one for Maps), but they all feed data into the same structure.

## The Worksheet Editor

* **Path:** **Cataloguing > Configuration > Worksheets definition**

The editor allows you to design the data entry form visually.

### Main Components

1.  **Available Fields List:** On the left (or top), you see the fields defined in the FDT.
2.  **Active Worksheet:** On the right (or bottom), the list of fields currently selected for this form.

### Actions

* **Add Field:** Select a field from the FDT list and click the **Add** (or `>`) button.
* **Remove Field:** Select a field in the Worksheet list and click **Remove** (or `<`).
* **Reorder:** Use the **Up/Down** arrows to change the sequence of fields. The order here determines the tab order during data entry.
* **Properties:** Some versions allow overriding FDT properties (like "Mandatory") specifically for this worksheet.

## Creating a New Worksheet

1. Select the database.
2. Enter a unique name for the worksheet (max 8 characters, e.g., `monog`).
3. Add a description (e.g., "Monographs Cataloging Form").
4. Select the fields you need.
5. Click **Save**.

## Special Features

### Tabs / Pages
You can split long worksheets into multiple tabs.
* To create a new tab, insert a "dummy" field or use a specific separator tag defined in `config.php` (often represented by a line or a special reserved tag in the list).

### Default Values
You can configure a worksheet to pre-fill certain fields.
* **Function:** `Pre-literals` or specific default value files (`.val`).
* **Usage:** Useful for fields like "Library Branch" or "Record Type" that are constant for a specific workflow.

:::info Relation to FDT
If you add a new field to the database structure (FDT), it **will not** automatically appear in the Data Entry screen. You must explicitly add it to the relevant Worksheets (FMT) using this editor.
:::