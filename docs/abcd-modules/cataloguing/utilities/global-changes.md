---
title: Global Changes
sidebar_label: Global Changes
sidebar_position: 2
---

# Global Changes

 The **Global Changes** utility allows you to modify multiple records in a single operation. This is useful for correcting spelling errors across thousands of records, moving data between fields, or deleting obsolete tags.

## Structure of a Global Change

The process involves three steps:
1.  **Search**: Define which records will be affected.
2.  **Operation**: Define what change to apply.
3.  **Execution**: Run the process.

## Common Operations

### 1. Add Field
Inserts a new field with a fixed value into the selected records.
* **Example**: Add `Tag 900` with value `Internet Resource` to all records where `Tag 300` contains "PDF".

### 2. Delete Field
Removes a specific tag or a specific occurrence of a tag.
* **Example**: Delete `Tag 99` (Internal Note) from all records.

### 3. Change Content (Search & Replace)
Finds a string of text within a field and replaces it with another.
* **Scope**: You can limit this to a specific Tag (e.g., only fix "Color" to "Colour" in Tag 245).
* **Case Sensitivity**: Be careful with capitalization.

### 4. Move Field
Moves data from one tag to another.
* **Example**: Move content from `Tag 100` (Main Author) to `Tag 700` (Co-author).

## Step-by-Step Execution

1. Navigate to **Cataloging > Utilities > Global Changes**.
2. **Select Records**:
   * Enter a search query (e.g., `AU=Smith$`) or a range of MFNs.
   * Tip: Always test on a single MFN first (e.g., `MFN 50`).
3. **Define the Change**: Select the operation type and fill in the parameters (Tag, Old Value, New Value).
4. **Preview**: Click "Execute" (depending on version, there might be a dry-run option, but often in ABCD it executes directly on the copies).
5. **Verify**: Check the modified records.

:::danger Irreversible Action
There is no "Undo" button for Global Changes. If you make a mistake (e.g., deleting all Titles), the only way to recover is to restore from a backup. **Backup your database before clicking Execute.**
:::