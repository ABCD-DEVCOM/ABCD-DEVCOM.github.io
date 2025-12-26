---
title: Loan Policies (The Matrix)
sidebar_label: Loan Policies
sidebar_position: 1
---

# Loan Policies (The Matrix)

The **Loan Policy** is the heart of the Circulation module. It defines the rules for every possible interaction between a user (patron) and an item (material).

A properly configured policy automates the lending process, ensuring consistency (e.g., stopping a student from borrowing a reference book) without manual intervention by the staff.

**Access:** **Circulation > Parameters > Loan Objects / Users / Items**

## 1. Defining Types (Categories)

Before setting rules, you must categorize your actors. ABCD uses codes to identify these groups.

### User Types
Define categories of borrowers based on their privileges.
* **Go to:** `Define user's types`.
* **Examples:**
    * `ST`: Undergraduate Student
    * `PG`: Postgraduate
    * `FC`: Faculty/Teacher
    * `EX`: External User

### Item Types
Define categories of materials based on how they circulate.
* **Go to:** `Define item's types`.
* **Examples:**
    * `LIV`: General Collection Book
    * `REF`: Reference (Not for loan)
    * `SER`: Serial/Periodical
    * `DVD`: Multimedia

:::info Linking to Catalog
These Item Type codes must match the values stored in your bibliographic records (usually in **Field 920** or specific holding fields defined in your database structure).
:::

## 2. The Configuration Matrix

Once types are defined, you link them in the Policy Matrix. This allows for granular control.

**Go to:** `Configure local/Policies`.

You will see a grid where you can set the following parameters for each pair (User Type + Item Type):

| Parameter | Description |
| :--- | :--- |
| **Limit** | Maximum number of items of *this specific type* the user can hold at once. |
| **Loan Period** | How long the loan lasts. Can be defined in **Days** or **Hours**. |
| **Renewals** | Maximum number of times the user can renew the loan. |
| **Reservations** | Allowed number of pending holds for this item type. |
| **Grace Period** | Number of extra days/hours after the due date before fines start accumulating. |
| **Fine per Day** | Monetary penalty charged for each unit of delay. |
| **Suspension** | Number of days the user is blocked from borrowing if they return this item late. |

### Practical Example
You can configure a rule stating that:
* A **Faculty (`FC`)** member borrowing a **General Book (`LIV`)** gets **30 days** and **3 renewals**.
* An **Undergraduate (`ST`)** borrowing the *same book* gets only **14 days** and **1 renewal**.

### General Limits
In addition to specific limits (e.g., "Max 3 DVDs"), you can set a **Global Limit** per user type.
* *Example:* A Student can borrow 3 Books and 2 DVDs, but the *Total Items* cannot exceed 4.