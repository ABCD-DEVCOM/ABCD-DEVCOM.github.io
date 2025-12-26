---
title: Acquisitions Databases
sidebar_label: Acquisitions (Acq)
---

# Acquisitions Databases

The Acquisitions module relies on three main databases to manage the workflow from suggestion to purchase.

## Suggestions (`suggestions`)

Stores requests for materials made by users or librarians.

| Tag | Description |
| :-- | :--- |
| **1** | **Suggestion ID**: Unique control number. |
| **10** | **Applicant**: Name or code of the person making the suggestion. |
| **18** | **Title**: Title of the suggested item. |
| **19** | **Author**: Author of the item. |
| **30** | **Status**: Current status (0=Pending, 1=Approved, 2=Rejected, etc.). |
| **80** | **Date**: Date of suggestion. |

## Providers (`providers`)

A directory of vendors, donors, and publishers.

| Tag | Description |
| :-- | :--- |
| **10** | **Short Name**: Unique code or abbreviation for the provider. |
| **20** | **Full Name**: Legal name of the organization. |
| **30** | **Address**: Physical mailing address. |
| **40** | **City/Country**: Location details. |
| **90** | **Contact**: Name of the contact person. |
| **100**| **Email**: Contact email. |

## Purchase Orders (`purchaseorder`)

Records of orders sent to providers.

| Tag | Description |
| :-- | :--- |
| **1** | **Order Number**: Unique ID for the purchase order. |
| **10** | **Provider**: Link to the `providers` database. |
| **20** | **Date**: Date the order was created. |
| **30** | **Status**: (Open, Sent, Partially Received, Closed). |
| **40** | **Items**: Repeatable field containing details of items ordered (Title, Quantity, Price). |