---
title: Visual Identity & Interface (abcd.def)
sidebar_label: UI & Logos (abcd.def)
sidebar_position: 5
---

# Institution Identity and Interface Configuration

The **`abcd.def`** file is the central configuration file for the visual identity and global behaviors of the ABCD Central module. It allows administrators to customize logos, colors, text labels, and system notifications without modifying the PHP source code.

## Location and Scope

* **Path:** `/bases/par/abcd.def` (Default global configuration)
* **Scope:** Affects the entire Central module (Cataloging, Circulation, Acquisitions, etc.).

:::tip Database Specific Configuration
Some databases may have their own `abcd.def` located in their specific database folder (e.g., `/bases/books/abcd.def`). If present, the local file overrides the global settings for that specific database context.
:::

## Editing the Configuration

The safest way to modify these values is through the built-in editor in the Central module, as it handles file permissions and syntax automatically.

1.  Go to **Administration > ABCD Configuration**.
2.  Select **System settings (abcd.def)**.
3.  The system will present a form with tabs for **General**, **Colors**, **Working folders**, etc.
4.  Make your changes and click **Update**.

---

## Configuration Parameters

The file uses a key-value pair syntax (`KEY=Value`). Below is a detailed reference of the available parameters.

### 1. Institution Identity (Header)
These parameters control the branding displayed at the top of the interface.

| Parameter | Description | Example |
| :--- | :--- | :--- |
| **`LEGEND1`** | The main name of the institution displayed in the header. | `Central Library` |
| **`LEGEND2`** | The name of the department or unit (subtitle). | `Technical Processing` |
| **`URL`** | The URL that opens when clicking the institution logo. | `http://library.org` |
| **`LOGO`** | The filename of the logo image displayed in the top-left corner. <br/>*Note: Images must be stored in `/htdocs/central/images/`.* | `logo.png` |

### 2. Responsible Organization (Footer)
ABCD 3.1 allows defining a secondary entity (e.g., the software maintainer, a university department, or the developer) in the page footer.

| Parameter | Description | Default |
| :--- | :--- | :--- |
| **`RESPONSIBLE_NAME`** | Name of the organization responsible for the system. | `ABCD Community` |
| **`RESPONSIBLE_LOGO`** | A small logo displayed in the footer. | `logo_community.png` |
| **`RESPONSIBLE_URL`** | The URL linked to the responsible logo. | `https://github.com...` |

### 3. Visual Styles and Colors
You can change the color scheme of the administrative interface to match your institution's branding.

* **`CSS_NAME`**: Defines the main color palette (Skin).
    * *Available Options:* `cyan`, `blue`, `green`, `orange`, `gray`, `picton-blue` (default).
    * *Technical Note:* These correspond to CSS files located in `/central/css/`.

**Advanced Color Overrides:**
If the standard skins are not enough, you can define specific hex codes:

* **`BODY_BACKGROUND`**: Overrides the main background color (e.g., `#FFFFFF`).
* **`SECTION_BACKGROUND`**: Background color for inner sections/panels.
* **`HEADING`**: Color of the headers and titles.
* **`HELPER_BG`**: Background color for help tooltips.
* **`MD_ICONS_COLOR`**: Defines the color of the Material Design icons used throughout the system (e.g., `#333333`).

### 4. System Behavior & Navigation
These settings affect how the system behaves regarding updates, language, and browsing.

* **`DEFAULT_LANG`**: The default language pre-selected on the login screen.
    * Values: `en` (English), `es` (Spanish), `pt` (Portuguese), `fr` (French).
* **`CHECK_VERSION`**: Controls the automatic update notification mechanism.
    * `Y` (Default): Checks GitHub for updates and shows a yellow bar in the footer if a new version is available.
    * `N`: Disables the notification.
* **`BROWSE_TOP`**: Defines the default sorting method when opening the database browser.
    * `mfn`: Sorts by Record Number (Creation order).
    * `search`: Sorts by the first search expression defined in the database (FST).
* **`DIRTREE_EXT`**: Defines valid file extensions for the Digital Documents explorer.
    * Example: `*.pdf,*.jpg,*.png,*.docx`

### 5. Module Visibility
You can hide specific modules from the main menu if they are not used by your library.

* **`LEGEND2=N`**: Hides the **Acquisitions** button.
* **`LEGEND3=N`**: Hides the **Circulation** button.
* **`LEGEND4=N`**: Hides the **Reservations** button (in some versions).

:::warning Syntax
When editing the file manually, ensure there are no spaces around the `=` sign (e.g., `LEGEND1=My Library` is correct).
:::