---
sidebar_custom_props:
  myEmoji: 🖥️
slug: /data-models/index
sidebar_position: 1
---

# CISIS database in ABCD


# Database structure

All files of the CISIS database used by ABCD are contained in a single directory. Subdirectories are present for specific goals and to address language dependencies.

A raw approach to the database consists of the following components
## Database definition files
- **Field Definition Table (FDT)**: Defines the fields of the database records and the characteristics (types,...) of these fields.
- **Data Entry Worksheets**: Screen layouts used to create/edit records in the database
- **Display Formats (PFT)**: Screen/file layouts to show the content of records resulting from browsing the records or as result from a search.
- **Field Selection Tables (FST)**: Defines the fields to be searchable through inverted files and sorting techniques.

## Master file
The Master file (`.MST`) contains all the records of a given data base, each record consisting of a set of variable length fields. Each record is identified by an automatically assigned unique number, called the Master File Number or MFN.

Fast access to each master file record is enabled by the *Cross-Reference* (`.XRF`) file, which can be seen as a *first-order* normal index on the records in the database.

## Inverted file
Records can be retrieved by `MFN`. Additional fast retrieval is enabled by the inverted file. All values specified by a *Field Selection Table* (which uses the Formatting language), are included into a B-tree *Inverted File*, which can be seen as a *dictionary* of terms with the exact *address* (record, field tag, occurrence, position within occurrence) attached to them.

CDS/ISIS uses a single Inverted file for each particular database. Depending on its depth the file is physically split in several components (with node files `.N01`/`.N02` and leave files `.L01`/`L02`)


# Record structure

A record is identified by the `MFN`. 
- A record consists of (variable length) fields.
- A field is identified by a *tag*: a unique integer identifier.\\ Examples 12, 69, 100, 196, 980.
- A field may be split into (variable length) subfields.
- A subfield is identified by a subfield-id: a 2-character code preceding and identifying a subfield within a field. It consists of the character `^` (not sign) followed by an alphabetic or numeric character.\\ Examples: `^a`, `^c`.

Fields can be repeatable and subfields within a field can be repeatable too.

Addressing the fields (by tag), subfields (by subfield-id) and occurrence (of a repeatable entity) is done by a field-selector.


# Inverted File structure

Data files (mst and xrf) only allow retrieval of records sequentially by MFN number. As other forms of access to information are required, for example, authors, countries, subjects, etc., it is necessary to have an additional structure that allows, given a keyword or a search formula, to locate the records that contain the requested terms . This structure is what under Cds / isis is called Inverted Lists .

The inverted file of the CDS / Isis structures is actually made up of 6 physical files, five of which contain the dictionary search terms (organized as a B * tree ) and the sixth contains the list of pointers associated with each term.

In order to optimize disk storage, two separate B * trees are maintained: one for terms of up to 30 characters (stored in the .N = 01 and .L01 files) and one for terms of more than 30 and up to 60 characters (stored in .N02 and .L02 files). The .CNT file contains control fields for both trees B *). In each file in the B * tree, the .N0x file contains the tree nodes and the .L0x file contains the leaves. The records of the sheets point to the place where the pointers that contain the information are located to locate the records (postings) in the database. This file is identified by the extension .IFP. The physical relationship between these files can be represented as follows:

center

The physical relationship in the six files that make up the inverted list is given by a pointer, which represents the relative position of the record that is being pointed to. A relative address is the ordinal number of the record in a given file (for example, the first record is record 1, the second is record 2, and so on). The CNT file points to the .N0x file; the .N0x file points to L0x and the .L0x file points to .IFP. Since the .IFP is a file whose records are not necessarily the same length, the pointer from .L0x to .IFP has two components: the block number and the offset within the block, each expressed as an integer.

## File format .IFP

The `.IFP` file contains the list of pointers (postings) for each term in the dictionary. Each pointer consists of 4 elements to identify the record from which the key is generated:

```

   MFN Registry Mfn
   TAG Field identifier
   OCC Occurrence number of the field from which the key is extracted
   CNT Sequential number of the term in the field

```

