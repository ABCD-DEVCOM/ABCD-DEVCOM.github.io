---
title: Search & Data Issues
sidebar_label: Search & Data
---

# Search & Data Troubleshooting

## Search Results

### "I created a record, but I can't find it in the search."
**Cause:** The Inverted File (Index) is out of sync with the Master File.
**Solution:**
1.  Go to **Utilities > Maintenance > Full Inverted File Generation**.
2.  Select your database and click **Execute**.
3.  *Note:* Simply "saving" a record updates the index, but bulk imports or crashes require a full regeneration.

### "The Thesaurus permuted index looks empty or broken."
**Cause:** The ABCD Permuted Index generator is case-sensitive and optimized for **UPPERCASE** terms.
**Solution:**
* Ensure your descriptors in the Thesaurus database are stored in Uppercase.
* If using mixed case, the alphabetical list works, but the "Permuted" (Key-in-context) view might fail to align terms correctly.

---

## Import & Export

### "PFT Error / Format Syntax Error" after importing from WinISIS
**Cause:** WinISIS formats often contain Windows-specific RTF commands (like `{\colortbl...}`) or font commands (`\f1`) that are invalid in the web environment.
**Solution:**
1.  Open the database PFT in the **PFT Editor**.
2.  Remove any code resembling RTF or Windows formatting.
3.  Replace them with standard HTML tags (`<b>`, `<font>`, etc.).

### "Upload failed" when importing a large ISO file
**Cause:** The file size exceeds the limit defined in the server's PHP configuration.
**Solution:**
* Edit `php.ini` on your server and increase the following values:
    * `upload_max_filesize = 100M`
    * `post_max_size = 100M`
* Restart the Apache service.