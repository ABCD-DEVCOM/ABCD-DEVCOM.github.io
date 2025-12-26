---
title: <field>
description: Manipulates variables and database fields (add, replace, delete, import).
---

# Element `<field>`

The `<field>` element is the primary tool to manipulate data in IsisScript. It allows you to add, modify, delete, import, export, or define fields and variables within the script's memory scope.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<field action="..." tag="..." [split="..."] [previous="..."] [type="..."] [from="..."]>
</field>
```

## Attributes

| Attribute | Description |
| --- | --- |
| **`action`** | **Required.** Indicates the type of operation to execute (e.g., `replace`, `add`, `cgi`). |
| **`tag`** | **Required.** Specifies the target field number (tag) affected by the action. |
| `split` | Indicates how to handle multi-line content (e.g., split into occurrences). |
| `previous` | Controls whether to preserve or delete previous content of the field. |
| `type` | Specifies the data type (e.g., `flag`). |
| `from` | Specifies the source field number when using `action="occ"`. |

---

## Attribute Details

### `action`

*Options:* `add`, `cgi`, `define`, `delete`, `export`, `hl`, `import`, `occ`, `replace`, `statusdb`, `statusfile`

#### `action="add"`

Adds a new occurrence to the field specified by `tag`.

```xml
<field action="add" tag="2">A</field>
<field action="add" tag="2">B</field>
```

#### `action="cgi"`

Reads a value passed via CGI (Common Gateway Interface) and stores it in the specified `tag`.

```xml
<field action="cgi" tag="2">phone</field>
```

#### `action="define"`

Maps internal IsisScript system variables to a field tag. Useful inside loops.

* **Common Arguments:** `Isis_Current`, `Isis_Total`, `Isis_Key`, `Isis_Posting`.

```xml
<field action="define" tag="1001">Isis_Current</field>
```

#### `action="delete"`

Deletes one or all occurrences of a field.

* **Argument `ALL**`: Deletes the entire field.
* **Numeric Argument**: Deletes a specific occurrence index.

```xml
<field action="delete" tag="5">ALL</field>
<field action="delete" tag="6">1</field>
```

#### `action="export"`

Exports content from the **current** scope to the **caller's** scope (previous scope).

* **`tag="list"`**: Allows exporting multiple fields at once.

```xml
<field action="export" tag="2205">5</field>
<field action="export" tag="list">6,7,21/29</field>
```

#### `action="hl"`

Highlights terms in a field based on search keys. Requires `<parm>` setup for prefix/suffix.

```xml
<field action="hl" tag="70"><pft>(v70/)</pft></field>
```

#### `action="import"`

Copies fields from the **caller's** scope (previous scope) into the **current** scope.

```xml
<field action="import" tag="2070">70</field>
<field action="import" tag="list">201,206</field>
```

#### `action="occ"`

Copies a specific occurrence from a source field (`from`) to a target field (`tag`).

```xml
<field action="occ" tag="1" from="70"><pft>v1001</pft></field>
```

#### `action="replace"`

Replaces the entire content of the field with the new value. Use `<pft>` for dynamic values.

```xml
<field action="replace" tag="2"><pft>v400^b</pft></field>
```

#### `action="statusdb"`

Checks the status of a database.

* **Return Value:** A field containing subfields:
* `^s`: `m` (master exists), `i` (inverted exists).
* `^n`: Total records + 1.
* `^d`: Data Entry lock.
* `^e`: Exclusive Write lock.



```xml
<field action="statusdb" tag="1091">CDS</field>
```

#### `action="statusfile"`

Checks if a physical file exists.

* **Return Value:** `^s` contains `e` if exists.

```xml
<field action="statusfile" tag="1091">C:\AUTOEXEC.BAT</field>
```

---

### `split`

*Options:* `occ`, `flddir`

#### `split="occ"`

Splits the input content by newlines; each line becomes a new occurrence.

```xml
<field action="replace" tag="1" split="occ"><pft>(v200/)</pft></field>
```

#### `split="flddir"`

Stores the record's field directory (Tag, Length, Position) as text lines.

```xml
<field action="replace" tag="1" split="flddir">ALL</field>
```

---

### `previous`

*Options:* `add`, `delete` (Default)

Controls behavior when importing/exporting fields that already exist in the destination.

* **`delete`**: Overwrites existing field.
* **`add`**: Appends as new occurrences.

```xml
<field action="import" tag="1" previous="add">200</field>
```

---

### `tag`

*Options:* Numeric tag or `list`

#### `tag="list"`

Indicates that the argument contains a comma-separated list of tags or ranges.

* Syntax: `Tag1, Tag2, Start/End`
* Renaming: `[Target:Source]`

```xml
<field action="import" tag="list">1,2,3,11/19,[30:20]</field>
```

---

### `type`

*Options:* `flag`

#### `type="flag"`

Used with `action="cgi"`. Indicates if a CGI parameter is present.

* If present but empty: Stores "On".
* If present with value: Stores the value.
* If absent: Field is not created.

```xml
<field action="cgi" tag="2011" type="flag">trace</field>
```