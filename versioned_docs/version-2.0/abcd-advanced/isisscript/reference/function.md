---
title: <function>
description: Declares reusable code blocks and defines how they receive parameters.
---

# Element `<function>`

The `<function>` element starts a declaration block for a reusable function in IsisScript. Functions are essential for modularizing complex scripts and avoiding code repetition.

A unique feature of IsisScript functions is their ability to automatically process parameters passed by the `<call>` element. The attributes `action`, `tag`, `split`, and `from` are used to receive and map these parameters into fields, following the same semantics defined for the [`<field>`](./field) element.

## Usage

- **Parent element:** `<IsisScript>` (Functions must be declared at the script's root level or within a `<section>`).
- **Allowed content:**
  `<call>`, `<cgitable>`, `<define>`, `<display>`, `<do>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<hl>`, `<label>`, `<list>`, `<parm>`, `<proc>`, `<return>`, `<trace>`

## Syntax

```xml
<function name="FUNCTION_NAME" [action="..."] [tag="..."] [split="..."] [from="..."]>
</function>

```

## Attributes

| Attribute | Mandatory | Description |
| --- | --- | --- |
| **`name`** | **Yes** | Identifies the declared function. |
| `action` | No | Defines the operation to perform with the received parameter (e.g., `replace`, `add`). |
| `tag` | No | Specifies the numeric tag where the parameter will be stored. |
| `split` | No | Controls how parameter values are split into occurrences. |
| `from` | No | Defines the source field number used to pass parameters. |

---

### Attribute Details

#### `name`

The `name` attribute identifies the declared function. This name is used by the [`<call>`](./call) element to invoke the function explicitly.

**Example:**

```xml
<function name="Test" action="replace" tag="1">
  <display>Inside Test function</display>
</function>

```

#### `action`

*See also: [`<field action=...>*`](./field)

The `action` attribute defines how parameters passed to the function are handled. This attribute is functionally equivalent to the `action` attribute of the `<field>` element.

* **Common values:** `replace` (overwrites the tag), `add` (adds a new occurrence).

**Example:**

```xml
<function name="Test" action="replace" tag="1">
  <display><pft>'Field 1 = ', v1</pft></display>
</function>

```

#### `tag`

*See also: [`<field tag=...>*`](./field)

The `tag` attribute specifies the field number (tag) used to receive the parameter passed to the function. This attribute is functionally equivalent to the `tag` attribute of the `<field>` element.

**Example:**

```xml
<function name="Test" action="replace" tag="1">
  <display>Parameter received: <pft>v1</pft></display>
</function>

```

#### `split`

*See also: [`<field split=...>*`](./field)

The `split` attribute controls how parameter values passed to the function are stored, specifically if they should be split into multiple occurrences. This attribute is functionally equivalent to the `split` attribute of the `<field>` element.

* **Common value:** `occ` (splits the input string by lines into new occurrences).

**Example:**

```xml
<function name="Test" action="replace" tag="1" split="occ">
  <display>Processing multiple lines...</display>
  <display><pft>(v1/)</pft></display>
</function>

```

#### `from`

*See also: [`<field from=...>*`](./field)

The `from` attribute defines the source field number used to pass parameters to the function. This acts as a filter or specific selector equivalent to the `from` attribute of the `<field>` element.

**Example:**

```xml
<function name="Test" action="replace" tag="1" from="200">
</function>

```

---

## Complete Example

The following script demonstrates a function `ParamTest` that receives a parameter, splits it into occurrences, displays it, and then returns a value to the caller.

```xml
<IsisScript>

   <function name="ParamTest" action="replace" tag="1" split="occ">
      <display>
         Inside ParamTest function.<br>
         Received argument in v1:<br>
         <pft>(v1/)</pft>
      </display>
      
      <return action="replace" tag="9999" split="occ">
         <pft>'Processed: ', v1</pft>
      </return>
   </function>

   <section>
      <display>Calling Function...<br></display>
      
      <call name="ParamTest">
         <pft>'Line One'/'Line Two'</pft>
      </call>
      
      <display>
         <br>Back in Main Section.<br>
         Returned value in v9999: <pft>v9999</pft>
      </display>
   </section>

</IsisScript>

```
