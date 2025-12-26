---
title: Copies Database (copies)
sidebar_label: Copies (Inventory)
---

# Copies Database (`copies`)

The **Copies** database acts as the central inventory for the library. It contains one record per physical item (book, journal issue, CD, etc.).

## Structure Overview

* **Standard Path**: `/bases/copies/copies`
* **Purpose**: Stores unique information for each physical item, such as inventory number, location, and acquisition method.

## Field Definition Table (FDT)

Based on the standard ABCD structure:

| Tag | Name | Description | Type |
| :-- | :--- | :--- | :--- |
| **10** | Inventory Number | Unique identifier for the physical item (Barcode). | Text |
| **20** | Control Number | Links the copy to the Bibliographic Database. | Text |
| **30** | Main Library | Code of the main library owning the item. | Select (libraries.tab) |
| **40** | Secondary Library | Section or branch location. | Text |
| **50** | Tome | Tome number (if applicable). | Text |
| **60** | Volume/Part | Volume or part information. | Text |
| **63** | Copy Number | Sequential number of the copy (e.g., c.1, c.2). | Text |
| **68** | Acquisition Method | How the item was acquired (Purchase, Donation, etc.). | Radio (acquiredby.tab) |
| **70** | Provider | Name or code of the provider/donor. | Text (Linked to `providers`) |
| **80** | Date of Entry | Date the item was added to the inventory. | Date |
| **90** | Price | Cost of the item. | Text |
| **200**| Object Type | Determines the loan policy (e.g., Book, Reference, CD). | Select (items.tab) |

:::info Integration
The **Control Number (Tag 20)** is the critical link between this database and the bibliographic catalog (e.g., `books` or `biblo`).
:::