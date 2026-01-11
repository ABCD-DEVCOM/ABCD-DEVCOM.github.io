---
slug: release-2-3-4-status-2025-09-17-update-manager-tool
title: "Release 2.3.4 Status 2025-09-17: Update Manager Tool"
authors: [fho4abcd]
tags: [release, v2.3.4]
---

## What's Changed
This update definitively implements the ABCD update system.
Now, with this installation, you will see a yellow banner with each release.

The available options are:
- Partial update: will only update the system, preserving your databases and local settings.
- Full update: the entire system will be reset, including the model databases.
More info in pull request Update manager by @rogercgui in https://github.com/ABCD-DEVCOM/ABCD/pull/567

<!-- truncate -->

### Upgrade

Copy the changed files over the existing files. No further action for this release.

The current Upgrade tool is still in the development phase: In a next release you can use the tool that is installed in this release.
If you use it now: _Take sufficient precautions (e.g. backups). Data loss and/or code mismatches may occur by using it now._
