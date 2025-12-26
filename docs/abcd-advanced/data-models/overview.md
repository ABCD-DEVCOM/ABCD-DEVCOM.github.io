---
title: Bibliographic Standards
sidebar_label: Overview of database models
slug: /data-models
sidebar_position: 2
---

# Data Models and Standards

ABCD is not limited to a single format. Thanks to the flexibility of the ISIS technology, it comes pre-packaged with several international standards for different types of institutions.

## Available Models

### For Libraries
* **[MARC 21](marc21.md)**: The global standard for library automation. Supports Books, Serials, Maps, and Multimedia.
* **[Biblo (LILACS)](biblo.md)**: The methodology developed by BIREME/PAHO, widely used in Latin American health sciences networks.

### For Archives
* **[ISAD(G)](isadg.md)**: General International Standard Archival Description. Optimized for hierarchical descriptions (Funds, Collections, Items).

### For Museums & Repositories
* **[Dublin Core](dublincore.md)**: A lightweight metadata standard ideal for digital objects and repositories.
* **[Spectrum](spectrum.md)**: The UK standard for museum documentation and object management.

### For Thesauri
* **[Agrovoc / Thesaurus](agrovoc.md)**: Structure for managing controlled vocabularies and authority lists.

## Choosing a Model

When creating a new database in ABCD, you are asked to select a "Base" (Model). This choice determines the **Field Definition Table (FDT)** and the default worksheets.

:::info Interoperability
Choosing a standard model ensures that your data can be easily exported and shared via protocols like Z39.50 (for MARC) or OAI-PMH (for Dublin Core/MARC).
:::