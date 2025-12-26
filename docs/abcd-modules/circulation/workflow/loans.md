---
title: Loans and Returns (Desk Operations)
sidebar_label: Loans & Returns
sidebar_position: 1
---

# Loans and Returns Workflow

The Circulation Desk interface is the operational hub of the library. It is designed for speed and efficiency, allowing operators to handle transactions—loans, returns, and renewals—using a barcode scanner with minimal keystrokes.

**Access:** **Circulation > Loan**

## The Interface Layout

The main transaction screen is divided into three logical areas:

1.  **User Identification (Top Left):** Search box to find the patron.
2.  **User Information (Top Right):** Displays the patron's profile, photo, and status flags.
3.  **Transaction Area (Bottom):** Where items are scanned and listed.

---

## 1. Issuing an Item (Check-out)

The loan process is the most common transaction.

### Step 1: Identify the User
* **Scan:** Scan the user's ID card in the search box.
* **Search:** If they don't have a card, click the **Search** icon (magnifying glass) to find them by name.

**Status Check:**
The system immediately validates the user against the database.
* **Green:** User is clear to borrow.
* **Red Alert:** Stops the transaction if:
    * Membership has expired.
    * User is suspended.
    * User has outstanding fines.
    * User has overdue items.

### Step 2: Identify the Item
Once the user is loaded, the focus automatically moves to the **Item Barcode** field.
1.  **Scan:** Scan the book's barcode (Inventory Number).
2.  **Process:** Press **Enter** or click **Loan**.

### Step 3: Policy Validation
In the background, ABCD consults the **[Loan Policy](../configuration/policies)** to:
* Verify if this user type can borrow this item type.
* Check if the user has reached their maximum item limit.
* Calculate the due date based on the calendar.

If approved, the item appears in the list below with its new **Due Date**.

---

## 2. Returning an Item (Check-in)

The return process is streamlined; you do not need to identify the user first.

1.  **Select Mode:** Choose **Return** from the transaction menu (or scan a "Return" command barcode if configured).
2.  **Scan Item:** Scan the book's barcode.
3.  **System Action:**
    * The system identifies the active loan and marks it as returned.
    * **Fines:** If the item is late, a popup alerts the operator with the calculated fine amount.
    * **Reservations:** If the item is reserved by another user, an alert triggers: *"Reserved for [User Name]"*, instructing staff to set it aside.

---

## 3. Renewing a Loan

Renewals extend the due date for users who need more time.

1.  **Identify the User:** Load the user's profile as you would for a loan.
2.  **View Items:** The screen lists all items currently held by the user.
3.  **Select:** Click the checkbox next to the item(s) to renew.
4.  **Process:** Click **Renew**.

**Validation:**
The system checks the policy again to ensure:
* The item has not exceeded the **Maximum Renewals** count.
* The item is not reserved by another user (which usually blocks renewal).

---

## 4. Account History

From this same interface, operators can verify the patron's standing without leaving the desk:
* **Statement:** View outstanding fines or debts.
* **History:** View a log of previously borrowed and returned items (if history tracking is enabled).