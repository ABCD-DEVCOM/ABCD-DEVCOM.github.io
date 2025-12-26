---
sidebar_position: 1
title: ABCD Source Scripts Overview
description: Overview of the core .xis scripts and directory structure.
slug: /isisscript/abcd-source
---

# ABCD Core Scripts (`wxis`)

The core functionality of the ABCD software is driven by a set of **IsisScripts** located in the directory:
`\htdocs\central\dataentry\wxis`

These scripts act as the "API" or "Middleware" between the PHP web interface (Central Module, iAH, OPAC) and the CISIS Database Kernel.

## Directory Structure

The scripts are organized based on the modules they serve. Understanding this hierarchy is crucial for troubleshooting and customization.

### Root Directory (`/wxis`)
Contains the **Core Cataloging** scripts and general system utilities.
* Used by: The "Central" module (Data Entry, Database Administration).
* Examples: `actualizar.xis`, `fullinv.xis`, `login.xis`.

### Sub-directories (Modules)
ABCD separates business logic for specific subsystems into their own folders to avoid conflicts and maintain cleaner code.

* **`/acquisitions`**: Scripts managing the acquisition workflow (suggestions, purchase orders, bidding).
    * *Example:* `order_create.xis`
* **`/loans`**: Scripts for the Circulation module (loans, returns, sanctions, user management).
    * *Example:* `prestamo_disponibilidad.xis`
* **`/opac`**: Scripts specifically tuned for the Public Interface (OPAC). These are often read-only or restricted versions of the central scripts.
    * *Example:* `opac/buscar.xis` (distinct from the root `buscar.xis`).
* **`/stats`**: Scripts responsible for generating data tables for the Statistics module.
    * *Example:* `cuadros.xis`

## Common Architecture

Most ABCD scripts follow a standard pattern:

1.  **Parameter Reception:** They use `<cgitable>` or `<field action="cgi">` to read inputs from PHP.
2.  **Configuration Loading:** They often read `cipar.par` or specific `.def` files to locate databases.
3.  **Execution:** They perform a specific `<do task="...">`.
4.  **Output:** They output the result (usually in HTML or raw text) via `<display>`.