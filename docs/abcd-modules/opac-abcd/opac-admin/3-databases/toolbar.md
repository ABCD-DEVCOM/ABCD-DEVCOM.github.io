---
title: Record Toolbar & Actions
sidebar_label: Record Toolbar
sidebar_position: 9
---

# Record Toolbar Configuration

The **Record Toolbar** is the row of icons/buttons that appears above a specific record when viewing it in detail. This module allows you to enable or disable specific actions (like Printing, Reserving, or Exporting) for each database.

**Script:** `record_toolbar.php`
**Files Modified:**
1. `bases/[db]/opac/[lang]/record_toolbar.tab` (Buttons & UI)
2. `bases/[db]/opac/relevance.def` (Permalink Prefix settings)

## 1. Enabling Features

The interface presents a list of available standard actions. You can toggle them **On/Off** using the checkboxes.

| Feature / Code | Icon | Description |
| :--- | :--- | :--- |
| **Print** | <i class="fas fa-print"></i> | Opens a simplified, printable version of the record. |
| **Add to Loan** | <i class="fas fa-clipboard-check"></i> | Adds the record to the session "Clipboard" (Selection List) for bulk actions. |
| **XML View** | <i class="fas fa-code"></i> | Displays the raw record metadata in XML format (Requires `marcxml.pft`). |
| **Export RIS** | <i class="fas fa-file-export"></i> | Downloads the citation in RIS format for software like Zotero or EndNote. |
| **Reserve** | <i class="fas fa-calendar-check"></i> | Enables the reservation button. *Note: This requires the Circulation module to be active.* |
| **Permalink** | <i class="fas fa-link"></i> | Generates a persistent link to the record (See configuration below). |

## 2. Permalink Configuration (Persistent Link)

The **Permalink** feature requires a special configuration split between two files. It allows users to access a record via a persistent identifier (like a Control Number) rather than a volatile MFN.

### Required Settings
To enable it, you must fill in two fields:

1.  **Unique Key Field (Tag):**
    * Specify the field tag holding the unique ID (e.g., `v1` or `v001`).
    * *Storage:* This is saved in `record_toolbar.tab`.
2.  **Index Prefix (FST):**
    * Specify the search prefix used to find this ID (e.g., `CN_`).
    * *Storage:* This is saved in `relevance.def` under the `[permalink]` section.

:::warning Critical Dependency
Since the configuration is split, if you manually delete or overwrite `relevance.def`, the **Permalink** functionality will break (returning "Record not found"), even if the button is still visible in the toolbar.
:::

## 3. Technical Details

### File A: `record_toolbar.tab` (UI & Tags)
Stores the active status of buttons and the field tag for the permalink.
* **Format:** `Code|Active(Y/N)|Icon|Label|ExtraParameter`

**Example:**
```text
print|Y|print|Print Record|
email|Y|envelope|Send by Email|
permalink|Y|link|Permalink|v1

```

*(Note the `v1` at the end of the permalink line)*.

### File B: `relevance.def` (Search Config)

Stores the prefix used by the search engine to resolve the link. The script appends/updates a specific section at the end of this file.

**Example:**

```ini
[title]
fields = "245, 246"
...

[permalink]
prefix = "CN_"

```
