---
sidebar_position: 2
title: User Management
---

# User Management

Effective user management is a cornerstone of system security and operational integrity. In ABCD, this involves controlling who can access the Central Module and what actions they are permitted to perform. This is managed through a clear and powerful system of **Operators** and **Access Profiles**.

All user and permission data is stored in the `acces` database.

### The Two-Layer System: Profiles and Operators

ABCD uses a two-layer approach to permissions that is both flexible and easy to manage:

1.  **Access Profiles:** Profiles are collections of permissions. Instead of assigning dozens of individual permissions to each user, you create a profile (e.g., "Senior Cataloger") and define all the permissions that role requires (e.g., can create, edit, and delete bibliographic records, but cannot access circulation).

2.  **Operators:** Operators are the individual user accounts. Each operator is assigned a single profile, which instantly grants them all the permissions associated with that role. If a policy changes, you only need to update the profile, and the change will automatically apply to all operators assigned to it.

### Managing Access Profiles

From a system administration perspective, defining clear profiles is the most critical step.

* **Location:** **Administration** → **User administration** → **Create/edit profiles**.
* **Action:** Create profiles that logically match the job roles in your institution. It is better to start with more restrictive permissions and add more as needed. You can create, edit, or delete profiles from this menu.

### Managing Operators

Once profiles are established, creating and managing individual user accounts is straightforward.

* **Location:** **Administration** → **User administration** → **User administration**.
* **Action:**
    * **Create:** Use the "New" button to create a new operator. You must provide a login, name, a secure password, and assign one of the predefined profiles.
    * **Edit:** Modify an existing user's details, such as their name or assigned profile. This is also where you reset passwords for users who have forgotten them.
    * **Delete:** Remove an operator who no longer requires access to the system.

Regularly auditing the list of operators and their assigned profiles is a recommended security practice.

***

This concludes the **System Administration** section based on the structure we defined.