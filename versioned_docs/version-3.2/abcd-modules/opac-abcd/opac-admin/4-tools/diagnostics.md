---
title: Configuration Diagnostics
sidebar_label: Diagnostics
sidebar_position: 9
---

# Configuration Diagnostics

The **OPAC Diagnostics** tool is an automated auditing script designed to check the integrity of your installation. It scans the server's directory structure to ensure that all essential configuration files (`.def`, `.tab`, `.pft`, `.xis`) exist and are accessible.

**Access:** **OPAC Configuration** > **Diagnostics** (`diagnostico.php`)

## 1. What Does It Check?

The script performs a three-level integrity check:

### A. Global Structure & WXIS
It verifies if the core system components are operational:
* **Master Files:** Checks for `opac.def`, `bases.dat`, and `lang.tab`.
* **Search Engine (WXIS):** Confirms the existence of executable scripts in `dataentry/wxis/opac/` (e.g., `buscar.xis`, `inicializar_bd.xis`). If these are missing, the search will fail.
* **Language Directories:** Verifies if the translation folders (`en`, `es`, `pt`, `fr`) exist within `bases/opac_conf/`.

### B. Per-Database Configuration
The system iterates through the `bases.dat` list and, for each active database, checks if the specific configuration files exist inside each language folder (`bases/[db_name]/opac/[lang]/`).

Files checked include:
* **Definition:** `[base].def` (General settings).
* **Advanced Search:** `[base]_avanzada.tab` (Search form rows).
* **Display Formats:** `[base]_formatos.dat` and their respective `.pft` files (e.g., `select_record.pft`).
* **Facets:** `[base]_facetas.dat` (Side filters).
* **Toolbar:** `record_toolbar.tab` (Action buttons like Print/Reserve).

### C. OAI-PMH Readiness
Checks if the database has the necessary files for metadata export and interoperability:
* **XML Mapping:** `marcxml.pft` (Essential for the OAI Provider).
* **Schema:** `marc_sch.xml`.

---

## 2. Interpreting the Report

When running the diagnostics, the system displays a checklist with visual indicators:

* **✅ (Green Check):** The file exists and is correct.
* **❌ (Red Cross):** The file is mandatory but missing. This will likely cause errors in the public interface.
* **OAI Warnings:** If XML files are missing, the system warns you, but the OPAC will continue to function (only XML export will fail).

---

## 3. Auto-Fix Tools

One of the main advantages of this module is that it doesn't just point out errors; it offers quick solutions.

If a file is missing, the script often displays an **Action Button** next to the error:

| Button / Action | Function |
| :--- | :--- |
| **Copy From...** | Allows you to copy a configuration file from another existing database or another language folder. |
| **Create Now** | For standard files (like `marcxml.pft`), the system can generate a generic template automatically. |
| **Download** | For binary files or standard templates, it offers a link to download the original from the official repository. |

:::tip Troubleshooting Tip
If you created a new database and the Diagnostics shows everything in **Red** for a specific language (e.g., English), check if you copied the `opac` folder into `bases/[new_db]/opac/en/`. ABCD requires the configuration to physically exist for every available language.
:::