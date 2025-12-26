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

## `dr_path.def` (Path Definition)

Located inside each database folder (e.g., `/bases/books/dr_path.def`). It controls permissions and paths for file uploads (images, digital documents) specific to that database.

**Key Settings:**

* `ROOT`: The physical root folder for documents.
* `collection`: Subfolder for digital objects.
* `unicode`: Defines if the database uses UTF-8 (1) or ANSI (0).
