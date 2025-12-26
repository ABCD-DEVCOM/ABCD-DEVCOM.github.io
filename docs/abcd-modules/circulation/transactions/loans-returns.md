---
title: Loans and Returns
sidebar_label: Check-out / Check-in
sidebar_position: 2
---

# Loans and Returns (Check-out / Check-in)

## Performing a Loan (Check-out)

To loan an item to a user:

1.  **Search User**: Enter the user's ID or name in the search box.
2.  **Select User**: Click on the correct user from the list.
    * *Check Restrictions*: If the user is suspended or has expired, the system will show a warning popup.
3.  **Activate Loan Mode**: Click the **Loan** button in the toolbar.
4.  **Scan Item**: In the "Inventory Number" box, scan the item's barcode.
5.  **Confirm**: The system calculates the due date based on the [Policy](../policies.md) (User Type vs. Item Type) and adds the item to the list of active transactions.

### Common Errors during Loan
* **"Item reserved"**: The item is on hold for another user. You cannot loan it to the current user.
* **"Limit reached"**: The user has already borrowed the maximum number of items allowed for their category.
* **"User Suspended"**: The user has unpaid fines or a suspension period.

---

## Performing a Return (Check-in)

There are two ways to return items in ABCD.

### Method A: By User (Recommended for batch returns)
Use this if the user is standing in front of you with multiple books.

1.  Identify the User.
2.  Locate the item in their list of **Active Loans**.
3.  Click the **Return** link/icon next to the specific item.
4.  If the item is overdue, a **Fine** window will appear. You must acknowledge it to complete the return.

### Method B: Fast Return (By Item only)
Use this for book drops or when you only have the book and not the user ID.

1.  Go to **Circulation > Menu > Return** (or select the "Return" tab if configured).
2.  **Scan the Item Barcode**.
3.  The system identifies who had the book, processes the return, and clears the record.

## Renewals

Extending the loan period for an item.

1.  Identify the User.
2.  In the Active Loans list, click **Renew** next to the item.
3.  **Validation**: The system checks:
    * If the user has renewals left (e.g., 2 of 3 used).
    * If the item is **Reserved** by someone else (renewals are usually blocked in this case).
4.  **New Date**: The due date is recalculated starting from *today*.