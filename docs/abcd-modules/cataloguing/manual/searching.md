---
title: Search & Retrieval Tools
sidebar_label: Search & Retrieval
sidebar_position: 2
---

# Search and Retrieval Tools

The Cataloging module provides **6 distinct methods** to retrieve records. Each method is designed for a specific cataloging need, ranging from quick lookups to complex boolean queries and sequential text analysis.

![Forms search](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-search.png)

---

## 1. Quick Search (Top Bar)
Located at the top of the cataloging interface, this is the fastest way to find a record if you know a specific identifier.

![Quick Search (Top Bar)](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-search-topbar.png)

* **How it works:**
    1.  Select the **Index** from the dropdown menu (e.g., `Title`, `Author`, `Control Number`).
    2.  A click on the magnifier icon shows the index of the field.  
    Selecting a term from the index starts the search immediately
    2.  Manual entry in the text field is also possible.   
    Wild card and logical expression function the same as in the advanced search.  
    Hit return to start the search

* **Technical Note:** This sends a direct query to the CISIS Inverted File using the prefix defined in your FST (e.g., `TI_` for Title).

---

## 2. Advanced Search (`buscar.php`)
**Icon:** ![alt text](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-search-icon.png) (Magnifying Glass)

The Advanced Search provides a structured form for building complex queries using Boolean Logic (`AND`, `OR`, `NOT`).

![Advanced Search](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-search-advanced.png)

**Features:**
* **Multiple Fields:** Combine different criteria (e.g., `Author="Asimov"` **AND** `Year="1980"`).
* **Search History Access:** Provides a shortcut to reload previous queries.
* **Save Search:** You can save complex queries to your user profile (via `busqueda_guardar.php`) to re-run them later.

---

## 3. Search History & Management
**Icon:** ![Search History & Management](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-search-history-icon.png) (Clipboard)

Cataloging is repetitive. The **Search History** (`search_history.php`) keeps track of your recent activities.

* **Session History:** Lists every search performed since you logged in. Click any entry to re-execute it.
* **Saved Searches:** Access queries you explicitly saved. Useful for monthly reports or routine maintenance checks (e.g., "Show me all books without an ISBN").
* **Combine Sets:** Advanced users can combine previous result sets (e.g., "Result Set #1" **NOT** "Result Set #2").

![Search History & Management](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-history.png)

---

## 4. Search with Thesaurus
**Icon:** ![Search with Thesaurus](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-tesaurus.png) (Notebook)

If your system is connected to a Thesaurus database, this tool allows you to search using **Controlled Vocabulary**.

1.  Type a term (e.g., "Education").
2.  The system looks up the term in the Thesaurus.
3.  It displays relationships: **BT** (Broader Terms), **NT** (Narrower Terms), and **RT** (Related Terms).
4.  Selecting a term executes a search in the main catalog for that standardized descriptor.


![Search with Thesaurus](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-tesaurus.png)

---

## 5. Free Search / Text Search (`freesearch.php`)
**Icon:** ![Free Search](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-search-list-icon.png) (Database Search)

Unlike the other methods that rely solely on the Index (FST), the **Free Search** is a powerful tool that can perform **Sequential Searches** on the raw data. This allows you to find text in fields that are *not* indexed.

**Key Capabilities:**
* **Results in List:** Displays matches in a spreadsheet-like grid (defined in `freesearch_ex.php`), ideal for reviewing large sets of data.
* **Field Targeting:** You can search for a string specifically within a chosen tag (e.g., "Find 'Biology' inside Tag 650").
* **Range Search:** Filter by MFN range (e.g., "Search only records 100 to 500").

![Free Search](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-free-search.png)

:::info Sequential Search
Since this method scans records one by one (if not using the index), it is the only way to find data in non-indexed fields (like Notes or internal URLs), though it may be slower on very large databases.
:::

---

## 6. A-Z Dictionary Browse (`alfa.php`)
**Icon:** ![alt text](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-a-z.png) (A-Z List)

![alt text](../../../media/abcd-modules/cataloguing/manual/data-entry/forms-search-az.png)


This is the most precise retrieval method because it eliminates "zero results" due to typos. Instead of guessing a term, you browse the **Inverted File** (Index) directly.
A window is shown in which all records of the database are listed according to the field identified as the Identifier field in the Field Definition Table (FDT) (4th column I).
In bibliographic databases mostly the title field.

**Workflow:**
1.  Click the **A-Z** icon.
2.  **Browse:** The system displays a scrollable dictionary of terms actually existing in the database. In this list each alphabetic section can be clicked on to allow navigation in this normally large list. 
3.  **Select:** Click on a term to retrieve all linked records.
    * *Tip:* You can select multiple terms to perform an `OR` search (e.g., "Smith" OR "Smyth").


