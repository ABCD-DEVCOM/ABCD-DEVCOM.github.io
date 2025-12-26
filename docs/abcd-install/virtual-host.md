---
sidebar_position: 5
sidebar_label: 'Virtual Host Config'
---

# Virtual Host Configuration

Using Virtual Hosts is the recommended way to run ABCD, allowing you to isolate the application and protect data directories.

Below is a robust configuration for Apache 2.4 (Linux), running on port **9090**.

## Configuration File (.conf)

Create the file `/etc/apache2/sites-available/abcd.conf` with the content below.

:::tip Easy Maintenance
Note the use of the `Define ABCD_ROOT` directive. If you installed ABCD in a different location (e.g., `/opt/ABCD`), just change that line, and everything else adjusts automatically.
:::

```apache
# Define operation port
Define ABCD_PORT 9090

# Ensure Apache listens on this port
Listen ${ABCD_PORT}

<VirtualHost *:${ABCD_PORT}>
    # Adjust ServerName to your real domain or IP
    ServerName abcd.library.local
    ServerAdmin webmaster@localhost
    
    # Priority for index files
    DirectoryIndex index.php index.html

    # --- PATH DEFINITIONS ---
    # Change here if installed elsewhere (e.g., /opt/ABCD/www)
    Define ABCD_ROOT  "/var/www/html/ABCD"
    
    # Define where databases are (can be outside root for security)
    Define ABCD_BASES "/var/www/html/ABCD/bases/"

    # --- DOCUMENT ROOT ---
    DocumentRoot ${ABCD_ROOT}/htdocs

    <Directory ${ABCD_ROOT}/>
        Options +Indexes -FollowSymLinks +MultiViews
        Require all granted
    </Directory>

    <Directory ${ABCD_ROOT}/htdocs>
        Options +Indexes -FollowSymLinks +MultiViews
        Require all granted
    </Directory>

    # --- CGI-BIN (ABCD Engine) ---
    ScriptAlias /cgi-bin/ "${ABCD_ROOT}/cgi-bin/"
    <Directory "${ABCD_ROOT}/cgi-bin/">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        AddHandler cgi-script .cgi
        AddHandler cgi-script .exe
        # For Linux binaries without extension:
        SetHandler cgi-script
        Require all granted
    </Directory>

    # --- ALIAS FOR BASES (Images and Documents) ---
    # This allows accessing book covers and PDFs via URL /docs/
    Alias /docs/ "${ABCD_BASES}"
    <Directory "${ABCD_BASES}">
        Options -Indexes -FollowSymLinks -MultiViews
        AllowOverride None
        Require all granted
    </Directory>

    # --- LOGS ---
    # Separate logs to ease error detection
    ErrorLog  ${APACHE_LOG_DIR}/error_abcd_${ABCD_PORT}.log
    CustomLog ${APACHE_LOG_DIR}/access_abcd_${ABCD_PORT}.log combined
</VirtualHost>

```

### Activation

After creating the file:

```bash
sudo a2ensite abcd.conf
sudo systemctl reload apache2
```