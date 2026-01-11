---
slug: release-v3-1-0-repairs-for-opac-and-update-manager
title: "Release v3.1.0: Repairs for OPAC and Update manager"
authors: [fho4abcd]
tags: [release, v3.1.0]
---

## What's Changed
* OPAC: functionality + security + search + cleanup
* Update update manager
* Repair missing footer


<!-- truncate -->


**Full Changelog**: https://github.com/ABCD-DEVCOM/ABCD/compare/v3.0.0...v3.1.0

## Actions by database administrator
The upgrade proces for this release consists of following steps

1. Download from Git file upgrade_manager.php ([www/htdocs/update_manager.php](https://github.com/ABCD-DEVCOM/ABCD/blob/9b2c3cad60831bf1436b391d325d497750fb2d70/www/htdocs/update_manager.php) )
2. Copy the downloaded file to the Document root of your installation  
    1. In Linux typical  `/opt/ABCD/htdocs`
    2. Check that `update_manager.php` is readable by your webserver
3. Run ABCD, login as administrator, perform some arbitrary actions to ensure that ABCD detects the new version
4. The footer shows a yellow bar with text `Update now (v3.1.0) ABCD is available`. Click on the link `Update Now`
5.The version of the Update  manager should be: **v4.3**
6. The Update manager will guide you through the upgrade process

## Notes

- ABCD module `Site` is no longer present in Git. If not used: delete folder `.../htdocs/site`
- ABCD module `iAH` is no longer present in Git. If not used: delete folder `.../htdocs/iah`

We no longer work with `site` and `iah`, but feel free to continue