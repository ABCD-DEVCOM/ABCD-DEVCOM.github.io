---
title: Database Configuration Files
sidebar_label: Configuration Files (par/def)
---

# Database Configuration Files

Two key files control how ABCD locates and interacts with its databases.

## `dbn.par` (Database Parameter File)
Located typically in the `cgi-bin` directory (or defined by the `cipar` parameter). This file maps a database name to its physical path on the server.

**Example syntax:**
```text
users=%path_database%users/data/users
books=%path_database%books/data/books
log=%path_database%log/data/log
```

---

## `dr_path.def` (Path and Advanced Definitions)

Located inside each database folder (e.g., `/bases/books/dr_path.def`), this file contains a series of parameters used to activate special options for database management, file uploads, permissions, default sorting, and digital document routing.

### General & System Parameters
* **`UNICODE`**: Establishes the character set used by the database. 
  * `1`: UNICODE (UTF-8)
  * `0` (or omitted): ANSI (ISO-8859-1)
  * *Note: This is mandatory if the `MULTIPLE_DB_FORMATS` parameter is set in `abcd.def`.*
* **`CISIS_VERSION`**: Defines the version of CISIS to be used to manage the database. The combination of `UNICODE` and `CISIS_VERSION` determines the specific subfolder inside the `cgi-bin` directory from where the `wxis` executable will be invoked.
* **`leader`**: The tag of the field where the "leader" information is stored for MARC records. If omitted, the leader information is stored starting at field `3000-`.

### Record Sorting Options
These parameters define the default sorting behavior for database records:
* **`SORTLENGTH`**: Defines the default sort key length. The value must be greater than zero (`>0`).
* **`SORTBY`**: Determines the default sorting method. It can be set to sort by a specific **Tag** or by a custom **Format**.
* **`SORTSPEC`**: Specifies the exact sorting criteria based on your `SORTBY` selection.
  * *For Tag:* Enter the integer tag number.
  * *For Format:* Enter the specific specification string (in ISIS formatting language) used to generate the sort keys.

### Security & Access Control
* **`VALID_IP`**: Restricts access to the database based on the client's internet IP address. You can define valid IPs separated by commas (`,`). An empty value allows access from all addresses. Entering `None` strictly limits access to local network addresses. 
  * *Note: Link-Local Addresses are always allowed by design.* * For detailed configuration instructions, please refer to the [Database IP Access Control](../access-management/ip-access-control) documentation.

### Inventory & Barcodes
* **`inventory_numeric`**: Determines if leading zeros should be removed when scanning an item's barcode in the circulation module. (`Y` = strip leading zeros; `N` = keep leading zeros).
* **`max_inventory_length`**: Indicates the maximum, fixed length of the inventory number. Missing positions are automatically padded with zeros (e.g., if set to `8`, an entered value of `567` is saved as `00000567`). This applies to the `copies` database.
* **`max_cn_length`**: Indicates the maximum, fixed length of the control number, padded with zeros just like the inventory parameter. This is used when assigning control numbers via the database utilities.
* **`barcode`**: Displays the barcode icon in the cataloging module toolbar to trigger the batch printing of barcodes and labels. (The operator must have the required permissions).

### Thesaurus & Directory Browsing
* **`tesaurus`**: The name of the Thesaurus associated with the database.
* **`prefix_search_tesaurus`**: The search prefix added to the thesaurus term when executing a search in the associated database.
* **`dirtree`**: Enables (`Y`) or disables (`N`) exploring the database folder structure. To use this in the Utilities menu, the user must be a system admin, have central module permissions, or possess the `EXBDIR=Y` permission in their profile.
* **`DIRTREE_EXT`**: Defines the allowed file extensions when browsing directories (bases, par, www, or wrk). 
  * *Default:* `*.def,*.iso,*.png,*.gif,*.jpg,*.pdf,*.xrf,*.mst,*.n01,*.n02,*.l01,*.l02,*.cnt,*.ifp,*.fmt,*.fdt,*.pft,*.fst,*.tab,*.txt,*.par,*.html,*.zip`

### User Interface (UI) Customization
You can change the appearance and logo of the interface for a specific database folder:
* **`CSS_NAME`**: The name of the folder containing the custom CSS style files.
* **`LOGO`**: The path to the specific logo for this database (e.g., `../css/Folder_Name/Logo_Name.png`).

### Digital Documents & Storage
* **`ROOT`**: The absolute, full path specifying where digital documents are stored if they are located outside the server's root directory (e.g., `ROOT=/bases/biblo/documents/`).
* **`collection`**: Specifies the subfolder used for storing digital objects linked to the records.

### iAH Full-Text Access Control
If you need to require a password to read the full-text version of protected documents via the iAH interface, the following parameters are used:
* **`DB_PATH`**: The path where the respective database is located (required for iAH since it bypasses Central ABCD configs).
* **`USER_SEARCH`**: The prefix used to locate the user's code.
* **`USER_DISPLAY`**: The PFT format used to display the user's name.
* **`DOCUMENT_DISPLAY`**: The PFT format used to display a brief reference to the selected document.
* **`DOCUMENT_NAME`**: The PFT format used to extract the exact filename of the document to be shown.
* **`HTTP_ACCESS`**: If documents are in the server root, this indicates the base URL to prepend to the filename.
* **`FILE_ACCESS`**: If the document is outside the server root, this specifies the path to prepend before the document name. If omitted, the `ROOT` parameter path is used.
