---
title: Transactions Database (trans)
sidebar_label: Transactions (Loans)
---

# Transactions Database (`trans`)

The **Transactions** database (`trans`) records all active loan operations. When an item is returned, the record is usually moved to a history database (e.g., `logtrans`) or marked as returned, depending on configuration.

## Field Definition Table (FDT)

| Tag | Name | Description |
| :-- | :--- | :--- |
| **10** | Borrower ID | The unique code of the user/patron borrowing the item. |
| **20** | Inventory Number | The barcode of the item being borrowed. |
| **30** | Date of Loan | Date the transaction occurred. |
| **35** | Time of Loan | Timestamp of the transaction. |
| **40** | Date of Return | The due date calculated by the policy. |
| **45** | Time of Return | The time due (for hourly loans). |
| **70** | Object Type | The category of the item (cached from `copies`). |
| **80** | User Type | The category of the user (cached from `users`). |
| **90** | Database | The source bibliographic database. |
| **100**| Reference | Bibliographic reference (Title, Author) for display. |
| **400**| Policy Applied | Snapshot of the policy used (prevents changes if policy changes later). |
| **500**| Actual Return Date | Filled when the item is returned. |

### Renewals (Field 200)
Field 200 is a repeatable field (Table) that stores the history of renewals for this specific transaction.
* **Subfields**: Date, Time, New Due Date, Operator.