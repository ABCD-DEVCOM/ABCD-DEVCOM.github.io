---
title: Access Control & Contexts
sidebar_label: Access Control
sidebar_position: 6
---

# Multi-Context System Documentation

The **Multi-Context System** allows a single ABCD OPAC installation to serve multiple libraries, institutions, or database collections independently. By using a simple URL parameter (`?ctx=...`), the system switches the physical directory where it looks for databases (`bases`), effectively creating separate environments.

### 1\. How it Works

Instead of having a hardcoded path to the databases (e.g., `/var/www/bases/`), the system uses a **Mapping Logic**:

1.  **The User Request:** The user accesses a URL like `http://myserver/opac/?ctx=law`.
2.  **The Lookup:** The system checks the `config_opac.php` file for a "map" that links the alias `law` to a specific physical folder on the server (e.g., `C:/abcd/bases-law/`).
3.  **The Switch:** If the context is valid, the system sets the internal `$db_path` variable to that specific folder. All subsequent operations (searching, displaying records, loading configuration files) will happen inside that folder.
4.  **Session Persistence:** The system remembers the current context in the user's session. This ensures that if the user clicks a link that accidentally omits the `?ctx=` parameter, they remain in the correct library.

### 2\. How to Enable It

To enable this feature, you must edit the `config_opac.php` file located in the `opac/` directory (or the central configuration directory, depending on your setup).

**Step 1: Activate the Feature**
Locate the `$opac_multi_context` variable and set it to `true`.

```php
$opac_multi_context = true;
```

**Step 2: Configure Strict Mode (Optional but Recommended)**
Strict mode prevents users from accessing the OPAC without specifying a context (which would otherwise load the default/root databases).

```php
$opac_strict_mode = true; // Blocks access if ?ctx= is missing
```

**Step 3: Define the Context Map**
This is the most important step. You define an array where the **key** is the URL alias and the **value** is the full physical path to the `bases` folder for that client.

```php
$opac_context_map = array(
    // 'URL_ALIAS'  =>  'PHYSICAL_PATH_ON_SERVER'
    'demo'          =>  'C:/xampp/htdocs/ABCD2/www/bases-examples_Windows/',
    'medicine'      =>  'C:/xampp/htdocs/ABCD2/www/bases-medicina/',
    'law_library'   =>  '/var/www/abcd/bases-law/',
);
```

-----

# ⚙️ Important Points of `config_opac.php`

The `config_opac.php` file is the brain of the OPAC. It is structured into logical blocks to separate user configuration from system logic.

### Block 1: Initialization

This section handles PHP settings and loads the core ABCD configurations.

  * **Session Start:** It ensures a PHP session is active to store the user's current context and language.
  * **Central Config:** It includes `central/config.php` to get system-wide defaults.

### Block 2: User Configuration (Edit Here)

This is where administrators make changes.

  * **Multi-Context Switches:** As explained above (`$opac_multi_context`, `$opac_strict_mode`).
  * **Context Map:** The list of available libraries (`$opac_context_map`).

### Block 3: Context Resolution Logic

This section contains the logic that determines which database path (`$db_path`) to use. **You generally do not need to edit this.**

  * **URL Detection:** Checks if `$_REQUEST['ctx']` exists and matches an entry in the map.
  * **Session Fallback:** If the URL has no context, it checks `$_SESSION` to see if the user was already browsing a specific library.
  * **Security Check:** If `Strict Mode` is on and no context is found, it kills the process with an "Access Denied" message (unless running in the Administrative module).
  * **Sanitization:** Ensures paths end with a correct directory separator (`/`).

### Block 4: Mode Logic (Integrated vs. Single Base)

Controls the search behavior:

  * **Integrated Mode:** Searches across all databases defined in `bases.dat`. Active by default on the home page.
  * **Single Base Mode:** If the URL contains `&base=marc`, this logic automatically disables Integrated Mode so the search is restricted to that specific database.

### Block 5: Language Detection

A robust logic to determine the interface language, prioritized as follows:

1.  **Session (Admin):** If an administrator is logged in, their language preference wins.
2.  **URL Request:** If the user clicks a flag (`?lang=pt`), that choice takes precedence and is saved.
3.  **Session (Visitor):** Remembers the visitor's choice during navigation.
4.  **Browser:** Tries to detect the browser's default language.
5.  **Default:** Falls back to the system default.

### Block 6: Visual and Functional Settings

Loads specific visual settings for the active base.

  * **`opac.def`:** Reads the specific configuration file for the current language/base (colors, texts).
  * **`$restricted_opac`:** Defines if the OPAC requires login (`Y` or `N`).
  * **Global Styles:** Checks for `global_style.def` to apply custom CSS overrides per context.