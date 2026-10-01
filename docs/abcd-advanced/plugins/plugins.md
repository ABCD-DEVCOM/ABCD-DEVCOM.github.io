---
title: ABCD Plugin API & Hook System Documentation
sidebar_label: ABCD Plugin API & Hook
---

# Module and Plugin Development Manual for the ABCD System

Welcome to the ABCD Plugin API documentation. As ABCD evolves into a modern Library Services Platform (LSP), the architecture has been refactored to ensure that user customizations, translations, and plugins are completely isolated from the system's core engine.

This manual is intended for developers and system administrators who wish to extend the functionalities of ABCD (Automatisación de Bibliotecas y Centros de Documentación). In its latest versions, ABCD adopted a modern modular architecture and introduced an Official Plugin Ecosystem. The creation of a plugin now uses a Hooks system, JSON manifests, basic MVC routing, and utility classes (such as `PluginBridge` and `LanguageManager`) to ensure security, isolation, and ease of updating.

## 1. Architectural Overview: Core vs. Vault

To guarantee safe and seamless system updates, ABCD strictly separates its engine from its data.

* **The Core (`/central/`)**: This is the heart of ABCD. It contains the official factory files, default translations, and core scripts. **You should never modify files in this directory.** When ABCD is updated, this folder may be entirely overwritten.
* **The Vault (`/content/`)**: This is where your library lives. All local modifications, custom translations (e.g., changing "Avental" to "Jaleco"), and third-party plugins reside here. The system dynamically reads from `content/` first, and seamlessly falls back to `central/` if a customized file is not found.

All plugins must be installed inside `/content/plugins/` (or extracted automatically by the manager).

### Basic Plugin Directory Structure

Let's create an example plugin called `my_plugin`. The folder structure under `/htdocs/content/plugins/my_plugin/` should look like this:

```text
/my_plugin/
  plugin.json              # Local plugin manifest (Required)
  plugin-bootstrap.php     # Initialization and Hooks registration (Required)
  index.php                # Entry point (Router)
  form.php                 # Visual interface (Example)
  process.php              # Processing logic (Example)
  /lang/                   # Translation files (.tab)
    /en/
    /pt/
    /es/
  /assets/                 # CSS, JS, and Images specific to the plugin
```

## 2. The Local Plugin Manifest (`plugin.json`)

Every plugin requires a `plugin.json` file strictly in the root of its physical folder. It informs the ABCD core of the vital metadata required for local loading.

**Example:**
```json
{
  "name": "My Plugin",
  "slug": "my_plugin",
  "version": "1.0.0",
  "description": "Example plugin for ABCD",
  "entry": "index.php",
  "settings_page": "admin/settings.php",
  "hooks": [
    "central_menu",
    "abcd_translation_menu"
  ],
  "config_bridge": true
}
```

## 3. The `PluginBridge` Class (Security and Context)

To avoid polluting the global scope and directly including the core's `config.php`, ABCD provides the `PluginBridge` class. It safely exposes essential paths and variables (such as `$db_path` and `$xWxis`). 

Always start your PHP files (especially `index.php`) by validating access and instantiating the Bridge:

```php
<?php
if (!class_exists('PluginBridge')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access forbidden.");
}

// Start session if necessary
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$bridge = PluginBridge::getInstance();
$dbPath = $bridge->get('db_path');
$abcdPath = $bridge->get('abcd_path', realpath(__DIR__ . '/../../../central'));
$pluginPath = realpath(__DIR__);
$lang = $bridge->get('lang', 'en');
?>
```

## 4. The Hook System

The ABCD Hook System allows plugins to "hook" into the core execution flow to execute custom code, inject HTML, or modify data—all without altering a single line of core code.

The `plugin-bootstrap.php` file is loaded automatically by the core whenever the plugin is active, serving to inject your plugin into the central interface using hooks.

### Registering a Hook (`abcd_add_hook`)
Use this function inside your plugin to attach a callback to a specific event.

```php
/**
 * @param string   $hook     The name of the hook to attach to.
 * @param callable $cb       The callback function to execute.
 * @param int      $priority Execution priority (lower numbers run earlier). Default is 10.
 */
abcd_add_hook(string $hook, callable $cb, int $priority = 10): void
```

