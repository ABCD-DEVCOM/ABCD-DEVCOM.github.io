---
title: Access Control Database (acces)
sidebar_label: Operators (acces)
---

# Access Control Database (`acces`)

The **acces** database (often located at `/bases/acces/acces`) defines the **User Profiles** and permissions within the system. It interacts closely with the `users` database to determine what an operator can do after logging in.

## Purpose
While the `users` database stores the login (username/password), the `acces` database defines the **roles** (e.g., "Cataloger", "Administrator", "Loan Operator").

## Structure Overview

Each record in this database typically represents a **Profile**.

| Tag | Name | Description |
| :-- | :--- | :--- |
| **1** | **Profile Code** | The internal code used to link users to this profile (e.g., `adm`, `cat`). |
| **10** | **Profile Name** | Human-readable name (e.g., "System Administrator"). |
| **20** | **Module Access** | Defines which modules (Central, Circulation, Acquisitions) are visible. |
| **30** | **Database Access** | List of databases this profile can access. |
| **40** | **Permissions** | Granular permissions (e.g., `dataentry`, `dbadmin`, `stats`). |

:::info Security
This is arguably the most critical database for system security. It should be backed up regularly and restricted from general access.
:::