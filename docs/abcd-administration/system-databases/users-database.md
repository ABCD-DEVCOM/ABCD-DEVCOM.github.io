---
title: Users Database (users)
sidebar_label: Users Database
---

# Users Database (`users`)

The **Users Database** (typically named `users`) is the central repository for operator authentication in ABCD. It stores the credentials required to log in to the Central module (Cataloging, Circulation, Acquisitions) and the Site Administration.

## Purpose

The primary functions of this database are:
1.  **Authentication**: Verifying username and password.
2.  **Authorization**: Linking a specific operator to a User Profile (defined in the `acces` database) to determine their rights.
3.  **Identification**: Storing the full name and code of the library/department the operator belongs to.

## Location

* **Path**: `/bases/acces/users/`
* **Master File**: `users.mst`
* **Cross-Reference File**: `users.xrf`

## Structure

The database structure typically includes fields for identification, security, and permissions.

:::info Technical Details
The exact Field Definition Table (FDT) tags may vary depending on the specific ABCD distribution or local customizations.
:::

### Common Fields

* **Login/Username**: The unique identifier used for logging in.
* **Password**: The encrypted or plain-text password (depending on configuration).
* **Validation Date**: Expiration date for the user's access.
* **User Profile**: Defines the level of access (e.g., `adm`, `oper`, `loan`).
* **Identification Number**: Personal ID or employee number.

## Maintenance

Administrators can manage this database via the **User Administration** menu in the Central module. Common tasks include:
* Adding new operators.
* Resetting passwords.
* Changing user profiles.
* Deactivating users.

For detailed instructions on managing users via the interface, see the [User Management](/docs/3.1/abcd-administration/access-management) guide.