---
sidebar_position: 3
title: Search & Retrieval Scripts
description: Analysis of scripts used for searching and browsing indices.
---

# Search & Retrieval Scripts

These scripts handle the interaction with the Inverted File (Search) and the Master File (Retrieval).

## 1. Boolean Search (`buscar.xis`)

This script processes the search expressions typed by the user in the search bar.

* **File:** `wxis/buscar.xis`
* **Primary Task:** `<do task="search">`
* **Key Parameters:**
    * `expression`: The search query (e.g., `WATER * SOIL`).
    * `count`: Number of results per page.
    * `from`: Result cursor (for pagination).
* **Logic:**
    1.  Accepts the search string from PHP.
    2.  Executes the search against the inverted file.
    3.  Loops through the results (`<loop>`).
    4.  Displays the results using a predefined PFT (often `@prologo`, display format, `@epilogo`).

**Relation to IsisScript Reference:**
* Uses [`<do task="search">`](../reference/do#do-task-search)
* Uses [`<parm name="expression">`](../reference/parm)

## 2. Dictionary/Index Browser (`indice.xis` / `alfabetico.xis`)

Used when the user clicks on the "A-Z" buttons or "Index" helper to browse terms.

* **File:** `wxis/indice.xis` (and `alfabetico.xis`)
* **Primary Task:** `<do task="keyrange">`
* **Key Operations:**
    * Scans the inverted file keys without accessing the master records.
    * Returns a list of terms and their hit counts (postings).
* **Key Parameters:**
    * `from`: The starting term (e.g., "A").
    * `to`: The ending term (optional boundary).

**Relation to IsisScript Reference:**
* Uses [`<do task="keyrange">`](../reference/do#do-task-keyrange)

## 3. Postings Retrieval (`postings.xis`)

Retrieves the specific MFNs associated with a term.

* **File:** `wxis/postings.xis`
* **Primary Task:** `<do task="keyrange">` with `posting="All"` (or specific parameter).
* **Usage:** Used to show which records contain a specific term clicked in the dictionary browser.