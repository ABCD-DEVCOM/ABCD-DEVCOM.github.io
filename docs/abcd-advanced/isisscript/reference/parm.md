---
title: <parm>
description: Defines parameters for tasks and configurations.
---

# Element `<parm>`

The `<parm>` element sets specific configuration values (parameters) required by the parent block (usually a `<do>` task, but also `<section>`, `<IsisScript>` setup, or functions).

It is the primary way to pass arguments and configuration settings to the WXIS engine.

## Usage
- **Allowed content:** `<pft>` (The value of the parameter).
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<parm name="..." [tag="..."] [type="..."]>
    </parm>

```

## Attributes

| Attribute | Description |
| --- | --- |
| **`name`** | **Required.** The name of the parameter being set (e.g., `db`, `expression`). |
| `tag` | Specifies a target field number (used specifically with `type="check"`). |
| `type` | Specifies the parameter type (mainly used for validation, e.g., `type="check"`). |

---

## Parameter Names (`name="..."`)

Below is the complete list of available parameters sorted alphabetically.

### `actab`

Changes the **Alphabetic Characters Table** for the current section. This table defines which characters are considered alphabetic for indexing and sorting. Characters not in this table are treated as delimiters.

* **Default:** ANSI alphabetic table.

```xml
<parm name="actab"><pft>cat('ISISAC.TAB')</pft></parm>

```

### `buffersize`

Changes the internal WXIS buffer size (in bytes) used to store formatting results.

```xml
<parm name="buffersize">90000</parm>

```

### `cipar`

Activates a **CIPAR** (Command Interpreted PARameter) table. This maps logical names to physical file paths.

* **Syntax:** `LOGICAL_NAME=PHYSICAL_PATH`
* `*` acts as a wildcard for file extensions.

```xml
<parm name="cipar">
    <pft>
       'CDS.*=/bases/cds/cds.*'/,
       'ACTAB=/isis/menu/isisac.tab'/
    </pft>
</parm>

```

### `count`

Limits the number of times the `<loop>` will execute (or the number of records/keys to process).

```xml
<parm name="count">10</parm>

```

### `db`

Specifies the database name (or path, depending on CIPAR). Required for almost all tasks (`search`, `mfnrange`, `update`, etc.).

```xml
<parm name="db">CDS</parm>

```

### `decod`

Specifies an expansion database for decoded fields (used to join data from another database during retrieval).

```xml
<parm name="decod"><pft>v2101</pft></parm>

```

### `delimiter`

Specifies the field separator character when importing records with `type="RLine"`.

* **Default:** `|` (Pipe).

```xml
<parm name="delimiter">;</parm>

```

### `expire`

Sets the time limit (in seconds) for a record lock. After this time, another user can overwrite the lock.

```xml
<parm name="expire">14400</parm> ```

### `expression`
Defines the search query expression (Boolean search).
```xml
<parm name="expression">plants * water</parm>

```

### `file`

Specifies the filename for `import` or `export` tasks.

```xml
<parm name="file">CDS.ISO</parm>

```

### `freqsum`

Used in Frequency Lists (`<list type="freq">`). Specifies a value/weight to be added to the sum, rather than just incrementing by 1.

```xml
<parm name="freqsum"><pft>v2</pft></parm>
<list action="load" type="freq"><pft>v1</pft></list>

```

### `from`

Specifies the starting point for a task:

* **Search/MFN tasks:** The initial MFN.
* **Keyrange:** The starting key (term).
* **List:** The starting index.

```xml
<parm name="from">1</parm>

```

### `fst`

Specifies the **Field Select Table** (FST) to be used for:

* Full Inversion (`task="fullinvertion"`).
* Extracting keys (`<extract>`).

```xml
<parm name="fst">1 0 v1</parm>

```

### `gizmo`

Specifies a **Gizmo** database used for string substitution (search/replace) across data.

```xml
<parm name="gizmo">GIZMO_DIAC</parm>

```

### `indexlist`

Defines a specific list of inverted file indices (and their paths) to be used during a search.

```xml
<parm name="indexlist">
    <pft>
       '^p*^ycds^m** '/,
       '^pAU ^ycdsaut^mAU '/
    </pft>
</parm>

```

### `key`

Specifies the PFT format used as the sorting key for `task="mastersort"`.

```xml
<parm name="key"><pft>v24</pft></parm>

