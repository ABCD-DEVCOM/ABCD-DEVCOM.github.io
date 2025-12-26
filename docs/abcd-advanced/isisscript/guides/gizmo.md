---
sidebar_position: 7
title: Gizmo (String Manipulation)
---

# Gizmo
A useful parameter is *gizmo*. ([=> \<parm name=gizmo\>](abc-of-cisis/isiscriptref/parm#parm_name_gizmo.md)). It makes a reference to a gizmo database.

For example, if you have a gizmo database called *GIZ1*, the line would read:

```xml
<parm name=gizmo>giz1</parm>
```

A gizmo database is used to convert a character or string of characters in the main database into another character or string of characters for display purposes. Most
often, it is used to convert "special characters" such as `é`, `ç` or `Ñ` into text representations which will display correctly in HTML (`&eacute; &ccedil;` and `&Ntilde;`).

The text versions can be found in books on HTML.\\
The gizmo database is a normal CDS/ISIS database with these two fields defined:
- Input value
- Output value
The data entry worksheet and display format can be very basic and you do not need a Field Select Table. Each special character and its text version are then entered in a separate record in the database, e.g.


|MFN    1|||
|---|---|---|
|       |  field 1  |  é  |
|    |  field 2  |  &eacute;  |
|MFN    2|||
|       |  field 1  |  ç  |
|   |  field 2  |  &ccedil;  |
|MFN |   3|||
|       |  field 1  |  Ñ  |
|    |  field 2  |  &Ntilde;  |

Note that the location of the gizmo file must be specified with the **`cipar`** parameter, e.g.

```

<parm name=cipar>
    giz1.*=c:\bases\giz1.*
</parm>

```