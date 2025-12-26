---
title: CISIS Utilities Overview
sidebar_label: CISIS Utilities
sidebar_position: 1
slug: /cisis-utilities
---

# CISIS Utilities Overview

**Version 5.2 (2005-2007)** - *BIREME / PAHO / WHO*

The **CISIS Utilities** are a suite of command-line programs developed in C that interact with CDS/ISIS databases. They are the engine "under the hood" of ABCD, handling data storage, indexing, sorting, and transformation.

## Versions and Capacities
To check your version, run: `<utility> what` (e.g., `mx what`).

| Version | Key Length | Max Record Size | Description |
| :--- | :--- | :--- | :--- |
| **10/30** | 30 | 32,767 bytes | Compatible with standard CDS/ISIS. |
| **16/60** | 60 | 32,767 bytes | Extended keys (Standard for ABCD). |
| **FFI** | 60 | 1,048,576 bytes | **Big File Support**. Essential for full-text databases. |

## General Parameters
Most CISIS utilities (MX, MSRT, ISO, etc.) accept these standard arguments:

* **`tell=<n>`**: Displays a progress message every *n* records processed. Essential for long batch jobs.
* **`-all`**: Suppresses screen output (silent mode).
* **`now`**: Disables the "Press any key" prompt at the end of execution.
* **`log=<file>`**: Redirects error and status messages to a text file.

## File Structures
Understanding the extensions is crucial for maintenance:

* **MST (Master File):** Contains the data (Control Record + Directory + Fields).
* **XRF (Cross Reference):** Pointers to active records in the MST.
* **CNT, N01, N02, L01, L02, IFP:** The 6 files that make up the **Inverted File** (Index).
* **TAB (Tables):** Character conversion tables (`actab` for alphabetic sorting, `uctab` for uppercase conversion).

## Configuration (CIPAR)
Utilities use a parameter file (often `cipar.par`) to map logical names to physical paths, replacing the old `SYSPAR.PAR`.

**Syntax:** `mx cipar=<file.par> ...`