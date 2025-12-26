---
slug: update-site
title: Update site
authors: [rogercgui]
tags: [bvs-site, php]
---

Minor updates to the files related to the Site Module to have minimal compatibility with newer versions of PHP.
Some commands like "each" have been deprecated in PHP 8 making the Site incompatible with upgraded servers.
This commit reduces the bugs in parts, but not all of them.
Testing is still needed.

<!-- truncate -->

