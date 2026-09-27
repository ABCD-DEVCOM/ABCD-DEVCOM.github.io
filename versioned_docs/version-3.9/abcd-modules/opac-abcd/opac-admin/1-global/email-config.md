---
title: Email Configuration (SMTP)
sidebar_label: Email Settings
sidebar_position: 7
---
import Video from '@site/src/components/Video';

# Email Configuration (SMTP)

The ABCD OPAC requires a working email configuration to interact with users. This includes sending **Password Recovery** links, **Reservation** notices, and **Comments/Suggestions** to the library staff.

**Access:** **OPAC Configuration** > **Email Configuration** (`adm_email.php`)

<Video src="https://www.youtube.com/embed/h9yxflujifQ" />

## 1. Configuration Parameters

This interface generates the `opac_conf/correo.ini` file. Configure the fields according to your email provider (e.g., Gmail, Outlook, or institutional SMTP).

| Field | Description | Example |
| :--- | :--- | :--- |
| **Server (Host)** | The hostname of your SMTP provider. | `smtp.gmail.com` |
| **Port** | The network port for sending mail. | `465` (SSL) or `587` (TLS) |
| **User** | The full email address used to authenticate. | `library@university.edu` |
| **Password** | The password or App Password for the account. | `********` |
| **From (Email)** | The email address that will appear as the sender. | `no-reply@library.org` |
| **From (Name)** | The human-readable name of the sender. | `Central Library System` |
| **Subject** | Default subject line (often overridden by specific scripts). | `Library Notification` |
| **Test Recipient** | Email address to receive a test message upon saving. | `admin@library.org` |

## 2. Connection Settings

### Mailer Type
You must choose the mechanism for sending emails:
* **PHPMailer (Recommended):** Uses the external SMTP server configured above. This is the most reliable method and prevents emails from going to Spam.
* **PHP Mail:** Uses the local server's internal mail system (`sendmail`). This often fails if the server is not properly configured as a mail relay.

### Security (Encryption)
Select the encryption protocol required by your provider:
* **SSL:** Typically used with port **465**.
* **TLS:** Typically used with port **587**.
* **None:** Used for internal servers (port 25).

:::warning Gmail Users
If you are using Gmail, you cannot use your regular login password. You must enable **2-Step Verification** and generate an **App Password**. Use that App Password in the "Password" field.
:::

## 3. Testing the Configuration
To verify if your settings are correct:
1.  Fill in all the SMTP fields.
2.  Enter a valid email address in the **Test Recipient** field.
3.  Click **Save**.
4.  The system will attempt to connect and send a test email immediately. Check your inbox (and spam folder) for a message.

## 4. Technical Details (`correo.ini`)
The configuration is stored in a standard INI file located at:
`bases/opac_conf/correo.ini`

**File Structure:**
```ini
host=smtp.office365.com
port=587
username=librarian@university.edu
password=SecretPassword123
from=librarian@university.edu
fromname=University Library
subject=OPAC Notice
test=admin@university.edu
phpmailer=phpmailer
secure=tls