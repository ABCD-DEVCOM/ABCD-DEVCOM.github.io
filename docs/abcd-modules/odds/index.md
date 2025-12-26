---
title: ODDS Overview
sidebar_label: Overview
sidebar_position: 1
---

# Online Document Delivery System (ODDS)

The **ODDS Module** is a specialized tool designed to facilitate **Document Supply** services (Inter-library loan / Digital delivery).

While the Circulation module manages physical loans (checking out a whole book), ODDS manages requests for **copies** (e.g., scanning a specific chapter of a book or an article from a journal) and delivering them electronically to the user.

## Purpose
* **Gap Filling:** Bridges the gap between print collections and digital needs.
* **Remote Access:** Allows users to request materials without visiting the library physically.
* **Resource Sharing:** Can be used for inter-library loan requests if configured.

## How it Works
1.  **Request:** The user finds a title in the catalog and clicks "Request Copy" (linking to `odds/form_odds.php`).
2.  **Specification:** The user fills in details: "Chapter 3, pages 45-60".
3.  **Processing:** The library staff receives the request, digitizes the content, and delivers it (usually via email or a download link).