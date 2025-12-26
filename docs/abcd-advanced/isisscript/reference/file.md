---
title: <file>
description: Creates, unlocks, closes, and manages system files and databases.
---

# Element `<file>`

The `<file>` element is used to manage file system resources and databases. It allows you to create, unlock, or close databases, create temporary files, delete files, and change the standard output of IsisScript.

## Usage
- **Allowed content:** `<pft>` (usually the filename or database name)
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<file action="..." type="...">
    </file>

```

## Attributes

| Attribute | Description |
| --- | --- |
| **`action`** | **Required.** Indicates the action to be executed (`create`, `close`, `unlock`, etc.). |
| **`type`** | **Required.** Indicates the type of file subject to the action. |

---

## Attribute Details

### `action`

*Options:* `append`, `close`, `create`, `delete`, `unlock`

#### `action="append"`

Opens an output file where data will be appended to the end.

* **Valid type:** `output`

```xml
<file action="append" type="output">TEST.LOG</file>

```

#### `action="close"`

Closes a previously opened resource.

* **Valid types:** `output`, `database`

```xml
<file action="close" type="output">TEST.LOG</file>

```

#### `action="create"`

Creates or initializes a resource.

* If `type="output"`, creates a new output file.
* If `type="database"`, initializes a database (Master + Inverted).
* If `type="tempfile"`, creates a unique temporary file.

```xml
<file action="create" type="database">TESTX</file>

```

#### `action="delete"`

Deletes a file from the file system.

* **Valid type:** `file`

```xml
<file action="delete" type="file">TESTX.ISO</file>

```

#### `action="unlock"`

Unlocks a database. This resets the *Data Entry Lock* and the *Exclusive Write Lock* numbers to zero.

> **Attention:** The records themselves remain unchanged.

```xml
<file action="unlock" type="database">CDS</file>

```

---

### `type`

*Options:* `database`, `file`, `inverted`, `master`, `output`, `tempfile`

#### `type="database"`

Indicates that the action is on a database.

* **Valid actions:** `create`, `close`, `unlock`

```xml
<file action="create" type="database">TESTX</file>

```

#### `type="file"`

Indicates that the action is on a generic system file.

* **Valid actions:** `delete`

```xml
<file action="delete" type="file">TEST.LOG</file>

```

#### `type="inverted"`

Indicates that the action is on the database inverted file.

* **Valid actions:** `create`

```xml
<file action="create" type="inverted">TESTX</file>

```

#### `type="master"`

Indicates that the action is on the database master file.

* **Valid actions:** `create`

```xml
<file action="create" type="master">TESTX</file>

```

#### `type="output"`

Indicates that the action is on an output file (standard output redirection).

* **Valid actions:** `create`, `append`, `close`

```xml
<file action="create" type="output">TEST.LOG</file>

```

#### `type="tempfile"`

Indicates that the action is on a temporary file.

* **Valid actions:** `create`
* **Argument:** The content of the tag must be the **field number (tag)** that will store the name of the uniquely identified temporary file created by the operating system.

```xml
<file action="create" type="tempfile">4001</file>

```
