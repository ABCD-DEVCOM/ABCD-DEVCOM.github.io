---
slug: release-2-3-6-more-robust-upgrade-manager
title: "Release 2.3.6 More robust upgrade manager"
authors: [fho4abcd]
tags: [release, v2.3.6]
---

## Major changes
The upgrade manager has now several checks to cope with error situations.

{/* truncate */}

The search by A-Z list gives now information how to repair erroneous configuration
### Details of upgrade manager checks
- Added log file. Is overwritten on next run.
- Activated check for admin rights: user must have profile "adm"
- Check that php zip extension is loaded.
- Check download and unzip result. Tested with insufficient disk quota
- Check that all required sources are present in the package before actual update
- Detect and log run-time errors in actual update. Tested with wrong permissions
### Actions by database administrator
None