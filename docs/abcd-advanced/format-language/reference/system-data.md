---
title: System & Data Manipulation
description: Advanced commands for record modification (proc), environment variables, and system calls.
---

# System & Data Manipulation

These commands go beyond simple formatting; they interact with the operating system environment or modify the record structure in memory during execution.

## Field Update (`proc`)

The `proc` function allows you to append, replace, or delete fields in the current record *in memory* (virtual update). This is extremely powerful for temporary data manipulation during export or complex processing chains.

* **Syntax:** `proc('CommandString')`
* **Returns:** An empty string (it performs an action, does not display text).

### Command String Syntax
The argument is a format that generates a string of commands. The commands are executed sequentially:
1.  **Delete (`d`)**: Must be specified **before** adding fields.
2.  **Add (`a`)**: Appends a new occurrence.
3.  **Add with Length (`h`)**: Adds a new occurrence with a specific byte length.

| Command | Format | Description |
| :--- | :--- | :--- |
| **Delete All** | `d*` | Deletes **all** fields in the record. |
| **Delete Tag** | `dTag` | Deletes all occurrences of the specified Tag (e.g., `d70`). |
| **Delete Occ** | `dTag/Occ` | Deletes a specific occurrence (e.g., `d70/1`). |
| **Add** | `aTag#Data#` | Adds `Data` as a new occurrence of `Tag`. The delimiter (`#`) can be any non-numeric character. |
| **Add Binary** | `hTag Len Data` | Adds `Data` of length `Len` (in bytes) to `Tag`. Requires a space separator. |

### Examples

**Example 1: Cleaning and restructuring a record**
Delete all fields and create a new temporary field 1000 with the content of field 10.
```pft
proc('d* a1000|'v10'|')

```

**Example 2: Adding a computed field**
Keep existing data but add a "Timestamp" field (Tag 9000) with the current date.

```pft
proc('a9000#' date '#')

```

**Example 3: Conditional Deletion**
Delete field 24 only if it contains the word "Obsolete".

```pft
proc( if v24 : 'Obsolete' then 'd24' fi )

```

---

## Environment Variables

ABCD and CISIS rely heavily on environment variables (like `CIPAR`, `PATH`, or custom CGI variables).

### `getenv` - Get Variable

Retrieves the value of an operating system environment variable.

* **Syntax:** `getenv('VAR_NAME')`
* **Example:**
```pft
"Current Database Path: ", getenv('db_path')

```



### `putenv` - Set Variable

Sets an environment variable for the current process scope.

* **Syntax:** `putenv('VAR_NAME=VALUE')`
* **Usage:** Useful for passing parameters between nested formats or scripts.
* **Example:**
```pft
putenv('MY_VAR=Active'),
if getenv('MY_VAR') = 'Active' then ... fi

```



---

## System Interaction

### `date` - Current Date

Returns the current system date and time.

* **Syntax:** `date`
* **Format:** Typically returns `YYYYMMDD h:m:s` (e.g., `20231027 14:30:05`), but format may vary by OS.
* **Example:**
```pft
"Report generated: " date

```



### `system` - Execute Command

Executes an external operating system command.

* **Syntax:** `system('Command')`
* **Returns:** The exit code of the command (usually `0` for success).
* **Warning:** This command pauses the formatting process until the external command finishes.
* **Example:**
```pft
/* Linux: List files in /tmp */
system('ls -l /tmp > filelist.txt')

```
