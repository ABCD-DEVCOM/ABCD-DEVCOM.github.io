---
sidebar_position: 5
title: Authentication & System
description: Scripts handling user login, permissions, and system administration.
---

# Authentication & System Scripts

These scripts manage the entry points to the system, verifying user credentials and loading session permissions.

## 1. User Login (`login.xis`)

The gatekeeper of the ABCD Central module.

* **File:** `wxis/login.xis`
* **Primary Task:** `<do task="search">` (on the Users database)
* **Logic:**
    1.  Receives `login` and `password` from the HTML form.
    2.  Searches the **Users Database** (often located at `bases/access/users` or similar).
    3.  Query usually looks like: `(v20="USERNAME")`.
    4.  **Verification:** It compares the stored password (field v30) with the provided password.
    5.  **Session:** If successful, it generates a "cookie" or session ID string (often combining date + random number) and returns the main menu structure.

**Relation to IsisScript Reference:**
* Uses [`<do task="search">`](../reference/do#do-task-search) to find the user.
* Uses [`<pft>`](../reference/pft) to validate the password comparison conditionally.

## 2. Administration Tasks (`administrar.xis`)

Handles backend administrative requests, often acting as a router for creating new databases or managing paths.

* **File:** `wxis/administrar.xis`
* **Usage:** This script is often called when entering the "Database Administration" menu. It checks if the current user has the `adm` profile before allowing access to sensitive tools (like `fullinv` or `delete`).

## 3. Permissions & CIPRES (`cipres.xis`)

"CIPRES" is a legacy acronym (Circulation/Prestamos) often associated with granular permission handling in ABCD.

* **File:** `wxis/cipres.xis` (and `cipres_usuario.xis`)
* **Function:** Used to validate if a specific user has rights to perform a specific action (e.g., "Can User X delete records in Database Y?").
* **Mechanism:** It reads the user's profile string (which contains formatted permission codes) and validates it against the requested operation.

## 4. LDAP Login (`loginLDAP.xis`)

An alternative to the standard login, designed to authenticate against an LDAP server (Active Directory, OpenLDAP).

* **File:** `wxis/loginLDAP.xis`
* **Logic:** Instead of searching a local Isis database for the password, this script acts as a wrapper to pass credentials to an external authentication provider (via PHP integration or specialized WXIS extensions if available).