---
title: Flow Control & Logic
description: Commands for conditional logic, loops, and script structure.
---

# Flow Control & Logic

Control the execution flow of your format based on data conditions.

## Conditionals

### `if` - Conditional Flow
Executes a block of code if the condition is true.
* **Syntax:**
    ```pft
    if Condition then
       ... commands ...
    else
       ... commands ...
    fi
    ```
* **Conditions:** `=`, `<>`, `>`, `<`, `>=`, `<=`, `:`, `NOT`, `AND`, `OR`.


### `select` - Selection (Switch/Case)
Executes one of several blocks based on the value of an expression.
* **Syntax:**
    ```pft
    select Expression
       case 1: ...
       case 2: ...
       elsecase: ...
    endsel
    ```


---

## Loops & Groups

### Repeatable Group `(...)`
Iterates over all occurrences of the repeatable fields contained within parentheses.
* **Syntax:** `( ... )`
* **Example:** `(v10 + |; |)` prints all keywords separated by semicolons.


### `break` - Break Loop
Exits a repeatable group immediately.
* **Syntax:** `break`
* **Example:** `(if v10='Stop' then break fi, v10/)`


### `while` - While Loop
Repeats a block while a condition is true.
* **Syntax:** `while Condition do ... enddo`
*(Note: Availability depends on CISIS version, often handled via repeatable group logic).*

---

## Script Structure

### `@` - Include Format File
Executes an external PFT file at the current position.
* **Syntax:** `@Filename`
* **Example:** `@header.pft`


### `/* */` - Comments
Text enclosed in `/* ... */` is ignored by the processor.

