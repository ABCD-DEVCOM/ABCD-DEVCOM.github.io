---
sidebar_position: 6
title: Module-Specific Scripts
description: Analysis of scripts located in acquisitions, loans, opac, and stats folders.
---

# Module-Specific Scripts

While the root scripts handle general cataloging, the specialized modules of ABCD have their own dedicated IsisScripts located in subdirectories.

## 1. OPAC Scripts (`/wxis/opac`)

The OPAC (Online Public Access Catalog) scripts are designed for high performance and security, as they are exposed to the public web.

* **`opac/buscar.xis`**:
    * **Function:** Executes searches in the OPAC.
    * **Difference from Root:** Unlike the Central `buscar.xis`, this script often handles **facets**, integrates with the **meta-search** engine, and strictly respects the `opac_conf.def` visibility rules (hiding private fields).
* **`opac/status.xis`**:
    * **Function:** Checks the status of a record (copies availability) without retrieving the full bibliographic data.
* **`opac/reserve_check.xis`** & **`opac/reserve_update.xis`**:
    * **Function:** Manages the reservation process by authenticated users directly from the web interface.

## 2. Circulation/Loans Scripts (`/wxis/loans`)

These scripts interact primarily with the **Users** (`users`) and **Transactions** (`trans`) databases, linking them to the bibliographic databases.

* **`loans/prestamo_disponibilidad.xis`**:
    * **Function:** Checks if a specific copy of a book is available for loan based on policies (user category vs. item object category).
    * **Logic:** It reads the "Policy" database (`politica`) and compares dates and counts.
* **`loans/leer.xis`**:
    * **Function:** Reads user data or transaction details. It is specialized to handle the specific fields of the loan system (User ID, Object ID, Dates).

## 3. Acquisitions Scripts (`/wxis/acquisitions`)

Scripts handling the administrative workflow of purchasing library materials.

* **`acquisitions/order_create.xis`**:
    * **Function:** Generates a new purchase order.
    * **Operations:** Creates records in the Acquisitions database (`acq`), linking them to providers and budget lines.

## 4. Statistics Scripts (`/wxis/stats`)

* **`stats/cuadros.xis`**:
    * **Function:** Generates the raw data matrices for statistical tables.
    * **Technique:** heavily uses `<do task="list">` with `type="freq"` (Frequency Lists) to count occurrences of fields (e.g., "Authors per Year", "Loans per User Category").