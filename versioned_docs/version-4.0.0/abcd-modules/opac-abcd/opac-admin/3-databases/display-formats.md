---
title: Display Formats & Export
sidebar_label: Display Formats
sidebar_position: 4
---

# Display Formats & Export Configuration

The **Display Formats** module configures how records are presented to the user on the screen and which export options (e.g., Word, RIS, XML) are available in the toolbar.

**Script:** `formatos_salida.php`
**File Created:** `bases/[db]/opac/[lang]/[db]_formatos.dat`

## 1. Overview
ABCD uses **PFT (Print Format)** files to render database records into HTML. This configuration file maps a user-friendly label (e.g., "Full View") to a physical PFT file stored on the server.

The system uses these definitions in two places:
1.  **Format Dropdown:** Allows the user to switch views (if enabled).
2.  **Export Toolbar:** Defines the output format when a user clicks "Export".

## 2. Configuration Syntax
The interface allows you to define rows with the following parameters. The system writes them to the `.dat` file using the pipe (`|`) separator.

| Parameter | Description |
| :--- | :--- |
| **PFT Name** | The filename of the script located in `bases/[db]/pfts/[lang]/`. Do not include the `.pft` extension (e.g., write `opac_expanded`). |
| **Label** | The text displayed in the menu (e.g., "Bibliographic View"). |
| **Output Type** | Defines how the browser handles the result:<br/>`H`: HTML (Rendered on screen)<br/>`D`: Download (Forces file download, e.g., for RIS/ISO) |
| **Detailed PFT** | *(Optional)* If specified, the system uses the first PFT for the **List View** and this second PFT for the **Detailed View**. |

### Example Configuration (`formatos.dat`)
```text
marc|OPAC default|
mrclte|Marc|Y
export_BibTex|export_BibTex|

```

## 3. The PFT Helper

The script includes a helper panel that lists all `.pft` files found in the database's directory.

* **Requirements:** For a PFT to appear here, it must exist physically in `/bases/[db]/pfts/[lang]/`.
* **Action:** You can verify filenames here to avoid typos in the configuration.

:::tip List vs. Detail Optimization
To improve performance, use the **4th column** feature. Configure a lightweight PFT (e.g., `select_record`) for the list view to load search results quickly, and a heavy PFT (e.g., `opac_expanded`) for the detailed view.
:::

```
