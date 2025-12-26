---
title: Reports & Notifications
sidebar_label: Reports & Notices
sidebar_position: 6
---

# Reports and Notifications

The Circulation module includes a flexible report generator located in the **Reports** (or "Print") menu. This tool allows librarians to generate lists of loans, overdue items, fines, and reservations, and subsequently export them or send them via email.

## 1. Generating a Report

Access: **Circulation > Reports** (The printer icon).

The interface is dynamic and organized by database:
* **Trans:** Current loans and active transactions.
* **Suspml:** Suspensions and fines history.
* **Reserve:** Active reservations.

### Filtering Options
Depending on the report selected from the list, the system may ask for parameters:
* **Date:** Use the calendar icon to select a specific date or range.
* **User Type:** Filter specific categories (e.g., Only "Students").
* **Item Type:** Filter specific materials (e.g., Only "DVDs").
* **Search Expression:** Use the advanced search box to filter manually (e.g., `NB=M` to find only Male users, if indexed).

## 2. Exporting Data
Once the report parameters are defined, you can choose the output format using the buttons in the "Send to" section:

| Button | Function |
| :--- | :--- |
| **Display** (Eye) | Shows the report on the screen (HTML). |
| **Excel** (TB) | Downloads the data as a `.xls` file (Tab-delimited) for statistical analysis. |
| **Word** (WP) | Downloads the report as a `.doc` file, ideal for printing official letters. |

## 3. Email Notifications (Claims)
One of the most powerful features of this module is the ability to send **Batch Email Notifications**, such as overdue notices (claims).

### Prerequisites
1.  **Email Configuration:** SMTP must be configured in **Central Settings**.
2.  **Report Format:** The selected report (PFT) must extract the user's email address.

### Sending Process
1.  Generate a report that lists overdue items (e.g., "Overdue Loans").
2.  Select **Display** (Screen view).
3.  If the system detects email addresses and the email feature is enabled in `config.php`, a **"Send Email"** button (or "Generar Correos") will appear at the top.
4.  **Select Recipients:** You can check/uncheck specific users from the list.
5.  **Send:** Click **Generate Emails**. The system uses the `correos.php` script to dispatch messages individually using the configured template.

## 4. Customizing Reports (`outputs.lst`)
The list of available reports is not hardcoded. It is defined in a text file that you can edit to add your own PFT formats.

**File Location:** `bases/trans/pfts/[lang]/outputs.lst`

**Format:**
```text
Code|PFT_Filename|Headings|Sort_Tag|Expression|Description|Filter_Type

```

* **PFT_Filename:** The name of the script (e.g., `overdue.pft`) located in the same folder.
* **Filter_Type:** Can be `DATE`, `USERTYPE`, or `ITEMTYPE` to trigger the automatic filter menus.
