---
sidebar_position: 5
sidebar_label: 'Folder Structure'
sidebar_custom_props:
  myEmoji: 📁
---

# 📁 Directory Structure

Understanding the physical structure of ABCD folders is vital for system administration, backup, and troubleshooting.

## Root Overview
A standard ABCD installation is divided into three main pillars:

```text
ABCD_ROOT/
├── cgi-bin/       # The "Engine" (Binaries and Scripts)
├── htdocs/        # The "Application" (Web Interface: PHP, JS, CSS)
└── bases/         # The "Data" (Databases, Configuration, Formats)

```

:::tip
Always separate your **Data** (`bases`) from the **Application** (`htdocs`). This makes upgrading the software easier without risking your library data.
:::

## 1. The `cgi-bin` Folder

Contains the executable files that process the ISIS databases.

* **`wxis.exe` / `wxis**`: The web-isis bridge software.
* **`mx`**: (Optional) Administration utility for command line.

## 2. The `htdocs` Folder

Contains the web application code. **Do not modify files here** unless you are a developer contributing to the core code.

* **`central/`**: The main management interface (Cataloging, Circulation, etc).
* **`opac/`**: The public access catalog interface.
* **`assets/`**: Images, CSS, and Javascript libraries.

## 3. The `bases` Folder (Your Data)

This is the most important folder for backups. It contains all bibliographic records and local configurations.

* **`par/`**: Parameter files defining database locations.
* **`lang/`**: Translation messages (if customized).
* **`[database_name]/`**: Each database (e.g., `books`, `users`) has its own folder here containing:
* `data/`: The Master File (`.mst`) and Inverted File (`.xrf`, `.cnt`).
* `def/`: Field Definition Tables (`.fdt`) and input worksheets (`.fmt`).
* `pfts/`: Print Format Tables (`.pft`).

