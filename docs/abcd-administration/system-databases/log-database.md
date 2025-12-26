---
title: System Log Database (log)
sidebar_label: System Log
---

# System Log Database (`log`)

The **Log Database** acts as the internal audit trail for ABCD. It records system-wide events such as user logins, database updates, and operational errors.

## Location
* **Standard Path**: `/bases/log/log`
* **Path in `dbn.par`**: Usually defined simply as `log`.

## Structure Overview

Unlike bibliographic databases, the Log database is automatically populated by the system scripts.

| Tag | Name | Description |
| :-- | :--- | :--- |
| **10** | **Date** | Format: YYYYMMDD |
| **20** | **Time** | Format: HH:MM:SS |
| **30** | **Operator** | The username (login) who performed the action. |
| **40** | **Database** | The database code affected (e.g., `books`, `users`). |
| **50** | **MFN** | The Master File Number of the record affected. |
| **60** | **Action** | Code or description of the action (e.g., `LOGIN`, `NEW`, `UPDATE`). |
| **90** | **IP Address** | The IP address of the client machine. |

## Usage
Administrators can browse this database to:
1.  Trace which operator modified a specific record.
2.  Investigate failed login attempts.
3.  Generate usage statistics.