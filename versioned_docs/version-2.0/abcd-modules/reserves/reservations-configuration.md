---
sidebar_position: 1
title: Reservations Configuration
---

# Reservations Configuration

The Reservations module allows users to place a hold on an item that is currently on loan to someone else. The system manages a queue for the reserved item, and when it is returned, the first user in the queue is notified that it is available for pickup.

Before this feature can be used, it must be properly configured by an administrator.

### Enabling Reservations in the Loan Policy

The ability for a user to reserve an item is not universal; it is a privilege defined in the **Loan Policy**.

1.  Navigate to **Circulation** → **Configuration** → **Loan Policy**.
2.  In the policy matrix, you must set the **Reservations** option to **"Yes"** for each specific combination of User Type and Item Type that you want to be reservable.

For example, you can allow `Faculty` to reserve `DVDs`, but prevent `Undergraduate` users from doing so. If this option is not enabled, the reserve button will not appear for that user/item combination in the public catalog.

### Core Reservations Database (`reserve`)

All active reservations are stored and managed in a dedicated database, typically named `reserve`.

Like the other circulation databases (`users`, `trans`), the `reserve` database must be created, and its path must be correctly specified in the main **Circulation → Configuration** screen so the system can locate and use it.

### Configuring User Notifications

A critical part of the reservation workflow is automatically notifying users about the status of their requests. These email notifications are controlled by customizable templates written in the **ISIS Formatting Language (PFT)**.

An administrator needs to configure PFTs for different types of notifications, such as:

* **Reservation Confirmation:** An email sent to the user immediately after they place a reservation.
* **Item Available for Pickup:** An email sent to the next user in the queue when a reserved item is returned to the library. This email typically informs the user that they have a limited time to pick up the item.
* **Reservation Cancellation:** An email notifying the user if their reservation has been canceled (e.g., because the pickup period expired).

These PFTs can be customized to include details like the user's name, the item's title, and the pickup deadline, providing a professional and clear communication channel.

### Enabling Reservations in the Public Catalog (OPAC)

Finally, for users to be able to make reservations, the feature must be enabled in the public-facing catalog (OPAC / iAH). This typically involves configuring the item display page to show a "Reserve" button for items that are currently on loan and are eligible for reservation according to the loan policy.