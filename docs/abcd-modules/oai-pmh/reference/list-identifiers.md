---
title: ListIdentifiers
sidebar_label: ListIdentifiers
---

# Verb: ListIdentifiers

Retrieves a list of headers (identifiers and datestamps) but not the full metadata records. This is used by harvesters to check for updates (using `from` and `until` dates) before downloading heavy payloads.

* **Usage:** `?verb=ListIdentifiers&metadataPrefix=oai_dc`
* **Compulsory Parameters:** `metadataPrefix`.
* **Optional Parameters:** `set`, `from`, `until`, `resumptionToken`.

## Identifier Structure
The OAI Identifier format depends on your database configuration (`identifier_field` in `oai.conf`):

* **Case 1 (Numeric ID):** If mapped to Tag 1 (Control Number):
    * `oai:repository:db_name-123`
* **Case 2 (String ID):** If mapped to a string field (e.g., Accession No):
    * `oai:repository:db_name-NEG100-002`

## Pagination (ResumptionToken)
If the database is large, ABCD will not return all IDs at once. It returns a batch (e.g., 100) and a `resumptionToken`. The harvester must make a new request with this token to get the next batch.

:::danger Critical Configuration Warning
If the **CISIS version** (`cisis_ver` in `config.php`) is not compatible with your database files, this verb might return a valid header but **empty identifiers**. The interface might show a single header with missing data. Always verify if your IDs are appearing correctly.
:::

