---
title: Migration from Koha to ABCD
sidebar_label: Koha to ABCD Migration
---

# Manual on How to Migrate Koha Bibliographic Database to ABCD

**Author:** Tuesday Bwalya (Advisor: Prof. PhD. Egbert de Smet)
**Year:** 2014
**Institution:** VLIR / UOS / Universiteit Antwerpen

---

## 1. Requirements

One of the obvious requirements is the **Koha bibliographic database**, which a library wishing to migrate to ABCD must export from its Koha library management system.

The other central requirement for migration to ABCD is the **mx** executable file.
* **MX** stands for *Master/Cross-reference*.
* It is a utility program for ISIS databases that carries out most ISIS database interface functions.
* It executes from the operating system command line to perform various operations (searching, adding, updating, and deleting) using different parameters.

> **Note:** The `mx` utility is included in ABCD (typically in the `cgi-bin` directory) and is one of the essential tools that performs much of the background processing.

---

## 2. Technical Implementation Steps

There are a number of steps that need to be followed to ensure a successful migration.

### Step 1: Preparation of Koha Database

Get your bibliographical records from the Koha database. This can be done by exporting the Koha database to an external media source (such as an external hard disk) due to the potential size of the database.

1.  When exporting the Koha bibliographical database, ensure that you save it as a **MARC export** (with the extension `.mrc`).
2.  Select **MARC** as the format in which to save the database.
3.  You will end up with a file with a `.mrc` extension (e.g., `koha.mrc`).

**Important Note on Encoding:**
The file `koha.mrc` will typically be an ISO file encoded in **UTF-8 (Unicode)**. In this regard, the subfield characters may appear as a **triangle** (▼) subfield delimiter. In ISIS and ABCD, the subfield delimiter is supposed to be a **caret** (`^`). We will address this in Step 4.

### Step 2: Creation of the Working Folder

You need to create a working directory on your computer.

1.  Create a folder on the Desktop (or anywhere accessible) and name it, for example, `migration`.
2.  Copy the `mx.exe` file from your ABCD installation and paste it into this working folder.

**Where to find `mx.exe`:**
Go to your ABCD folder path, typically:
`ABCD > www > cgi-bin`
There you will find `mx.exe` (Windows) or `mx` (Linux).

> **Tip:** If you do not see the `.exe` extension, you may need to disable the "Hide extensions for known file types" option in Windows Folder Options.

3.  Copy your exported `koha.mrc` file into this same working folder.

### Step 3: Execution of MX to Open `koha.mrc`

1.  Open the Command Prompt (CMD).
    * Click Start, type `cmd`, and press Enter.
2.  Navigate to your working folder using the `cd` command.
    ```cmd
    cd Desktop\migration
    ```
3.  Verify the contents by typing `dir`. You should see `mx.exe` and `koha.mrc`.
4.  Execute `mx` to read your Koha file to verify it is accessible and observe the encoding (look for the triangles):
    ```cmd
    mx iso=koha.mrc
    ```

You will likely see records displayed with **triangles** (▼) instead of carets (`^`), confirming the UTF-8 encoding difference. Press `x` to stop the display and exit.

### Step 4: Creation of a Gizmo Database

We need to clean the records by replacing the triangles with carets. To do this, we use **CISIS Gizmo technology**. A Gizmo database acts as a lookup table for string replacement.

We will create a small database with one record containing two fields:
* **Field 1:** The "from" value (Triangle ▼)
* **Field 2:** The "to" value (Caret ^)

Run the following command to create the database named `triangle` from the console input:

```cmd
mx seq=con create=triangle

```

1. After pressing Enter, the system waits for input.
2. Type the pipe character `|` (field separator), paste or type the **Triangle** symbol (▼), then another pipe `|`, and then the **Caret** symbol (`^`).
* *Format:* `|▼|^`


3. Press Enter.
4. Type `x` to exit.

You have now created a Gizmo database that maps the triangle character to the caret character. If you check your folder, you will find `triangle.mst` and `triangle.xrf`.

### Step 5: Replacing Triangles with Carets and Converting UTF-8 to ANSI

We must now perform two conversions simultaneously:

1. Replace triangles with carets (using the `triangle` Gizmo).
2. Convert UTF-8 characters to ANSI (using a character conversion Gizmo, e.g., `gUTF8ans`).

> **Prerequisite:** You need the `gUTF8ans` database. If you do not have it, create it using the content provided in the **Annex** of this document. Save the text as `gUTF8ans.iso` and run `mx iso=gUTF8ans.iso create=gUTF8ans -all now`.

Run the following command to clean the data and create a new database named `marc`:

```cmd
mx iso=koha.mrc gizmo=triangle gizmo=gUTF8ans create=marc now -all

```

