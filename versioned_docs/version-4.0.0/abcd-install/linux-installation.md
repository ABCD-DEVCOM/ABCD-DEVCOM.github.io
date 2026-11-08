---
sidebar_position: 2
sidebar_label: 'Linux Installation'
sidebar_custom_props:
  myEmoji: 🐧
---

# 🐧Linux Installation Guide

This guide covers the installation of ABCD 3.4+ on **Ubuntu/Debian** systems using the official release packages.

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
2. Copy the link for the latest `.zip` or `.tar.gz` file (e.g., `v3.4.0-beta.zip`).
3. In your terminal, download and extract it (assuming `/var/www/html/ABCD` as destination):

```bash
cd /var/www/html
```

* Example download (always check the GitHub link for the latest version)
```bash
sudo wget [https://github.com/ABCD-DEVCOM/ABCD/archive/refs/tags/v3.4.0.zip](https://github.com/ABCD-DEVCOM/ABCD/archive/refs/tags/v3.4.0.zip) -O abcd.zip
```
* Extract
```bash
sudo unzip abcd.zip
```

# Rename the extracted folder to 'ABCD' (or your preferred name)

```bash
sudo mv ABCD-3.4.0  ABCD
```

## 3. Cleanup Directory Structure

The package contains folders for multiple operating systems. Clean up what is not used:

1. **CGI-BIN:** Check the folder structure. If you see `cgi-bin_Linux` and `cgi-bin_Windows`:
* Rename `cgi-bin_Linux` to `cgi-bin`.

```bash
cd /var/www/html/ABCD/www
```


```bash
sudo mv cgi-bin_Linux cgi-bin
```

* Delete `cgi-bin_Windows`.

```bash
sudo rm -rf cgi-bin_Windows
```

2. **Bases:** If this is a clean installation, rename `bases-examples` to `bases`.

```bash
sudo mv bases-examples_Linux bases
```

## 4. Initial Configuration (Crucial)

ABCD comes with a template configuration file that must be activated.

1. Navigate to the central configuration folder:

```bash
cd /var/www/html/ABCD/www/htdocs/central/
```

2. Copy the template to the actual config file:

```bash
sudo cp config.php.template config.php
```

3. (Optional) Edit `config.php` if you need to change default paths, although the defaults usually work fine if following this guide.

## 5. Configure Permissions

For ABCD to work (save records, upload images), permissions must be exact.
👉 **[See the Folder Permissions Guide](/docs/abcd-install/fixing-permissions-linux)**.

## 6. Enable Executables

Ensure the CISIS binaries have execution rights:

```bash
sudo chmod +x /var/www/html/ABCD/www/cgi-bin/*
```

## 7. Next Steps

* Configure the **Virtual Host** (see sidebar).
* Access `http://localhost:9090/admin` (or your server IP).

## 8. Troubleshooting

### OPAC Search Results Not Displaying (Redirecting to Homepage)
If you can access the OPAC but performing a search redirects you back to the home page instead of displaying the results, your Apache server is likely ignoring the `.htaccess` file. The URL rewriting required by the OPAC will fail without it.

To fix this, especially on **Ubuntu/Debian** systems, you need to allow `.htaccess` overrides in your Apache configuration:

1. Open your main Apache configuration file:
```bash
sudo nano /etc/apache2/apache2.conf
```

2. Scroll down to locate the `<Directory /var/www/>` block.

3. Change the `AllowOverride None` directive to `AllowOverride All`:
```apacheconf
<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
</Directory>
```

4. Save the file and restart Apache to apply the changes:
```bash
sudo systemctl restart apache2
```



## SSL Certificate Installation (Let's Encrypt)

This guide provides a step-by-step procedure for installing an SSL certificate using Let's Encrypt on a server running Ubuntu 22.04 LTS.

| Requirement | Specification |
| :--- | :--- |
| **Operating System** | Ubuntu 22.04.5 LTS (Jammy Jellyfish) |
| **Web Server** | Apache2 |
| **Tool** | Certbot |

---

### Prerequisites

* A registered domain name (e.g., `library.edu`) pointing to your server's IP.
* Ports **80** (HTTP) and **443** (HTTPS) open in your firewall.

### 1. Install Certbot

First, update your local package index and install the Certbot Python package designed for Apache:

```bash
sudo apt update
sudo apt install certbot python3-certbot-apache
```

### 2. Obtain and Configure Certificate

Run the following command to automatically obtain a certificate and configure Apache to redirect all HTTP traffic to HTTPS. The script will prompt you for an email address and agreement to the Terms of Service.

```bash
sudo certbot --apache -d yourdomain.com
```

> **Note:** Replace `yourdomain.com` with your actual domain (e.g., `fheactas.ucv.ve`).

---

### 3. Verifying Auto-Renewal

Let's Encrypt certificates are valid for 90 days. On Ubuntu 22.04, the system automatically creates a background timer to handle renewals. To verify that the renewal process is working correctly, perform a "dry run":

```bash
sudo certbot renew --dry-run
```

---

### Troubleshooting

#### Error: "No such authorization"
If you encounter a malformed message error or `No such authorization` during the process, it usually indicates a synchronization issue with the ACME server. You can resolve this by forcing a clean renewal attempt:

```bash
sudo certbot --apache -d yourdomain.com --force-renewal
```

#### Institutional Firewalls
If the validation fails and the domain is correctly pointed to your IP, ensure that port **443** is open in your network infrastructure. In some university or institutional environments, you may need to request the network administrator to allow inbound traffic on the HTTPS port.

#### Manual Webroot Method
If the Apache plugin cannot automatically modify your configuration, use the **webroot** method to verify your domain:

```bash
sudo certbot certonly --webroot -w /var/www/html -d yourdomain.com
```
*(Ensure `-w` points to your actual web root directory).*


