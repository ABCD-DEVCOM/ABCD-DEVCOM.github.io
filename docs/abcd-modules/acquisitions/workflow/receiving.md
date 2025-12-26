---
title: Receiving & Integration
sidebar_label: Receiving & Cataloging
sidebar_position: 4
---

# Receiving and Integration

The final stage of the Acquisitions workflow is receiving the physical items and transferring them to the library catalog. This step transforms an "administrative order" into "library inventory."

## 1. Receiving Items (Check-in)
**Access:** **Acquisitions > Receiving**

When the boxes arrive from the supplier, you must register their arrival against the Purchase Order.

1.  **Locate Order:** Search for the Purchase Order number (only "Closed/Pending" orders will appear).
2.  **Check-in List:** The system lists all items expected in that order.
3.  **Enter Data:**
    * **Quantity Received:** Enter the number of copies that actually arrived.
    * **Invoice No:** Enter the vendor's invoice number (Nota Fiscal) for audit purposes.
    * **Unit Price:** Adjust the price if it differs from the quoted amount.
4.  **Update:** Click **Update** to save. The items are now marked as "Received" in the acquisitions database.

## 2. Generating Inventory (The Bridge)
**Access:** **Acquisitions > Copies generation**

This is the most powerful feature of the module. Instead of manually cataloging the new books one by one, ABCD can automatically generate the inventory records for you.

### Database Selection
Depending on your library configuration, you will choose one of two paths:

* **Copies Generation (`copies`):** Use this if your library links items directly to bibliographic records (the standard method).
* **LoanObjects Generation (`loanobjects`):** Use this if you manage items in a standalone database.

### The Generation Process
1.  **Select Received Items:** The system shows a list of items that have been "Received" but not yet "Cataloged".
2.  **Define Inventory Numbers:**
    * You can let the system assign the next available Control Number automatically.
    * Or you can manually input the starting Inventory Number for the batch.
3.  **Execute:** Click **Generate**.

### Result
* The system creates new records in your inventory database (`copies` or `loanobjects`).
* The records are populated with the **Title**, **Author**, **ISBN**, **Provider**, **Price**, and **Acquisition Date** derived from the order.
* The items are immediately visible in the **Cataloging Module**, ready for technical processing (labeling and subject indexing).