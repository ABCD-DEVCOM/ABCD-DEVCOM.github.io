---
title: Configuration & Policies
sidebar_label: Configuration
sidebar_position: 1
---

# Reservations Configuration

The Reservations module allows users to place a hold on items currently loaned to other patrons. When the item is returned, the system alerts the staff and notifies the requesting user.

Although functional logic resides in a specific source folder (`/reserve`), it is fully integrated into the Circulation policies.

## 1. Prerequisites
Before offering reservations, ensure:
1.  **Database:** The `reserve` database exists in your `bases` folder.
2.  **Integration:** The path to this database is correctly set in `dr_path.def` or the central configuration.
3.  **Items:** Users can generally only reserve items that are **currently checked out**.

## 2. Enabling in Loan Policy
Permission to reserve is not global; it is granted via the Policy Matrix.

1.  Go to **Circulation > Parameters > Configure local/Policies**.
2.  For each **User Type** (e.g., Student) and **Item Type** (e.g., Book), locate the **Reservations** column.
3.  Set the value to the maximum number of allowed pending holds (e.g., `3`).
    * *Set to `0` to disable reservations for that category.*

## 3. Email Notification Setup (Critical)
The workflow depends on notifying the user when their book is ready. This uses the `correo.ini` configuration found in the `reserve` directory.

**Configuration File:** `bases/reserve/pfts/en/correo.ini` (or your language folder).

You must define the PFT formats for the emails:
* **`apartado`**: Subject line for the email.
* **`fin_apartado`**: Body of the email confirming the reservation was placed.
* **`disponible`**: Body of the email sent when the book is returned and ready for pickup.

:::warning SMTP Server
Ensure your ABCD installation has a working SMTP configuration (configured in Central Settings) so these scripts can send messages.
:::

## 4. Public Access (OPAC)
To allow users to place holds themselves:
1.  Edit your **OPAC Configuration** (`opac.def`).
2.  Ensure `allow_user_login=Y`.
3.  Ensure the reserve parameter is enabled.
4.  Users will see a **Reserve** button next to unavailable items in the search results.