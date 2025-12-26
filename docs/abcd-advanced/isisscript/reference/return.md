---
title: <return>
description: Exits the current function and optionally returns data to the caller.
---

# Element `<return>`

The `<return>` element exits the current function and transfers control back to the caller.

It allows passing data back to the calling scope. The attributes used to define how this data is returned (`action`, `tag`, `split`) follow the exact same semantics as the [`<field>`](./field) element.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<function>`

## Syntax

```xml
<return [action="..."] [tag="..."] [split="..."]>
    </return>

```

## Attributes

| Attribute | Description |
| --- | --- |
| `action` | Defines the operation on the target field in the caller's scope. |
| `split` | Controls how the returned content is split into occurrences. |
| `tag` | Specifies the target field tag in the caller's scope. |

---

## Attribute Details

### `action`

*See also: [`<field action=...>*`](https://www.google.com/search?q=./field)

It returns parameters to the caller function. It is functionally equivalent to the `action` attribute of the `<field>` element.

* **Common values:** `replace`, `add`, `define`.

### `split`

*See also: [`<field split=...>*`](https://www.google.com/search?q=./field)

It returns parameters to the caller function. It is functionally equivalent to the `split` attribute of the `<field>` element.

* **Common values:** `occ` (splits content by lines into occurrences).

### `tag`

*See also: [`<field tag=...>*`](https://www.google.com/search?q=./field)

Specifies the numeric tag in the **caller's scope** that will receive the returned data.

---

## Example

In this example, the function `ParamTest` processes an input and returns a result. It uses `<return>` to place the content of `v1` (internal to the function) into tag `9999` (external/caller scope).

```xml
<function name="ParamTest" action="replace" tag="1" split="occ">
   <display><pft>##'ParamTest'/</pft></display>
   <display><pft>ALL</pft></display>
   
   <return action="replace" tag="9999" split="occ">
      <pft>(v1/)</pft>
   </return>
   
   <display>Parameter field 1 absent!</display>
</function>

```
