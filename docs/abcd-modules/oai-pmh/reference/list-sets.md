---
title: ListSets
sidebar_label: ListSets
---

# Verb: ListSets

Retrieves the structure of the repository. In the ABCD OAI Provider, **Sets** map directly to the databases configured in `oai-databases.php`.

* **Usage:** `oai.php?verb=ListSets`

## Configuration
The sets are defined in the `$databases` array within `oai-databases.php`. Each database becomes a set.

### Example Output
```xml
<request verb="ListSets">http://localhost:9090/isis-oai-provider/oai.php</request>
<ListSets>
    <set>
        <setSpec>marc</setSpec>
        <setName>Library Catalog (MARC)</setName>
        <setDescription>
             <oai_dc:dc ...>Main Library Collection</oai_dc:dc>
        </setDescription>
    </set>
    <set>
        <setSpec>dubcore</setSpec>
        <setName>Digital Repository</setName>
    </set>
</ListSets>

```
