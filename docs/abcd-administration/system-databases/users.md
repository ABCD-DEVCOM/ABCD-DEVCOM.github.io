---
title: Patrons Database (users)
sidebar_label: Patrons (Users)
---

# Patrons Database (`users`)

The **Users** database (often located in `/bases/users/` or shared with `/bases/acces/`) stores information about library patrons (borrowers).

:::note Distinction
Depending on the installation, this database might be the same as the System Operators database, or a separate one specifically for Circulation. This document describes the standard **Borrower** structure.
:::

## Common Structure

| Tag | Name | Description |
| :-- | :--- | :--- |
| **10** | User Code | Unique ID (Barcode/Matricula) used for loans. |
| **20** | User Type | Category (Student, Teacher, Researcher) linked to `typeofusers.tab`. |
| **30** | Name | Full name of the patron. |
| **35** | Gender | M/F. |
| **40** | Address | Physical address. |
| **90** | Email | Contact email for notifications. |
| **110**| Expiration Date | Date when the user membership expires. |
| **600**| Photo | Filename of the user's photo (e.g., `id.jpg`). |