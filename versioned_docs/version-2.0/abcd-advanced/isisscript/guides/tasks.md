---
sidebar_position: 3
title: Tasks
---

# Tasks
The script can perform one or more tasks. Each task starts with a **`<do>`** tag and ends with a **`</do>`** tag.

A short impression of these tasks is shown her. See [language reference](abc-of-cisis/isiscriptref/do.md) for more
- **`<do task=mfnrange> `** : This goes through a database record by record within the range of MFNs specified
- **`<do task=search>   `** : This performs a search on a database for a specified search expression
- **`<do task=keyrange> `** : This allows access to the inverted file. (The terms in the inverted file are called "keys".)
- **`<do task=update>   `** : This updates the database by adding, deleting or modifying records
- **`<do task=list>     `** : This operates on a list (e.g. fields extracted from a database) rather than on a normal ISIS database