---
title: Statistics Overview
sidebar_label: Overview
sidebar_position: 1
---

# Statistics & Reports Overview

While the Cataloging and Circulation modules provide operational lists (e.g., "List of loans today"), the **Statistics Module** allows you to perform quantitative analysis of your data.

It is designed as a generic **Cross-Tabulation Generator**. This means it does not come with hardcoded reports; instead, it provides tools for you to define exactly *what* you want to count and *how* to group it.

## Key Concepts

To generate a statistic, you must understand three components:

1.  **Variables:** The raw data elements you want to analyze (e.g., "Author", "Publisher", "Year", "User Category").
2.  **Tables:** The definitions of how to cross-reference these variables (e.g., "Rows = Authors" vs. "Columns = Years").
3.  **Processes:** The execution of a Table definition against a specific database subset.

## Workflow
1.  **Define:** An administrator uses the configuration scripts to map PFTs to Variables.
2.  **Build:** Variables are combined into Table definitions.
3.  **Execute:** A user selects a Table, applies a search filter (optional), and generates the results in HTML or Excel.