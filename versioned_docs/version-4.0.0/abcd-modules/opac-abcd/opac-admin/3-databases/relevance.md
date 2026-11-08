---
title: Relevance Ranking
sidebar_label: Relevance
sidebar_position: 3
---

# Relevance Ranking Configuration

By default, ISIS databases return results in MFN order (insertion order). The **Relevance Module** allows you to sort results based on "weights", ensuring that significant matches appear at the top.

**Script:** `edit_relevance.php`
**File Created:** `bases/[db]/opac/relevance.def`

## 1. How Ranking Works
The system calculates a score for each record based on **where** the search term appears.
* A match in the **Title** is worth more than a match in the **Notes**.

To set this up, you don't assign numbers directly. Instead, you map your FDT fields to pre-defined **Relevance Categories**.

## 2. Configuration Categories

The interface lists all fields from your FDT. You must map them to one of the following:

| Category | Typical Weight | Usage |
| :--- | :--- | :--- |
| **Title** | High (e.g., 100) | Use for Main Title, Translated Title, Series Title. |
| **Author** | Medium-High (e.g., 80) | Use for Main Author, Co-authors. |
| **Subject** | Medium (e.g., 60) | Use for Keywords, Descriptors, Topographic terms. |
| **General** | Low (e.g., 20) | Use for Abstracts, Notes, and other full-text fields. |
| **-- Not Used --** | 0 | Fields ignored by the relevance algorithm. |

## 3. Setup Strategy
1.  **Load:** The script automatically parses the `[base].fdt` file to list your fields.
2.  **Map:** Select the appropriate category from the dropdown for key fields.
3.  **Save:** The system writes a `relevance.def` file that the search engine reads during execution.

:::tip Strategy
Do not map every single field. Focus on the 4 or 5 most important fields (Title, Author, Subject) to keep the ranking algorithm efficient and meaningful.
:::