---
title: OAI-PMH Overview
sidebar_label: Overview
sidebar_position: 1
---

# OAI-PMH Data Provider

The **ISIS OAI Provider** module allows your ABCD databases to be "harvested" by external systems such as **Google Scholar**, **VuFind**, **Primo**, or national library networks.

It complies with the **OAI-PMH 2.0** standard (Open Archives Initiative Protocol for Metadata Harvesting), translating your ISIS records (MARC, LILACS, etc.) into standard XML formats (Dublin Core, MARCXML) in real-time.

## How it Works
Unlike the Z39.50 client (which searches one by one), OAI-PMH is designed for bulk data transfer.
1.  **The Harvester** (e.g., Google) requests: *"Give me all records created since last Tuesday."*
2.  **The Provider** (ABCD) queries the database using WXIS.
3.  **The Mapper** converts the ISIS tags into XML.
4.  **The Response** is sent as a structured XML stream.

## Access URL
Once installed, the provider is typically accessible at:

```
http://your-server/isis-oai-provider/oai.php

```

This URL is what you give to service providers (aggregators) to index your content.

