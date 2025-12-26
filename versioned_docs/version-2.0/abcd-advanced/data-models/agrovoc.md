---
title: Agrovoc / Thesaurus Structure
sidebar_label: Agrovoc (Thesaurus)
---

# Agrovoc (Thesaurus) Model

The **`agrovoc`** database is a specialized model designed for managing **Multilingual Thesauri**. It adheres to standards for controlled vocabularies (like ISO 25964), allowing for the management of hierarchical (BT/NT), associative (RT), and equivalence (USE/UF) relationships.

While named "Agrovoc" (based on the FAO agricultural thesaurus), this structure can be used for any controlled vocabulary.

## Database Definition

* **Internal Name:** `agrovoc`
* **Type:** Authority / Thesaurus
* **Languages:** Configured for English, French, and Spanish (expandable).

## 1. Field Structure (FDT)

The Field Definition Table uses a **Language Block** logic. Each language has a dedicated range of tags (Hundreds), but the last two digits represent the same semantic relationship across all languages.

### Tag Logic
* **0xx**: English (Main language in this config)
* **1xx**: French
* **2xx**: Spanish

### Semantic Fields
These relationships are standard for Thesaurus construction.

| Suffix | Relationship | Name | Definition |
| :--- | :--- | :--- | :--- |
| **01** | **Descriptor** | **DE** | The preferred term used for indexing. (e.g., `Tag 1`, `101`, `201`) |
| **02** | **Scope Note** | **SN** | Definition or usage note for the term. |
| **03** | **Equivalence** | **USE** | Points to the preferred term (e.g., "Farming USE Agriculture"). |
| **04** | **Equivalence** | **UF** | **Used For**. The non-preferred synonyms (e.g., "Farming"). |
| **05** | **Hierarchy** | **BT** | **Broader Term**. The parent concept (e.g., "Fruit" is BT of "Apple"). |
| **06** | **Hierarchy** | **NT** | **Narrower Term**. The child concept. |
| **07** | **Associative** | **RT** | **Related Term**. Concepts associated but not hierarchical (e.g., "Cow" RT "Milk"). |
| **08** | **Note** | **ND** | Administrative or history note. |
| **94** | **ID** | **ID** | Unique numeric identifier for the concept (language independent). |

## 2. Indexing Strategy (FST)

The Field Selection Table (`agrovoc.fst`) creates access points mainly for the primary language (English in the default file), allowing users to search by any type of relationship.

| Prefix | Relationship | Technique | Usage |
| :--- | :--- | :--- | :--- |
| **DE_** | Descriptor | Phrase (0) | Searching exact authorized terms. |
| **PER_** | Permuted | Word (8) | Searching individual words within terms. |
| **USE_** | Use | Prefix (5) | redirecting from non-preferred terms. |
| **UF_** | Used For | Prefix (5) | Finding which term replaces a synonym. |
| **BT_ / NT_** | Hierarchy | Prefix (5) | Navigating up and down the tree. |
| **RT_** | Related | Prefix (5) | Finding associated concepts. |
| **TT_** | Global | Word (8) | General keyword search across all fields. |

:::info Multilingual Indexing
To enable full searching in French and Spanish, the administrator must add lines to the `.fst` replicating these rules for tags 101-108 and 201-208.
:::

## 3. Visualizing Data (PFT)

The display format (`agrovoc.pft`) presents the term and its relationships in a clean table.

* **Format:** HTML Table.
* **Logic:** It iterates through all language blocks. If a French term exists (e.g., Tag 101), it displays it under the label "DE (FR)".
* **Usage:** This allows catalogers to see the translation of a term immediately alongside its hierarchical relations.

## 4. Usage in ABCD

This database is rarely used "stand-alone". It is designed to be linked to bibliographic databases (like `books` or `marc`) via **Authority Control**.

* **In the Bibliographic FDT:** You configure a field (e.g., Subject - Tag 650) to "Pick" values from `agrovoc`.
* **The Lookup:** When a librarian types "Agri...", the system searches `agrovoc`, retrieves the authorized descriptor "Agriculture", and pastes it into the book record.