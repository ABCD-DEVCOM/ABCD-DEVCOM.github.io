---
sidebar_position: 2
sidebar_label: 'Linux Installation'
sidebar_custom_props:
  myEmoji: 🐧
---

# 🐧Linux Installation Guide

This guide covers the installation of ABCD 3.1+ on **Ubuntu/Debian** systems using the official release packages.

## 1. Install System Dependencies
Update your repositories and install Apache, PHP 8.x, and necessary tools.

```bash
sudo apt update
sudo apt install apache2 unzip wget php php-mbstring php-gd php-curl php-xml php-zip libapache2-mod-php
```

### Enable Apache Modules

ABCD requires the CGI module (to run CISIS scripts) and the Rewrite module (for friendly URLs) to be active.

```bash
sudo a2enmod cgi rewrite
sudo systemctl restart apache2
```

## 2. Download ABCD

We recommend downloading the latest stable release instead of cloning the development repository.

1. Visit the [ABCD Releases Page](https://github.com/ABCD-DEVCOM/ABCD/releases).
2. Copy the link for the latest `.zip` or `.tar.gz` file (e.g., `v3.1.0-beta.zip`).
3. In your terminal, download and extract it (assuming `/var/www/html/ABCD` as destination):

```bash
cd /var/www/html
```

* Example download (always check the GitHub link for the latest version)
```bash
sudo wget https://github.com/ABCD-DEVCOM/ABCD/archive/refs/tags/v3.1.0.zip -O abcd.zip
```
* Extract
```bash
sudo unzip abcd.zip
```

# Rename the extracted folder to 'ABCD' (or your preferred name)

```bash
sudo mv ABCD-3.1.0  ABCD
```

## 3. Cleanup Directory Structure

The package contains folders for multiple operating systems. Clean up what is not used:

1. **CGI-BIN:** Check the folder structure. If you see `cgi-bin_Linux` and `cgi-bin_Windows`:
* Rename `cgi-bin_Linux` to `cgi-bin`.

```bash
sudo mv cgi-bin_Linux cgi-bin
```


* Delete `cgi-bin_Windows`.

```bash
sudo rm cgi-bin_Windows
```


2. **Bases:** If this is a clean installation, rename `bases-examples` to `bases`.

```bash
sudo mv bases-examples_Linux bases
```

## 4. Initial Configuration (Crucial)

ABCD comes with a template configuration file that must be activated.

1. Navigate to the central configuration folder:

```bash
cd /var/www/html/ABCD/htdocs/central/
```


2. Copy the template to the actual config file:

```bash
sudo cp config.php.template config.php
```


3. (Optional) Edit `config.php` if you need to change default paths, although the defaults usually work fine if following this guide.

## 5. Configure Permissions

For ABCD to work (save records, upload images), permissions must be exact.
👉 **[See the Folder Permissions Guide](/docs/3.1/abcd-install/fixing-permissions-linux)**.

## 6. Enable Executables

Ensure the CISIS binaries have execution rights:

```bash
sudo chmod +x /var/www/html/ABCD/cgi-bin/*
```

## 7. Next Steps

* Configure the **Virtual Host** (see sidebar).
* Access `http://localhost:9090/admin` (or your server IP).