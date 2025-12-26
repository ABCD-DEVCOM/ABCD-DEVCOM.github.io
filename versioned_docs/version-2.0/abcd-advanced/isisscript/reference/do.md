---
title: <do>
description: Defines the execution scope of a task (search, update, list, etc).
---

# Element `<do>`

The `<do>` element indicates the beginning of an IsisScript task. It is the central processing unit of the script.

## Usage

- **Allowed content:** `<call> <cgitable> <define> <display> <do> <export> <extract> <field> <file> <flow> <hl> <label> <list> <loop> <parm> <proc> <return> <trace> <update>`
- **Parent elements:** `<do> <function> <hl> <loop> <section> <update>`

## Syntax

```xml
<do [task="TASK_NAME"]>
    </do>

```

The `task` attribute is used to indicate the type of task to be executed. The parameters for execution are indicated with the `<parm>` element. The `<loop>` element indicates the set of instructions to be executed for each task item.

---

## Attribute `task`

**Options:** `fullinvertion` `import` `invertedload` `keyrange` `list` `mastersort` `mfnrange` `search` `update`

It identifies the task to be performed.

### Generic Repetition (No Task)

The absence of the `task` attribute indicates a task-independent repetition. It simply loops a specific number of times defined by the parameter `to`.

**Example**

```xml
<do>
   <parm name="to">500</parm>
   <field action="define" tag="1001">Isis_Current</field>
   <field action="define" tag="1002">Isis_Total</field>
   <loop>
      <display>
         <pft>newline('<br>'),v1001,'/',v1002/</pft>
      </display>
   </loop>
</do>

```

---

## Task Details

### `task="fullinvertion"`

Performs the full generation of the database inverted file (IF).

* **`<parm name="db">`**: Database name.
* **`<parm name="fst">`**: The FST (Field Select Table) to be used.

**Example**

```xml
<do task="fullinvertion">
   <parm name="db"><pft>v2001</pft></parm>
   <parm name="fst"><pft>v2061</pft></parm>
   <field action="define" tag="1102">Isis_Status</field>
   <display><pft>'Full invertion: ',v2001/</pft></display>
   <loop></loop>
   <display><pft>'Finished.'/</pft></display>
   <display><pft>'Lock status = 'v1102/</pft></display>
</do>

```

### `task="import"`

Imports data from a text file, loading it as database records.

* **`<parm name="file">`**: The input file name.
* **`<parm name="type">`**: (Optional) File type. If not specified, **ISO-2709** is assumed.

**Example**

```xml
<do task="import">
   <parm name="file"><pft>v2041</pft></parm>
   <parm name="type"><pft>v2042</pft></parm>
   <loop>
      <display><pft>ALL</pft></display>
   </loop>
</do>

```

### `task="invertedload"`

Loads the inverted file using a temporary database containing pre-sorted keys.

* **`<parm name="db">`**: Target database name (whose inverted file is being loaded).
* **`<parm name="keysdb">`**: Source database name (containing sorted keys).

**Example**

```xml
<do task="invertedload">
   <parm name="db">TEST</parm>
   <parm name="keysdb">TESTKEYS</parm>
   <field action="define" tag="1">Isis_Posting</field>
   <field action="define" tag="2">Isis_Key</field>
   <field action="define" tag="1102">Isis_Status</field>
   <display><pft>'Inverted load ...'/</pft></display>
   <loop></loop>
   <display><pft>'Lock status = 'v1102/</pft></display>
   <flow action="exit">
      <pft>if val(v1102) <> 0 then v1102 fi</pft>
   </flow>
   <display><pft>'Inverted load: TEST loaded.'/</pft></display>
</do>

```

### `task="keyrange"`

Accesses the database inverted file (Dictionary).

* **`<parm name="db">`**: Database name.
* **`<parm name="from">`**: Initial key (term).
* **`<parm name="to">`**: Final key (term).
* **`<parm name="count">`**: Max number of keys.
* **`<parm name="reverse">`**: If set, access keys in reverse order.
* **`<parm name="posting">`**: Iterates through the postings list of each key.
* **`<parm name="posttag">`**: Iterates through postings for a specific tag.

**Example**

