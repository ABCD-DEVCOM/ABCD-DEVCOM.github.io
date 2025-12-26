---
title: System Errors & Locks
sidebar_label: Errors & Locks
---

# System Errors & Locks

## Database Locks

### "Database is locked" message
**Context:** You try to edit a record, but the system blocks you.
**Cause:** An administrative process (like Import or Indexing) didn't finish correctly, or a previous user crashed while editing.
**Solution:**
1.  Go to **Utilities > Maintenance > Unlock Database**.
2.  This removes the `write.lock` file from the database folder.

### "Entry locked by operator [Name]"
**Context:** You are trying to edit a specific record.
**Cause:** ABCD prevents two people from editing the same record. If the user "[Name]" is not actually editing it (e.g., they closed the browser without saving), the lock remains.
**Solution:**
1.  Go to **Utilities > Maintenance > Unlock Records**.
2.  This clears the "operator" tag from the record control field.

## Server Configuration

### "Call to undefined function yaz_connect()"
**Context:** When trying to use Z39.50 client.
**Cause:** The **PHP-YAZ** extension is not installed or enabled on the server.
**Solution:**
* **Linux:** Install `php-yaz` (e.g., `sudo apt-get install php-yaz`).
* **Windows:** Ensure `extension=php_yaz.dll` is uncommented in `php.ini` and the DLL files are in the correct folder.

### "Date is wrong" or Timezone issues
**Cause:** The server's timezone is different from your local time.
**Solution:**
* Edit `config.php` and set the timezone parameter:
    ```php
    date_default_timezone_set('America/Sao_Paulo');
    ```