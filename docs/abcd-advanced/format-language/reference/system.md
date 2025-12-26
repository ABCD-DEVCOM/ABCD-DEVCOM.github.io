---
title: System & Environment Commands
description: Commands to interact with the OS, dates, and environment variables.
---

# System Commands

These commands allow the format to interact with the external environment or retrieve system-level information.

## `date` - Current Date
Returns the current system date.

* **Syntax:** `date`
* **Format:** Returns `YYYYMMDD h:m:s` (varies by implementation).

**Example:**
```pft
"Report generated on: ", date

```

## `getenv` - Get Environment Variable

Retrieves the value of an operating system environment variable.

* **Syntax:** `getenv('VAR_NAME')`

**Example:**

```pft
"Server Name: ", getenv('SERVER_NAME')

```

## `system` - System Call

Executes an external operating system command. **Use with caution.**

* **Syntax:** `system('command')`
* **Returns:** The exit code of the command (0 usually means success).

**Example:**

```pft
/* Listing files in Linux */
system('ls -l')

```
