---
title: Purchase Orders (PO)
sidebar_label: Purchase Orders
sidebar_position: 3
---

# Purchase Orders (PO)

A **Purchase Order (PO)** is the formal document that the library sends to a supplier or vendor to order one or more items. In ABCD, this isn't just a text document; it's a structured object that links "Approved Suggestions" to a "Provider".

The Purchase Orders section allows you to group these approved items, assign them to a specific supplier, and track the order's status until the materials arrive.

## 1. The Purchase Order Lifecycle

1.  **Creation:** An operator generates a new PO for a specific provider.
2.  **Association:** Items that passed the **Decision** phase are selected and added to the PO.
3.  **Issuing (Closing):** The PO is finalized ("Closed"). It can now be printed or emailed to the vendor. Its status changes to "Pending".
4.  **Receiving:** When items arrive, they are marked as "Received" against this PO (covered in the **[Receiving](./receiving)** section).

## 2. Creating a New Order
**Access:** **Acquisitions > Purchase Order > New**

Unlike simple systems where you type items manually, ABCD pulls data from your decision workflow.

1.  **Select Provider:** Choose the vendor from the dropdown list.
    * *Note:* The system will **only** show providers who have items assigned to them in the **Decision** module. If your provider doesn't appear here, check if you have assigned items to them in the previous step.
2.  **Select Items:** You will see a list of all "Approved" suggestions linked to this provider. Check the boxes for the items you want to include in this specific order.
3.  **Define Header:** Fill in the administrative details:
    * **PO Number:** Can be auto-generated or manual.
    * **Budget Code:** Assign the fund source for financial tracking.
    * **Currency:** Define the payment currency.
4.  **Generate:** Click **Generate** to create the draft order.

## 3. Managing and Editing
**Access:** **Acquisitions > Purchase Order > Show/Update**

Until an order is sent, it remains editable.

* **Add/Remove Items:** You can modify the quantities or remove items if budget constraints arise.
* **Edit Header:** Change dates, budget codes, or notes.
* **Delete:** You can delete a draft PO. The items will return to the "Decision" pool, ready to be ordered again later.

## 4. Closing and Sending
**Access:** **Acquisitions > Purchase Order > Close** (or via the Update menu)

Once the draft is final, you must **Close** the order.

* **Action:** Clicking "Close" locks the order. You can no longer add items to it.
* **Status Change:** The order status moves from "Draft" (or Open) to "Pending".
* **Print/Email:** After closing, use the **Print** icon to generate the official PDF or the **Email** icon to send it directly to the provider's contact address.

:::info Next Step
Once the order is Closed/Sent, it becomes visible in the **[Receiving](./receiving)** module, waiting for the physical arrival of the boxes.
:::