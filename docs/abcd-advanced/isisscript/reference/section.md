---
title: <section>
description: Defines a logical block of code within the script.
---

# Element `<section>`

The `<section>` element is used to begin a sequence of instructions. It typically serves as the direct child of the root `<IsisScript>` element to define the main entry points of the script.

Unlike `<function>`, which defines a reusable block called by name, a `<section>` is often used to structure the primary linear flow of the script.

## Usage
- **Allowed content:** `<call>`, `<cgitable>`, `<define>`, `<display>`, `<do>`, `<export>`, `<extract>`, `<field>`, `<file>`, `<flow>`, `<hl>`, `<label>`, `<list>`, `<parm>`, `<proc>`, `<trace>`
- **Parent elements:** `<IsisScript>`

## Syntax

```xml
<section [name="..."]>
    </section>

```

## Attributes

| Attribute | Description |
| --- | --- |
| `name` | **Optional.** Used for identification purposes or documentation of the section. |

## Example

```xml
<IsisScript name="Test">
    <section name="TestFirst">
        <display><pft>mpu,'Test'</pft></display>
    </section>
</IsisScript>

```