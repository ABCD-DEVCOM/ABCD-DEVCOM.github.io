---
sidebar_position: 4
title: Loops
---

# Loops
Usually in a task relating to a database or list you want to do the same thing to one of a set of records, e.g. display each record retrieved by a search or each term in a section of the inverted file.

For the tasks **mfnrange**, search and **keyrange** this is done using a loop – the loop starts again for each record until the last record in the set has
been processed.\\ The loop is specified with the tags **`<loop>`** and **`</loop>`**.\\ 
For the task update, the tags **`<update>`** and **`</update>`** are used.

You can use a loop in the *hello.xis* script to display the message several times (specified by the parameter `to`). This does not need a task specifying as it is not operating on a database. The loop part is indented in this example to emphasize where the loop starts and ends.

```xml

<IsisScript name=Hello>
    <display><pft>’Content-type: text/html’##</pft></display>
    <do>
        <parm name = to>10</parm>
        <loop>
            <display>Hello world!<br></display>
        </loop>
    </do>
</IsisScript>

```

A simple script to display the **MFN** and title of the first ten records in the CDS database could be written like this.

```xml

<IsisScript name=ShowTen>
    <display><pft>’Content-type: text/html’##</pft></display>
    <do task = mfnrange>
        <parm name=db>cds</parm>
        <parm name=from>1</parm>
        <parm name=to>10</parm>
        <loop>
            <display><pft>mfn,' – ',v24,'<br>'</pft></display>
        </loop>
    </do>
</IsisScript>