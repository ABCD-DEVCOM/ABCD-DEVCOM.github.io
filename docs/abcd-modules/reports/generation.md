---
title: Generating Reports
sidebar_label: Generating Reports
sidebar_position: 3
---

# Generating Statistical Reports

Once the variables and tables are configured, any authorized user can generate the reports.

**Access:** **Statistics > Tables**

## 1. Select the Report
The system displays a list of all available Table Definitions created in the configuration step.
1.  Click on the desired report (e.g., "Books by Author").

## 2. Define the Scope
You don't always want to analyze the entire database. You can filter the input:
* **Mfn Range:** Process records from MFN X to MFN Y.
* **Search Expression:** Use the search box to filter records.
    * *Example:* `DINOSAURS` (Only generates statistics for records containing "DINOSAURS").
    * *Example:* `DA=2023` (Only items cataloged in 2023).

## 3. Output Options
* **Output Format:**
    * **Screen:** Displays an interactive HTML table.
    * **Excel:** Downloads a `.csv` or `.xls` file for external analysis.
* **Graphics:** Some versions support generating simple bar/pie charts directly from the data.

## 4. Run
Click **Execute**.
The system reads the records, applies the PFT extraction for the variables, groups the results, and displays the Cross-Tabulation matrix.

### Understanding the Result
* **Rows:** The distinct values found for the "Row Variable".
* **Columns:** The distinct values found for the "Column Variable".
* **Cells:** The count of records that match both the Row and Column criteria.
* **Total:** The sum of counts.