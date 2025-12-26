---
sidebar_position: 3
title: Windows Installation Guide
---

# Windows Installation Guide

Installing ABCD in a Windows environment is most efficiently done using a web server package like XAMPP or WAMP. These packages install and pre-configure Apache and PHP, which are essential prerequisites for ABCD.

This detailed guide focuses on using these packages for a robust installation.

### Step 1: Setting Up the Environment (XAMPP/WAMP)

1.  **Install a Local Server:** Download and install a web server package. The most common options are:
    * **XAMPP:** [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html)
    * **WAMP:** [https://www.wampserver.com/en/](https://www.wampserver.com/en/)
    Follow the instructions of your chosen installer, using the default settings.

2.  **Enable Required PHP Extensions:** ABCD requires certain PHP extensions to be active. To enable them, locate and edit your `php.ini` file (in XAMPP/WAMP, you can usually access this through the program's control panel). Remove the semicolon (`;`) from the beginning of the following lines to uncomment them:
    ```ini
    extension=gd
    extension=mbstring
    extension=xsl
    extension=xmlrpc
    extension=yaz
    extension=curl
    extension=ldap
    extension=zip
    ```
    *If a line does not exist, add it. Save the file and **restart the Apache services** for the changes to take effect.*

### Step 2: Download and Prepare ABCD Files

1.  **Download the latest version of ABCD** from the official GitHub repository.
2.  **Unzip the downloaded file** into a temporary folder.
3.  Inside the unzipped folder, you will find several directories. Make the following changes to prepare the files for Windows:
    * Delete the `bases-examples_Linux` folder.
    * Rename the `bases-examples_Windows` folder to **`bases`**.
    * Delete the `cgi-bin_Linux` folder.
    * Rename the `cgi-bin_Windows` folder to **`cgi-bin`**.
    * The `extra`, `zz_installation`, and `zz_miscellaneous` folders can be deleted as they are not needed for execution.

You will now have three main folders ready for installation: `bases`, `cgi-bin`, and `htdocs`.

### Step 3: Configure Apache (Virtual Host)

To ensure Apache knows how to serve the ABCD files, it is highly recommended to configure a "Virtual Host". This isolates the ABCD configuration from other sites you might host.

1.  **Locate the example `vhost_ABCD_9090_Windows.conf` file** that came in the `zz_installation` folder of your download.
2.  **Copy this file** to your server's virtual hosts configuration folder. The location may vary:
    * **XAMPP:** `C:\xampp\apache\conf\extra\`
    * **WAMP:** `C:\wamp\alias\`
3.  **Edit the `vhost_ABCD_9090_Windows.conf` file** to ensure the paths are correct. The example file is pre-configured for a default structure (`C:\ABCD\www`), but you can adjust it if needed. Here is an example of the file's content:

    ```apache
    # Define the port and root path for easy relocation
    Define ABCD_PORT 9090
    Define ABCD_ROOT "/ABCD/www"

    Listen ${ABCD_PORT}
    <VirtualHost *:${ABCD_PORT}>
        ServerName abcd.localhost
        
        # Path to the ABCD PHP scripts
        DocumentRoot "${ABCD_ROOT}/htdocs"
        
        # Alias and permissions for the executables (cgi-bin)
        ScriptAlias /cgi-bin/ "${ABCD_ROOT}/cgi-bin/"
        <Directory "${ABCD_ROOT}/cgi-bin">
            AllowOverride None
            Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
            AddHandler cgi-script .cgi .exe
            Require all granted
        </Directory>

        # Alias for the databases folder
        Alias /docs/ "${ABCD_ROOT}/bases/"
        <Directory "${ABCD_ROOT}/bases/">
            Options -Indexes -FollowSymLinks +MultiViews
            AllowOverride None
            Require all granted
        </Directory>
        
        # Log files specific to this ABCD instance
        CustomLog ${ABCD_ROOT}/logs/access_${ABCD_PORT}.log combined
        ErrorLog  ${ABCD_ROOT}/logs/error_${ABCD_PORT}.log
    </VirtualHost>
    ```

4.  **Activate the configuration:** Open the main Apache configuration file (`httpd.conf`) and ensure the line that includes the virtual host files is active (with no `#` at the beginning).
    ```apache
    # Virtual hosts
    Include conf/extra/httpd-vhosts.conf
    ```

### Step 4: Copying Files and Finalizing Installation

1.  **Create the final folder structure:** As defined in the Virtual Host file, create the following directory structure on your disk: `C:\ABCD\www`.
2.  **Copy the ABCD folders** (prepared in Step 2) into `C:\ABCD\www\`. The final structure should be:
    * `C:\ABCD\www\bases`
    * `C:\ABCD\www\cgi-bin`
    * `C:\ABCD\www\htdocs`
3.  **Create the logs folder:** Create the `C:\ABCD\www\logs` folder so Apache can write the access and error log files.
4.  **Create the ABCD configuration file:**
    * Go to the `htdocs/central` folder.
    * Copy the file `config.php.template` and rename the copy to **`config.php`**.
    * [cite_start]Open `config.php` in a text editor and review the settings, especially the path variables like `$ABCD_path` [cite: 13] [cite_start]and `$db_path`[cite: 13], to ensure they match your environment. This file is not overwritten during updates.

### Step 5: Starting and Testing the Installation

1.  **Restart the Apache services** via the XAMPP or WAMP control panel to apply all new configurations.
2.  Open your web browser and navigate to the URL: **`http://localhost:9090`**

You should see the login screen for the ABCD Central module.

**Default Credentials:**
* **Central Module:**
    * URL: `http://localhost:9090`
    * User: `abcd`
    * Password: `adm`
    
* **Site Administration:**
    * URL: `http://localhost:9090/site/admin`
    * User: `adm`
    * Password: `x`

> **Final Recommendation:** After logging in for the first time, immediately change the default passwords for all administrative users to ensure the security of your system.