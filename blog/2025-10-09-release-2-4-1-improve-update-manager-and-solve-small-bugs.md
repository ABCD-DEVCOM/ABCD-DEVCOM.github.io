---
slug: release-2-4-1-improve-update-manager-and-solve-small-bugs
title: "Release 2.4.1 Improve update manager and solve small bugs"
authors: [fho4abcd,rogercgui]
tags: [release, v2.4.1]
---

## What's Changed
Update_manager:
- Check that php curl extension is loaded.
- Copy also cgi-bin subfolders ansi and utf8. Set executable permissions on executables
- Print the log file timestamp in the server timezone (only on linux servers)
Version_checker:
- Moved json file to upgrade folder
- Corrected repository name (ABCD2->ABCD)

<!-- truncate -->

See all changed files for more details

### Actions by database administrator

The upgrade of the code can be done with the upgrade manager.