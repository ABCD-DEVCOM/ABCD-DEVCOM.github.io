---
title: Restricted Records (Access Control)
sidebar_label: Restricted Access
sidebar_position: 8
---

# Restricted Records Configuration

The **Restricted Records** module allows administrators to hide specific records from the general public, making them visible only to logged-in users with a specific permission level.

**Script:** `edit_restriction.php`
**File Created:** `bases/[db]/opac/[lang]/[db]_restriccion.tab`

## 1. Prerequisites (User Types)

This module relies entirely on the **User Categories** defined in the Central Module (ABCD Administrative Interface).

* **Source File:** `bases/users/def/[lang]/typeofusers.tab`
* **Requirement:** You must have user types defined (e.g., Student, Teacher, Researcher, Admin) with their respective security levels.
* **Troubleshooting:** If the "User Category" dropdown is empty, you need to configure the user types in the Central Module first.

## 2. Configuration Logic

The restriction works on a **"Trigger"** basis:
> *"If **Field X** contains **Value Y**, then the user must have **Level Z** to view it."*

### The Parameters

| Field | Description | Example |
| :--- | :--- | :--- |
| **Field Tag** | The numeric tag in the database that indicates the restriction status. | `900` (Local Note) |
| **Value** | The specific text string that triggers the restriction. | `Confidential` |
| **User Category** | The *minimum* user type required to view records matching the condition. | `Librarian (Adm)` |

## 3. Step-by-Step Configuration

1.  **Select the Field:** The system reads your FDT and lists available fields. Choose the one used for access control.
2.  **Enter the Value:** Type the exact text.
    * *Note:* The match is usually case-insensitive, but exact spelling is recommended.
3.  **Select the User:** Choose the user profile from the list.
4.  **Add/Save:** The rule is added to the list.

## 4. Practical Examples

### Scenario A: Embargoed Theses
You have a database of Theses where some are under embargo for 2 years.
* **Tag:** `500` (General Note)
* **Value:** `Embargoed`
* **User Category:** `Faculty / Staff`
* **Result:** Students and guests cannot see these records; only logged-in professors can.

### Scenario B: Administrative Documents
You keep internal reports in the same database as public books.
* **Tag:** `920` (Status)
* **Value:** `Internal Use`
* **User Category:** `System Admin`
* **Result:** Only administrators see these records.

## 5. Technical Details

The configuration is saved in a pipe-delimited file (`.tab`).

**File Structure:** `[db]_restriccion.tab`
```text
Tag|Value|UserLevelCode

```

**Example:**

```text
500|Embargoed|20
920|Internal|100

```

*(Where 20 and 100 are the internal codes for the user categories).*

:::info 
Multiple Restrictions
You can add multiple rules for the same database. The system checks them sequentially. If a record matches *any* restriction rule, the permission check is triggered.
:::

