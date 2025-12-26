---
title: Configuring Stats (Variables & Tables)
sidebar_label: Configuration
sidebar_position: 2
---

# Configuring Statistics

Before generating a chart, you must teach the system how to extract data from your records. This is done in two stages: defining **Variables** and then defining **Tables**.

**Access:** **Statistics > Configuration**

## 1. Defining Variables (`config_vars.php`)
A "Variable" is a piece of data extracted from a record.

1.  Click **Variables Configuration**.
2.  You will see a list of existing variables. Click **New** to create one.
3.  Fill in the parameters:
    * **Variable Code:** A short internal name (e.g., `AUT`, `YEAR`).
    * **Description:** The human-readable label (e.g., `Author Name`).
    * **Extraction Format (PFT):** The ISIS script to get the data.
        * *Example:* `v10^a` (Extracts subfield 'a' of tag 10).
        * *Advanced:* `(v650/)` (Extracts all repeatable subjects).

:::tip
Variables are reusable. Once you define "Publication Year", you can use it in dozens of different tables.
:::

## 2. Defining Tables (`config_tables.php`)
A "Table" defines the layout of your report by crossing two variables (Rows x Columns).

1.  Click **Tables Configuration**.
2.  Create a **New** table definition.
3.  Fill in the parameters:
    * **Table Code:** A unique ID (e.g., `SUBJ_YEAR`).
    * **Title:** The report header (e.g., `Subjects per Publication Year`).
    * **Row Variable:** Select a variable from the list (e.g., `Subjects`).
    * **Column Variable:** Select a variable (e.g., `Year`).
    * *Note:* You can leave the Column variable empty to generate a simple Frequency List (Top list).

## 3. Saving
Changes are saved to configuration files (`.cfg` and `.tab`) inside the database's `def` folder. Ensure the web server has write permissions to this directory.