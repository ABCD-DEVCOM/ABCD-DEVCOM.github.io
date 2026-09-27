---
title: Database Parameters (dbn.par)
sidebar_label: dbn.par (Paths)
sidebar_position: 11
---

# Database Parameters (`dbn.par`)

The **`.par` file** acts as a bridge between the OPAC and the physical files on the server. It maps logical names to absolute or relative paths, ensuring that the system can locate the Master File, the Inverted File, and the Print Formats regardless of the operating system (Windows/Linux).

**Script:** `dbn_par.php`
**File Location:** `bases/par/[db].par` (e.g., `bases/par/marc.par`)

## 1. Why is this file necessary?
Unlike the Central module (which assumes standard paths), the OPAC allows for a more distributed architecture. The `dbn.par` file explicitly tells the search engine:
1.  Where the data (`.mst` and `.xrf`) is located.
2.  Where the search indexes (`.cnt` and `.n01`) are located.
3.  Where to find the specific PFTs used for display.

## 2. Path Variables
To make the configuration portable, ABCD uses internal variables instead of hardcoded paths (like `C:\ABCD\bases`).

| Variable | Resolves To |
| :--- | :--- |
| **`%path_database%`** | The root of your bases directory (defined in `config_opac.php`). |
| **`%lang%`** | The current active language (e.g., `en`, `es`, `pt`). |

## 3. Essential Entries

When you open this module, the script **automatically checks** for missing essential entries and suggests them.

### A. The Database Path (Mandatory)
The first lines must point to the Master File and the Inverted File.
```ini
marc.mst=%path_database%marc/data/marc.mst
marc.cnt=%path_database%marc/data/marc.cnt

```

### B. The Display Formats

The OPAC requires specific PFTs to render results.

**1. `select_record.pft**` (The List View)
This format is language-dependent (it might contain labels like "Author:" or "Autor:").

* **Syntax:** `select_record.pft=%path_database%marc/pfts/%lang%/select_record.pft`
* **Note:** The `%lang%` wildcard allows the system to switch folders automatically when the user changes the language.

**2. `autoridades_opac.pft**` (Index Browsing)
This format is usually technical and language-independent (extracts keys from the index).

* **Syntax:** `autoridades_opac.pft=%path_database%marc/pfts/autoridades_opac.pft`
* **Note:** It does *not* use `%lang%` because it sits in the root of the `pfts` folder.

## 4. Troubleshooting

If you see errors like **"Error reading control record"** or **"Format not found"**:

1. **Check the Path:** Ensure `%path_database%` resolves correctly.
2. **Check Permissions:** The web server must have read access to the `.par` file and the files it points to.
3. **Check Syntax:** Ensure there are no spaces around the `=` sign.
* *Correct:* `name=path`
* *Incorrect:* `name = path`



:::tip Automatic Fix
If you deleted lines by mistake, simply reload the `dbn_par.php` page. The script logic detects missing standard PFTs and appends the correct lines to the editor window automatically. Click **Save** to apply the fix.
:::
