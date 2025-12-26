---
sidebar_position: 4
title: Database Management (bases.dat)
---

# Database Management (`bases.dat`)

The `bases.dat` file is a plain text file that controls which databases are displayed in the dropdown list of the ABCD Central Module's main menu. Managing this file allows you to add new databases to the interface, hide existing ones, or change their display order.

You can edit this file in two ways: through the ABCD interface or directly on the server.

### Editing `bases.dat` via the Interface

This is the recommended and safest method for managing the list of available databases.

1.  Navigate to **Administration** → **ABCD Configuration** → **Available databases**.
2.  The system will display an editor with the current content of the `bases.dat` file.
3.  The file format is simple: each line represents one database, with the database name followed by a pipe `|` and its description.
    ```
    MARC|MARC Bibliographic
    CEPIS|CEPIS Document repository
    ```
4.  **To add a new database:** Add a new line with the name of the database folder, a pipe `|`, and the description you want to display in the menu.
5.  **To remove a database:** Simply delete the corresponding line.
6.  **To reorder the databases:** Change the order of the lines in the file.
7.  Click **Save** to apply the changes. The database list in the Central Module will be updated immediately.

### Editing the File Directly on the Server

For advanced users, the `bases.dat` file can be edited directly.

1.  Locate the file in the `[path_to_your_bases_folder]/par/` directory. For example: `/var/opt/ABCD/bases/par/bases.dat`.
2.  Open the file in a text editor.
3.  Make the necessary changes following the `database_name|Description` format.
4.  Save the file. The changes will be reflected the next time the Central Module page is loaded.

> **Important:** The database must physically exist in your `bases` folder and be properly configured for it to be usable, even if it is listed in `bases.dat`. This file only controls its visibility in the Central Module's interface.