```

### `keyfield`

Specifies a field tag number to be used as the sorting key (alternative to `key`).

```xml
<parm name="keyfield">24</parm>

```

### `keylength`

Specifies the maximum length of the sort key.

```xml
<parm name="keylength">100</parm>

```

### `keys`

Specifies a list of terms/keys to be used for text highlighting (usually inside `<hl>`).

```xml
<parm name="keys"><pft>(v1022/)</pft></parm>

```

### `keysdb`

Specifies the name of the temporary database used to store keys during `extract` or `invertedload` tasks.

```xml
<parm name="keysdb">temp_keys</parm>

```

### `lockid`

Defines the identifier string for record locking (e.g., Session ID + Username).

```xml
<parm name="lockid"><pft>v9000</pft></parm>

```

### `maxlk`

Specifies the maximum number of keys allowed per record during inversion/extraction.

* **Default:** 1024.

```xml
<parm name="maxlk">5000</parm>

```

### `mfn`

Specifies the Master File Number for updates.

* **Numeric:** Updates that specific record.
* **`New`**: Creates a new record.
* **`GetNew`**: Creates a new record but allows importing fields from the previous scope.

```xml
<parm name="mfn">New</parm>

```

### `posting`

Used in `task="keyrange"`. Controls retrieval of the postings list.

* **`All`**: Retrieves all postings for the key.

```xml
<parm name="posting">All</parm>

```

### `posttag`

Used in `task="keyrange"`. Filters postings to only show those originating from a specific tag.

```xml
<parm name="posttag">70</parm>

```

### `prefix`

Specifies text/HTML to insert **before** a highlighted term (in `<hl>`) or before content in `<htmlpft>`.

```xml
<parm name="prefix"><b></parm>

```

### `reset`

Used in `task="fullinvertion"`.

* **`Off`**: Keeps the "pending update" flag set in the master file. Useful for multi-inverted file databases.

```xml
<parm name="reset">Off</parm>

```

### `reverse`

If set to `On`, the task processes items (records or keys) in reverse order.

```xml
<parm name="reverse">On</parm>

```

### `sort`

Defines the sorting criteria (PFT) for the `task="list"`.

```xml
<parm name="sort"><pft>v1</pft></parm>

```

### `stw`

Specifies the **Stop Word** file (extension `.stw`) to be used during inversion or extraction.

```xml
<parm name="stw">EN.STW</parm>

```

### `suffix`

Specifies text/HTML to insert **after** a highlighted term (in `<hl>`) or after content in `<htmlpft>`.

```xml
<parm name="suffix"></b></parm>

```

### `task`

Dynamically sets the task type for a loop. Rarely used, as `task` is usually set in the `<do>` tag.

```xml
<parm name="task"><pft>v2081</pft></parm>

```

### `to`

Specifies the end point for a task (Final MFN, Final Key, etc.).

```xml
<parm name="to">100</parm>

```

### `type`

Specifies the file format for Import/Export tasks.

* **`ISO2709`**: Standard ISO format (Tag limit: 3 digits).
* **`HLine`**: Horizontal Line format (Uses `<proc>` H command logic).
* **`RLine`**: Raw Line (Import only). Each line of text becomes a record.
* **`VLine`**: Vertical Line. Recommended for data edited via text editors.

```xml
<parm name="type">ISO2709</parm>

```

### `uctab`

Changes the **Uppercase Conversion Table** for the current section. Controls case conversion and accent removal for indexing and sorting.

* **Default:** ANSI table.

```xml
<parm name="uctab"><pft>cat('ISISUC.TAB')</pft></parm>

```

---

## Attribute `type`

**Syntax:** `type="..."`

Currently, the only supported option for the *attribute* type (not to be confused with `name="type"`) is `check`.

### `type="check"`

Performs a syntax check on an FST (Field Select Table).

* **Usage:** You must also provide the `tag` attribute.
* **Result:** The field specified by `tag` will contain:
* `00000` (if no error).
* Error code + Space + Error pointer (if invalid).



**Example: Validating FST Syntax**

```xml
<field action="cgi" tag="2065">fst_input</field>

<parm name="fst" type="check" tag="1">
   <pft>cat(v2065)</pft>
</parm>

<display><pft>if v1 <> '00000' then 'Syntax Error: 'v1 fi</pft></display>

```