---
title: Alphabetic indexes
sidebar_label: Alphabetic indexes
sidebar_position: 5
---

# Alphabetic indexes

The **Alphabetic indexes** module allows users to navigate the database through sorted lists of terms (Indices). This is distinct from searching; it reads directly from the **Inverted File** keys.

**Script:** `alpha_ix.php`
**File Created:** `bases/[db]/opac/[lang]/[db].ix`

## 1. How it Works
This configuration defines which buttons appear **below the Free Search form**.

When a user clicks on one of these buttons (e.g., "Authors"), the system opens a browsing window (dictionary) that scans the index keys starting with the selected prefix.

## 2. Configuration Parameters

The interface manages a mapping table defined by the following columns:

| Field | Description | Technical Detail |
| :--- | :--- | :--- |
| **Label** | The name of the index button (e.g., "Authors"). | User-facing string. |
| **Prefix** | The internal FST prefix (e.g., `AU_`). | Must match the `[db].fst` exactly. |
| **Columns** | Defines the layout of the index window. <br/>**1**: Single column.<br/>**2**: Two columns.<br/>**Empty**: The index is hidden/disabled. | Visual setting. |
| **Postings** | If set to `ALL`, shows the count of records for each term. | Example: `Shakespeare (15)` |

## 3. Example Configuration
The system writes these settings to the `[db].ix` file using the pipe (`|`) separator.

### Example `marc.ix` File
```text
Title|TI_|1|ALL
Author|AU_|1|ALL
Subject|SU_|1|ALL

```

* **Line 1:** Creates a "Title" button that browses the `TI_` index, displayed in 1 column, showing record counts.

## 4. The FST Helper

To configure this correctly, you must know the **Prefixes** defined in your database.

1. Click the **"View FST"** accordion at the bottom of the page.
2. The system reads `bases/[db]/data/[db].fst`.
3. Identify the prefixes (e.g., look for lines like `10 0 "AU_"v10`).
4. Copy the `AU_` prefix to the configuration form.

:::warning Case Sensitivity
The prefixes are case-sensitive. If your FST uses `TI_` (uppercase), entering `ti_` (lowercase) here will result in an empty list for the user.
:::

---

## 5. Integration with "Did You Mean?"

The configuration you define here plays a crucial role in the **Spell Checking** mechanism.

When generating the static dictionary for the "Did you mean?" feature, the system allows you to use these exact rules to filter the content.

* **Benefit:** Instead of exporting the entire index (which includes IDs, timestamps, and internal codes), you can generate a clean dictionary containing **only** the terms from the fields defined above (e.g., only Titles, Authors, and Subjects).

To manage the dictionary file and generate it, refer to the **[Dictionary & Spell Checker](did-you-mean.md)** documentation.