```xml
<do task="keyrange">
   <parm name="db"><pft>v2001</pft></parm>
   <parm name="from">
      <pft>v2002,if a(v2002) then v2101 fi</pft>
   </parm>
   <parm name="count"><pft>v2003,"20"n2003</pft></parm>
   <parm name="reverse"><pft>v2004</pft></parm>
   <parm name="to"><pft>v2006</pft></parm>

   <field action="define" tag="1001">Isis_Current</field>
   <field action="define" tag="1">Isis_Key</field>
   <field action="define" tag="2">Isis_Postings</field>

   <display><pft>'##) POSTINGS',c15,'KEY'/#</pft></display>

   <loop>
      <display>
         <pft>f(val(v1001),2,0),') ',v2,c15,v1/</pft>
      </display>
   </loop>
</do>

```

### `task="list"`

Accesses a list of items previously loaded with the `<list>` element.

* **`<parm name="from">`**: Starting item index.
* **`<parm name="to">`**: Last item index.
* **`<parm name="count">`**: Number of items to process.
* **`<parm name="reverse">`**: Process list in reverse order.
* **`<parm name="sort">`**: (Optional) Sorts the list before processing.

**Example**

```xml
<list action="load" type="sort"><pft>'1'/,'2'/,'3'/</pft></list>
<list action="load" type="sort"><pft>'9'/,'8'/,</pft></list>
<list action="load" type="sort"><pft>'F'/,'Z'/,'A'/</pft></list>

<do task="list">
   <field action="define" tag="1001">Isis_Current</field>
   <field action="define" tag="1002">Isis_Items</field>
   <field action="define" tag="1">Isis_Item</field>
   <loop>
       <display>
          <pft>v1001,'/',v1002,c10,v1/</pft>
       </display>
   </loop>
</do>

```

### `task="mastersort"`

Sorts the records of the master file physically (or generates a sorted copy).

* **`<parm name="db">`**: Database name.
* **`<parm name="key">`**: The PFT expression defining the sort key.
* **`<parm name="keylength">`**: Maximum length of the sort key.

**Example**

```xml
<do task="mastersort">
   <parm name="db">CDS</parm>
   <parm name="key"><pft>v24</pft></parm>
   <parm name="keylength">100</parm>
   <field action="define" tag="1102">Isis_Status</field>

   <display><pft>'Key sort ...'/</pft></display>
   <loop></loop>
   <display><pft>'Lock status = 'v1102/</pft></display>
   <display><pft>'Key sort: CDS sorted.'/</pft></display>
</do>

```

### `task="mfnrange"`

Accesses a range of database records sequentially by MFN.

* **`<parm name="db">`**: Database name.
* **`<parm name="from">`**: Initial MFN.
* **`<parm name="to">`**: Final MFN.
* **`<parm name="count">`**: Max number of records.
* **`<parm name="reverse">`**: Process in reverse MFN order.

**Example**

```xml
<do task="mfnrange">
   <parm name="db">CDS</parm>
   <parm name="from">25</parm>
   <parm name="count">10</parm>
   <loop>
      <display><pft>ALL</pft></display>
   </loop>
</do>

```

### `task="search"`

Retrieves records using a boolean search expression.

* **`<parm name="db">`**: Database name.
* **`<parm name="expression">`**: Search query (e.g., `water * soil`).
* **`<parm name="from">`**: Start from the Nth result.
* **`<parm name="count">`**: Limit results count.
* **`<parm name="reverse">`**: Process results in reverse order (highest MFN first).

**Example**

```xml
<do task="search">
   <parm name="db">CDS</parm>
   <parm name="expression">plants * water</parm>
   <loop>
      <display><pft>mfn/</pft></display>
   </loop>
</do>

```

### `task="update"`

Updates existing records or adds new ones.

* **`<parm name="db">`**: Database name.
* **`<parm name="mfn">`**: Specific MFN to update, or `New` to create one.
* **`<parm name="lockid">`**: User/Session ID for record locking.
* **`<parm name="expire">`**: Lock expiration time in seconds.

**Example**

```xml
<do task="update">
   <parm name="db">CDS</parm>
   <parm name="mfn">New</parm>
   <field action="define" tag="1102">Isis_Status</field>

   <update>
      <field action="replace" tag="20">
         <pft>date</pft>
      </field>
      <write>Unlock</write>
      <display><pft>ALL</pft></display>
   </update>
</do>

```
