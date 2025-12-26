---
sidebar_position: 3
title: Display Customization
sidebar_custom_props:
  myEmoji: 🎨
---

# Display Customization

The way bibliographic records are displayed to the end-user in the OPAC is fully customizable. This control is achieved through the **ISIS Formatting Language (PFT)**. By editing specific PFT files, an administrator can change which fields are displayed, their order, and their formatting (e.g., adding labels, applying bold text, or creating links).

### Understanding Display Formats (PFTs)

The OPAC typically uses several different PFT files to present information in various levels of detail. The most common formats are:

* **Short or Tabular Format:** A brief, one-line display used for the list of search results. It usually contains just the essential information, like the title and author.
* **Medium or Full Format:** The detailed view of a single record, which is shown when a user clicks on an item from the results list. This format includes all relevant bibliographic details.
* **MARC Format:** A technical view that shows the record's raw MARC tags and subfields.

### How to Customize Display Formats

1.  **Locate the PFT files:** The display PFTs for the OPAC are located in the database's `pfts` directory, usually within a subdirectory for the specific language (e.g., `/var/opt/ABCD/bases/your_db/pfts/en/`).
2.  **Identify the file to edit:** The files are named according to the format they control. For example, `opac_text.pft` might control the full display format.
3.  **Edit the PFT:** Open the file in a text editor. Inside, you will use the ISIS Formatting Language to design the output.

**PFT Example:**

A simple PFT to display a title and author might look like this:

```pft
'<b>Title:</b> ',v245^a,'<br>'
'<b>Author:</b> ',v100^a'
```

* `'<b>Title:</b> '` is a literal string that will be displayed as bold text.
* `v245^a` is a command that extracts the content of subfield a from field 245 (the title).
* `'<br>'` is a literal HTML tag for a line break.

By modifying these PFT files, you have complete control over the HTML structure of the record display, allowing for rich and user-friendly presentations.

**Customizing the Visual Design (CSS)**
Beyond the record display, the overall look and feel of the OPAC (colors, fonts, layout) can be customized by editing its CSS files. These files are typically located in a css directory within the OPAC's folder structure. Advanced users can modify these files to match the OPAC's design to their institution's website and branding.