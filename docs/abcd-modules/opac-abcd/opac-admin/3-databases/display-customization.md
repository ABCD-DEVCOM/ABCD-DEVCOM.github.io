---
title: Display Formats & Export
sidebar_label: Display Formats
sidebar_position: 4
---

# Display Formats & Export Configuration

The **Display Formats** module configures how records are presented to the user on the screen and which export options (e.g., Word, RIS, XML) are available in the toolbar.

**Script:** `formatos_salida.php`
**File Created:** `bases/[db]/opac/[lang]/[db]_formatos.dat`

## 1. Overview
ABCD uses **PFT (Print Format)** files to render database records into HTML. This configuration file maps a user-friendly label (e.g., "Full View") to a physical PFT file stored on the server.

The system uses these definitions in two places:
1.  **Format Dropdown:** Allows the user to switch views (if enabled).
2.  **Export Toolbar:** Defines the output format when a user clicks "Export".

## 2. Configuration Syntax
The interface allows you to define rows with the following parameters. The system writes them to the `.dat` file using the pipe (`|`) separator.

| Parameter | Description |
| :--- | :--- |
| **PFT Name** | The filename of the script located in `bases/[db]/pfts/[lang]/`. Do not include the `.pft` extension (e.g., write `opac_expanded`). |
| **Label** | The text displayed in the menu (e.g., "Bibliographic View"). |
| **Output Type** | Defines how the browser handles the result:<br/>`H`: HTML (Rendered on screen)<br/>`D`: Download (Forces file download, e.g., for RIS/ISO) |
| **Detailed PFT** | *(Optional)* If specified, the system uses the first PFT for the **List View** and this second PFT for the **Detailed View**. |

### Example Configuration (`formatos.dat`)
```text
marc|OPAC default|
mrclte|Marc|Y
export_BibTex|export_BibTex|

```

Excelente observação! A arquitetura antiga misturava a lógica de interface (os botões de seleção e exportação em `select_record.pft`) com os dados bibliográficos. Com a nova classe `ToolButtons` e a renderização dinâmica em `record_card.php`, o PFT agora deve se preocupar exclusivamente com a **apresentação dos dados**, o que nos dá total liberdade para focar no design.

Abaixo está o conteúdo atualizado em inglês, pronto para você inserir no seu arquivo de documentação. Eu reescrevi a dica de otimização (removendo a menção ao `select_record`) e criei uma seção inteira dedicada ao uso do Bootstrap e do FontAwesome, utilizando as classes do seu arquivo `opac.pft` como exemplo didático.

---


## 3. The PFT Helper

The script includes a helper panel that lists all `.pft` files found in the database's directory.

* **Requirements:** For a PFT to appear here, it must exist physically in `/bases/[db]/pfts/[lang]/`.
* **Action:** You can verify filenames here to avoid typos in the configuration.

:::tip 
List vs. Detail Optimization
To improve performance, use the **4th column** feature in `formatos.dat`. You can configure a simplified, lightweight PFT for the initial **List View** to load search results quickly, and a comprehensive, heavy PFT (e.g., `opac_expanded`) exclusively for the **Detailed View**. 

Note: The old `select_record.pft` approach for displaying toolbars and checkboxes is now obsolete. The action toolbar (Print, Word, Reserve, etc.) and record selection checkboxes are now automatically rendered by the system's `ToolButtons` class in a fixed layout. You no longer need to include legacy toolbar HTML or selection logic inside your PFTs.
:::

## 4. Designing Beautiful Formats with Bootstrap & FontAwesome

The OPAC is fully integrated with [**Bootstrap 5**](https://getbootstrap.com/) and [**FontAwesome**](https://fontawesome.com/), allowing you to create modern, responsive, and visually appealing display formats directly within your `.pft` files. Since the system automatically handles the outer card structure and toolbars, your PFT should focus entirely on formatting the bibliographic data.

### 4.1. Using Bootstrap Grid and Tables
Instead of using plain text or outdated HTML attributes, you can leverage Bootstrap's utility classes to structure your data. For example, you can use responsive tables to display record fields cleanly.

**Example: Creating a responsive hoverable table**
```html
'<div class="table-responsive">'
  '<table class="table table-hover responsive-stack table-sm" id="resultado">'
    '<tbody style="font-family:arial;font-size:smaller;vertical-align:top">'
      '<tr><th colspan=2>0 - Object Identification</th>'/
      
      if p(v001) then '<tr><th style="width: 200px;">ID</th><td>'v001+|<br>|,'</td>' fi/
      if p(v010) then '<tr><th style="width: 200px;">Title</th><td>'v010+|<br>|,'</td>' fi/
      if p(v020) then '<tr><th style="width: 200px;">Classification</th><td>'v020+|<br>|,'</td>' fi/
      
    '</tbody>'
  '</table>'
'</div>'
```

### 4.2. Using FontAwesome Icons
You can easily insert vector icons anywhere in your format to make the data more intuitive. Just use the `<i>` tag with the appropriate FontAwesome classes.

**Example: Adding icons to specific fields**
```html
if p(v300) then '<p><i class="fas fa-user text-primary"></i> <strong>Author:</strong> ', v300, '</p>' fi/
if p(v400) then '<p><i class="fas fa-map-marker-alt text-secondary"></i> <strong>Provenance:</strong> ', v400, '</p>' fi/

```

:::info 
Design Tip
Combine Bootstrap's text color classes (like `text-muted`, `text-primary`) and spacing utilities (like `mb-2`, `p-3`) with your PFT logic to create distinct visual hierarchies between main titles, metadata, and secondary notes.
:::



## 5. Cross-Referencing Records: The `CruzarABCD` Function

When building your PFT files, you can enhance the user experience by turning specific data fields (like Authors, Subjects, or Series) into clickable hyperlinks. Clicking these links will automatically trigger a new OPAC search for that specific term.

To achieve this, the OPAC provides a native JavaScript function called `CruzarABCD()`.

### 5.1. How it works
The `CruzarABCD` function takes the clicked term, mounts an exact boolean expression using a specific index prefix, and redirects the user to a clean search results page while preserving their current database and language context.

### 5.2. Function Syntax

```javascript
javascript:CruzarABCD("Search_Term", "Prefix_")

```

* **`Search_Term`**: The exact string retrieved from the database field (e.g., "García Márquez, Gabriel").
* **`Prefix_`**: The FST index prefix configured in your database for that specific field (e.g., "AU_").

### 5.3. Usage Examples in PFT

When writing your PFT, you must output the HTML `<a>` tag and call the function within the `href` attribute. Since CISIS uses single quotes (`'`) for literal strings, it is recommended to use backticks (```) or escaped double quotes (`\"`) for the HTML attributes to prevent syntax errors.

**Example 1: Linking an Author (Field `v100`)**
Assuming your FST indexes authors with the `AU_` prefix:

```text
if p(v100) then
    `<a href='javascript:CruzarABCD("`, v100, `","AU_")'>`, v100, `</a>`
fi

```

**Example 2: Linking Multiple Subjects (Field `v650` - repeatable)**
Assuming your FST indexes subjects with the `KW_` prefix, and you want to format multiple occurrences separated by a `<br>`:

```text
if p(v650) then
    (if p(v650) then
        `<a href='javascript:CruzarABCD("`, v650, `","KW_")'>`, v650, `</a>`
    fi/)
fi

```

:::info 
Important
Ensure that the prefix you pass to `CruzarABCD` exactly matches the prefix defined in your database's `.fst` and `.ix` files. If the prefix is incorrect, the search will return zero results.
:::

