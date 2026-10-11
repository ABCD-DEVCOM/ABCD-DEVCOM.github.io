---
id: rest-api-reference
title: REST API Documentation
sidebar_label: REST API
description: Complete integration, configuration, and reference guide for the ABCD REST API.
---

# ABCD REST API

The ABCD REST API provides a modern interface to interact with the system's bibliographic, museum, and archival databases. Through **GET** HTTP requests, you can list databases, perform searches using the CISIS query language, and extract metadata in different formats (Native or Dublin Core). All current API endpoints utilize the **GET** HTTP method. The base URL path for all requests is `/abcd-api/`.

---

## ⚙️ ABCD Configuration (API Manager)

Before consuming the API, the system administrator must configure the exposed databases and generate access keys.

All API management is done through the ABCD graphical interface. To access it, navigate to:
**Central -> ABCD Administration -> API Manager**

In the API Manager dashboard, you can perform the following configurations:
1. **General Settings:** Define the WXIS host and the physical root path for the API.
2. **API Access Keys:** Generate and manage authentication keys (Tokens) and define permissions (read/write scope).
3. **Database Exposure & Mappings:** Choose which databases will be active in the API, define the access level (Public or Restricted), set the encoding (ANSI/UTF-8), and create search index mappings.
4. **Visual Mapper (DC):** Visually map native fields (FDT) to the international Dublin Core standard, automatically generating the `.i2x` and `_dc.pft` mapping files.

---

## 🔐 Authentication and Security

The security level depends on how the database was configured in the API Manager:

- **Public Access Databases (`public`):** Do not require any authentication key.
- **Restricted Access Databases (`restricted`):** Strictly require a valid API key.

To access restricted databases, you **must** include a valid API key in the HTTP request header using `X-API-Key`:
```http
X-API-Key: abcd_sk_your_generated_key_here

```

---

## Output Formats

The API supports data extraction through the `format` URL parameter:

* **`dc` (Dublin Core - Default):** Returns a clean JSON using the mapping files created in the Visual Mapper. This format **preserves HTML code** (such as `<b>`, `<p>`) inserted by catalogers and translates native tags into the 15 universal Dublin Core elements.


* **`native` (Native Format):** Returns the JSON with the raw CISIS structure (exact numeric ISIS FDT tags, indicators, and subfields). Used when an exact migration or copy of the cataloged data is required.



---

## Reference Endpoints

### 1. Status and Health Check

Use this endpoint to verify if the API is online and responding correctly.

* **Endpoint:** `GET /abcd-api/`

* **Action:** Returns a simple welcome message confirming the API is active.



### 2. Database Discovery

These public routes do not require authentication keys. They are used to list exposed database configurations and the available metadata output formats for each database.

* **Endpoint:** `GET /abcd-api/databases`

* **Action:** Returns a list of all exposed databases (e.g., `marc`, `dubcore`) along with their descriptions.




* **Endpoint:** `GET /abcd-api/databases/{database_name}`

* **Action:** Returns specific configuration details for a single database, including its CISIS version and the available formats (`native`, `dc`, etc.) configured via the visual mapper or manually created `.pft` files.


* **Example:** `/abcd-api/databases/marc`




### 3. Record Retrieval and Search

Searches and lists records within a specific database. It will automatically fallback to sequential fetching if the underlying database inverted file (dictionary) is not yet generated or responds with a fatal error on global `$` searches.

* **Endpoint:** `GET /abcd-api/records/{database_name}`

* **Supported URL Parameters:**
* `q`: The search expression. It accepts mapped fields like `q=author:"silva"` or `q=$` to retrieve all records. If omitted, it defaults to searching everything (`$`).


* `limit`: The number of records to return per page. For security and performance, this is strictly capped at a maximum of 100 records. (Default: `10`).


* `from`: The starting index for the result set, used for pagination. (Default: `0`).


* `format`: The metadata output format. Accepts `dc` (Dublin Core JSON, default) or `native` (raw ISIS FDT tags).


* `debug`: Set to `?debug=1` to intercept the raw WXIS execution paths, commands, and XML responses for troubleshooting.





**Request Examples:**

```http
GET /abcd-api/records/marc
GET /abcd-api/records/marc?q=author:"machado"&limit=50&from=1
GET /abcd-api/records/dubcore?format=native

```

### 4. Fetching a Single Record by ID (MFN)

Retrieves a single, exact record based on its physical Master File Number (MFN) bypassing the CISIS dictionary.

* **Endpoint:** `GET /abcd-api/records/{database_name}/{mfn}`

* **Security:** The MFN parameter undergoes strict security validation and only accepts integer characters.


* **Supported URL Parameters:** `format` and `debug`.



**Request Examples:**

```http
GET /abcd-api/records/dubcore/1
GET /abcd-api/records/spectrum/25?format=native

```

---

## 📄 Response Structure (JSON)

The ABCD API architecture utilizes armored serialization, ensuring the response never breaks, even if the data contains digital garbage or invisible control characters.

### Example Response (`dc` Format)

```json
{
    "records": [
        {
            "mfn": "24910",
            "format": "dc",
            "fields": {
                "identifier": [
                    "025592"
                ],
                "type": [
                    "S"
                ],
                "creator": [
                    "Sarlo, Oscar"
                ],
                "title": [
                    "<b>Ética y jueces</b>"
                ],
                "subject": [
                    "ETICA",
                    "JUEZ"
                ]
            }
        }
    ]
}

```

*(Note: In the `dc` format, HTML code is kept intact within the JSON node, preserving the cataloger's formatting).*