* **`iso=koha.mrc`**: Input file.
* **`gizmo=triangle`**: Applies the triangle-to-caret replacement.
* **`gizmo=gUTF8ans`**: Converts encoding from UTF-8 to ANSI.
* **`create=marc`**: Output database name.
* **`now -all`**: Processes all records immediately without pausing.

Verify the result by listing the new database:

```cmd
mx marc

```

You should now see carets (`^`) instead of triangles, and the text should be readable in ANSI.

### Step 6: Creation of an ISO File

Now, export the cleaned `marc` database back to an ISO file to import it into ABCD. We must also ensure that the specific MARC leader fields are preserved by mapping them to tags starting at 3000.

Run the command:

```cmd
mx marc iso=marc.iso outisotag1=3000 now -all

```

* **`outisotag1=3000`**: Tells MX to preserve MARC leader fields (tags usually < 010 or special system fields) and output them with tags shifted to the 3000 range (e.g., field 5 becomes 3005).

You now have a clean file named `marc.iso`.

### Step 7: Creation of a Database in ABCD

1. Log in to ABCD (e.g., user: `abcd`, password: `adm`).
2. Go to **Administration > Create Database**.
3. Define a new database name, for example, `catalog`.
4. Choose **"Create from"** and select an existing **MARC** or **CEP** database structure.
* *Reasoning:* Creating from an existing database inherits the FDT, FST, and PFTs, saving you the work of defining MARC standards from scratch.


5. Click **Continue/Create**. The system will copy the definition files.

### Step 8: Importing the ISO File into ABCD

1. Go to the **Utilities** module of your new `catalog` database.
2. Select **Import ISO with MX**.
3. Browse and select your `marc.iso` file created in Step 6.
4. Set **Operation** to **Create** (since the database is currently empty).
5. Ensure the option regarding **MARC Format** or **isotag1** is checked/enabled (Use `isotag1=3000` logic if the interface allows, or rely on the standard import if the ISO was prepared correctly).
6. Click **Start**.

If successful, the process output will show "Process OK". You can check **Data Entry** to see your imported MFNs.

### Step 9: Creation of Copies and Loan Objects

Imported records are usually bibliographic descriptions ("Titles"). For circulation, you need **Copies** (Items) and **Loan Objects**.

1. In **Utilities**, select **"Add to copies and loan objects from the catalog"** (or *Copies generation*).
2. You must map the fields from your imported MARC data to the ABCD Copies structure.
* **Control Number:** e.g., Tag `001` or `002`.
* **Inventory Number:** Identify which Koha tag held the barcode/inventory number (commonly **952^p** or similar in Koha).
* **Main Library / Location:** Identify the branch tag (e.g., **952^a** or **952^b**).
* **Item Type:** Map the material type (Books, etc.).


3. Click **Update**.

The system will generate records in the `copies` database and link them to the `catalog`.

### Step 10: Indexing the Database

Finally, generate the Inverted File so records can be searched.

1. Go to **Utilities > Inverted File Generation (MX)**.
2. Select **Full Generation**.
3. Click **Start**.

Your Koha database is now successfully migrated to ABCD and searchable in the OPAC.

---

## Annex: UTF8 to ANSI Conversion Table

*Use the content below to create the `gUTF8ans.iso` file mentioned in Step 5.*

```text
00178000000000133000450000100050000000200040000501000030000901100040001201200040
0016021000400020051000500024052001000029101000500039#c280#128#80#hex#128#asc#EUR 
O#Euro Sign#0080##
00193000000000121000450000100050000000200040000501000030000901100040001201200040
0016021000400020050004200024101000500066#c281#129#81#hex#129#asc#fonte desconhec
ida provavelmente Internet#0081##
00228000000000133000450000100050000000200040000501000030000901100040001201200040
0016021000400020051003700024052002800061101000500089#c282#130#82#hex#130#asc#apo
strofe tipografica esquerda baixa#single low-9 quotation mark#0082##
00213000000000133000450000100050000000200040000501000030000901100040001201200040
0016021000400020051001000024052004000034101000500074#c283#131#83#hex#131#asc#fun
cao de#florin (Latin small letter f with hook)#0083##
00224000000000133000450000100050000000200040000501000030000901100040001201200040
0016021000400020051003300024052002800057101000500085#c284#132#84#hex#132#asc#asp
as tipografica esquerda baixa#double low-9 quotation mark#0084##
00190000000000133000450000100050000000200040000501000030000901100040001201200040
0016021000400020051000700024052002000031101000500051#c285#133#85#hex#133#asc#eli 
pse#horizontal ellipsis#0085##
...
[Content truncated for brevity - usually this file contains the mapping for all
Latin-1 characters from UTF-8 multi-byte sequences]

```

