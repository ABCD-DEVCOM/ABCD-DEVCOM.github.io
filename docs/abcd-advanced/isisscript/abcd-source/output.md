---
sidebar_position: 7
title: Output & Reporting
description: Scripts for printing, exporting, and viewing data formats.
---

# Output & Reporting Scripts

These scripts are focused on taking data from the database and transforming it into specific formats for the user (Printer-friendly, ISO-2709, Text, etc.).

## 1. Printing (`imprime.xis`)

Used whenever a user clicks "Print" or selects a specific format in the data entry list.

* **File:** `wxis/imprime.xis`
* **Primary Task:** `<do task="mfnrange">` (usually for a specific set of MFNs selected by the user).
* **Key Parameters:**
    * `pft`: The print format to apply.
    * `count`: Number of records.
* **Mechanism:** It iterates over the selected MFNs and applies the PFT. It often wraps the output in an HTML template suitable for printing (hiding menus/sidebars).

## 2. Text Export (`export_txt.xis`)

Handles the export of data to CSV, TXT, or custom delimited formats.

* **File:** `wxis/export_txt.xis`
* **Logic:**
    1.  Receives the search query or MFN range.
    2.  Receives a PFT that defines the CSV structure (e.g., `v10,';',v20,';',v30`).
    3.  Outputs with the MIME type `text/plain` or `application/csv` to trigger a browser download.

## 3. ISO View (`iso_view.xis`)

A utility script used during the Import process.

* **File:** `wxis/iso_view.xis`
* **Function:** Allows the administrator to "peek" inside an uploaded ISO-2709 file before actually importing it into the database.
* **Operation:** It likely uses the `<do task="import">` logic but redirects output to the screen (`<display>`) instead of saving to a database, often formatting the binary ISO data into a readable directory/field structure.