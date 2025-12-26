---
title: Testing & Troubleshooting
sidebar_label: Testing
sidebar_position: 4
---

# Testing & Troubleshooting

After configuration, you should test the OAI provider directly in a web browser before submitting the URL to aggregators.

## 1. Basic Verbs (Tests)

Append these parameters to your base URL (e.g., `http://localhost/isis-oai-provider/oai.php?...`):

### Identify the Server
`?verb=Identify`
* **Goal:** Should return XML with your Repository Name and Admin Email.
* **Error?** If blank, check PHP error logs. Typically a syntax error in `oai-config.php`.

### List Metadata Formats
`?verb=ListMetadataFormats`
* **Goal:** Should list `oai_dc` and any others you enabled.

### List Sets (Databases)
`?verb=ListSets`
* **Goal:** Should list the databases configured in `oai-databases.php`.
* **Error?** If the list is empty, check the array structure in the config file.

### List Records (The Real Test)
`?verb=ListRecords&metadataPrefix=oai_dc`
* **Goal:** Should return a stream of your actual records in XML.
* **Error?**
    * **"NoRecordsMatch":** The database is empty or the path is wrong.
    * **XML Parsing Error:** Often caused by bad characters in the PFT output (missing CDATA).

## 2. Common Issues

### Character Encoding (UTF-8)
OAI-PMH **strictly requires UTF-8**.
* If your ABCD database is in ISO-8859-1 (Latin1), you must ensure the conversion is active.
* The module includes `gizmo` tools (in `gizmo/` folder) to handle character conversion, but the cleanest way is to ensure your PFT outputs UTF-8 or use the PHP `mb_convert_encoding` if modifying the core code.

### WXIS Errors
The module relies on `wxis` (in `wxis/` folder). Ensure the web server user has execute permissions on the `.xis` files and read permissions on your database `.mst` and `.xrf` files.