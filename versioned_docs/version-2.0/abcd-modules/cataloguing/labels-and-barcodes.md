---
sidebar_position: 6
title: Generating Labels and Barcodes
---

# Generating Labels and Barcodes

ABCD includes a flexible tool for generating printable labels for books and other library materials. This feature allows you to create spine labels, book labels, and, most importantly, barcodes based on the inventory number of each item.

The entire process is highly customizable and is managed through the **Printed Outputs** menu within the Cataloging module.

### How it Works: The Power of PFT

The label generation process is controlled by the **ISIS Formatting Language (PFT)**. You create a special PFT file that acts as a template for your labels. This PFT extracts the necessary information from a bibliographic record—such as the call number, author, title, and inventory number—and arranges it exactly as you want it to appear on the final printed label.

For barcodes, the PFT typically isolates the inventory number and wraps it with the characters required by the barcode font (e.g., asterisks for Code 39).

### Configuration and Generation Steps

The process involves two main stages: configuring the layout and then generating the labels for a set of records.

1.  **Configure the Label Format:**
    * Navigate to **Cataloging** → **Printed outputs** → **Barcodes/Labels**.
    * Here, you can define the physical layout of your label sheet, including:
        * Paper size (A4, Letter, etc.).
        * Page margins (top, bottom, left, right).
        * The number of rows and columns of labels per page.
        * The height and width of each individual label.
        * The spacing between labels.
    * You must also select the **Output Format** (the PFT file) that will be used to format the data for each label.

2.  **Generate and Print Labels:**
    * Once the format is configured, you can generate the labels.
    * You need to select which items you want to print labels for. This is usually done by providing a range or list of **inventory numbers**.
    * The system will process the corresponding records, apply the selected PFT, and generate a **PDF file** formatted according to your layout specifications.
    * This PDF can then be sent to any standard printer loaded with your label sheets.

This method gives the library full control over the content and appearance of its labels, allowing for the creation of multiple formats for different needs (e.g., a simple barcode label for circulation, and a more detailed spine label with call number and author).