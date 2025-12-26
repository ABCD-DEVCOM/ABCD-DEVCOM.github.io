---
title: Record & Field Access
description: Commands for retrieving data from fields, records, and related databases.
---

# Record & Field Access

These commands allow you to extract data from the current record or look up information in other records.

## Field Selectors
*See also: [Field Selectors Guide](../guides/subfields)*

### `v` - Field Content
Extracts the value of a variable length field.
* **Syntax:** `vTag` | `vTag^Subfield`
* **Modifiers:**
    * `*Offset`: Starts extraction from a specific character position.
    * `.Length`: Extracts a limited number of characters.
* **Example:**
    ```pft
    v10          /* Content of Tag 10 */
    v20^a        /* Content of subfield 'a' of Tag 20 */
    v10*2.5      /* 5 characters starting from position 2 */
    ```

### `d` - Dummy Field
Checks if a field exists without displaying it. Often used to control repeatable groups.
* **Syntax:** `dTag`
* **Example:** `(d10, v10/)`

---

## Record Information

### `mfn` - Master File Number
Displays the unique identification number of the current record.
* **Syntax:** `mfn`
* **Format:** Returns a numeric value (e.g., 1, 1024). It can be formatted with `f()`.
* **Example:** `f(mfn, 6, 0)` -> `001024`


### `mfnname` - Master File Name
Returns the name of the database file currently being accessed.
* **Syntax:** `mfnname`
* **Example:** `"Database: " mfnname`


### `occ` - Occurrence Index
Returns the number of the current occurrence being processed within a repeatable group.
* **Syntax:** `occ`
* **Example:** `v10, " (Occ: " occ ")"`


### `nocc` - Number of Occurrences
Returns the total number of occurrences of a repeatable field in the record.
* **Syntax:** `nocc(vTag)`
* **Example:** `"Total authors: " f(nocc(v70), 2, 0)`


---

## Presence Checks

### `p` - Presence Check
Returns **True** (non-zero) if the field or subfield is present.
* **Syntax:** `p(vTag)`
* **Example:** `if p(v10) then "Title present" fi`


### `a` - Absence Check
Returns **True** if the field or subfield is absent (not present).
* **Syntax:** `a(vTag)`
* **Equivalent:** `NOT p(vTag)`


### `np` - Not Present
Similar to `a()`, checks if a field is not present.
* **Syntax:** `np(vTag)`


---

## Relational & Lookups

### `ref` - Record Reference (Link)
Executes a format or expression in the context of *another* record, identified by its MFN.
* **Syntax:** `ref(MFN, Format)`
* **Usage:** Essential for joining databases or looking up linked records.
* **Example:**
    ```pft
    /* Lookup MFN 10 in the current DB */
    ref(10, v20)
    
    /* Lookup MFN 5 in 'USERS' database */
    ref(['USERS']5, v30)
    ```


### `l` - Key Lookup
Searches the inverted file for a term and returns the MFN of the first record found.
* **Syntax:** `l('Term')` | `l('Prefix' vTag)`
* **Returns:** The MFN of the record containing the term, or 0 if not found.
* **Example:**
    ```pft
    /* Find record where title is 'Hamlet' */
    ref( l('Hamlet'), v70 )
    ```


### `key` - Key Postings
Returns the number of hits (postings) for a given term in the inverted file.
* **Syntax:** `npost('Term')` (Note: command name depends on CISIS version, often `key` or `npost`)