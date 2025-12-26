---
title: Barcode Configuration
sidebar_label: Barcodes & Labels
---

# Barcode Configuration

ABCD includes a generator to print barcodes, spine labels, and inventory labels directly from the browser. You can print labels for a whole batch of items or individually while cataloging.

## 1. Enabling the Toolbar Icon

To allow librarians to print a barcode for the *current record* immediately during data entry, you must activate specific parameters in the database configuration.

1.  Go to **Administration > Database Maintenance > Edit dr_path.def**.
2.  Select your database.
3.  Add or ensure the following lines are present:

```ini
barcode=Y
barcode1reg=Y

```

* **`barcode=Y`**: Enables the barcode module for this database.
* **`barcode1reg=Y`**: Shows the Barcode Icon  in the Data Entry toolbar.

---

## 2. Configuration Parameters

Before printing, you must define the physical layout. Access the configuration via **Utilities > Barcodes > Configure**.

This creates a file stored in `bases/DB/pfts/lang/barcode.conf`.

### Inventory Number Logic

To print barcodes effectively, the system needs to find your inventory numbers.

* **FST Prefix**: The prefix used in your inverted file for inventory numbers (e.g., `IN_` or `NICLA_`).
* **Formatting Script**: A mini-format to standardize numbers (e.g., padding with zeros).
* *Example:* `if f(val(v900^n),1,0) = v900^n then replace(f(val(v900^n),5.0), ' ', '0') else v900^n fi`
* *Result:* Turns `123` into `00123` for correct sorting.



### Label Dimensions

You must measure your physical sticker sheet.

* **Label Height/Width**: In centimeters.
* **Labels per row**: e.g., `3` for a standard A4 sheet with 3 columns.

---

## 3. Display Format (PFT)

You need to tell ABCD *what* to print on the label (Barcode image, Title, Call Number). This is done via a PFT script in the configuration text area.

**Standard Template:**

```text
/* Header: Classification Number (Tag 82) */
if p(v82) then v82, fi, /

/* The Barcode Image */
/* Note: 'code' is the inventory number, usually v900^n */
'<img src="/central/dataentry/img/bar39.php?code=',v900^n,'&width=140&height=50">', /

/* Footer: Accession Number readable text */
v900^n

```

:::tip Types of Labels
You can configure 3 different types of outputs in the same menu:

1. 
**Barcodes**: The standard inventory sticker.


2. **Spine Labels (Lomos)**: For the book spine (Call number).
3. **Labels (Etiquetas)**: General purpose labels.
:::

---

## 4. How to Print

### Option A: Batch Printing (Utilities)

Use this to print labels for a range of books (e.g., "All books acquired this month").

1. Go to **Utilities > Barcodes**.
2. Choose **By Inventory Range** or **By Search**.
3. Enter the range (e.g., `0001` to `0050`).
4. Click **Print**.

### Option B: Single Record (Toolbar)

Use this when processing a single book at your desk.

1. Open the record in **Data Entry**.
2. Click the **Barcode Icon** in the top toolbar.
3. A popup will appear with the label for just that item.
