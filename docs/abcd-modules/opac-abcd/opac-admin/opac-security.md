---
title: Security & Logging
sidebar_label: Security & Logs
sidebar_position: 7
---

# 🛡️ Security and Logging Documentation

This documentation details the implementations carried out to shield the OPAC against unwanted access, clean up search records, and protect system integrity.

## 1. Log Optimization (`log_buscas.php`)

The goal was to eliminate "noise" caused by robots and automated attacks, ensuring that statistical reports reflect only the behavior of real users.

### Implemented Features:
* **Bot Detection (Bot Filter):** The system now analyzes the visitor's `User-Agent`. If it contains signatures of known bots (Googlebot, Bingbot, Yahoo, Python, Curl, etc.), the search is **not recorded**.
* **System Artifact Filter:** Searches initiated by clicking on facets or indexes (which generate terms like `FUL_Mackenzie`, `NOM_Silva`, `TIL_Ciencias`) are detected via RegEx (`^[A-Z]{2,4}_`) and ignored in the "typed terms" log.
* **Attack Blocking in Logs:** Attempts at *Directory Traversal* (e.g., `../../etc/passwd`) or injections are silently discarded to avoid polluting the history.
* **Length Validation:** Very short terms (< 2 characters) or excessively long terms (> 255 characters) are ignored.

---

## 2. Input Validation and Shielding (`is_malicious.php`)

We implemented a security strategy based on a **Whitelist**, reversing the logic of "trying to guess the attack" to "only accepting what is known".

### Defense Mechanisms:
* **Parameter Whitelist:** The system strictly defines which URL keys are accepted (e.g., `base`, `cipar`, `Expresion`). Any unknown parameter (e.g., `cmd`, `admin`, `union`) triggers an immediate block of the request.
* **Content Inspection:** Received values are scanned against attack patterns:
    * **SQL Injection:** Blocks patterns like `UNION SELECT`, `OR 1=1`, `information_schema`.
    * **XSS (Cross-Site Scripting):** Blocks tags `<script>`, `javascript:`, etc.
    * **Path Traversal:** Blocks directory navigation sequences (`../`, `..%2F`).
* **Array Support:** Validation is recursive, protecting even complex form fields (e.g., `camp[]`, `Sub_Expresiones[]`) used in detailed search.

---

## 3. Infrastructure and Context (`config_opac.php`)

Structural security was reinforced through the Multi-Context system.

### Improvements:
* **Strict Mode:** If enabled, the system blocks any direct access to the OPAC root that does not specify a library context (`?ctx=...`). This prevents unauthorized navigation or access to "default" databases that should not be public.
* **Path Sanitization:** The physical path of the databases (`$db_path`) is resolved internally by the server through the context map, preventing the user from manipulating the path via URL.
* **Session Protection:** The context is persisted in the session, ensuring that the user does not accidentally "drop" into another library during navigation.

---

## 4. Error and Type Handling (`forms.php`, `leer_bases.php`, etc.)

Correction of logical vulnerabilities and fatal errors in scripts that handle user data.

### Adjustments Made:
* **Array Manipulation:** Legacy ABCD scripts expected all inputs to be Strings. Critical files (`leer_bases.php`, `sort_dropdown.php`, `search_detailed.php`, `forms.php`) were updated to correctly iterate over Arrays (`is_array`), avoiding PHP 8+ fatal errors (`TypeError`).
* **Output Escaping:** Rigorous application of `htmlspecialchars()` at all points where received data (`$_REQUEST`) is printed to the screen (hidden forms, links), preventing HTML/JS injection.

---

### Protection Summary

| Layer | Action | Result |
| :--- | :--- | :--- |
| **Input (Request)** | Whitelist + Regex | Blocks attacks before processing. |
| **Processing** | Strict Mode + Sanitization | Ensures access only to allowed folders. |
| **Output (Log)** | Bot Filter | Generates clean and real statistics. |
| **Interface** | Output Escaping | Prevents layout breakage and XSS. |