Each term will have as many pointers as fields have referred to it in the database. The list of pointers is stored in ascending sequence of `MFN / TAG / OCC / CNT`. When the inverted list is loaded by a **Complete Build** process, each list is made up of one or more adjacent segments. As updates are made, additional segments can be created when new pointers need to be added. In this case, a new segment is created by linking it to the other segments so that the `MFN / TAG / OCC / SEQ` sequence is maintained.

Every time a division of this type occurs, the pointers of the segment where the new pointer should be inserted are distributed evenly between this segment and the newly created one. New segments are always created at the end of the file.

The keys are generated according to the specifications contained in a so-called **Field Extraction Table** (`.fst`) which contains specifies how the access points to the database will be generated for each field. There are 8 indexing techniques. different for obtaining the keys, in such a way as to satisfy all the information retrieval requirements to be applied on a database.

Inverted lists are normally updated in the data entry procedure. However, there are situations that make it necessary to regenerate these files (index corruption, loading large batches of information in the database, changes in indexing strategies). For this reason, it is necessary to activate special processes for the maintenance of the indexes, to process the entire database and build the inverted lists again. This process is called Complete generation of the inverted list and in a schematic way it consists of the following steps:

### Generation of the unclassified key file

In this first step, each of the records from the database is read and the indexing techniques specified in the Field Extraction Table (.fst) are applied to each field. As a result of this process, two files are generated: .LN1 with terms less than 30 characters; and .LN2 with terms greater than 30 characters. Both files (.LN1 and .LN2) are TXT files so they can be viewed by a text editor.

Example of the .LN1 file generated for Mfn's 1-5 of the CDS database

```

      1 24 1 1 TECHNIQUES
      1 24 1 8 INDIVIDUAL
      1 24 1 9 PLANTS
      2 70 1 1 BOSIAN, G.
      2 24 1 2 CONTROLLED
      2 24 1 3 CLIMATE
      2 24 1 6 PLANT
      2 24 1 7 CHAMBER
      2 24 1 10 INFLUENCE
      3 70 1 1 BOSIAN, G.
      3 24 1 1 CONTROL
      3 24 1 3 CONDITIONS
      3 24 1 6 PLANT
      3 24 1 7 CHAMBER
      3 24 1 8 FULLY
      3 24 1 9 AUTOMATIC
      3 24 1 10 REGULATION
      3 24 1 12 WIND
      3 24 1 13 VELOCITY
      3 24 1 16 RELATIVE
      3 24 1 17 HUMIDITY
      3 24 1 19 CONFORM
      3 24 1 22 FIELD
      3 24 1 23 CONDITIONS
      3 69 1 2 MOISTURE
      3 69 1 4 WIND
      3 69 1 6 ECOSYSTEMS
      4 70 1 2 WENT, FW
      4 24 1 2 ELECTRIC 4 2
      4 1 3 HYGROMETER
      4 24 1 4 APPARATUS
      4 24 1 6 MEASURING
      4 24 1 7 WATER
      4 24 1 8 VAPOR
      4 24 1 9 LOSS
      4 24 1 11 PLANTS
      4 24 1 14 FIELD
      4 69 1 3 MOISTURE
      5 70 1 1 GALE, J.
      5 24 1 1 ANTI
      5 24 1 5 RESEARCH
      5 24 1 6 TOOL
      5 24 1 9 STUDY
      5 24 1 12 EFFECTS
      5 24 1 14 WATER
      5 24 1 15 STRESS
      5 24 1 17 PLANT
      5 24 1 18 BEHAVIOR

```

Example of the .LN2 file generated for Mfn's 1-5 of the CDS database

