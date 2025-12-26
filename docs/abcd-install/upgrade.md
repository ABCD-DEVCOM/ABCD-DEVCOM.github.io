---
sidebar_position: 6
sidebar_label: 'Upgrade Guide'
sidebar_custom_props:
  myEmoji: 🔃
---

# Upgrade Guide

There are two ways to upgrade ABCD: using the **Update Manager** (for recent versions) or manually (for legacy versions).

## Method 1: Update Manager (Recommended)
Starting from version 2.3.4, ABCD includes an interactive update tool.

1.  Go to: `<your-abcd-url>/update_manager.php`
2.  Alternatively, click **Check for Updates** in the footer of the Central module home page (if the yellow notification appears).
3.  Follow the on-screen instructions. The system will download differences from GitHub and apply them.

:::info Requirement
The `php-zip` extension must be installed, and the web server must have write permissions on the `htdocs` folder.
:::

## Method 2: Manual Upgrade (Legacy Installations)
If you are upgrading from a very old version, follow these steps:

1.  **Backup:** Create a full backup of your `bases` and `htdocs` folders.
2.  **Preserve Configuration:**
    * Do **not** overwrite your `htdocs/central/config.php` if you have customized it.
    * If the new package only provides `config.php.template`, compare it with your current file and add new variables if necessary.
3.  **Replace Files:**
    * Replace the `htdocs` and `cgi-bin` folders with the files from the new version.
    * **NEVER** overwrite the entire `bases` folder, or you will lose your data. Only add new example databases if desired.

### Cleaning Old Scripts
In very old versions, some PFT files contained embedded JavaScript that causes conflicts with modern browsers.

**1. File: `bases/www/epilogoact.pft`**
Remove the script block that sets `top.mfn`. The entire `<script> ... </script>` block should be deleted from this file.

**2. File: `bases/www/prologoact.pft`**
Update the path to the highlight library.
* **Change:** `<script ... src="/iah/js/highlight.js">`
* **To:** `<script ... src="/central/dataentry/js/highlight.js">`
