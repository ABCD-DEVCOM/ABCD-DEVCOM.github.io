---
sidebar_position: 3
sidebar_label: 'Folder Permissions'
sidebar_custom_props:
  myEmoji: 🗀
---

# Fixing File Permissions on Linux

This guide addresses common permission issues where the web server (Apache) cannot write to databases, or where you (as an SFTP user) cannot edit files created by the system.

The goal is to create a **coexistence environment** where:
1.  **You (User):** Have full control to edit code and upload files via SFTP.
2.  **Web Server (`www-data`):** Has permission to run the application and write to the `bases` folder.
3.  **ABCD Binaries:** Have execution rights.

## Step 1: User & Group Setup
First, add your current user to the web server's group (`www-data`).

```bash
# Add your user to the apache group
sudo usermod -aG www-data $USER

```

:::caution Logout Required
After running the command above, you must **logout and login again** (SSH/SFTP) for the group changes to take effect.
:::

## Step 2: Define Ownership

Assuming ABCD is installed in `/var/www/html/ABCD`:

```bash
# Set you as the owner and www-data as the group owner
sudo chown -R $USER:www-data /var/www/html/ABCD

```

## Step 3: Write Permissions & SGID

We will use the **SGID (Set Group ID)** bit. This ensures that any new file created inside these folders automatically inherits the `www-data` group, preventing future permission lockouts.

### A. Application Folders (Code)

Code folders (`htdocs`) should be editable by you and readable by the server.

```bash
# Set permissions 2775 (rwxrwxr-x + SGID) for directories
sudo find /var/www/html/ABCD -type d -exec chmod 2775 {} \;

# Set permissions 0664 (rw-rw-r--) for files
sudo find /var/www/html/ABCD -type f -exec chmod 0664 {} \;

```

### B. The `cgi-bin` Directory (Executables)

This folder contains the WXIS and other CISIS binaries. They must have the **execution bit** (+x) set.

```bash
# Force execution flag on binary files
sudo chmod -R +x /var/www/html/ABCD/cgi-bin/

```

### C. Temporary & Upgrade Folders

If you use the built-in *Update Manager*, the server needs full write access to create temporary directories.

```bash
# Allow the web server to create folders for upgrades
sudo chmod -R 777 /var/www/html/ABCD/htdocs/upgrade/ 2>/dev/null

```

## Automated Fix Script

You can save the following script as `fix_abcd_perms.sh` in your server root to quickly repair permissions in the future.

```bash title="fix_abcd_perms.sh"
#!/bin/bash
# Configuration
ABCD_PATH="/var/www/html/ABCD"
WS_GROUP="www-data"
CURRENT_USER=$(whoami)

echo "1. Setting Ownership to $CURRENT_USER:$WS_GROUP..."
sudo chown -R $CURRENT_USER:$WS_GROUP $ABCD_PATH

echo "2. Applying directory permissions (2775)..."
sudo find $ABCD_PATH -type d -exec chmod 2775 {} \;

echo "3. Applying file permissions (0664)..."
sudo find $ABCD_PATH -type f -exec chmod 0664 {} \;

echo "4. Restoring executables..."
sudo chmod -R +x $ABCD_PATH/cgi-bin/

echo "Done!"

```
