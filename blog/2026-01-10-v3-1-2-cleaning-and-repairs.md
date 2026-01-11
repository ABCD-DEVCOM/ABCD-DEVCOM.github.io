---
slug: v3-1-2-cleaning-and-repairs
title: "v3.1.2 Cleaning and repairs"
authors: [fho4abcd, rogercgui]
tags: [release, v3.1.2]
---

## What's Changed
* General Cleanup, UI Improvements, and Bug Fixes by @rogercgui in https://github.com/ABCD-DEVCOM/ABCD/pull/590
* Meta tag added by @rogercgui in https://github.com/ABCD-DEVCOM/ABCD/pull/591
* Update opac.tab by @rogercgui in https://github.com/ABCD-DEVCOM/ABCD/pull/592
* OPAC HTML Improvement by @rogercgui in https://github.com/ABCD-DEVCOM/ABCD/pull/593

<!-- truncate -->

**Full Changelog**: https://github.com/ABCD-DEVCOM/ABCD/compare/v3.1.1...v3.1.2

## Actions by database administrator

The upgrade of the code can be done with the upgrade manager

**Note: If you are upgrading from v.3.0.0 or earlier then**
1. Download from Git file upgrade_manager.php ([www/htdocs/update_manager.php](https://github.com/ABCD-DEVCOM/ABCD/blob/9b2c3cad60831bf1436b391d325d497750fb2d70/www/htdocs/update_manager.php) )
2. Copy the downloaded file to the Document root of your installation  
    1. In Linux typical  `/opt/ABCD/htdocs`
    2. Check that `update_manager.php` is readable by your webserver
3. Run ABCD, login as administrator, perform some arbitrary actions to ensure that ABCD detects the new version
4. The footer shows a yellow bar with text `Update now (v3.1.2) ABCD is available`. Click on the link `Update Now`
5. The version of the Update  manager should be: **v4.3**
6. The Update manager will guide you through the upgrade process