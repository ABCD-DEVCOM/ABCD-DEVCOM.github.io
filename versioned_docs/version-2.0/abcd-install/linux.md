---
sidebar_position: 2
---

# Linux Installation Guide (Ubuntu/Debian)

This guide describes the ABCD installation and configuration process on a Linux server, using a recent version of Ubuntu or Debian as a base. This updated guide uses the recommended installation method by downloading the source code package from GitHub.

### Step 1: Server Preparation

1.  **Connect to your server** via SSH or a local terminal with administrator permissions (root or sudo).

2.  **Update the system packages:**
    ```bash
    sudo apt-get update
    sudo apt-get upgrade -y
    ```

### Step 2: Install Dependencies

1.  **Install Apache, PHP, and required extensions.** This guide uses PHP 8.1. These modules are essential for the web server, CGI script execution, and specific functionalities like image processing and XML manipulation. While some documentation refers to PHP 7.4.x, this guide has been updated for a more modern environment.
    ```bash
    sudo apt-get install -y apache2 php8.1 libapache2-mod-php8.1 php8.1-mbstring php8.1-gd php8.1-xml php8.1-xsl php8.1-zip curl unzip
    ```
    *Note: If `php8.1` is not available in your default repositories, you may need to add a third-party repository like `ppa:ondrej/php` for Ubuntu.*

2.  **Enable necessary Apache modules:**
    ```bash
    sudo a2enmod cgi
    sudo a2enmod rewrite
    sudo systemctl restart apache2
    ```

### Step 3: Install ABCD

1.  **Download the latest ABCD release** from the official GitHub repository. Go to the [ABCD Releases page](https://github.com/ABCD-DEVCOM/ABCD/releases) and copy the link for the latest `v2.3.0.zip` file.

2.  **Download the file to your server.** Use `wget` with the copied link. For example:
    ```bash
    wget https://github.com/ABCD-DEVCOM/ABCD/archive/refs/tags/v2.3.0.zip
    ```

3.  **Create the installation directory and unzip the package.** The recommended path for the web files is `/opt/ABCD/www`.
    ```bash
    sudo mkdir -p /opt/ABCD
    sudo unzip v2.3.0.zip -d /opt/ABCD/
    ```

4.  **Set the correct permissions.** The web server user (commonly `www-data` on Debian/Ubuntu) needs to own the files.
    ```bash
    sudo chown -R www-data:www-data /opt/ABCD/www
    sudo chmod -R 755 /opt/ABCD/www
    ```
5. **Create the databases directory.** This directory stores the ABCD databases and should be located at `/var/opt/ABCD/bases`.
    ```bash
    sudo mkdir -p /var/opt/ABCD/bases
    sudo chown -R www-data:www-data /var/opt/ABCD/bases
    ```

### Step 4: Configure Apache Virtual Host

1.  **Create a new Virtual Host configuration file** for ABCD.
    ```bash
    sudo nano /etc/apache2/sites-available/abcd.conf
    ```

2.  **Paste the following content into the file.** This configuration, adapted from the official example, sets up ABCD to be accessible, for instance, on port 9090.
    ```apache
    # Listen on port 9090 for ABCD
    Listen 9090
    <VirtualHost *:9090>
        ServerAdmin webmaster@localhost
        
        # Path to the ABCD web files
        DocumentRoot "/opt/ABCD/www/htdocs"
        
        <Directory "/opt/ABCD/www/htdocs">
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Require all granted
        </Directory>

        # Alias for the CGI scripts
        ScriptAlias /cgi-bin/ "/opt/ABCD/www/cgi-bin/"
        <Directory "/opt/ABCD/www/cgi-bin/">
            AllowOverride None
            Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
            AddHandler cgi-script .cgi .exe
            Require all granted
        </Directory>
        
        # Alias for the databases directory
        Alias /docs/ "/var/opt/ABCD/bases/"
        <Directory "/var/opt/ABCD/bases/">
            Options -Indexes
            AllowOverride None
            Require all granted
        </Directory>

        # Log files
        ErrorLog ${APACHE_LOG_DIR}/abcd_error.log
        CustomLog ${APACHE_LOG_DIR}/abcd_access.log combined

    </VirtualHost>
    ```

3.  **Enable the new site configuration:**
    ```bash
    sudo a2ensite abcd.conf
    ```

4.  **Restart the Apache service** to apply all changes:
    ```bash
    sudo systemctl restart apache2
    ```

Your ABCD installation should now be accessible at `http://your_server_ip:9090`. The default login for the central module is username `abcd` and password `adm`.