### Executing a Hook (`abcd_run_hook`)
*For Core Contributors:* Use this function to create injection points within the ABCD core.

```php
/**
 * @param string $hook The name of the hook.
 * @param mixed  $data Optional data to pass to the callbacks (Filters).
 * @return mixed The modified data or output.
 */
abcd_run_hook(string $hook, mixed $data = null): mixed
```

## 5. Hook Reference

Below is the current list of available hooks within the ABCD ecosystem, divided by module. *(Note: As the ABCD API expands, more hooks for cataloging, circulation, and OPAC intervention will be documented here).*

### Core Hooks (`/central/`)

| Hook Name | Type | Location | Description |
| --- | --- | --- | --- |
| `abcd_header_end` | Action | `central/common/header.php` | Fires immediately before the `<!DOCTYPE html>` declaration. Ideal for injecting HTTP headers or early session logic. |
| `abcd_footer_end` | Action | `central/common/footer.php` | Fires at the very end of the footer HTML, right before the system checks for updates. Perfect for injecting custom JavaScript or tracking codes. |
| `central_menu` | Filter | Topbar Navigation | Allows plugins to inject new menu items into the main ABCD top navigation bar. |
| `config_menu` | Filter | `/central/settings/conf_abcd.php` | Allows plugins to add new menu items to the ABCD configuration settings. |
| `abcd_translation_menu` | Filter | `central/dbadmin/menu_traducir.php` | Injects custom buttons into the main translation interface, allowing plugins to expose their own `.tab` files for local translation. |
| `abcd_compare_translation_menu` | Filter | `central/dbadmin/menu_traducir.php` | Injects custom buttons into the translation comparison interface. |

### OPAC Hooks (`/opac/`)

| Hook Name | Type | Location | Description |
| --- | --- | --- | --- |
| `opac_head_end` | Action | `opac/head.php`, `opac/head-my.php` | Fires immediately before the `</head>` tag. Ideal for injecting custom CSS, meta tags, and early scripts (e.g., SEO tags, dark mode styles). |
| `opac_footer_end` | Action | `opac/views/footer.php` | Fires right before the `</body>` tag. Perfect for loading heavy scripts, analytics trackers, or chatbots without blocking rendering. |
| `opac_topbar_menu` | Action | `opac/views/topbar.php` | Allows plugins to inject new navigation links or buttons directly into the OPAC's main topbar menu. |
| `opac_record_toolbar` | Filter | `opac/get_record_details.php` | Filters the native action buttons of a bibliographic record. Perfect for adding export, citation, or custom interaction buttons (e.g., "Export to Zotero"). |
| `opac_sidebar_facets` | Action | `opac/facets.php` | Fires at the end of the sidebar facets rendering. Useful for injecting external API widgets (e.g., author biographies, event calendars, related links). |


## 6. Routing (Basic MVC Pattern)

It is recommended that `index.php` acts as a main controller (Router). It receives the `action` variable via URL or form request and includes the correct processing files, keeping the logic strictly isolated from the interface.

**Example `index.php`:**
```php
<?php
$config_path = realpath(__DIR__ . '/../../../central/config.php');
if (file_exists($config_path)) {
    require_once $config_path;
}

global $msgstr, $langManager, $lang;

$plugin_dir = __DIR__;
$plugin_name = basename(__DIR__);
$current_lang = $_SESSION['lang'] ?? $lang ?? 'en';

// Load plugin translations
if (isset($langManager)) {
    $plugin_msgs = $langManager->loadPluginTranslations($plugin_dir, $plugin_name, 'my_plugin.tab', $current_lang);
    $msgstr = array_merge($msgstr ?? [], $plugin_msgs);
}

// Router
$action = $_REQUEST['action'] ?? 'form';

switch ($action) {
    case 'process':
        require_once __DIR__ . '/process.php';
        break;
    case 'ajax':
        require_once __DIR__ . '/ajax.php';
        break;
    case 'form':
    default:
        require_once __DIR__ . '/form.php';
        break;
}
```

## 7. Internationalization (Translations and LanguageManager)

Plugin internationalization uses the `LanguageManager` and follows an intelligent override hierarchy. Translation files are no longer restricted to the system's base folder.

