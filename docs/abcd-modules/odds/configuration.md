---
title: Installation & Configuration
sidebar_label: Setup
sidebar_position: 2
---

# Setting up ODDS

Unlike the core modules, ODDS often operates as a standalone web form that needs to be integrated manually into your ABCD interface.

## 1. Location
Ensure the `odds` folder is located in your web server's document root (e.g., `/var/www/html/odds/` or `htdocs/odds/`).

## 2. Configuration Files
Check the `inc_odds_*.php` files for local settings.
* **`form_odds.php`**: This is the main entry point. You may need to edit it to point to your specific database paths if they are hardcoded.
* **`process_odds.php`**: Controls where the request data is saved (e.g., sending an email to the librarian or saving to a transaction database).

## 3. Integration with OPAC
To make ODDS accessible to users, you must add a link in your OPAC record view.

**Edit your PFT (e.g., `opac_expanded.pft`):**
Add a link that passes the record information to the ODDS form:

```pft
/* Link to ODDS with pre-filled Title */
'<a href="/odds/form_odds.php?title=', v245^a, '&mfn=', f(mfn, 1, 0), '" target="_blank">Request Chapter/Copy</a>'

```

This creates a seamless workflow where the user clicks the link and lands on the ODDS form with the book details already filled in.

