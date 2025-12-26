---
title: Retrieving Records
sidebar_label: ListRecords & GetRecord
---

# Retrieving Records

These verbs deliver the actual metadata content. The `oai.php` script processes these requests by querying the ISIS databases via WXIS or CISIS utilities.

## Verb: ListRecords
Retrieves a batch of documents.

* **URL:** `.../oai.php?verb=ListRecords&metadataPrefix=oai_dc`
* **Response:**
    * The provider iterates through the records.
    * It applies the transformation (PFT or mapping) defined in `oai-metadataformats.php`.

## Verb: GetRecord
Retrieves a single record.

* **URL:** `.../oai.php?verb=GetRecord&identifier=oai:myrepo:marc-1&metadataPrefix=oai_dc`

### Identifier Logic
The identifier in the request (e.g., `oai:myrepo:marc-1`) is parsed by `OAIServer.php` to extract:
1.  **Repository ID:** `myrepo`
2.  **Database:** `marc`
3.  **Control Number (MFN/ID):** `1`

:::tip Troubleshooting
If you receive an error `idDoesNotExist`, verify if the `identifier_field` in `oai-databases.php` matches the tag used in your database records.
:::