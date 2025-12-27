---
sidebar_position: 2
title: Parameters
---

# Parameters
Within the task, you need to specify some parameters to tell WXIS the details of the task. This is done using the tags **`<parm>`** and **`</parm>`**. Each parameter has a name attribute and a value specified between the tags, e.g.

```xml
<parm name=from>1</parm>
```

A crucial parameter for most tasks is the name of the database to be used, e.g.

```xml
<parm name=db>cds</parm>
```

The WWWISIS Reference Manual tells you what parameters can be used in what tasks.

See also [/docs/3.1/abcd-advanced/isisscript/reference/parm](/docs/3.1/abcd-advanced/isisscript/reference/parm)
