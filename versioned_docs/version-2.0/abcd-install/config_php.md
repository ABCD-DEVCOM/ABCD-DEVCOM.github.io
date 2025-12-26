---
sidebar_position: 4
title: Configuring config.php
---

# Configuring `config.php`

Properly configuring the `config.php` file is an **essential** step after installation. This file tells ABCD where to find its core components, including the databases and the executables required to manage them. Without this configuration, the system will not work.

This guide covers the minimum required configuration to get your ABCD instance up and running based on the provided template file.

### Step 1: Create `config.php` from the Template

First, you must create the `config.php` file from the template provided in the installation package.

1.  Navigate to the `[YOUR_ABCD_PATH]/www/htdocs/central/` directory.
2.  Locate the file named **`config.php.template`**.
3.  Make a copy of this file and rename the copy to **`config.php`**.

This new `config.php` file is what the system will use, and it will not be overwritten by future updates.

### Step 2: Define the Installation Paths

Open the newly created `config.php` file in a text editor. The most critical section is the block that defines the main system paths, which differ for Windows and Linux installations.

The script attempts to automatically detect the operating system, but **you must verify that these paths are correct for your environment**. An incorrect path here is the most common cause of installation failure.

Based on the template file, here are the default values you need to check:

```php
// Set operation system depending variables
if (stripos($_SERVER["SERVER_SOFTWARE"],"Win") > 0) {
        // Windows variables
	$ABCD_path="/ABCD/"; // base path to ABCD-installation
 	$db_path="/ABCD/www/bases/";     // path where the databases are to be located
 	$exe_ext=".exe"; // extension for executables
}else{
        // Linux variables
 	$ABCD_path="/opt/ABCD/"; // base path to ABCD-installation
 	$db_path="/var/opt/ABCD/bases/"; // path where the databases are to be located
 	$exe_ext=""; // extension for executables
}
```

* **`$ABCD_path`**:The base installation path for ABCD. The default for Linux is `/opt/ABCD/`. For Windows, it's `/ABCD/`.

* **`$db_path`**:  The absolute path to the folder where your databases are stored. The default for Linux is `/var/opt/ABCD/bases/`. For Windows, it's `/ABCD/www/bases/`.

**Action:** Adjust these paths to precisely match your server's directory structure. Forgetting to do this is a very common installation error.

### Step 3: Emergency Login (For Maintenance Only)

At the end of the `config.php` file, you will find variables for an emergency login.

```php
$adm_login="";                     // emergency username for administrator
$adm_password="";                  // emergency password for administrator
```
What it does: If you ever get locked out of your system, you can temporarily set a username and password here to gain administrator access and fix the issue.

Action: For normal operation, leave these variables empty. Only use them for emergency maintenance, and clear them immediately after you have resolved the access issue to keep your system secure.

---

After saving these changes, your ABCD Central Module should be correctly configured and fully operational. Other configurations like language and timezone are managed through the abcd.def file, not directly in config.php.