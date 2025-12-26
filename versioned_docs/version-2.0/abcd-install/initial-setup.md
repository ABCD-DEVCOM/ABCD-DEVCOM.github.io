---
sidebar_position: 5
title: Initial Setup and Next Steps
---

# Initial Setup and Next Steps

After completing the technical installation of ABCD, there are some crucial configuration steps that should be performed before starting to use the system in production. These steps ensure the security and personalization of your instance.

### 1. Change Administrator Passwords (Critical)

The first and most important action is to change the default passwords. These credentials are public, and keeping the default passwords is a major security risk.

**Access the Central Module:**
* **URL:** `http://localhost:9090` (or your server's address)
* **User:** `abcd`
* **Password:** `adm`

**How to change:**
1.  In the main menu, under the **Administration** section, click on **User administration**.
2.  Select **User administration** again.
3.  You will see a list of operators. Click the edit icon (pencil) next to the **abcd** user.
4.  In the form, set a new secure password in the "Password" and "Confirm password" fields.
5.  Click **Save**.

**Access the Site Administration:**
* **URL:** `http://localhost:9090/site/admin`
* **User:** `adm`
* **Password:** `x`

**How to change:**
1.  In the site administration menu, under the **Access** section, click on **Users**.
2.  You will see the **adm** user. Click the edit icon next to the user.
3.  Set a new password and save.


### 2. Customize the Institution's Identity

You can customize the look and feel of ABCD with your institution's name and logo.

**In the Central Module:**
1.  Access the Central Module as an administrator.
2.  Go to **Administration** &rarr; **ABCD Configuration** &rarr; **System settings (abcd.def)**.
3.  Here you can change the texts that appear in the header and footer, as well as the logo.

**In the ABCD Site (Public Portal):**
1.  Access the Site administration (`/site/admin`).
2.  In the **Structure** menu, you will find several options to customize the portal:
    * **ABCD Logo:** Change the logo that appears at the top of the site.
    * **Identification:** Change the site name that appears in the header.
    * **Responsible institution:** Edit the contact information that appears in the footer.

### 3. Create Profiles and Operators

Before the team starts cataloging, it is good practice to create access profiles and individual user accounts.

1.  **Create Profiles:** Go to **User administration** &rarr; **Create/edit profiles** and define the permission levels (e.g., "Cataloger", "Circulation Operator").
2.  **Create Users:** Under **User administration**, create an account for each team member, assigning them the appropriate profile.