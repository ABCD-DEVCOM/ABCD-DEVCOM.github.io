---
title: Search Configuration & Ranking
sidebar_label: Search & Ranking
sidebar_position: 4
---

# Search Configuration & Ranking

The ABCD OPAC allows fine-tuning of how search results are retrieved and ranked.

## 1. Faceted Search
Facets allow users to narrow down large result sets.
1.  Select the database.
2.  **Add Facet:** Choose a field to become a filter (e.g., Field `100` for "Authors").
3.  **Display Name:** Label it (e.g., "Filter by Author").
4.  **Extraction PFT:** Define how to extract the term (usually `v100^a`).

## 2. Relevance Ranking (Metasearch)
**Access:** **OPAC Configuration > Search > Relevance**

By default, search results might appear in MFN order (insertion order). You can configure the system to rank results based on **where** the search term appears.

You can assign numerical weights to fields.
* **Higher Weight:** Matches in these fields push the record to the top.
* **Lower Weight:** Matches appear lower in the list.

**Example Strategy:**
* **Title (Tag 245):** Weight `100` (Most important).
* **Subject (Tag 650):** Weight `80`.
* **Abstract (Tag 520):** Weight `50`.
* **Full Text:** Weight `10` (Least important).

If a user searches for "Energy", a book with "Energy" in the Title will appear before a book that just mentions "Energy" in a footnote.

## 3. "Did You Mean?" (Spell Checking)
The OPAC includes a mechanism to assist users when a search returns **zero results**.
* **Concept:** It compares the search term against the index dictionary (terms that actually exist in your database).
* **Mechanism:** It looks for terms with similar phonetic sounds (using algorithms like Metaphone) or similar spelling (Levenshtein distance).
* **Result:** Displays a message: *"No results for 'Enrgy'. Did you mean: **Energy**?"*

:::info Configuration
This feature relies on the `index.php` logic and requires that the database dictionary (Inverted File) is up to date.
:::