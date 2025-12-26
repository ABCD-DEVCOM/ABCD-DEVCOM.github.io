---
title: <display>
description: Sends text or PFT output to the current output stream.
---

# Element `<display>`

The `<display>` element sends text to the current output. By default, IsisScript starts with the "standard output" (stdout) of the operating system (typically the web browser response).

Output can be redirected to a file using the `<file>` element.

## Usage
- **Allowed content:** `<htmlpft>`, `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Example

This example sets the HTML content type header, displays a static "Hello World", and then prints the content of field `100` (populated from a CGI variable) using formatting.

```xml
<IsisScript>
   <section>
      <display><pft>'Content-type: text/html'/#</pft></display>
      
      <display>Hello World!<br></display>
      
      <field action="cgi" tag="100">n</field>
      
      <display>
         <pft>
            if p(v100) then
               '|100=|v100|<br>'
            fi
         </pft>
      </display>
   </section>
</IsisScript>

```