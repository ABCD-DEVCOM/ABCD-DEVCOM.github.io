---
title: Z39.50 Client Configuration
sidebar_label: Z39.50 Client
---

# Z39.50 Client Configuration

The Z39.50 module in ABCD acts as a **Client**, allowing catalogers to search remote libraries (like Library of Congress, Oxford, or national libraries) and download records directly into the local catalog.

For this module to work, two layers of configuration are required:
1.  **Server Layer:** The **PHP-YAZ** extension must be installed and active.
2.  **Application Layer:** The list of available servers and field mapping (`.cnv`).

---

## 1. Server Requirements (PHP-YAZ)

The Z39.50 protocol is handled by the **YAZ** toolkit. ABCD uses the PHP wrapper for this toolkit.

### Verifying Installation
If you click on the Z39.50 icon and see a blank screen or a "Call to undefined function yaz_connect()" error, the extension is missing.

#### Windows Setup
1.  Locate your `php.ini` file.
2.  Find the line `;extension=php_yaz.dll`.
3.  Remove the semicolon `;` to uncomment it.
4.  Ensure the `php_yaz.dll` file exists in your PHP `ext/` folder.
5.  **Restart Apache**.

:::info DLL Dependency
On Windows, `php_yaz.dll` often depends on `yaz.dll` and `libxml2.dll`. Ensure the folder containing these DLLs (usually the PHP root or Apache bin) is in the Windows System PATH.
:::

#### Linux Setup
Install the extension via your package manager:
```bash
sudo apt-get install php-yaz
sudo service apache2 restart

```

---

## 2. Configuring Servers (`z3950.def`)

The list of libraries available for search is defined in a text file.

* **Location:** `/bases/par/z3950.def` (Global) or inside specific database folders.
* **Format:** One server per line, fields separated by pipes `|`.

**Syntax:**

```text
Name|Host|Port|Database|User|Password|Syntax

```

**Example:**

```text
Library of Congress|z3950.loc.gov|7090|voyager|||USMARC
Oxford University|library.ox.ac.uk|210|advanc|||UNIMARC

```

| Parameter | Description |
| --- | --- |
| **Name** | The label shown to the librarian in the dropdown menu. |
| **Host** | The IP address or domain of the Z39.50 server. |
| **Port** | Usually `210` or `7090`. |
| **Database** | The internal name of the remote database (e.g., `voyager`, `oluc`, `books`). |
| **Syntax** | Expected record format: `USMARC`, `UNIMARC`, or `MARC21`. |

---

## 3. Conversion Tables (`.cnv`)

When a record is downloaded, ABCD needs to know how to map the remote MARC tags to your local database fields. This is defined in `.cnv` files located in the `cnv` folder of your database (e.g., `/bases/marc/cnv/`).

### Selecting a Conversion File

When configuring a server in ABCD, you can optionally link it to a specific `.cnv` file. If none is specified, ABCD tries to map tags 1-to-1.

### Syntax

```text
<TargetTag> <SourceTag>

```

* **TargetTag:** The Tag in your ABCD database (Local).
* **SourceTag:** The Tag coming from the Z39.50 server (Remote).

**Example (`marc.cnv`):**

```text
100 100   (Map Remote Author to Local Author)
245 245   (Map Remote Title to Local Title)
650 650   (Map Subjects)
999 001   (Map Remote Control Number to a local note field)

```

:::tip Subfield Handling
By default, the conversion preserves subfields (e.g., `^aDoe^bJohn`). If you need advanced string manipulation during import, you might need to use the **ISO Import** procedure with a reformatting FST instead of the direct Z39.50 import.
:::

---

## 4. Troubleshooting

### "Connection Failed"

* **Firewall:** Check if your server allows outbound traffic on ports `210` and `7090`.
* **Timeout:** Some servers are slow. You can increase the timeout in the PHP script `z3950.php` if necessary.

### "Records come empty or garbled"

* **Syntax Mismatch:** Check if the server is sending `UNIMARC` but you configured `USMARC`.
* **Charset:** Z39.50 often uses MARC-8 encoding. ABCD attempts to convert to UTF-8 or ISO-8859-1, but special characters may break if the conversion table isn't handling charsets correctly (requires `yaz_iconv` configuration).