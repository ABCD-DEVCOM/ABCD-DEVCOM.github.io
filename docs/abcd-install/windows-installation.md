---
sidebar_position: 4
sidebar_label: 'Windows Installation'
sidebar_custom_props:
  myEmoji: 🪟
---

# 🪟 Windows Installation Guide

This guide covers the manual installation of ABCD 3.1+ on **Windows** using a standard WAMP stack (Windows, Apache, MySQL, PHP).

## 1. Prepare the Environment (WAMP)
Since ABCD is a web application, you need a web server environment. We recommend **XAMPP** or **WampServer**.

1.  Download and install **[XAMPP](https://www.apachefriends.org/)** (recommended PHP 8.x version).
2.  Install it in the default location (usually `C:\xampp`).
3.  Open the **XAMPP Control Panel** but do not start the services yet.

## 2. Download and Extract ABCD
1.  Download the latest ZIP release from the [ABCD Releases Page](https://github.com/ABCD-DEVCOM/ABCD/releases).
2.  Extract the ZIP file directly to your **C:** drive root to keep paths short.

### Recommended Directory Structure
After extraction, ensure you have the following structure. We will use `C:/ABCD/` as our base for this guide.

* `C:\ABCD\www\htdocs` (Web application files)
* `C:\ABCD\www\bases` (Database files)
* `C:\ABCD\www\cgi-bin` (Executables)

:::tip Cleanup
The package might contain multiple `cgi-bin` folders.
* Rename `cgi-bin_Windows` to `cgi-bin`.
* Delete `cgi-bin_Linux`.
:::

## 3. Initial Configuration (`config.php`)
You must activate the main configuration file.

1.  Navigate to `C:\ABCD\www\htdocs\central\`.
2.  Duplicate the file `config.php.template`.
3.  Rename the copy to `config.php`.

## 4. Configure PHP (`php.ini`)
ABCD requires specific extensions.

1.  Open the **XAMPP Control Panel**.
2.  Click **Config** next to Apache and select **PHP (php.ini)**.
3.  Search for and **uncomment** (remove the `;` at the start) the following lines:

```ini
extension=curl
extension=gd
extension=mbstring
extension=mysqli
extension=openssl
extension=soap
extension=xml
extension=zip

```

4. Save and close the file.

## 5. Configure Apache (`httpd.conf`)

We need to enable CGI execution and URL rewriting.

1. In XAMPP Control Panel, click **Config** next to Apache and select **Apache (httpd.conf)**.
2. Ensure the following modules are uncommented (active):

```apache
LoadModule cgi_module modules/mod_cgi.so
LoadModule rewrite_module modules/mod_rewrite.so
```

### Virtual Host Integration

Instead of editing the main config file, we will tell Apache to load the ABCD configuration.

1. Scroll to the very end of `httpd.conf`.
2. Add the following line:

```apache
# Load ABCD Configuration
Include "C:/ABCD/www/vhost_abcd.conf"
```

3. Save and close `httpd.conf`.

## 6. Create the Virtual Host File

Now create the file we just referenced.

1. Create a new text file at `C:\ABCD\www\vhost_abcd.conf`.
2. Paste the following content (derived from the official template):

```apache
# Define the Port (Standard for ABCD is 9090)
Define ABCD_PORT 9090

# Listen on this port
Listen ${ABCD_PORT}

<VirtualHost *:${ABCD_PORT}>
    ServerName localhost
    ServerAdmin webmaster@localhost
    
    # --- PATH DEFINITIONS ---
    # Adjust this if you installed ABCD elsewhere
    Define ABCD_ROOT "C:/ABCD/www"

    DocumentRoot "${ABCD_ROOT}/htdocs"

    # --- MAIN DIRECTORY PERMISSIONS ---
    <Directory "${ABCD_ROOT}">
        Options +Indexes -FollowSymLinks 
        AllowOverride All 
        Require all granted
    </Directory>

    # --- CGI-BIN CONFIGURATION ---
    ScriptAlias /cgi-bin/ "${ABCD_ROOT}/cgi-bin/" 
    <Directory "${ABCD_ROOT}/cgi-bin">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        AddHandler cgi-script .cgi
        AddHandler cgi-script .exe
        Require all granted
    </Directory>

    # --- BASES ALIAS (For Images/PDFs) ---
    Alias /docs/ "${ABCD_ROOT}/bases/"
    <Directory "${ABCD_ROOT}/bases/">
        Options -Indexes -FollowSymLinks +MultiViews
        AllowOverride None
        Require all granted
    </Directory>

    # --- LOGGING ---
    ErrorLog "logs/abcd_error.log"
    CustomLog "logs/abcd_access.log" combined
</VirtualHost>

```

## 7. Start and Test

1. In XAMPP, click **Start** next to Apache.
2. Watch the log window for errors. If it turns green, you are good.
3. Open your browser and go to: `http://localhost:9090/admin`

**Login Credentials:**

* Username: `abcd`
* Password: `adm`

:::warning Security
Change the default password immediately after the first login in the **Users** module.
:::

