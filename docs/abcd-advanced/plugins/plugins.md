---
title: ABCD Plugin API & Hook System Documentation
sidebar_label: ABCD Plugin API & Hook
---


# ABCD Plugin API & Hook System Documentation

Welcome to the ABCD Plugin API documentation. As ABCD evolves into a modern Library Services Platform (LSP), the architecture has been refactored to ensure that user customizations, translations, and plugins are completely isolated from the system's core engine.

This guide explains the directory structure, the event-driven Hook System, and provides a reference for the available hooks to help you build your own plugins.

## 1. Architectural Overview: Core vs. Content

To guarantee safe and seamless system updates, ABCD strictly separates its engine from its data.

* **The Core (`/central/`)**: This is the heart of ABCD. It contains the official factory files, default translations, and core scripts. **You should never modify files in this directory.** When ABCD is updated, this folder may be entirely overwritten.
* **The Vault (`/content/`)**: This is where your library lives. All local modifications, custom translations (e.g., changing "Avental" to "Jaleco"), and third-party plugins reside here. The system dynamically reads from `content/` first, and seamlessly falls back to `central/` if a customized file is not found.

### Plugin Directory

All plugins must be installed inside `/content/plugins/`. Each plugin should have its own folder containing a `plugin.json` manifest and a `plugin-bootstrap.php` file to register its hooks.

---

## 2. The Hook System

The ABCD Hook System allows plugins to "hook" into the core execution flow to execute custom code, inject HTML, or modify data—all without altering a single line of core code.

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

---

## 3. Hook Reference

Below is the current list of available hooks within the ABCD ecosystem.

| Hook Name | Type | Location | Description |
| --- | --- | --- | --- |
| `abcd_header_end` | Action | `central/common/header.php` | Fires immediately before the `<!DOCTYPE html>` declaration. Ideal for injecting HTTP headers or early session logic. |
| `abcd_footer_end` | Action | `central/common/footer.php` | Fires at the very end of the footer HTML, right before the system checks for updates. Perfect for injecting custom JavaScript or tracking codes. |
| `central_menu` | Filter | Topbar Navigation | Allows plugins to inject new menu items into the main ABCD top navigation bar. |
| `abcd_translation_menu` | Filter | `central/dbadmin/menu_traducir.php` | Injects custom buttons into the main translation interface, allowing plugins to expose their own `.tab` files for local translation. |
| `abcd_compare_translation_menu` | Filter | `central/dbadmin/menu_traducir.php` | Injects custom buttons into the translation comparison interface. |

*(Note: As the ABCD API expands, more hooks for cataloging, circulation, and OPAC intervention will be documented here).*

---

## 4. Practical Examples

### Example 1: Injecting a Plugin's Translation Button

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

### Example 2: Injecting a Custom Script in the Footer

You can load custom JavaScript files or analytics trackers globally across the ABCD administrative interface.

**File:** `content/plugins/my-plugin/plugin-bootstrap.php`

```php
<?php

abcd_add_hook('abcd_footer_end', function(string $output): string {
    $customScript = '<script src="/content/plugins/my-plugin/assets/js/custom.js"></script>';
    return $output . PHP_EOL . $customScript;
});

```