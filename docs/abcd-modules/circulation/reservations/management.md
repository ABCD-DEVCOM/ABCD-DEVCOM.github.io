---
title: Workflow & Management
sidebar_label: Management Workflow
sidebar_position: 2
---

# Reservations Management

Once configured, the reservation system runs mostly automatically during the standard Check-in (Return) process. However, administrators can monitor and manage the queue manually.

## 1. The Reservation Lifecycle

### Step 1: Placing the Hold
* **Via OPAC:** A logged-in user searches for a book, sees it is "On Loan", and clicks **Reserve**.
* **Via Staff:** An operator can place a reserve for a user through the **Circulation > Reserve** menu if the user is present or calls via phone.

### Step 2: The Return (Trigger Event)
The most critical step happens at the Circulation Desk.
1.  A patron returns a book that has a waitlist.
2.  The operator scans the barcode in the **Return** module.
3.  **System Alert:** A popup appears: *"This item is reserved for [User Name]"*.
4.  **Action:** The operator clicks **Confirm** to print the slip and set the item status to **"On Hold"** (waiting pickup).
5.  **Notification:** The system automatically sends the "Item Available" email to the user.

### Step 3: Pickup (Loan)
1.  The requesting user arrives to collect the book.
2.  The operator performs a standard **Loan**.
3.  The system links the reservation to this loan and clears the hold from the queue.

## 2. Managing the Queue
Sometimes users cancel requests or permissions change. You can manage active reservations manually.

**Access:** **Circulation > Reserves > Database Manager**

* **Browse:** View all active reservations ordered by date or title.
* **Cancel:** Select a reservation and delete it. This is necessary if a user says they no longer need the item.
* **Reorder:** In some versions, you can adjust the priority of users in the queue.

## 3. Maintenance: Expired Reservations
If a user does not pick up their book within the designated time (e.g., 2 days), the item should go to the next person or back to the shelf.

**Script:** `Cleanup / Expired Holds`
* This utility (available in the Maintenance menu) checks the "Hold Date" against the system date.
* If the pickup period has passed, it cancels the reservation and updates the status to "Available" (or notifies the next user).

:::tip Best Practice
Run the **Expired Holds** routine daily to prevent books from sitting on the hold shelf indefinitely.
:::