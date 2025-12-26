---
title: Common Questions
sidebar_label: Common Questions
---

# Frequently Asked Questions

## General Usage

### How do I print a barcode for just one book?
You don't need to run a batch print.
1.  Enable `barcode1reg=Y` in your `dr_path.def`.
2.  Open the record in Data Entry.
3.  Click the **Barcode Icon** in the toolbar.

### Can I copy terms from the Thesaurus into a subfield?
**Limitation:** The standard Thesaurus helper copies the term into the *active field*.
**Workaround:**
1.  Click the field (e.g., 650) to activate it.
2.  Select the term from the Thesaurus.
3.  Manually add the subfield delimiter (e.g., `^x`) if needed *before* or *after* the copied text.
* *Note:* You cannot "target" a specific subfield box in the helper popup directly.

### How do I change the logo on the login screen?
Replace the file located at:
* `/htdocs/central/images/logo.png` (or check `abcd.def` for the specific filename configured in `logo_img`).

## Passwords & Security

### I forgot the Administrator password. How do I reset it?
If you have access to the server files:
1.  Navigate to `/bases/acces/data/`.
2.  The users are stored in the `acces` database.
3.  You can use the **MX** command line tool to manually reset a password, or replace the `acces.mst/xrf` files with a backup where you knew the password.