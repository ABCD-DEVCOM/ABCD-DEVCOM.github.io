---
title: Acquisitions Overview
sidebar_label: Overview
sidebar_position: 1
---

# Acquisitions Overview

The **Acquisitions Module** manages the complete procurement cycle of library materials. Unlike simple lists of purchases, ABCD implements a structured workflow designed to track an item from a user's initial request to its physical arrival on the shelf.

## The Workflow Cycle

The module is redesigned around a 5-step lifecycle:

1.  **Suggestions:** Users or librarians propose items. These enter a "Pending" pool.
2.  **Bidding & Decision:** Administrators review suggestions, request quotes (bidding), and make a formal **Decision** to purchase.
3.  **Creation of Order:** Approved items are grouped into **Purchase Orders (PO)** linked to a specific Provider.
4.  **Receiving:** When boxes arrive, staff check items against the PO to ensure quantity and quality.
5.  **Integration:** Received items are automatically converted into inventory records (`copies`), making them available for Cataloging and Circulation.

## Core Databases
To support this flow, the module uses specific databases:
* **`suggestions`**: Stores requests and their status history.
* **`providers`**: Stores vendor contact details.
* **`acq` (or similar):** Stores the purchase orders and financial data.