---
title: ListMetadataFormats
sidebar_label: ListMetadataFormats
---

# Verb: ListMetadataFormats

Describes the metadata formats available for records in this repository.

* **Usage:** `?verb=ListMetadataFormats`
* **Optional Parameters:** `identifier` (to check formats for a specific record).

## Supported Formats in ABCD
ABCD typically maps ISIS records to two major outputs:

1.  **`oai_dc`**: Simple Dublin Core (Standard mandatory for OAI-PMH).
    * *Implementation:* Uses a PFT (Print Format) to map fields.
2.  **`isis`**: Raw ISIS data (Internal use or specific aggregators).
    * *Implementation:* Uses an `.i2x` conversion table.

The configuration of these formats is linked in the [Mapping Configuration](../mapping.md).
