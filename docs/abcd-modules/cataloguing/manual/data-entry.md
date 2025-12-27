---
title: Data Entry & Editing
sidebar_label: Data Entry
sidebar_position: 1
---

# Data Entry Workflow

The **Data Entry** window is the primary workspace for catalogers. It allows for the creation, modification, and deletion of bibliographic records in the selected database.

## The Data Entry Interface

When you open the Data Entry module, you are presented with a toolbar, a workspace (worksheet), and a navigation bar.

![Data Entry Interface](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-toolbar.png)

### The Main Toolbar
Located at the top of the record editor, this toolbar provides the following actions:

| Icon | Action | Description |
| :--- | :--- | :--- |
| ![alt text](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-search-icon.png) | **Search** | Opens the search dialog to find specific records. |
|![New](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-new-icon.png) | **New** | Creates a blank record using the default worksheet. |
| ![Print](../../../media/abcd-modules/cataloguing/manual/data-entry/data-entry-print-icon.png) | **Print** | Sends the current record to a printer-friendly view. |
| 📋 | **Copy** | Duplicates the current record content into a new record. |
| ☁️ | **Z39.50** | Opens the [Z39.50 client](/docs/3.1/abcd-modules/cataloguing/configuration/z3950-server) to import external data. |

### Navigation Bar
Located at the bottom of the screen, this bar allows you to move sequentially through the database.

* `<<` **First**: Jump to MFN 1.
* `<` **Back**: Go to the previous MFN.
* `>` **Next**: Go to the next MFN.
* `>>` **Last**: Jump to the last record in the database.
* **Go to MFN**: Type a specific Master File Number and press `Enter` to jump directly to it.

---

## Creating and Editing Records

In the registry area, there is another toolbar. It's the registry toolbar.

| Icon | Action | Description |
| :--- | :--- | :--- |
| ✏️ | **Edit** | Unlocks the current record for modification. |
| 💾 | **Save** | Commits changes to the Master File. |
| ❌ | **Cancel** | Discards unsaved changes and reloads the record. |
| 🗑️ | **Delete** | Logically deletes the record (marks it for removal). |
| 📋 | **Copy** | Duplicates the current record content into a new record. |


### 1. Creating a New Record
1. Select the desired database (e.g., **Books**) from the top central menu.
2. Click the **New** (📄) icon.
3. **Select a Worksheet:** If the database supports multiple document types (e.g., Monographs, Serials, Maps), a dropdown will appear. Select the appropriate form.
4. The system will assign the next available **MFN** (Master File Number) automatically upon saving.

### 2. Editing an Existing Record
1. Use the **Search** (🔍) icon or the Navigation bar to find the record.
2. Click the **Edit** (✏️) icon.
3. The fields will become editable.

### 3. Filling in Data
ABCD uses specific conventions for data entry depending on the field definition (FDT).

#### Standard Text Fields
Simply type into the box. Use the `Enter` key to create new lines within a large text area (e.g., Abstracts).

#### Subfields (`^`)
ABCD uses the caret symbol `^` followed by a letter or number to define subfields (e.g., `^a`, `^b`).
* **Manual Entry:** You can type `^aBy Title^bSubtitle`.
* **Subfield Helper:** If configured, clicking the field name or a specific icon may open a form to fill subfields individually.

#### Repeatable Fields
Fields that can contain multiple values (like *Authors* or *Subjects*) are marked as "Repeatable".
* Click the **Add Occurrence** (`+`) icon next to the field to add a new empty line.
* Click the **Delete Occurrence** (`x`) icon to remove a line.

#### Picklists and Authority
* **Picklists:** If a field has a dropdown arrow or a list icon, click it to select from a standardized list (e.g., Languages: ENG, SPA, POR).
* **Authority Control:** If a field has a "Book" or "Search" icon, clicking it searches the linked authority database (e.g., Thesaurus) to ensure consistency.

## Saving Your Work
Once data entry is complete, click the **Save** (💾) icon.
* If **Validation Rules** are active, the system may prevent saving if mandatory fields are missing or data formats are incorrect.
* A success message will confirm the record has been updated.

:::tip Understanding MFNs
The **MFN** is the internal ID of the record in the ISIS database. It is unique and permanent for that physical position in the file. It is different from the "Call Number" or "Accession Number," which are library-assigned identifiers.
:::