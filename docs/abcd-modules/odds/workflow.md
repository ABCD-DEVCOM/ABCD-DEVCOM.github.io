---
title: Usage Workflow
sidebar_label: Usage Workflow
sidebar_position: 3
---

# ODDS Workflow

## 1. The User Request
1.  **Access:** The user accesses the ODDS form (usually via the OPAC).
2.  **Identification:** The user enters their details (Name, Email, ID).
3.  **Item Details:**
    * **Bibliographic Data:** Title/Author (often pre-filled from the catalog).
    * **Specifics:** The user must specify the **Year**, **Volume**, **Issue**, and **Page Numbers** required.
4.  **Submission:** Clicking "Submit" sends the request to the library.

## 2. Staff Processing
(Depending on how `process_odds.php` is configured in your version)

* **Email Notification:** The librarian receives an email with the request details.
* **Database Entry:** The request may be logged in a specific ABCD database (e.g., `trans` or `copies`).

## 3. Delivery
1.  Staff locates the physical item.
2.  Staff scans the requested pages (respecting copyright laws).
3.  Staff sends the digital file to the user's email address provided in the request.