```

      1 70 1 1 MAGALHAES, AC
      1 70 1 2 FRANCO, CM
      1 24 1 4 MEASUREMENT
      1 24 1 6 TRANSPIRATION
      1 69 1 1 PLANT PHYSIOLOGY
      1 69 1 2 PLANT TRANSPIRATION
      1 69 1 3 MEASUREMENT AND INSTRUMENTS
      2 24 1 12 ASSIMILATION
      2 24 1 14 TRANSPIRATION
      2 69 1 1 PLANT EVAPOTRANSPIRATION
      3 24 1 14 TEMPERATURE
      3 24 1 21 MICROCLIMATIC
      3 69 1 1 PLANT PHYSIOLOGY
      3 69 1 3 TEMPERATURE
      3 69 1 5 MEASUREMENT AND INSTRUMENTS
      4 70 1 1 GRIEVE, BJ
      4 69 1 1 HYGROMETERS
      4 69 1 2 PLANT TRANSPIRATION
      4 69 1 4 WATER BALANCE
      5 70 1 2 POLJAKOFF-MAYBER, A.
      5 24 1 2 TRANSPIRANTS
      5 69 1 1 PLANT PHYSIOLOGY
      5 69 1 2 SOIL MOISTURE
      5 69 1 3 PLANT TRANSPIRATION
      5 69 1 4 EVAPOTRANSPIRATION
      5 69 1 5 MEASUREMENT AND INSTRUMENTS

```

The first four columns contain the information that will give origin to the pointer of the .IFP file. The values ​​are read from: MFN TAG OCC SEQ. The output is sorted by MFN as it comes from the sequential reading of the master file.

### Classification of keys

As the inverted list is presented in alphabetical order of the keys, the second step consists of ordering the keys alphabetically. As a result, the .LK1 and .LK2 files are obtained, which contain the same keys as .LN1 and .LN2, only ordered in ascending order by the key.

Example of the .Lk1 file generated for Mfn's 1-5 of the CDS database

```

      5 24 1 1 ANTI
      4 24 1 4 APPARATUS
      3 24 1 9 AUTOMATIC
      5 24 1 18 BEHAVIOR
      2 70 1 1 BOSIAN, G.
      3 70 1 1 BOSIAN, G.
      2 24 1 7 CHAMBER
      3 24 1 7 CHAMBER
      2 24 1 3 CLIMATE
      3 24 1 3 CONDITIONS
      3 24 1 23 CONDITIONS
      3 24 1 19 CONFORM
      3 24 1 1 CONTROL
      2 24 1 2 CONTROLLED
      3 69 1 6 ECOSYSTEMS
      5 24 1 12 EFFECTS
      4 24 1 2 ELECTRIC
      3 24 1 22 FIELD
      4 24 1 14 FIELD
      3 24 1 8 FULLY
      5 70 1 1 GALE, J.
      3 24 1 17 HUMIDITY
      4 24 1 3 HYGROMETER
      1 24 1 8 INDIVIDUAL
      2 24 1 10 INFLUENCE
      4 24 1 9 LOSS
      4 24 1 6 MEASURING
      3 69 1 2 MOISTURE
      4 69 1 3 MOISTURE
      2 24 1 6 PLANT
      3 24 1 6 PLANT
      5 24 1 17 PLANT
      1 24 1 9 PLANTS
      4 24 1 11 PLANTS
      3 24 1 10 REGULATION
      3 24 1 16 RELATIVE
      5 24 1 5 RESEARCH
      5 24 1 15 STRESS
      5 24 1 9 STUDY
      1 24 1 1 TECHNIQUES
      5 24 1 6 TOOL
      4 24 1 8 VAPOR
      3 24 1 13 VELOCITY
      4 24 1 7 WATER
      5 24 1 14 WATER
      4 70 1 2 WENT, FW
      3 24 1 12 WIND
      3 69 1 4 WIND

```

Example of the .LK2 file generated for Mfn's 1-5 of the CDS database

```

      2 24 1 12 ASSIMILATION
      5 69 1 4 EVAPOTRANSPIRATION
      1 70 1 2 FRANCO, CM
      4 70 1 1 GRIEVE, BJ
      4 69 1 1 HYGROMETERS
      1 70 1 1 MAGALHAES, AC
      1 24 1 4 MEASUREMENT
      1 69 1 3 MEASUREMENT AND INSTRUMENTS
      3 69 1 5 MEASUREMENT AND INSTRUMENTS
      5 69 1 5 MEASUREMENT AND INSTRUMENTS
      3 24 1 21 MICROCLIMATIC
      2 69 1 1 PLANT EVAPOTRANSPIRATION
      1 69 1 1 PLANT PHYSIOLOGY
      3 69 1 1 PLANT PHYSIOLOGY
      5 69 1 1 PLANT PHYSIOLOGY
      1 69 1 2 PLANT TRANSPIRATION
      4 69 1 2 PLANT TRANSPIRATION
      5 69 1 3 PLANT TRANSPIRATION
      5 70 1 2 POLJAKOFF-MAYBER, A.
      5 69 1 2 SOIL MOISTURE
      3 24 1 14 TEMPERATURE
      3 69 1 3 TEMPERATURE
      5 24 1 2 TRANSPIRANTS
      1 24 1 6 TRANSPIRATION
      2 24 1 14 TRANSPIRATION
      4 69 1 4 WATER BALANCE

```

