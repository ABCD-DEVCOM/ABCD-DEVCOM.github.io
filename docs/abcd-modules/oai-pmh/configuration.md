---
title: Server Configuration
sidebar_label: Configuration
sidebar_position: 2
---

# Server Configuration

The configuration of the OAI module is code-based. You must edit PHP files located in the `isis-oai-provider/` root folder.

## 1. General Settings (`oai-config.php`)
Rename `oai-config-sample.php` to `oai-config.php` and open it.

### Repository Identity
These fields identify your library to the world.
* **`$repositoryName`**: A human-readable name (e.g., "Central Library Catalog").
* **`$adminEmail`**: The contact email for technical issues.
* **`$baseURL`**: The public URL to the `oai.php` script. **Crucial:** Ensure this is reachable from the internet.

### Technical Limits
* **`$MAXIDS`**: Number of records returned per page (default `100`). High numbers consume more server memory.
* **`$expiration`**: How long (in seconds) a resumption token is valid (default `24 hours`).

## 2. Database Mapping (`oai-databases.php`)
Rename `oai-databases-sample.php` to `oai-databases.php`.
This file tells the system which ABCD databases to expose and how to map them.

**Configuration Array:**
```php
$databases = array(
    'books' => array(           // 1. Set Spec (Public Name)
        'description' => 'Library Books Collection',
        'mapping' => 'marc',    // 2. Mapping File Name
        'database' => 'marc',   // 3. Physical Database Folder Name
        'prefix' => 'oai:my-lib:marc' // 4. Unique ID Prefix
    ),
    'theses' => array(
        'description' => 'University Theses',
        'mapping' => 'dubcore',
        'database' => 'theses',
        'prefix' => 'oai:my-lib:theses'
    )
);

```

* **Set Spec:** The key of the array (e.g., `books`). Harvesters use this to request specific collections.
* **Mapping:** The name of the translation schema (without extension) located in the `map/` folder.
* **Database:** The actual folder name inside `bases/`.
