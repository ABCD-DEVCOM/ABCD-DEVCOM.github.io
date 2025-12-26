---
title: Loan Objects Database (loanobjects)
sidebar_label: Loan Objects
---

# Loan Objects Database (`loanobjects`)

The **Loan Objects** database is an intermediate database used by the Circulation module to group copies under a single bibliographic title to apply loan policies efficiently.

## Purpose
In ABCD, loan policies are often applied to "Objects" (Titles) rather than individual copies. This database facilitates the display of all available copies for a specific title during the loan process.

## Field Definition Table (FDT)

| Tag | Name | Description |
| :-- | :--- | :--- |
| **1** | Control Number | The unique ID of the bibliographic record. |
| **10** | Database | The name of the source bibliographic database (e.g., `books`). |
| **959**| Copies Group | A repeatable group field containing details of all copies linked to this title. |

### Group 959 Subfields
This field serves as a cache for copy information to speed up circulation transactions.

* `^i`: Inventory Number
* `^l`: Main Library
* `^b`: Secondary Library
* `^o`: Object Type
* `^v`: Volume
* `^t`: Tome