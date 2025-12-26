---
sidebar_position: 6
title: CIPAR and Paths
---

# Cipar
The example in [abc-of-cisis/isiscript/loops.md](abc-of-cisis/isiscript/loops.md) assumes that the CDS database is held in the same directory as the Isis script. Usually this is not desirable – you want to keep the database(s) in one directory and the scripts in the **`/cgi-bin`** directory.

So you need to tell WXIS where to find the database. This is done using a parameter called **`cipar`**. 

It is convenient to place it at the beginning of the script before the tasks. An example would be:

```xml
<parm name=cipar> cds.*=c:\bases\cds\cds.*</parm>
```

This indicates that when files with the name *cds* and any extension are referred to in the script they are to be found as files with the same name in the *c:\bases\cds* directory. (In technical terms, you are saying that the logical name *cds.** is equivalent to the physical name *c:\bases\cds\cds.**)

Any other files not in the **`cgi-bin`** directory should be specified in the same way. To specify more than one equivalence you can use the **`<pft>`** tag and make each one a literal, e.g.

```xml

<parm name=cipar>
    <pft>
        ‘cds.*=c:\bases\cds\cds.*’/
        ‘short.pft=c:\bases\cds\short.pft’/
        ‘error.htm=c:\httpd\docs\error.htm’/
     </pft>
</parm>

```
