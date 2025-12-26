---
title: Circulation Overview
sidebar_label: Overview
sidebar_position: 1
---

# Circulation Overview

The **Circulation Module** manages the movement of library materials. It handles the complete lifecycle of a loan, from checking out an item to its return, including renewals, reservations, and managing fines.

It acts as the operational bridge between your **Bibliographic Databases** (the collection) and your **User Database** (the borrowers).

## 1. Core Databases

To function correctly, the module relies on a set of interconnected databases. You must ensure these are configured in the **Configuration** menu.

### Users Database (`users`)
Stores information about registered library patrons.
* Contains data like User ID, Name, Category (Student, Faculty), and Expiration Date.
* **Important:** Users must be active and not expired to borrow items.

### Transactions Database (`trans`)
Acts as a historical log and active registry of loans.
* Every time an item is loaned, returned, or renewed, an entry is created here.
* This database is vital for statistics and history reports.

### Suspensions & Fines (`suspml`)
Stores the financial and penal status of users.
* If a user returns a book late, the fine or suspension days are recorded here.
* The system checks this database before allowing new loans.

### Inventory (Copies vs. LoanObjects)
This is where the physical items are defined. ABCD supports two models:
* **Integrated (`copies`):** (Recommended) The items are linked directly to the bibliographic record (e.g., inside the Book record).
* **Standalone (`loanobjects`):** Items are managed in a separate database. Useful for lending equipment (laptops, keys) that doesn't need a full bibliographic description.

## 2. The Policy Matrix
ABCD does not use a "one-size-fits-all" rule. Instead, it uses a **Policy Matrix** that cross-references:
* **User Types:** (e.g., Student, Teacher, Staff)
* **Item Types:** (e.g., Book, DVD, Reference)

This allows for granular rules, such as: *"A Teacher can borrow a DVD for 7 days, but a Student can only borrow it for 3 days."*

## 3. Workflow Summary

1.  **Configure:** Define your User Types, Item Types, and the Calendar (Holidays).
2.  **Operate:** Use the **Loan** interface (Circulation Desk) to scan barcodes and process transactions.
3.  **Monitor:** Use the **Reports** menu to send overdue notices (claims) and track fines.
4.  **Self-Service:** Enable **MyABCD** in the OPAC so users can renew items and check their status online.