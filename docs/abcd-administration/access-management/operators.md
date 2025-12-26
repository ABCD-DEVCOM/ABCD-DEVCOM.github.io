---
title: User Management
sidebar_label: User Management
---

# User Management

Effective user management is essential for system security. In ABCD, access control is managed via two interacting components: **Operators** (the people) and **Profiles** (the permissions).

All user data is stored in the `acces` database.

## 1. Access Profiles

Before creating users, you must define what they can do. Profiles act as templates for permissions.

* **Path:** **Central > Administration > User administration > Create/edit profiles**

Instead of assigning permissions to each person individually, you create a profile (e.g., `loan_operator`) and assign it to multiple users. If you update the profile, all associated users are updated instantly.

:::tip Strategy
Create strict profiles. It is better to have a `cataloger` profile that *only* accesses the Cataloging module than to give everyone the `adm` (Administrator) profile.
:::

## 2. Managing Operators

Operators are the individual accounts used to log in to the system.

* **Path:** **Central > Administration > User administration > User administration**

### Creating a New Operator

To create a new account, click **New user** and complete the following fields:

#### Essential Fields
* **Username**: The login ID. Case sensitive (e.g., `maria`). **Avoid spaces or special characters.**
* **Full name**: The real name of the staff member (e.g., `Maria Silva`).
* **Profile**: Select the authorization level defined in the previous step.
* **Password**: Define the initial password.
* **Confirm password**: Retype to validate.

#### Advanced Configuration
* **Library Code**: Critical for multi-branch libraries. Restricts the operator to managing copies owned by a specific branch (e.g., `MAIN`, `MED`).
* **Cataloger Code**: A short code (e.g., `MS`) recorded in the database logs (typically field 900) to audit who created or modified a record.
* **Expiration Date**: YYYYMMDD format. The account effectively locks after this date. Useful for temporary staff or students.

### Maintenance Tasks

* **Reset Password**: If a user forgets their password, edit their record here. You cannot see the old password (it is encrypted), but you can overwrite it with a new one.
* **Deactivate User**: To remove access without losing the history of records created by that user, set an **Expiration Date** in the past (do not delete the record unless necessary).

:::danger Security Best Practice
Never share the generic `abcd` or `adm` accounts. Every staff member must have their own named account to ensure accountability in the system logs.
:::