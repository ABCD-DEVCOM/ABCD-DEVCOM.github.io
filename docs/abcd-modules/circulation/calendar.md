---
title: Calendar and Holidays
sidebar_label: Calendar & Holidays
sidebar_position: 2
---

# Calendar configuration

To calculate due dates and fines correctly, ABCD needs to know when the library is closed.

**Access:** **Circulation > Parameters > Calendar**

## How it Works
When a loan is issued:
1.  The system adds the "Loan Period" to the current date.
2.  It checks the Calendar.
3.  If the calculated due date falls on a **Holiday** or a **Closed Day** (e.g., Sunday), the system pushes the due date to the *next open day*.

## Configuring the Calendar
The interface shows a yearly view.

1.  **Weekly Days Off:** Click on the headers (Sun, Mon...) to mark a specific day of the week as permanently closed (Red).
2.  **Specific Holidays:** Click on individual dates (e.g., December 25th) to toggle them as holidays.
3.  **Save:** Click the save/update button to write the calendar file.

:::warning Fines Calculation
If you do not configure holidays, the system will charge fines for Sundays and holidays if a book is overdue. Always update the calendar at the start of the year.
:::