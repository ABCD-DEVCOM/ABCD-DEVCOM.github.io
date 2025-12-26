---
title: <call>
description: Invokes a defined function within the script.
---

# Element `<call>`

The element `<call>` indicates the call of a function previously defined in the script. The function to be executed is specified by the mandatory `name` attribute.

Any content inside the `<call>` element is passed as a parameter (argument) to the function.

## Usage
- **Allowed content:** `<pft>`
- **Parent elements:** `<do>`, `<function>`, `<hl>`, `<loop>`, `<section>`, `<update>`

## Attributes

| Attribute | Description |
| :--- | :--- |
| **`name`** | **Required.** Specifies the name of the function to be invoked. |

## Examples

### Basic Call and Parameter Passing
In this example, `ParamTest` receives a PFT string as an argument. The function processes it and returns a value.

```xml
<IsisScript>
   <function name="First">
      <display>FIRST </display>
   </function>

   <function name="Second">
      <display>SECOND </display>
   </function>

   <function name="ParamTest" action="replace" tag="1" split="occ">
      <display><pft>##'ParamTest'/</pft></display>
      <display><pft>ALL</pft></display>
      <return action="replace" tag="9999" split="occ"><pft>(v1/)</pft></return>
   </function>

   <section>
      <call name="First">now</call>
      <call name="Second">now</call>
      
      <call name="ParamTest">
         <pft>'One'/'Two'/</pft>
      </call>
      
      <display>
         <pft>ALL</pft>
      </display>
   </section>
</IsisScript>