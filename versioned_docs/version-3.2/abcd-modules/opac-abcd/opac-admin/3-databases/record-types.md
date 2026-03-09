---
title: Record Types & Collections
sidebar_label: Record Types
sidebar_position: 6
---

# Record Types & Collections

For databases that contain heterogeneous materials (e.g., a catalog containing Books, Maps, and CD-ROMs in the same Master File), this module allows you to create **Pre-Search Filters**.

**Script:** `tipos_registro.php`
**File Created:** `bases/[db]/opac/[lang]/colecciones.tab` (or similar, depending on selection).

## 1. Purpose
This configuration creates a set of checkboxes or a dropdown on the Advanced Search page, allowing users to restrict their search to a specific subset of the database **before** executing the query.

* **Example:** A user searches for "History" but limits the "Record Type" to "Maps".
* **Logic:** The system appends the expression `AND (TYPE_MAPS)` to the user's query.

## 2. Configuration Syntax
The interface manages a simple mapping table defined by three columns:

| Field | Description | Example |
| :--- | :--- | :--- |
| **ID** | A unique internal code for the collection. | `BK` |
| **Name** | The label displayed to the user. | `Books` |
| **Search Expression** | The actual Lucene/ISIS query used to filter. | `TE_BK` |

* **Search Expression:** This is the most critical field. It must be a valid term that exists in your index. Ideally, your FST should index the "Type of Record" field (e.g., Tag 980) with a specific prefix (e.g., `TE_`).

## 3. Usage in Search
Once configured, this file is loaded by the **Advanced Search** script.
* If the user selects "Books", the OPAC acts as if the user had typed `YourQuery AND TE_BK`.

### Example `colecciones.tab`
```text
BK|Books|TE_BK
SER|Journals|TE_SER
MAP|Maps|TE_MAP

```

:::info Multi-Database Search
This configuration is also used when performing **Meta-Search** (searching multiple databases at once) to map the collections available in each individual database.
:::

```