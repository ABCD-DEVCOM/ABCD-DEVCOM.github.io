---
title: Suspensions Database (suspml)
sidebar_label: Suspensions & Fines
---

# Suspensions Database (`suspml`)

The **suspml** database records sanctions applied to users, such as monetary fines or suspension of loan privileges.

## Field Definition Table (FDT)

| Tag | Name | Description |
| :-- | :--- | :--- |
| **1** | Record Type | Defines if it is a Suspension or a Fine. |
| **10** | Status | Active or Resolved (Paid/Expired). |
| **20** | User Code | ID of the sanctioned patron. |
| **30** | Date | Date the sanction was applied. |
| **40** | Reason | Reason for the sanction (e.g., "Overdue return"). |
| **50** | Days/Amount | Number of suspension days or amount of money owed. |
| **100**| Reference | Details of the item that caused the sanction. |