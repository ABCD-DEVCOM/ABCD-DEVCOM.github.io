---
title: Data Validation
description: Using PFT to validate input data and enforce integrity rules.
---

# Data Validation with PFT

In ABCD and CISIS databases, data integrity is enforced using **Validation Formats**. Unlike standard display formats, these are executed during data entry (when creating or updating a record).

## The Concept

The validation logic works on a simple principle: **"Silence is Success"**.
* If the PFT executes and produces **no output** (empty string), the record is considered **Valid** and gets saved.
* If the PFT produces **any output** (text), that output is treated as an **Error Message**, displayed to the user, and the save operation is blocked.

## Data Entry Mode

When a PFT is executed for validation, the system runs in **Data Entry Mode**. This has specific implications for how subfields and delimiters are handled compared to the standard Proof Mode.

* **Subfields:** In validation, you often need to check specific subfields (e.g., `v10^a`) rather than the whole field.
* **Repetitions:** Validation often iterates through repeatable fields to ensure *every* occurrence meets the criteria.

## Common Validation Scenarios

### 1. Mandatory Fields
To ensure a field (e.g., Tag 10 - Title) is not empty.

```pft
/* If Tag 10 is absent, display error */
if a(v10) then 'Error: Title is mandatory!' fi

```

### 2. Conditional Mandatoriness

A field is required only if another field has a specific value.
*Example:* If "Publication Type" (v20) is "Article", then "Source Journal" (v30) is required.

```pft
if v20 = 'Article' and a(v30) then
   'Error: Source Journal is required for Articles.'
fi

```

### 3. Validating Repeatable Groups

If a field is repeatable (e.g., Authors in Tag 70), you must ensure *all* authors have a valid format. You iterate through them using a repeatable group.

```pft
(
   if p(v70) and size(v70) < 3 then
      'Error: Author name "' v70 '" is too short.' /
   fi
)

```

*Note:* The `/` ensures that if multiple authors are invalid, each error appears on a new line.

### 4. Duplicate Checking

To prevent duplicate records (e.g., ensuring ISBN in Tag 20 is unique).

* **Technique:** Use the `l()` lookup function to see if the term already exists in the inverted file.
* **Constraint:** You must exclude the current record from the check (otherwise, editing an existing record would trigger a "duplicate" error against itself).

```pft
/* v20 is ISBN. "ISBN_" is the prefix in FST */
if p(v20) then
   /* Find MFN of record containing this ISBN */
   proc('a9999~' l('ISBN_' v20) '~'),
   
   /* If found (val > 0) AND it is not the current record (mfn) */
   if val(v9999) > 0 and val(v9999) <> mfn then
      'Error: ISBN ' v20 ' already exists in record ' v9999
   fi
fi

```

### 5. Format/Pattern Validation

Checking if a field follows a specific pattern (e.g., Year must be 4 digits).

```pft
if p(v64) then
   if val(v64) < 1000 or val(v64) > 3000 then
      'Error: Invalid Year ' v64
   fi
fi

```

### 6. Value Lists (Controlled Vocabulary)

Ensuring a field contains one of the allowed values.

```pft
if p(v40) then
   if v40 <> 'ENG' and v40 <> 'SPA' and v40 <> 'POR' then
      'Error: Language ' v40 ' is not valid (Use ENG, SPA, POR).'
   fi
fi

```

*Tip:* For long lists, it is more efficient to use a `ref()` to a thesaurus database or `select` case structure.

## Integration in ABCD

In ABCD, these validation scripts are typically saved as `.val` files in the database directory (e.g., `bases/marc/def/en/marc.val`) or configured in the **Advanced Editing** parameters.
