# Troubleshooting: Fixing ABCD File Permissions on Linux

This guide addresses common permission issues where the web server (Apache/Nginx) cannot write to directories, or where an SFTP user cannot edit files created by the system.

This setup ensures a **coexistence environment** where:

1.  **You (via SFTP):** Have full control to edit code and upload files.
2.  **Web Server:** Has the necessary permissions to run the application and write to data folders.
3.  **ABCD Binaries (CISIS):** Have execution rights.

## Prerequisites

  * **Installation Path:** Assumed to be `/opt/ABCD`.
  * **Web Server Group:** Typically `www-data` (Ubuntu/Debian) or `daemon` (XAMPP).
  * **Your User:** The username you use to log in via SSH/SFTP.

:::info
In the commands below, replace `www-data` with `daemon` if you are using XAMPP/LAMPP.
:::

## Step 1: User & Group Setup

First, ensure your user belongs to the web server's group. This allows you to edit files that belong to the group without needing to be `root`.

```bash
# Add your current user to the web server group
sudo usermod -aG www-data $USER
```

:::caution Logout Required
After running the command above, you must **logout and login again** (SSH/SFTP) for the group changes to take effect.
:::

## Step 2: Define Ownership

We will set **You** as the Owner (to facilitate SFTP editing) and the **Web Server** as the Group.

```bash
# Replace <your_username> with your actual login user
sudo chown -R <your_username>:www-data /opt/ABCD
```

## Step 3: Reset Base Permissions & Enable SGID

We will apply a standard permission set:

  * **Directories (2775):** The `2` enables the **SGID bit**. This ensures that any *new* file created inside these folders inherits the `www-data` group automatically, preventing future permission errors.
  * **Files (0664):** Owner and Group can write; others can read.

<!-- end list -->

```bash
# Set directories to 2775 (User/Group write + SGID)
sudo find /opt/ABCD/www -type d -exec chmod 2775 {} \;

# Set files to 0664 (User/Group write, Public read)
sudo find /opt/ABCD/www -type f -exec chmod 0664 {} \;
```

## Step 4: ABCD Critical Exceptions

The ABCD software relies on CISIS utilities and flat-file databases. These require specific permissions that differ from standard web applications.

### A. The `bases` Directory (Data Folder)

The application, PHP scripts, and CISIS binaries all compete to read/write/modify text files here. To prevent "Permission Denied" errors during data entry or indexing, full permissions are required.

```bash
# Grant full read/write permissions for data operations
sudo chmod -R 777 /opt/ABCD/www/bases/
```

:::warning Security Note
While `777` is generally discouraged in shared hosting, it is often required for the `/bases/` directory in ABCD due to the nature of CISIS file manipulation and inverted index generation. Ensure your server firewall is properly configured.
:::

### B. The `cgi-bin` Directory (Executables)

This folder contains the WXIS and other CISIS binaries. They must have the **execution bit** (+x) set to function.

```bash
# Set directory permissions
sudo chmod -R 755 /opt/ABCD/www/cgi-bin/

# Force execution flag on binary files
sudo chmod -R +x /opt/ABCD/www/cgi-bin/
```

### C. Temporary & Upgrade Folders

If you are using the built-in *Update Manager*, it needs to create temporary directories.

```bash
# Allow the web server to create folders for upgrades
sudo chmod -R 777 /opt/ABCD/www/htdocs/upgrade/ 2>/dev/null
```

-----

## Automated Fix Script

You can save the following script as `fix_abcd_perms.sh` in your server root to quickly repair permissions in the future.

```bash title="fix_abcd_perms.sh"
#!/bin/bash

# Configuration
ABCD_USER="<your_username>" # Change this to your user
WEBSERVER_GROUP="www-data"  # Change to 'daemon' if using XAMPP
DIR="/opt/ABCD/www"

echo "1. Setting Ownership to $ABCD_USER:$WEBSERVER_GROUP..."
chown -R $ABCD_USER:$WEBSERVER_GROUP $DIR

echo "2. Applying standard permissions (SGID enabled)..."
find $DIR/htdocs -type d -exec chmod 2775 {} \;
find $DIR/htdocs -type f -exec chmod 0664 {} \;

echo "3. Applying strict permissions for Database storage..."
chmod -R 777 $DIR/bases

echo "4. Enabling execution for CISIS binaries..."
chmod -R 755 $DIR/cgi-bin
chmod -R +x $DIR/cgi-bin/*

echo "Done! ABCD permissions are fixed."
```