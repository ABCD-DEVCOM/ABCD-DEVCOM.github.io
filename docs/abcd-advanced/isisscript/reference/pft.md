---
title: <pft>
description: Executes ISIS Formatting Language commands.
---

# Element `<pft>`

The `<pft>` element contains instructions in the **ISIS Formatting Language** (Print Format). It is used to extract data from records, format strings, perform calculations, and manipulate variables.

It is the engine behind data presentation in IsisScript.

## Usage
- **Allowed content:** Pure PFT string or nested `<pft>` elements.
- **Parent elements:** `<call>`, `<cgitable>`, `<define>`, `<display>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<htmlpft>`, `<label>`, `<list>`, `<parm>`, `<pft>`, `<proc>`, `<return>`, `<trace>`, `<write>`.

## Syntax

```xml
<pft [type="..."]>
    PFT_INSTRUCTIONS
</pft>

```

## Attributes

| Attribute | Description |
| --- | --- |
| `type` | Specifies the action type for format execution (`check`, `reload`). |

---

## Attribute Details

### `type="check"`

Enables format syntax validation.

* **Return Value:**
* If valid: Returns `00000`.
* If invalid: Returns a **5-digit error code**, followed by a space and the **syntax error pointer** (location of the error).



**Example: Validating User Input**
This checks if the PFT string stored in the CGI variable `pft` is valid.

```xml
<field action="cgi" tag="2065">pft</field>
<display>
   <pft type="check">
      <pft>v2065</pft>
   </pft>
</display>

```

### `type="reload"`

Specifies that the format must be **recompiled** each time this instruction is executed.

* **Use Case:** Essential when the PFT content is dynamic (e.g., constructed via variables or `ref()` lookups that change during execution) and needs to be treated as executable code rather than a static string.

**Example: Dynamic Execution**

```xml
<do>
   <parm name="to">10</parm>
   <loop>
      <display>
         <pft type="reload">
            <pft>ref(['CONFIG']val(v1), v500/)</pft>
         </pft>
      </display>
   </loop>
</do>

```

---

## Common Examples

### Basic Formatting

```xml
<display><pft>("Author: "v70+|; |)</pft></display>

```

### Executing External Files

Using the `@` command or `cat()` function.

```xml
<display><pft>@CDS.PFT</pft></display>
<display><pft>cat('C:\AUTOEXEC.BAT')</pft></display>

```

### Reference Lookup

```xml
<display><pft>ref(['CONFIG']1, v500/)</pft></display>

```
