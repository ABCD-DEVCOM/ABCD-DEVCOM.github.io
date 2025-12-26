---
title: System Databases Overview
sidebar_label: Overview
---

# System Databases Reference

This section provides technical documentation for the internal CDS/ISIS databases used by ABCD. Understanding these structures is essential for advanced administration, reporting, and troubleshooting.

## Circulation Databases (loans)
These databases manage the inventory, users, and transactions.

* **[Copies (copies)](copies)**: The physical inventory of the library.
* **[Loan Objects (loanobjects)](loanobjects)**: Links bibliographic records to copies for policy application.
* **[Patrons (users)](users)**: The registered borrowers/users of the library.
* **[Transactions (trans)](trans)**: Active loans and history.
* **[Reservations (reserve)](reserve)**: Holds pending and active reservations.
* **[Suspensions (suspml)](suspml)**: Records of fines and suspensions.

## Acquisitions Databases (acquisitions)
These databases manage the purchasing workflow.

* **[Suggestions (suggestions)](suggestions)**: Purchase suggestions made by users or staff.
* **[Providers (providers)](providers)**: Vendor and donor information.
* **[Purchase Orders (purchaseorder)](purchaseorder)**: Orders sent to providers.

## System Administration
* **[Access Control (acces)](acces)**: System operators and their permission profiles.

:::warning
Directly editing these databases via **Data Entry** should be done with extreme caution, as it bypasses the validation logic of the specific modules (Circulation/Acquisitions).
:::