1. **User Vault (Local Overrides/Customizations):** `/htdocs/content/lang/{language}/my_plugin.tab`
2. **Plugin Default (Your folder):** `/htdocs/content/plugins/my_plugin/lang/{language}/my_plugin.tab`
3. **Automatic Fallback:** Language `en` (English) in the plugin folder.

**Format of the `.tab` file** (e.g., `lang/en/my_plugin.tab`):
```text
my_plugin_title=Reservation System
submit_button=Submit Request
```

**Usage in Code:**
```php
global $msgstr;
require_once $abcdPath . '/common/LanguageManager.php';
$langManager = new \ABCD\Common\LanguageManager($abcdPath, $abcdPath . '/../content');

$plugin_msgs = $langManager->loadPluginTranslations($pluginPath, 'my_plugin', 'my_plugin.tab', $lang);
$msgstr = array_merge($msgstr, $plugin_msgs);

// Usage in HTML
echo $msgstr['my_plugin_title'] ?? 'Default Title';
```

## 8. Interacting with the Database (CISIS/WXIS)

Data manipulation continues to use the CISIS executable (via `wxis_llamar.php`), but you now construct the paths dynamically using the `PluginBridge`.

**Example: Creating a Record**
```php
<?php
$base = "my_database";
$cn = "00001"; // Auto-increment logic (control_number.cn)

// Assemble the ISIS tags in the format <tag>value</tag>
$tags  = "<100>" . date("Ymd") . "</100>";
$tags .= "<0001>" . $cn . "</0001>";
$tags .= "<0010>Value Captured from Form</0010>";

$cipar = $base . ".par";
$IsisScript = $xWxis . "actualizar.xis";

$query  = "&base=" . $base;
$query .= "&cipar=" . $dbPath . "par/" . $cipar;
$query .= "&Mfn=New";
$query .= "&Opcion=crear";
$query .= "&ValorCapturado=" . urlencode($tags);

// Configure wxis_llamar.php
$_GET['IsisScript'] = $IsisScript;
require_once $abcdPath . "/common/wxis_llamar.php";

// The response will be in the global array $contenido
if (isset($contenido[1]) && str_starts_with($contenido[1], "MFN:")) {
    $mfnCreated = trim(str_replace("MFN:", "", $contenido[1]));
    echo "Record created successfully. MFN: " . $mfnCreated;
}
```

## 9. Recommended Security Practices

* **Direct Access:** Always use the `PluginBridge` check at the top of all `.php` files to prevent internal scripts from being executed directly via a URL browser request.
* **Request Method Enforcement:** When processing forms, block unauthorized access via `GET`:
  ```php
  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
      header("Location: /content/plugins/my_plugin/?action=form");
      exit;
  }
  ```
* **Use of Secure Variables:** Always trust the array populated by `get_post.php` (available globally in the core) or explicitly sanitize variables coming from `$_POST` using `htmlspecialchars()` or similar native PHP methods.

## 10. Practical Hook Examples

### Example 1: Adding a Link in the Central Menu
Inject an item into the central interface.

**File:** `content/plugins/my_plugin/plugin-bootstrap.php`
```php
<?php
$bridge = PluginBridge::getInstance();

abcd_add_hook('central_menu', function(string $menuHtml) use ($bridge): string {
    global $msgstr;
    $lang = $bridge->get('lang', 'en');
    
    $menuHtml .= '<a href="/content/plugins/my_plugin/?action=form" class="menuButton moduleButton">';
    $menuHtml .= '<span><strong>' . ($msgstr["my_plugin_title"] ?? 'My Plugin') . '</strong></span>';
    $menuHtml .= '</a>';
    
    return $menuHtml;
});
```

### Example 2: Injecting a Plugin's Translation Button
If your plugin has its own language files, you can allow librarians to translate them using the native ABCD interface.

**File:** `content/plugins/my-plugin/plugin-bootstrap.php`
```php
<?php
use ABCD\Common\PluginBridge;

abcd_add_hook('abcd_translation_menu', function(string $menuHtml): string {
    $bridge = PluginBridge::getInstance();
    $lang = $bridge->get('lang', 'en');
    
    // Inject a button for the plugin
    $menuHtml .= '<a href="../lang/translate.php?lang=' . urlencode($lang) . '&table=myplugin.tab&plugin=my-plugin" class="menuButton moduleButton">';
    $menuHtml .= '<span><strong>My Plugin Settings</strong></span>';
    $menuHtml .= '</a>';
    
    return $menuHtml;
});
```

