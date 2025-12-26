---
title: Profiles and Permissions
sidebar_label: Profiles & Permissions
sidebar_position: 3
---

# Profiles and Permissions

In ABCD, permissions are not defined checkbox-by-checkbox for every user. Instead, you define **Profiles** (Roles), and assign users to these profiles.

## How Profiles Work
A profile is essentially a list of authorized system functions. If a function is not listed in the profile, the menu option will not appear for that user.

Common examples of profiles included by default:
* **`adm` (System Administrator):** Has access to everything, including file editing and database creation.
* **`dbadmin` (Database Administrator):** Can manage database structures (FDT/FST) but cannot change system core files.
* **`operator` (Cataloger):** Can search and edit records but cannot delete databases or change structures.
* **`loan` (Circulation):** Can only access the Loan module.

## creating or Editing a Profile
1.  Go to **Administration > User administration**.
2.  Click on **Create/edit profiles**.

### The Profile Editor
The editor shows a tree view of all available system functions.

1.  **Select a Profile:** Choose an existing one to edit or type a new name to create one.
2.  **Grant Permissions:**
    * Browse the tree structure.
    * **Check** the boxes for the modules and functions this profile should access.
    * *Example:* For a "Student Assistant", you might only check **Cataloging > Data Entry** and uncheck everything else.
3.  **Save:** Click the save button to write the changes to the profile file.

:::tip File Location
Profiles are physically stored as text files in `bases/par/profiles/`. Advanced users can edit these files directly to create highly granular restrictions.
:::