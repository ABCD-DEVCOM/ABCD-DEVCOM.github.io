---
title: Email Configuration
sidebar_label: Email Settings
sidebar_position: 6
---

# Email Configuration

ABCD includes a built-in mechanism to send emails for tasks such as:
* Password recovery for users.
* Sending loan receipts (checkout/checkin).
* Circulation notices (overdue items).
* Purchase orders to providers.

The configuration is stored in the **`bases/par/correo.ini`** file.

## Configuring via Interface (Recommended)

Instead of editing the configuration file manually, use the Central module interface to ensure correct syntax and test the connection immediately.

1.  Go to **Administration > ABCD Configuration**.
2.  Select **Email configuration**.

You will be presented with a form to define the SMTP parameters.

### Connection Parameters

* **HOST**: The SMTP server address of your email provider.
    * *Examples:* `smtp.gmail.com`, `smtp.office365.com`, `mail.yourdomain.com`.
* **PORT**: The secure connection port.
    * *Standard Values:* `587` (TLS) or `465` (SSL). Avoid port 25 unless using a local relay.
* **USERNAME**: The full email address used to authenticate (e.g., `library@gmail.com`).
* **PASSWORD**: The email account password.

:::tip Gmail and Office365 Users
Modern email providers often block direct login with a regular password. You likely need to generate an **App Password** in your Google/Microsoft account security settings to use here.
:::

### Message Headers

* **FROM_NAME**: The human-readable name that will appear as the sender (e.g., "Central Library").
* **SUBJECT**: A default prefix for subject lines (optional).

### Mailer Engine

* **PHPMAILER** (Recommended): Uses the robust PHPMailer library included with ABCD. This allows using external SMTP servers (like Gmail) with authentication and encryption (SSL/TLS).
* **PHP**: Uses the server's native `mail()` function defined in `php.ini`. Only use this if your IT department has configured a local MTA (Postfix/Sendmail) on the server itself.

### Testing the Configuration

* **TEST**: Enter a valid email address in this field.
* Click **Update**.
* ABCD will attempt to save the settings and immediately send a test message to the address provided. If you receive the email, the system is ready.

---

## Alternative: Editing `abcd.def`

Some legacy scripts or specific notices might still rely on global parameters defined in `abcd.def`. It is good practice to ensure these match your email configuration.

**File:** `bases/abcd.def`

```text
admin_email=library@yourdomain.com
return_mail=no-reply@yourdomain.com

```

```

---

### 2. O Registro de Bases (bases.dat)
Este arquivo cobre o conteúdo que estava em `settings/database-management/registry.md`. Ele é vital, pois se a base não estiver aqui, ela não aparece no sistema.

**Crie o arquivo:** `docs/abcd-administration/databases-registry.md`

```markdown
---
title: The Database Registry (bases.dat)
sidebar_label: Database Registry
sidebar_position: 2
---

# The Database Registry (`bases.dat`)

The **Registry** is the master list of all databases available in the ABCD Central module. Even if a database folder exists physically on the disk, it will not be visible or accessible in the interface unless it is listed in this file.

* **File Location:** `/bases/bases.dat`
* **Function:** Populates the database selection dropdown menu on the login screen and the central toolbar.

## Managing the Registry

You can edit the list of active databases via the Administration menu.

1.  Go to **Administration > Database maintenance**.
2.  Click on **Database list (bases.dat)**.

### File Structure

The `bases.dat` file is a simple text file where each line represents a database. It typically uses a pipe (`|`) separator between the internal code and the display name.

**Syntax:**
```text
folder_name|Display Name

```

**Example:**

```text
books|Library Catalog
users|Patrons Database
providers|Acquisitions Providers
dou|Digital Objects Repository

```

* **folder_name**: Must match exactly the name of the folder inside the `/bases/` directory (case sensitive on Linux).
* **Display Name**: The text shown to the librarian in the dropdown menu.

## Hiding Databases

To "hide" a database without deleting it from the server, simply remove its line from `bases.dat` (or comment it out if manually editing, although the interface overwrites comments).

:::warning System Databases
Do not remove system databases (like `users`, `trans`, `copies`) from the server disk, but they generally do not need to be listed in `bases.dat` for the system to work, as they are accessed internally. However, listing `users` or `copies` allows you to open them for manual inspection (Data Entry), which is useful for debugging.
:::

```
