---
sidebar_position: 3
title: Transactions (Loan, Return, Renewal)
---

# Transactions (Loan, Return, Renewal)

With the core databases and loan policy configured, the library staff can perform the daily circulation tasks. All standard transactions are handled from a single, efficient interface within the **Circulation** module.

The main transaction screen is designed for a quick workflow. The operator typically needs to identify two things: the **user** (by their ID or name) and the **item** (by its unique inventory number, usually scanned from a barcode).

### Loaning an Item (Check-out)

The loan process is the most common transaction at the circulation desk.

1.  From the main circulation menu, select the **Loan** transaction type.
2.  **Identify the user:** Enter the user's ID card number or search for them by name. The system will display the user's profile and current status, including any existing loans or outstanding fines.
3.  **Identify the item:** Scan the barcode on the item to be borrowed.
4.  The system automatically consults the **Loan Policy** in the background to:
    * Verify that the user is allowed to borrow this type of item.
    * Check if the user has reached their borrowing limit.
    * Calculate the correct due date.
5.  If the transaction is approved by the policy, the loan is recorded, and the screen is ready for the next item for the same user.

### Returning an Item (Check-in)

The return process is streamlined for speed.

1.  Select the **Return** transaction type.
2.  **Identify the item:** Scan the barcode of the item being returned.
3.  The system finds the active loan record for that item and marks it as returned.
4.  Simultaneously, it checks the return date against the due date. If the item is overdue, the system calculates any applicable fines based on the **Loan Policy** and alerts the operator.

### Renewing a Loan

Renewals can be processed for users who wish to extend their loan period.

1.  Select the **Renew** transaction type.
2.  **Identify the user:** Enter the user's ID or name.
3.  The system displays a list of all items currently on loan to that user.
4.  The operator selects the item(s) the user wishes to renew.
5.  Upon confirmation, the system checks the **Loan Policy** to ensure the item is renewable and that the user has not exceeded their renewal limit.
6.  If the renewal is permitted, a new due date is calculated and the record is updated.

From this same interface, operators can also view a user's complete borrowing history and current account statement.