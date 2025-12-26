---
title: <IsisScript> (Root)
description: The root element that encapsulates the entire script.
---

# Element `<IsisScript>`

The `<IsisScript>` element is the mandatory wrapper for any script file. It indicates the start and end of a group of IsisScript instructions.

All executable code (such as `<section>`, `<function>`, etc.) must be nested within this element.

## Attributes

| Attribute | Description |
| :--- | :--- |
| `name` | **Optional.** Assigns a name to the script for documentation purposes or log identification. |

## Usage
- **Allowed content:** `<function>`, `<section>`, `<trace>`
- **Level:** Root

## Example

Minimal structure of a `.xis` file:

```xml
<IsisScript name="HelloWorld">
   
   <section>
      <display>Hello World!</display>
   </section>

</IsisScript>

```
