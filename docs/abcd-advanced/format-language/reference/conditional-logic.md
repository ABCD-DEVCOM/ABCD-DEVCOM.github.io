---
title: Conditional Logic
sidebar_label: Conditional Logic (IF)
sidebar_position: 4
---

# Conditional Logic

CISIS allows complex decision-making within the format using the `if` structure. This is essential for hiding labels of missing fields or changing formatting based on content (e.g., "If book is restricted, show Red text").

## The `IF` Command

* **Syntax:**
```text
if <condition> then <commands> else <commands> fi

```

* **Note:** The `else` part is optional. The `fi` (end if) is mandatory.

### Checking Field Presence

The most common conditions check if a field exists (`p`) or is absent (`a`).

* **`p(vTag)`**: True if the field is **Present**.
* **`a(vTag)`**: True if the field is **Absent** (Empty).

**Example:**

```text
if p(v10) then "Author: ", v10 else "Anonymous" fi

```

### Comparing Values

You can compare fields against text strings or other fields.

* **Operators:** `=`, `<>` (Not equal), `>`, `<`, `>=`, `<=`
* **Numeric Comparison:** To compare numbers, use `val()` to convert the string to a number. `if val(v20) > 2000...`

**Example:**

```text
if v20:'1999' then 'Published in 1999' fi

```

### Logical Operators

Combine multiple conditions.

* **`AND`**: Both must be true.
* **`OR`**: At least one must be true.
* **`NOT`**: Inverts the result.

**Example:**

```text
if p(v10) AND a(v20) then 'Author present, but no Year' fi

```