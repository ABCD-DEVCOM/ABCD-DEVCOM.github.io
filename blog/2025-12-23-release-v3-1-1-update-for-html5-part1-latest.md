---
slug: release-v3-1-1-update-for-html5-part1-latest
title: "Update for HTML5 part1"
authors: [fho4abcd]
tags: [release, v3.1.1]
---

## What's Changed
Functional: nothing

**Full Changelog**: https://github.com/ABCD-DEVCOM/ABCD/compare/v3.1.0...v3.1.1
## Details
The current generated HTML has obsolete tags/attributes, unclosed tags and many more (small errors). Many of these inconsistencies are hidden/masked/solved by modern browsers so the user is not aware of anomalies. But this is a ticking bomb, so the target is more robust code in HTML5.

Tool:  **Markup Validation Service** (https://validator.w3.org/)
Planning: Several code upgrades will be necessary and, at a certain moment also a rewrite of existing users defined reports/worksheets.

### Actions by database administrator
The upgrade of the code can be done with the upgrade manager