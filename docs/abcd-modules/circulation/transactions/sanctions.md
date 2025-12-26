---
title: Fines and Suspensions
sidebar_label: Fines & Sanctions
sidebar_position: 3
---

# Managing Fines and Suspensions

ABCD automatically applies sanctions based on the Loan Policy when an overdue item is returned. However, the librarian must manually manage the *payment* or *forgiveness* of these fines.

## Identifying Sanctioned Users

When you load a user profile, if they have active suspensions or debt:
* The screen background may turn **Red**.
* A **"Suspended"** or **"Fined"** warning appears in the header.
* The **Sanctions** button becomes active.

## Processing Payments

ABCD records payments but does not process credit cards directly. It acts as a cash register log.

1.  Click the **Sanctions** button on the user's dashboard.
2.  You will see a list of outstanding fines (Object title, Date due, Amount).
3.  **To Pay**:
    * Select the specific fine.
    * Click **Pay** (or "Cancel Debt").
    * Enter the amount paid (partial payments are supported in some versions).
    * Confirm.
4.  **Result**: The receipt is logged, and if the total debt drops below the blocking threshold, the user is automatically unlocked.

## Manual Suspensions

You can manually suspend a user for reasons other than late returns (e.g., damaged material, bad behavior).

1.  Go to the **Sanctions** area.
2.  Click **Add Suspension**.
3.  **Reason**: Select from the list (defined in `sanctions.tab`).
4.  **Duration**: Enter the number of days or a specific end date.
5.  **Apply**: The user will be blocked from borrowing until that date.