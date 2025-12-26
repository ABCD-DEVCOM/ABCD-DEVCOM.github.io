---
title: Export to CSV
sidebar_label: Export to CSV
---

# Exporting Data to CSV

ABCD allows you to export database records to CSV format for use in Excel or other external systems. This process requires a specialized **Print Format (PFT)** to structure the columns correctly.

## The Logic
Unlike a standard ISO export, a CSV export must:
1.  Insert commas `,` between fields.
2.  Enclose text values in double quotes `"` (to handle commas inside the data).
3.  Handle empty fields to maintain column alignment.

## 1. Creating the PFT
Create a format file (e.g., `export_csv.pft`) with the following logic:

```text
/* Column 1: Title (Tag 245) - Always present */
if p(v245) then '"',v245,'",' else '"",' fi,

/* Column 2: Author (Tag 100) - Handle quotes inside text */
if p(v100) then '"',replace(v100,'"',"'"),'",' else '"",' fi,

/* Column 3: Year (Tag 260^c) - Last column, no trailing comma */
if p(v260^c) then '"',v260^c,'"' else '""' fi,
/

```

:::tip Handling Quotes
The function `replace(v100,'"',"'")` is crucial. If your data contains double quotes (e.g., *The "Great" Gatsby*), it breaks the CSV structure unless you replace them with single quotes.
:::

## 2. Generating the Header

You need a matching list of column names. Create a file (e.g., `header.txt`) or simply copy the header line into Excel later.

```text
"Title","Author","Year"

```

## 3. Execution

1. Go to **Utilities > Export**.
2. Select **Output format**: Text file.
3. **Format:** Select your `export_csv.pft`.
4. **Range:** All records (or a search result).
5. Click **Export**.
6. Save the resulting file with a `.csv` extension.

