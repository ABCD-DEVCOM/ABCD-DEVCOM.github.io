---
sidebar_position: 2
title: Loan Policy
---

# Loan Policy

The **Loan Policy** is the heart of the Circulation module. It's a comprehensive set of rules that determines who can borrow what, for how long, and under what conditions. A properly configured loan policy automates the lending process, ensures consistency, and enforces the library's regulations without manual intervention by the circulation staff.

### The Loan Policy Matrix

The policy is structured as a matrix that cross-references **User Types** with **Item Types**. By defining rules at the intersection of these two categories, you can create a highly granular and flexible lending system.

* **User Types:** These are the different categories of your library's patrons. For example: `Undergraduate`, `Graduate Student`, `Faculty`, `Community Member`. These types are defined when you create records in the `users` database.
* **Item Types:** These are the different categories of materials in your collection. For example: `General Collection`, `Reference`, `DVDs`, `Periodicals`. These types are defined in the record for each loanable object (in the `copies` or `loanobjects` database).




### Configuring the Rules

To configure the policy, you navigate to **Circulation** → **Configuration** → **Loan Policy**. The system will display the matrix. By clicking on any cell, you can define the specific lending rules for that combination of user and item.

For each rule, you can specify:
* **Loan Period:** The number of days the item can be borrowed.
* **Renewal Limit:** The maximum number of times a user can renew the loan.
* **Grace Period:** The number of extra days after the due date before fines are applied.
* **Fine:** The daily monetary penalty for an overdue item.
* **Maximum Items:** The total number of items this type of user can borrow at one time.
* **Reservations:** Whether users of this type are allowed to reserve items of this type.

For example, you could configure a rule stating that a `Faculty` member can borrow a `General Collection` book for `30` days and renew it `3` times, while an `Undergraduate` can only borrow the same book for `14` days and renew it once.

Once saved, this policy is automatically enforced by the system during all circulation transactions.