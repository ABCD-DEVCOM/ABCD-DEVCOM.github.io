---
title: System Architecture & Global Config
sidebar_label: Architecture & Global Config
sidebar_position: 2
---

# System Architecture & Global Configuration

The ABCD OPAC is not just a search interface; it is a file-based CMS controlled by a hierarchy of configuration files. Understanding this architecture is crucial for troubleshooting and advanced customization.

## 1. The Bootloader: `config_opac.php`
Located in the root of the OPAC (or linked from Central), this PHP file is the first to run. It dictates the environment variables.

**Key Variables:**
* **`$db_path`**: The absolute path to the `bases` folder.
    * *Logic:* Unlike the Central module, the OPAC allows dynamic path switching via the [Multi-Context System](./advanced-access).
* **`$opac_path`**: The web root of the OPAC.
* **`$lang`**: The priority logic for language detection (Session > Get > Browser > Default).
* **`$restricted_opac`**: Defines if the portal is public (`N`) or requires login (`Y`) to even view the home page.

## 2. Global Settings: `opac.def`
Located in `bases/opac_conf/opac.def`, this INI file controls the global behavior and appearance.

### Critical Parameters
```ini
[OPAC]
OpacHttp=http://localhost:9090/opac/
Logo=logoabcd.png
link_logo=[http://my-library.org](http://my-library.org)
TituloPagina=My Library Catalog
footer_text=© 2024 Library Systems
styles=styles.css

```

* **`OpacHttp`**: Must match your server's URL exactly. If images break, check this first.
* **`styles`**: Points to the CSS file in `assets/css/`.
* **`charset`**: Usually `UTF-8` or `ISO-8859-1`. If special characters appear as `Ã£`, check this setting.

## 3. The `opac_conf` Directory Structure

The `bases/opac_conf/` folder contains the "Global Configuration" that applies to all databases unless overridden.

* **`bases.dat`**: The master list of databases available in the OPAC.
* **`lang.tab`**: Maps language codes (en, es, pt) to human-readable names.
* **`formatos.dat`**: Defines the output options (ISO, Word, Print) available in the toolbar.
* **`record_toolbar.tab`**: Controls which icons appear above records (Print, Reserve, etc.).