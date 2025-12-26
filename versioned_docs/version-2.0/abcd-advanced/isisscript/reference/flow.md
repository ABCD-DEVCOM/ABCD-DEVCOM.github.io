---
title: <flow>
description: Controls script execution flow (jumps, interruptions, loop control).
---

# Element `<flow>`

The `<flow>` element is used to alter the natural execution sequence of IsisScript instructions. It allows creating conditional jumps (`jump`), terminating execution (`exit`), or controlling loop iterations (`skip`).

The specific behavior is determined by the `action` attribute and the content (argument) of the element.

## Usage
- **Allowed content:** `<pft>` (defining the argument for the action).
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Syntax

```xml
<flow action="...">
    </flow>

```

## Attributes

| Attribute | Description |
| --- | --- |
| **`action`** | **Required.** Defines the type of flow control (`exit`, `jump`, `skip`). |

---

## Action Details

### `action="jump"` (GOTO)

Branches the execution of IsisScript to the corresponding `<label>` element.

* **Argument:** The name of the target label.

```xml
<flow action="jump">
    <pft>if p(v1) then 'GO' fi</pft>
</flow>

<label>GO</label>

```

### `action="exit"`

Terminates the execution of the current IsisScript immediately.

* **Argument:** A numeric return code passed back to the operating system.

```xml
<flow action="exit">1</flow>

```

### `action="skip"`

Controls the flow within a loop or scope. Its behavior depends strictly on the argument provided (`Next` or `Quit`).

* **Argument `Next**`: Branches execution to the **beginning** of the current `<loop>` (starts the next iteration). Equivalent to `continue` in C/PHP.
* **Argument `Quit**`: Abandons the current scope entirely and returns to the previous scope (breaks the loop). Equivalent to `break` in C/PHP.

**Example: Conditional Loop Control**
In this example, the script skips to the next record if field `v24` is absent. If field `v26^c` is greater than 1989, it stops the loop entirely.

```xml
<do>
   <parm name="db">CDS</parm>
   <loop>
      <flow action="skip">
         <pft>
            if a(v24) then 
               'Next' 
            else 
               if val(v26^c) > 1989 then 'Quit' fi 
            fi
         </pft>
      </flow>
      
      <display><pft>@CDS.PFT</pft></display>
   </loop>
</do>

```
