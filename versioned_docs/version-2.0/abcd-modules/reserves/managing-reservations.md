---
sidebar_position: 2
title: Managing Reservations
---

# Managing Reservations

Once the reservation system is configured, library staff can manage the entire workflow from the Circulation module. This involves monitoring the reservation queue and processing items as they become available.

### The Reservation Management Interface

From the main circulation transaction screen, staff can access a dedicated interface to view and manage all active reservations. This view typically shows a list of all items with active holds and the corresponding queue of users waiting for each one.

From this screen, an operator with the correct permissions can:
* View the details of any reservation.
* See the order of users in a queue.
* Manually cancel a reservation if requested by a user or if a pickup period has expired.

### The Core Workflow: Processing a Returned Reserved Item

The most critical part of managing reservations occurs when a user returns an item that another user has reserved. ABCD streamlines this process to prevent the item from being re-shelved by mistake.

1.  **Item Return:** A staff member scans the barcode of a returned item in the **Return** transaction screen.
2.  **System Alert:** If the item has an active reservation, the system will immediately display an alert. This alert notifies the operator that the item is reserved and shows the name of the first user in the queue.
3.  **Process Hold:** The operator is prompted to confirm that they want to process the hold. Upon confirmation:
    * The system's internal status for the item is changed to "On Hold".
    * The pre-configured **"Item Available for Pickup" email notification** is automatically sent to the user who was waiting.
4.  **Physical Handling:** The staff member should set the item aside, typically on a dedicated "hold shelf," often with a printed slip indicating the user's name and the hold expiration date.

### Completing the Reservation

* **User Picks Up Item:** When the user arrives to collect their reserved item, the staff member retrieves it from the hold shelf and performs a standard **Loan** transaction. The system recognizes that the item is on hold for that specific user and finalizes the loan.
* **User Does Not Pick Up Item:** If the user does not collect the item before the hold period expires, the staff member can manually cancel the reservation from the management interface. The system will then either notify the next person in the queue or, if there is no one else waiting, the item's status will be changed back to "Available" for general circulation.