---
title: Dictionary & Spell Checker
sidebar_label: Did You Mean?
sidebar_position: 6
---

# Dictionary & Spell Checker ("Did You Mean?")

The ABCD OPAC features a mechanism to assist users when a search returns **zero results**. It compares the user's input against a static list of terms and suggests similar existing words using the Levenshtein distance algorithm.

**Example:** User types *'Enrgy'* $\rightarrow$ System suggests: *"Did you mean: **Energy**?"*

**Script:** `view_dic.php`
**File Created:** `bases/[db]/opac/[db].dic`

## 1. The Static Dictionary Concept
Unlike the A-Z Browser (which queries the live index), the spell checker uses a **static text file** (`.dic`) stored in the database's OPAC folder.

* **Performance:** Searching a static text file is faster and safer than running fuzzy logic queries on the main database index for every typo.
* **Maintenance:** Because it is static, you must **regenerate** this file periodically to include newly cataloged terms.

## 2. Managing the Dictionary
**Access:** Menu **Databases** > **Manage Dictionary** (or via the link in the A-Z Browsing module).

The interface allows three main actions:

### A. View Terms
Allows you to inspect the current contents of the `.dic` file. Useful to verify if the file exists and if the terms are clean (readable).

### B. Update/Regenerate (The Core Function)
This process reads the database's Inverted File, extracts terms, cleans them, and saves the `.dic` file.

**Generation Modes:**
1.  **Based on A-Z Configuration (Recommended):**
    * It reads the `[db].ix` file.
    * It extracts **only** terms belonging to the configured prefixes (e.g., `TI_`, `AU_`).
    * **Result:** A clean, relevant dictionary without "noise" (like IDs, dates, or internal control numbers).
2.  **Complete Database Dump:**
    * It extracts **all** keys from the Inverted File.
    * **Result:** Maximum coverage, but may include technical data that you don't want to suggest to users.

### C. Upload
Allows you to upload a pre-compiled list of terms (e.g., a standard Thesaurus list) instead of generating it from the database.

---

## 3. The Generation Process (Technical)

When you click **Regenerate**, the system performs a sophisticated batch process to handle large databases without timing out.

1.  **Initialization:** The system calculates the total number of keys in the database.
2.  **Batch Processing (AJAX):**
    * The script `view_dic.php` loops through the index in chunks (e.g., 5,000 keys at a time).
    * It filters terms based on the `.ix` configuration.
    * It cleans the text (removes punctuation, lowercases terms depending on settings).
    * A **Progress Bar** shows the status in real-time.
3.  **Finalization:**
    * Once all keys are processed, the system removes duplicates.
    * The final list is sorted alphabetically.
    * The file is saved to `bases/[db]/opac/[db].dic`.

:::tip Best Practice
Always configure your **A-Z Browsing (Indices)** first. Then, use the "Based on A-Z Configuration" mode to generate the dictionary. This ensures that the system only suggests terms that the user can actually find in specific fields.
:::