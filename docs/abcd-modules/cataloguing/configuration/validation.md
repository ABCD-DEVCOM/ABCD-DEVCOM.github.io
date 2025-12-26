---
title: Data Validation
sidebar_label: Validation Rules
sidebar_position: 3
---

# Data Validation

ABCD allows administrators to enforce rules to ensure data consistency during entry.

## Mandatory Fields
The simplest form of validation is marking a field as **Mandatory**.
* **Configuration:** In the FDT editor, check the "Mandatory" box for the field.
* **Behavior:** The system will refuse to save the record if this field is empty.

## Validation Scripts (`.val`)

For more complex logic, ABCD uses validation files located in `bases/db_name/def/lang/db_name.val`.

### Syntax
The file uses PFT syntax to evaluate conditions. If the format outputs text, that text is shown as an error message, and saving is blocked.

**Example Logic:**
```text
if p(v10) and size(v10) < 5 then 'Error: Inventory number is too short!' fi
if a(v245) then 'Error: Title is missing!' fi

```

### Validation Levels

1. **Field Validation:** Checks content when leaving a specific field.
2. **Record Validation:** Checks the entire record when the user clicks "Save".

## Authority Control

Linking a field to an authority database prevents spelling errors in names and subjects.

* **Method:** Use the input type **Database (DB)** in the FDT.
* **Config:** Define the prefix and the source database (e.g., `providers` or `thesaurus`).
* **Behavior:** The cataloger cannot type freely; they must select an existing term or explicitly create a new authority record.

