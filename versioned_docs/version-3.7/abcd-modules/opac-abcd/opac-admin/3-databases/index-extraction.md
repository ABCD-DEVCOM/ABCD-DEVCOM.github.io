---
title: Index Key Extraction (Authorities)
sidebar_label: Index Extraction
sidebar_position: 10
---

# Index Key Extraction (Authorities)

When a user browses the **A-Z Index** or clicks on the **"Dictionary"** icon, the system retrieves keys from the Inverted File. Often, these keys are normalized (converted to uppercase and stripped of accents) by the FST to facilitate searching.

**The Problem:**
* **Stored in Index:** `GARCIA MARQUEZ, GABRIEL`
* **Desired Display:** `García Márquez, Gabriel`

The **Index Extraction** module (`autoridades.php`) allows you to define a special PFT format (`autoridades_opac.pft`) that restores the original formatting of terms by extracting them directly from the record at runtime.

**Script:** `autoridades.php`
**File Created:** `bases/[db]/pfts/autoridades_opac.pft`

## 1. How It Works

The mechanism relies on the **Field ID** defined in your database's **FST** (Field Selection Table).

1.  **Retrieval:** The OPAC searches the Inverted File and finds a term.
2.  **Identification:** It identifies the record (MFN) and the specific line in the FST (ID) that generated that term.
3.  **Extraction:** It executes the `autoridades_opac.pft` script. This script uses the special command `select e3` to switch logic based on the FST ID.
4.  **Display:** It prints the formatted field (e.g., preserving mixed case and punctuation) instead of the raw index key.

## 2. Configuration Interface

The interface provides a text editor to modify the PFT and a helper section to view your current FST.

### The FST Helper
At the bottom of the screen, the system lists your FST entries.
* **Column 1 (ID):** The numeric identifier (e.g., `100`, `245`). **You need this number for the `case` statement.**
* **Column 2 (Technique):** Indexing technique (usually `0`).
* **Column 3 (Format):** The extraction format used to build the key.

## 3. The PFT Structure (`select e3`)

The file `autoridades_opac.pft` must use a specific switch structure. Do not include line breaks (`/`) inside the format logic, as this breaks the index list display.

**Syntax:**
```text
select e3
    case [FST_ID_1]: [Format_to_extract_field]
    case [FST_ID_2]: [Format_to_extract_field]
    ...
endsel

```

### Example Scenario (MARC21)

Suppose your **FST** looks like this:

```text
100 0 "AU_"v100^a
245 0 "TI_"v245^a
700 0 "AU_"v700^a

```

* Note that both Tag 100 (Main Author) and Tag 700 (Added Entry) generate the prefix `AU_`.
* Note that Tag 100 has ID `100` and Tag 700 has ID `700`.

Your **`autoridades_opac.pft`** should look like this:

```text
select e3
    case 100: v100^a, " "v100^d
    case 700: v700^a, " "v700^d
    case 245: v245^a, " "v245^b
endsel

```

**Result:**
When the user browses the "Authors" index:

1. The system finds `AU_SHAKESPEARE, WILLIAM`.
2. It sees it came from **ID 100**.
3. It runs `case 100`.
4. It displays: "Shakespeare, William".

## 4. Advanced Formatting

You can use standard ISIS formatting language to handle complex fields, subfields, and punctuation.

**Example from `autoridades_opac.pft`:**

```text
select e3
    /* Personal Author */
    case 100: v100^a,v100^b,v100^c,v100^d ' ||',v4999[1],'$$$'s0

    /* Title (Handling 'Article' logic with mhl/mpl) */
    case 245: mhl,v245^a,mpl," "v245^b

    /* Subject with subfields separated by hyphens */
    case 650: v650^a, | - |v650^x, | - |v650^z
endsel

```

:::tip Performance
This PFT is executed for *every single line* shown in the dictionary browser. Keep the logic simple and efficient to ensure the list loads quickly.
:::

:::warning Common Mistake
If you see keys in uppercase in the browser even after configuring this, check:

1. Did you save the file?
2. Does the **ID** in the `case` statement match the **ID** in the FST exactly?
3. Are you using `e3` (Term ID) in the select command?
:::

