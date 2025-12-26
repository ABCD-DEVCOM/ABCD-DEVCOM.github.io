---
title: Global Server Configuration
sidebar_label: Global Settings (config.php)
sidebar_position: 2
---

# Global Server Configuration (config.php)

The **`config.php`** file is the heart of the ABCD Central module. It acts as the bootstrap script, defining:
1.  **Paths:** Where databases, scripts, and executables are located.
2.  **Drivers:** Which version of the CISIS database engine to use.
3.  **Behavior:** Global switches for encoding (Unicode), security, and external integrations.

**Location:** `htdocs/central/config.php`

:::danger Critical Configuration
If this file is missing or contains syntax errors, the system will trigger a **FATAL ERROR** and stop working immediately.
:::

## Initial Setup

ABCD is distributed with a template file named `config.php.template`.
To activate the system, you must:
1.  **Rename** (or copy) `htdocs/central/config.php.template` to `htdocs/central/config.php`.
2.  **Edit** the file to match your server environment.

---

## Configuration Variables

### 1. Database and System Paths

These are the most critical variables. If incorrect, the login screen might load, but no databases will be visible.

| Variable | Description |
| :--- | :--- |
| **`$db_path`** | Absolute path to the folder containing your databases (the `bases` folder). |
| **`$ABCD_path`** | The relative or absolute path to the application root. Usually calculated automatically. |
| **`$url`** | The URL suffix for the application (e.g., `/abcd`). |

**Example:**
```php
// LINUX
$db_path="/var/opt/ABCD/bases/";

// WINDOWS (Note the use of forward slashes / or escaped backslashes \\)
$db_path="C:/ABCD/www/bases/";

```

:::caution Trailing Slash
The `$db_path` **MUST** end with a trailing slash (`/`). Failing to do so will break file lookups.
:::

### 2. CISIS Engine & Encoding

ABCD allows switching between different versions of the CISIS database engine (the core software that reads/writes data) depending on your OS and character set needs.

* **`$def_uni`**: Defines the default encoding behavior.
* `"1"`: **Unicode (UTF-8)**. Recommended for modern installations.
* `"0"`: **ANSI**. For legacy databases using ISO-8859-1.


* **`$cisis_ver`**: Specifies the subfolder in `cgi-bin` containing the executable.
* `""` (Empty): Uses the standard version (typically 16-60).
* `"bigisis"`: Uses the BigISIS version (supports larger records/files).
* `"ffi"`: For specific architecture builds.



**How ABCD calculates the path:**
The system combines these variables to find the correct executable (wxis):
`.../cgi-bin/` + `$unicode` + `$cisis_ver` + `wxis.exe`

### 3. Execution Method (POST vs GET)

Large records can exceed the character limit of a standard URL (GET request). ABCD can force the use of the POST method to handle data.

```php
$postMethod = '1'; // 1 = Use POST (Recommended), 0 = Use GET

```

* If set to `1`, the system executes WXIS via a shell command or POST pipe.
* If set to `0`, parameters are passed via the URL (limitations may apply).

### 4. External Integrations

#### LDAP Authentication

If your institution uses Active Directory or OpenLDAP, you can bypass the internal password list.

```php
$use_ldap = 0; // Set to 1 to enable
$ldap_host = "ldap://your-ldap-server.com";
$ldap_dn = "cn=admin,dc=example,dc=com";
$ldap_pass = "secret";
$ldap_search_context = "ou=users,dc=example,dc=com";

```

#### Java Path (EmpWeb)

Required if you are using the Advanced Loans module (EmpWeb) or specific Java-based reporting tools.

```php
$java_path = "/usr/bin/java";

```

### 5. Editor Settings (CKEditor)

Configuration for the rich text editor used in HTML fields.

```php
$FCKEditorPath = "/site/bvs-mod/FCKeditor/";

```

### 6. Business Rules

* **`$inventory_numeric`**: Controls how inventory numbers are sorted and treated.
* `"Y"`: Treats inventory as strict numbers.
* `"N"`: Treats them as alphanumeric strings.


* **`$max_inventory_length`**: Limits the size of the inventory number field to prevent data entry errors.

---

## Server URL Detection

Modern versions of ABCD attempt to automatically detect the server address to construct links. You usually **do not** need to edit these lines:

```php
if (isset($_SERVER['HTTP_HOST'])){
    $server_url = $protocol . "://" . $host . ":" . $server_port;
}

```

However, if you are behind a reverse proxy or using a complex alias, you might need to manually hardcode `$server_url`.

---

## Troubleshooting

### "Effect of Fatal Error: Configuration file does not exist"

* **Cause:** You have not renamed `config.php.template` to `config.php`.
* **Fix:** Rename the file in `htdocs/central/`.

### Images or Databases not loading

* **Cause:** Incorrect `$db_path`.
* **Fix:** Ensure the path is correct for your OS and ends with `/`. On Windows, check if you are using simple backslashes `\` (which escape characters) instead of forward slashes `/`.

### "wxis execution failed" or Search errors

* **Cause:** Incorrect `$cisis_ver` or file permissions.
* **Fix:**
1. Check if the `wxis` executable exists in the calculated path (e.g., `cgi-bin/bigisis/wxis`).
2. On Linux, ensure the `cgi-bin` files have execution permissions (`chmod +x`).
