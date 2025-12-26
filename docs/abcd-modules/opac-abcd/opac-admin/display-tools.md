---
title: Display, Toolbar & Exports
sidebar_label: Display & Tools
sidebar_position: 5
---

# Display Formats & Toolbar

This section controls how records are presented to the user and what actions can be performed on them.

## 1. List View vs. Detailed View
The OPAC manages two distinct visualization moments managed via **OPAC Configuration > Appearance**.

### List View (Brief)
Used when displaying search results.
* **Goal:** Show enough info to identify the item (Title, Author, Year) without clutter.
* **Technical:** Controlled by the `select_record.pft` or a specific short PFT. It typically renders a single table row or a clean `div`.

### Detailed View (Full)
Used when the user clicks on a specific record.
* **Goal:** Show all bibliographic data, holdings, and cover images.
* **Technical:** Controlled by the display format configured in the database settings (usually `opac_expanded.pft` or similar).

## 2. The Record Toolbar
**Access:** **OPAC Configuration > Toolbar**

You can enable or disable specific icons that appear above the record in Detailed View.

| Feature | Description |
| :--- | :--- |
| **Print** | Generates a printer-friendly version of the record. |
| **Email** | Allows the user to send the record citation to an email address. |
| **Reserve** | Shows the reservation button (only appears if item is loaned). |
| **Permalink** | Generates a permanent, clean URL for the record (e.g., `?control=12345`), useful for sharing or citing. |
| **Add to Selection** | Allows users to "pin" records to a temporary list for bulk export. |

## 3. Export & Zotero Integration
ABCD supports interoperability with reference managers like Zotero, Mendeley, and EndNote.

### How Zotero Integration Works
The OPAC does not have a "Zotero Button" itself. Instead, it exposes metadata that the Zotero Browser Plugin detects.
* **RIS Format:** You must enable the **RIS** export option in **OPAC Configuration > Exports**.
* **Action:** When enabled, users can download the `.ris` file.
* **Zotero Connector:** If the RIS export is correctly configured, the Zotero icon in the user's browser will light up, allowing one-click capture of the metadata.

:::tip Word Integration
The toolbar also supports exporting directly to a `.doc` file, generating a pre-formatted bibliography for students.
:::