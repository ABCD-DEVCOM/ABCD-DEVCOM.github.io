---
title: WXIS (Web Interface)
sidebar_label: WXIS & Scripts
sidebar_position: 5
---

# WXIS Utility

**WXIS** (Web eXtended ISIS) is the CGI version of CISIS. It executes XML-based scripts (`.xis`) to put ISIS databases on the web. It is the core engine of the ABCD OPAC.

## Running a Script
Syntax: `wxis IsisScript=<file.xis> [parameters]`

## Example: Hello World (`hello.xis`)
```xml
<IsisScript>
    <trace>on</trace>
    <section>
        <display><pft>'Content-type: text/html'/#</pft></display>
        <display><pft>'<h1>Hello World</h1>'</pft></display>
    </section>
</IsisScript>

```

## Error Codes

WXIS returns specific pipe-separated error codes (e.g., `WXIS|fatal error|...`). See the [Troubleshooting](https://www.google.com/search?q=troubleshooting.md) page for details.

