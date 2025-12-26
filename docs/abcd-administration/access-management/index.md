---
title: Access Management Overview
sidebar_label: Access Management
---

# Access Management

Security in ABCD is controlled by a relationship between **Operators** (who logs in) and **Profiles** (what they can do). This section guides administrators through configuring secure access to the system.

## Core Concepts

### 1. Profiles (Authorization)
Profiles act as templates for permissions. Instead of assigning rights to each user individually, you define a role (e.g., "Cataloger", "Loan Officer") and assign users to that role.
* **[Manage Profiles](profiles.md)**: Learn how to create and edit permission sets.

### 2. Operators (Authentication)
Operators are the actual user accounts. Each operator must be assigned to a valid profile to access the system.
* **[Manage Operators](operators.md)**: Learn how to create users, reset passwords, and restrict access by library branch.

:::tip Security Best Practice
Avoid using the generic `adm` or `abcd` accounts for daily work. Create individual accounts for every staff member to ensure actions can be traced back to a specific person in the system logs.
:::