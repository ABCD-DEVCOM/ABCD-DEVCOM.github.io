---
title: Reservations Database (reserve)
sidebar_label: Reservations
---

# Reservations Database (`reserve`)

This database manages the queue of reservations for items that are currently on loan or otherwise unavailable.

## Status Codes (Tag 1)
* **0**: Pending (User requested).
* **1**: Assigned (Copy returned and waiting for user).
* **4**: Loaned (Reservation fulfilled).
* **5**: Cancelled.

## Field Definition Table (FDT)

| Tag | Name | Description |
| :-- | :--- | :--- |
| **1** | Status | Current state of the reservation (see above). |
| **10** | User Code | ID of the patron making the request. |
| **12** | User Type | Category of the patron. |
| **15** | Database | Bibliographic database name. |
| **20** | Control Number | ID of the title being reserved. |
| **30** | Date Request | Date the reservation was placed. |
| **31** | Time Request | Time the reservation was placed. |
| **40** | Wait Limit | Date until the reservation is held (if assigned). |
| **60** | Assignment Date | Date a copy became available for this user. |
| **130**| Cancel Date | Date the reservation was cancelled. |