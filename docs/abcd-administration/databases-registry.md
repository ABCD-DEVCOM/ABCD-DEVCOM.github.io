---
title: The Database Registry (bases.dat)
sidebar_label: The Registry (bases.dat)
sidebar_position: 3
---

# The Database Registry (bases.dat)

Unlike some modern systems that automatically scan folders, ABCD requires you to explicitly "register" a database for it to appear in the selection menu. This registry is a plain text file named **`bases.dat`**.

**Location:** `bases/bases.dat`

## File Structure

The file is a simple list where each line represents a database available in the system. The syntax relies on a pipe character (`|`) as a separator between the internal folder name and the public label.

```text
folder_name|Description displayed in menu