The first four columns contain the information that will give origin to the pointer of the .IFP file. The values ​​are read from: MFN TAG OCC SEQ. The output is sorted by KEY.

Note: These examples and graphics were produced with CISIS version 10-30 which supports short keys of up to 10 characters and long keys of up to 30 characters. The standard version of ABCD works with CISIS 16-60 that works with short keys of up to 16 characters and long keys of up to 60 characters 
### Note for wxis
When retrieving a list of indexes by wxis the values are returned in records like

```

   ^i1^m6^t1^o1^c1    (MFN / TAG / OCC / CNT)
   ^i1^m2^t1^o1^c1
   ^i1^m1^t1^o1^c1

```

Values are valid for indexing technique without `/m`.

ANSI databases indexed with `/m` return **`valid`** information\\
ANSI databases indexed without `/m` return **`valid`** information\\
Unicode databases indexed with `/m` return **`invalid`** information (`^o0^c0`)\\
Unicode databases indexed without `/m` return **`valid`** information



# ABCD database versions
The [CISIS](https///wiki.bireme.org/en/index.php/CISIS) documentation defines several versions:
- **Standard (10/30)** Master files (.mst) with records up to 32 Kbytes in size Short keys up to 10 characters. Long keys ranging from 11 to 30 characters long.
- **Long keys (16/60)** Master files (.mst) with records up to 32 Kbytes in size Short keys up to 16 characters. Long keys from 17 to 60 characters long.
- **LIND (16/60)** Like long keys version, except for resources such as field restriction search, occurrence and proximity search, all of them put aside in order to increase search performance and inverted file size. The extensions to some files that comprises the inverted architecture have been modified to make it easier its identification.
- **FFI (16/60)** Like LIND version, except for the master file control record whose structure have been changed to increase the record size up to 1 MB long, making it incompatible with whatever version of CDS/ISIS up to date.
 
FIXME definition Big Isis
- **BIGISIS** Master files (.mst) with records up to 1 MB in size Short keys? Long keys up to 512 characters.

Currently available versions:

| For Linux                      ||For Windows                   ||
|---|---|---|---|
| Character set  | CISIS version  | Character set  | CISIS version  |
| ANSI           | 16-60          | ANSI           | 16-60          |
| ANSI           | bigisis        | ANSI           | bigisis        |
| UTF-8          | 16-60          | UTF-8          | 16-60          |
| UTF-8          | bigisis        | UTF-8          | bigisis        |


Following version non longer supported by ABCD

| Character set  | CISIS version  | Character set  | CISIS version  |
---|---|---|---|
| ANSI           | -              | ANSI           | ffi            |
| UTF-8          | -              | UTF-8          | ffi            |


# Alphabetic characters table (actab)

This table defines the character codes of all alphabetic characters. It is used each time CDS/ISIS needs to know whether a given character is alphabetic (e.g. when performing word indexing using indexing technique 4, or validating alphabetic fields).\\
A given text character whose code is stored in this table will be considered an alphabetic character.

## Syntax actab for ANSI/ISO-8859-1

The standard table supplied by UNESCO is given below. Note 32 decimal ANSI codes per line

```

065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 097 098 099 100 101 102
103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 128 129 130 131 132 133 134 135 136 137 138 139
140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 160 161 162 163 164 165
```

Any ANSI code omitted from this table will be considered non-alphabetic.

:::note
Keep the table format: 32 ANSI codes per line
:::

## Syntax actab for UTF-8
- Each line contains the decimal Unicode of a valid character in 1, 2, 3 or 4 values separated by a space or tab.
- Optionally followed by a hash mark (`#`) with comment.
- One assignment per line
- It is mandatory to fill in ascending order
- Empty lines and lines starting with `#` are considered comment and ignored
Excerpt from an actual `actab` with ~1500 lines

```

# 999 This isisac.tab for UTF-8 is INVALID for ISO databases
# One assignment per line

065		# A
066		# B

090		# Z
095    		# _
097		# a

195 128		# À A grave
195 129		# Á A acute

225 141 169	# ETHIOPIC DIGIT ONE	፩
225 141 170	# ETHIOPIC DIGIT TWO	፪

```

## Location in ABCD
By default it is placed in the root of the base folder and referenced in the `par/<dbn>.par` file. If you want to use a specific table for a database, place the table in the data folder of the database and modify the `<dbn>.par` file to indicate the new path. 

```

www/<bases>/isisac.tab                    # default table
www/<bases>/<dbn>/data /isisac.tab        # database specific table
www/<bases>/par/<dbn>.par                 # reference to the table
```

## Details
### Link for decimal UTF-8
[Unicode to decimal converter](https///onlineunicodetools.com/convert-unicode-to-decimal)

### Usage in ABCD
The default table in the root of the databases folder has content:
```

048 049 050 051 052 053 054 055 056 057 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086
087 088 089 090 097 098 099 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 192 193
194 195 196 197 199 200 201 202 203 204 205 206 207 209 210 211 212 213 214 216 217 218 219 220 221 224 225 226 227 228 229 231
232 233 234 235 236 237 238 239 241 242 243 244 245 246 248 249 250 251 252 253 255

```

In this particular table we have included the numbers from 0 to 9 (codes 048 to 057) because it is in our interest to index as words those cases of titles or other phrases that contain numerical values ​​such as dates and other references. This table includes also many letters from the Unicode Latin-1 Supplement range.

See the [full ANSI table](/docs/3.1/abcd-advanced/cisis-utilities/ansi-table) for the all characters and corresponding ANSI codes.

If you want to include other symbols in Technique 4 or 8 indexing, just get your ANSI code and insert it in the place corresponding to your sequence.\\ 
If you do not want the numbers to be included in the indexing by techniques 4 or 8, eliminate the codes 048 to 057.

## Upper Case Conversion Table (uctab / isisuc.tab)

The **uctab** (upper case table) is used to convert database text (as stored in the database) to upper case. It is one of the most important and frequently underestimated resources in CDS/ISIS and ABCD.

One of the vital characteristics of the information retrieval process is its transparency regarding the presence of accented characters and the use of upper or lower case. The system must be able to locate the information regardless of whether the user typed the exact spelling or not.

To achieve this goal, the keys in the Inverted File (index) are stored in uppercase, and all search expressions entered by the user are automatically converted to uppercase before the search is executed.

### Why is Standardization Necessary?
Identical concepts can be entered into the database in various ways. For example:
* População
* população
* POPULAÇÃO

For these three variations to constitute a **single entry** in the search index, they must undergo a standardization process, resulting in a single access key (e.g., `POPULACAO`).

This conversion is guided by the `isisuc.tab` table. During indexing, the system reads the extraction commands in the FST (such as `mhu`, `mpu`, `mdu`) and refers to the table to convert the characters. During a search, the system does the same with the term entered by the user, ensuring the searched term matches the key in the index.

### Syntax for ANSI/ISO-8859-1

The ANSI/ISO-8859-1 table is a fixed matrix map containing **exactly 256 values** (codes from 000 to 255). 
The position of the value in the table represents the original character, and the number written in that position represents the character it should be converted to.

**Practical Example:**
The lowercase letter **a** occupies the (decimal) position 097 in the ASCII table.
In the `isisuc.tab` file, if we go to the 97th position, we will find the value **065**. 
Code 065 corresponds to the uppercase letter **A**. Thus, the system knows that "a" converts to "A".

### The Issue with Special Characters (Ñ, Ç, and Accents)
Due to the strict limit of 256 positions, **you do not add or remove positions from the file**. You only change the mapping of one code to another.

Historically, many standard tables are configured to "clean" accents by mapping accented characters to their unaccented versions:
* `ñ` (position 241) is converted to `N` (value 078).
* `ç` (position 231) is converted to `C` (value 067).
* `á` (position 225) is converted to `A` (value 065).

If users from Hispanic or Lusophone countries want the **Ñ** and **Ç** to be indexed as independent letters and retain their spelling in the index, you simply alter the mapping value in their respective positions:
* Go to position **241** (which represents `ñ`) and change the value from `078` to **`209`** (which is the ANSI code for uppercase `Ñ`).
* Go to position **231** (which represents `ç`) and change the value from `067` to **`199`** (which is the ANSI code for uppercase `Ç`).

Below is an example of the file using the UNESCO standard, which preserves the strict structure of 8 rows and 32 columns. Note that line breaks and spaces must be strictly maintained; otherwise, a fatal error will occur during the inverted file generation.

```text
000 001 002 003 004 005 006 007 008 009 010 011 012 013 014 015 016 017 018 019 020 021 022 023 024 025 026 027 028 028 030 031
032 033 034 035 036 037 038 039 040 041 042 043 044 045 046 047 048 049 050 051 052 053 054 055 056 057 058 059 060 061 062 063
064 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 091 092 093 094 095
096 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 123 124 125 126 127
067 085 069 065 065 065 065 067 069 069 069 073 073 073 065 065 069 069 069 079 079 079 085 085 089 079 085 155 156 157 158 159
065 073 079 085 078 078 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 065 065 085 184 185 186 187 188 189 190 191
192 193 194 195 196 197 065 065 200 201 202 203 204 205 206 207 079 068 069 069 069 073 073 073 073 217 218 219 220 221 222 223
079 225 079 079 079 079 230 231 232 085 085 085 089 089 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255
```
*(Note: The highlighted numbers in this block determine the accentuation behavior in your database. Edit them according to your library's phonetic policies).*

### Syntax for UTF-8

The configuration for Unicode (UTF-8) databases is much more user-friendly. It does not require a strict positional matrix but rather a direct declaration format:
* Each line contains: `decimal value lowercase = decimal value uppercase`
* Optionally followed by a hash mark (`#`) and a comment.
* It is mandatory to fill it in ascending order.

Example of explicit mapping (excerpt from the `isisuc_utf8.tab` file):

```text
# One assignment per line, in ascending order

097=065			# a -> A
098=066			# b -> B
...
122=090			# z -> Z

195 128=065		# À	-> Converts to uppercase A (without accent)
195 129=065		# Á	-> Converts to uppercase A (without accent)

195 164=195 132 # ä -> Ä (Keeps the umlaut)
```

### Location in ABCD
By default, the table files are located in the root of the `bases` folder and are applied globally to all databases referenced by the `par/<dbn>.par` files. If you want to use a specific table for only one database (e.g., a database with an indigenous language indexing policy), place the table inside the `data` folder of that database and modify the respective `.par` file to indicate the new path.

```text
www/<bases>/isisuc.tab                    # default ANSI table
www/<bases>/isisuc_utf8.tab               # default UTF-8 table
www/<bases>/<dbn>/data/isisuc.tab         # database-specific ANSI table
www/<bases>/<dbn>/data/isisuc_utf8.tab    # database-specific UTF-8 table
www/<bases>/par/<dbn>.par                 # file that points to the tables
```

:::warning Important Post-Editing Step
If you decide to change the mapping behavior of a character (for example, making `Ç` index as `Ç` instead of `C`), you **must** run the **Full Inverted File Generation** utility on your database immediately after saving the `isisuc.tab` file. This ensures that the old index keys are recreated using the new conversion rules. If you skip this step, search results will be inconsistent!
:::



## Details
### Link for decimal UTF-8
[Unicode to decimal converter](https://onlineunicodetools.com/convert-unicode-to-decimal)

### Usage in ABCD

The default table for ANSI/ISO-8859-1 in the root of the databases folder has content:
```

000 001 002 003 004 005 006 007 008 009 010 011 012 013 014 015 016 017 018 019 020 021 022 023 024 025 026 027 028 029 030 031
032 033 034 035 036 037 038 039 040 041 042 043 044 045 046 047 048 049 050 051 052 053 054 055 056 057 058 059 060 061 062 063
064 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 091 092 093 094 095
096 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 123 124 125 126 127
128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159
160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191
065 065 065 065 065 065 069 067 069 069 069 069 073 073 073 073 208 078 079 079 079 079 079 215 216 085 085 085 085 089 222 223
065 065 065 065 065 065 069 067 069 069 069 069 073 073 073 073 240 078 079 079 079 079 079 247 248 085 085 085 085 089 254 089

```

See the [full ANSI table](/docs/3.1/abcd-advanced/cisis-utilities/ansi-table) for the all characters and corresponding ANSI codes.

The same table with captions. Th first line is the decimal number, the second line is value, the third line is the result.\\
However for the table used by ABCD: 
:::note
Keep the table format: 32 ANSI codes per line
:::
\\ 

```

000 001 002 003 004 005 006 007 008 009 010 011 012 013 014 015 016 017 018 019 020 021 022 023 024 025 026 027 028 029 030 031
000 001 002 003 004 005 006 007 008 009 010 011 012 013 014 015 016 017 018 019 020 021 022 023 024 025 026 027 028 029 030 031
    Codes 000 --> 031 are controls characters (including CR,LF,HT, VT, BS, BELL). They are copied as-is.

032 033 034 035 036 037 038 039 040 041 042 043 044 045 046 047 048 049 050 051 052 053 054 055 056 057 058 059 060 061 062 063
032 033 034 035 036 037 038 039 040 041 042 043 044 045 046 047 048 049 050 051 052 053 054 055 056 057 058 059 060 061 062 063
     !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /   0   1   2   3   4   5   6   7   8   9   :   ;   <   =   >   ?

064 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 091 092 093 094 095
064 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 091 092 093 094 095
 @   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z   [   \   ]   ^   _

096 097 098 099 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127
096 065 066 067 068 069 070 071 072 073 074 075 076 077 078 079 080 081 082 083 084 085 086 087 088 089 090 123 124 125 126 127
 `  a>A b>B c>C d>D e>E f>F g>G h>H i>I j>J k>K l>L m>M n>N o>O p>P q>Q r>R s>S t>T u>U v>V w>W x>X y>Y z>Z  {   |   }   ~

128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159
128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159
 €       ‚   ƒ   „   …   †   ‡   ˆ   ‰   Š   ‹   Œ       Ž           ‘   ’   “   ”   •   –   —   ˜   ™   š   ›   œ       ž   Ÿ
   
160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191
160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191
     ¡   ¢   £   ¤   ¥   ¦   §   ¨   ©   ª   «   ¬       ®   ¯   °   ±   ²   ³   ´   µ   ¶   ·   ¸   ¹   º   »   ¼   ½   ¾   ¿

192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 
065 065 065 065 065 065 069 067 069 069 069 069 073 073 073 073 208 078 079 079 079 079 079 215 216 085 085 085 085 089 222 223
À>A Á>A Â>A Ã>A Ä>A Å>A Æ>E Ç>C È>E É>E Ê>E Ë>E Ì>I Í>I Î>I Ï>I  Ð  Ñ>N Ò>O Ó>O Ô>O Õ>O Ö>O  ×   Ø  Ù>U Ú>U Û>U Ü>U Ý>Y  Þ   ß

224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255
065 065 065 065 065 065 069 067 069 069 069 069 073 073 073 073 240 078 079 079 079 079 079 247 248 085 085 085 085 089 254 089
à>A á>A â>A ã>A ä>A å>A æ>E ç>C è>E é>E ê>E ë>E ì>I í>I î>I ï>I  ð  ñ>N ò>O ó>O ô>O õ>O ö>O  ÷   ø  ù>U ú>U û>U ü>U ý>Y  þ  ÿ>Y

```

:::note
Use this annotated example only for your convenience:
:::
\\ 

:::note
* Other requirements may alter this table (YMMV)
:::
\\ 

:::note
* Keep the table format: 32 ANSI codes per line
:::


