---
title: MyABCD (User Portal)
sidebar_label: MyABCD (User Portal)
sidebar_position: 1
---

# MyABCD (User Portal)

**MyABCD** is the personalized section of the OPAC where library patrons can manage their account. It empowers users to perform tasks that traditionally required a visit to the desk.

## Accessing MyABCD
On the OPAC header, users click **Sign In** (or "My Account").
* **Login:** User ID (from the Users database).
* **Password:** Initially assigned by the library.

## Features

### 1. Current Loans & Renewals
Users can see a list of everything they currently have borrowed.
* **Status:** Shows due dates and days remaining.
* **Renew:** If allowed by the policy (see [Loan Policies](../configuration/policies)), a **Renew** button appears next to the item.
    * *Restrictions:* Users cannot renew if the item is reserved by someone else, if they have fines, or if they reached the max renewal limit.

### 2. Reservations (Holds)
If a book is checked out, logged-in users can place a reservation.
* Search for the book in the OPAC.
* Click **Reserve**.
* The system adds the user to the queue.
* When the item is returned, the circulation staff receives an alert to set it aside.

### 3. Account History
Users can view:
* **Loan History:** Everything they have read in the past.
* **Fine Statement:** Outstanding debts or payment history.

:::info Configuration
To enable MyABCD features, you must ensure the `users` database allows web login and that the **OPAC Configuration** (`opac.def`) has the parameter `allow_user_login=Y`.
:::