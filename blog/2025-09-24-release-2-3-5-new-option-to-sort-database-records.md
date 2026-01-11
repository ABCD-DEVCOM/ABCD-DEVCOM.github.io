---
slug: release-2-3-5-new-option-to-sort-database-records
title: "Release 2.3.5 New option to sort database records"
authors: [fho4abcd]
tags: [release, v2.3.5]
---

### Major changes
Database records could be sorted with command line utility msrt.
This improvement adds an interactive capability in menu Utilities -> DB Maintenance.
Defaults can be set in the Advanced database settings (dr_path.def)

<!-- truncate -->

### Details
- Best results are obtained by using the Principal entry tag as sort key. But this is not mandatory. Other tags will also work.
- Existing batch scripts combined the sort with additional operations in order to get better results. This new option offers buttons for these operations. E.g.
  - Preparatory action _Unlock database_
  - Preparatory action _Clean/Compact DB_
  - Follow-up actions _Inverted file generation_. Note that **search** indexes will give **wrong results** when the inverted files are not regenerated.
- The commandline utility does not perform an extensive error check. Major errors return sometimes an incomprehensible error code. Advice is to look at the formatting language.
- The current source does NOT use parameter _-mfn_.  Implies that the .xrf file and the .mst file are modified. See source code for details

### Actions by database administrator
The new option works without any administrator actions.
In order to avoid mistakes by the operators the administrator can set defaults for the entries of the Sort option by editing file **dr_path.def** for **each** database that might need it. This can be done interactively with via _Update database Definitions_ --> _Advanced database settings (dr_path.def)_. Check values of:

- Sort database records key length (_SORTLENGTH_)
- Sort database records by (_SORTBY_)
- Specification of the sort key (_SORTSPEC_)

### Upgrade
The new and modified files can overwrite existing files.

Th Upgrade tool can be tested.