---
sidebar_position: 1
title: Overview and Configuration
---

# Circulation: Overview and Configuration

The Circulation module is responsible for managing all aspects of lending library materials to users. It handles the complete lifecycle of a loan, from checking out an item to its return, including renewals, reservations, and managing fines or suspensions.

To function correctly, the module relies on a set of specialized, interconnected databases and a clear loan policy. This page covers the essential first step: understanding and configuring these core components.

### Core Circulation Databases

The circulation system uses a minimum of four dedicated databases to track users, items, and transactions. An administrator must create and configure these databases before the module can be used.

1.  **Users Database (`users`):**
    * Stores information about registered library patrons (borrowers), including their ID, name, contact details, user type (e.g., student, faculty), and status (active, suspended).

2.  **Loanable Objects Database (`loanobjects` or `copies`):**
    * Contains a record for each physical item that can be loaned out. Each item must have a unique inventory number, which is typically represented by a barcode. ABCD supports two models for this:
        * **Integrated Model (`copies`):** The loanable items are defined in the `copies` database, which is directly linked to the main bibliographic catalog. This is the most common setup.
        * **Standalone Model (`loanobjects`):** Loanable items are managed in a separate `loanobjects` database, which may not be linked to a bibliographic record. This is useful for lending items that are not cataloged, like equipment.

3.  **Transactions Database (`trans`):**
    * Acts as a historical log of all circulation activities. Every time an item is loaned, returned, or renewed, a new entry is created in this database.

4.  **Suspensions Database (`suspensions`):**
    * Manages penalties applied to users, such as fines for overdue items or temporary suspensions of borrowing privileges.

### Initial System Configuration

Before you can process any loans, you must tell the circulation module where to find these databases.

1.  Navigate to **Circulation** → **Configuration**.
2.  In this screen, you must specify the names and paths of the core databases (`users`, `trans`, `suspensions`, and `loanobjects`/`copies`).
3.  You must also define the relationship between your bibliographic database and the loanable items database, so the system knows which cataloged items are available for lending.
4.  Save the configuration.

Once these foundational settings are in place, the next step is to define the rules that govern the lending process by creating a **Loan Policy**.