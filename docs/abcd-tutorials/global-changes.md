---
title: Global Changes
sidebar_label: Global Changes
---

# Global Changes (Search & Replace)

The **Global Change** utility allows you to modify thousands of records at once. It is a powerful but dangerous tool used to fix typos, move data between fields, or delete specific tags.

**Access:** **Cataloging > Utilities > Global Changes**

:::danger Irreversible Operation
There is no "Undo" button. Always perform a **Backup (ISO Export)** of your database before running a global change.
:::

## The Interface

The form allows you to define exactly what to change and where.

### 1. Scope
* **Field**: Select the Tag you want to modify (e.g., `650 - Subjects`).
* **Search Context**:
    * **Global Change**: Apply to the entire database.
    * **Search**: Apply only to records matching a search expression (e.g., `PY=2020`).

### 2. Operation Type
* **Scope of modification**:
    * **Value**: Matches the *entire* content of the field.
    * **Sub-string**: Matches a *part* of the text within the field.
* **Case Sensitive**: Check this if "Apple" should be treated differently from "apple".

### 3. Actions
You define a **Search String** (what exists now) and a **Replace String** (what you want).

| Scenario | Search For | Replace With | Result |
| :--- | :--- | :--- | :--- |
| **Fix Typo** | `Computeer` | `Computer` | Fixes spelling errors. |
| **Delete Data** | `Obsolete Term` | (Leave Empty) | Removes the term. |
| **Add Data** | (Leave Empty) | `New Term` | Appends data (use with caution). |

## Splitting Fields
You can also split a field into two based on a delimiter.
* **Delimiter**: e.g., `--`
* **Action**: Move the second part to another field (e.g., `Tag 651`).

## Execution
1.  Click **Execute**.
2.  The system will process the records and show a log of changes.
3.  **Verify**: Immediately check a few records to ensure the change was correct.
