---
sidebar_position: 5
title: Flow Control
---


# Flow control
It is a frequent requirement in IsisScripts, as in other computer programs, to take different actions depending on the outcome of some test (a "condition"). For instance, we may want to give the user a choice of two methods of searching (a) by entering a Boolean expression or (b) by selecting from the index file.\\
If (a) is chosen we present one search form (search.htm):\\
if (b) is chosen we present another form (index.htm).

The user chooses by clicking a radio button which gives the variable named "choice" the value BOOL or the value INDEX. This value is put by the IsisScript into the field 5001 using the statement

```xml

<field action=cgi tag=5001>choice</field>

```

We can now jump to the appropriate part of the script using a flow element with the *action* attribute set to "*jump*", i.e.

```xml

<flow action=jump><pft>v5001</pft></flow>

```

This causes a jump to the label whose name is in field 5001, i.e. to BOOL or to INDEX. The labels are indicated in the script as label elements:

```xml

<label>BOOL</label>
    (statement to display SEARCH.HTM)
<label>INDEX</label>
    (statement to display INDEX.HTM)

```

The statements to display the forms are slightly complicated and are not the point here. However, we need to make sure that after *SEARCH.HTM* is displayed WXIS
does not go on processing the script and also display *INDEX.HTM*. 

This is achieved by another flow element, this time with the action exit, which ends the execution of the IsisScript. So we have the structure:

```xml

<flow action=jump><pft>v5001</pft></flow>
<label>BOOL</label>
    (statement to display search.htm)
    <flow action=exit>1</flow>
<label>INDEX</label>
    (statement to display index.htm)
    <flow action=exit>2</flow>

```

The argument of the flow element, 1 or 2 in this example, is the return code that is passed to the operating system. \\
More info: [abc-of-cisis/isiscriptref/flow.md](abc-of-cisis/isiscriptref/flow.md)