### Example 3: Injecting a Custom Script in the Footer
You can load custom JavaScript files or analytics trackers globally across the ABCD administrative interface.

**File:** `content/plugins/my-plugin/plugin-bootstrap.php`
```php
<?php

abcd_add_hook('abcd_footer_end', function(string $output): string {
    $customScript = '<script src="/content/plugins/my-plugin/assets/js/custom.js"></script>';
    return $output . PHP_EOL . $customScript;
});
```

## 11. The Ecosystem and Official Repository

For your plugin to appear in the online store (Plugin Manager) installed in ABCDs around the world, it must be submitted to the Official Community Repository on GitHub. 

ABCD uses a hybrid and efficient architecture: physical packages (`.zip`) are hosted in independent repositories on GitHub (via Releases), and the global catalog is centrally managed by the `abcd-plugin-registry` repository.

### The Submission Flow
1. **Code Hosting:** Develop and host the source code of your plugin in your own repository on GitHub. Create a Release or a Tag (e.g., `v1.0.0`) and copy the URL of the `.zip` file automatically generated by GitHub.
2. **Fork the Central Repository:** Fork the `ABCD-DEVCOM/abcd-plugin-registry` repository.
3. **Creating the Remote Manifest:** Within the `registry/` folder of the central repository, create a JSON file with the exact name of your plugin's slug (e.g., `my_plugin.json`).
4. **Submission (Pull Request):** Open a Pull Request (PR) against the main branch of the official repository. After approval and merge by the community, a GitHub Action will compile the catalog and your plugin will automatically appear in all ABCD systems.

### The JSON Submission Model (`registry/your_plugin.json`)
This submission file differs from the local `plugin.json`. It is richer and has native multilingual support. ABCD automatically handles translating and adjusting the characters (UTF-8 / ISO-8859-1) to suit the final user interface.

* **Mandatory Structure:** The root key must be exactly the slug of your plugin.
* The `name` and `description` attributes must be objects (arrays) mapping the supported languages (minimum of English `en`).
* The `url` attribute generates the "More information" button, ideal for linking the documentation or the main repository of your project.

**Complete Submission Example (`registry/ric_cm.json`):**
```json
{
  "ric_cm": {
    "slug": "ric_cm",
    "version": "1.0.0",
    "author": "ABCD Community",
    "download_url": "[https://github.com/ABCD-DEVCOM/ric_cm/archive/refs/tags/v1.0.0.zip](https://github.com/ABCD-DEVCOM/ric_cm/archive/refs/tags/v1.0.0.zip)",
    "url": "[https://github.com/ABCD-DEVCOM/ric_cm](https://github.com/ABCD-DEVCOM/ric_cm)",
    "name": {
      "en": "Records in Contexts (RiC-CM)",
      "fr": "Records in Contexts (RiC-CM)",
      "pt": "Registros em Contextos (RiC-CM)",
      "es": "Registros en Contextos (RiC-CM)"
    },
    "description": {
      "en": "Archiving module based on the ICA RiC-CM standard. It includes the management of entities and controlled vocabularies.",
      "pt": "Módulo de arquivamento baseado na norma ICA RiC-CM. Ele inclui o gerenciamento de entidades e vocabulários controlados.",
      "fr": "Module d'archivage basé sur la norme ICA RiC-CM. Il inclut la gestion des entités et des vocabulaires contrôlés.",
      "es": "Módulo de archivo basado en la norma ICA RiC-CM. Incluye la gestión de entidades y vocabularios controlados."
    }
  }
}
```

## Summary Checklist for Publishing a Plugin
1. Place your files in `/htdocs/content/plugins/your_slug/`.
2. Create the local manifest `plugin.json`.
3. Register the visual hooks (menus) in `plugin-bootstrap.php`.
4. Centralize the security routing in `index.php`.
5. Place your language files in `lang/{language}/file.tab` and load them via `LanguageManager`.
6. Host the code and generate the `.zip` on GitHub.
7. Submit the multilingual manifest via Pull Request to the `registry/` folder of the `abcd-plugin-registry`.