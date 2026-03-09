---
title: "Secure Image Viewer (Central show_image.php)"
sidebar_label: Secure Image Viewer
sidebar_position: 3
---

The `show_image.php` script located in the `central/common/` directory is a robust, security-hardened mechanism for displaying digital assets within the ABCD Central administrative interface and the OPAC. Unlike standard file links, this script is designed to serve media located **outside** the web server's public `DOCUMENT_ROOT`, protecting sensitive files from direct exposure.

Recent updates have significantly improved its security posture, making it a "safe than sorry" solution against modern web vulnerabilities.

## Key Security Features

* **Path Traversal Prevention:** The script strictly forbids the use of `..` in URLs and uses PHP's `realpath()` to ensure requested files remain within the authorized base directory.
* **Referrer Validation:** To prevent hotlinking and direct URL manipulation, the script only executes if the request originates from a recognized ABCD `central` or `opac` host.
* **Session-Based Access:** For administrative requests, the script verifies that the user is actively logged into ABCD with a valid profile and permissions.
* **Strict Sanitization:** Input parameters undergo rigorous cleaning; only alphanumeric characters, slashes (`/`), dots (`.`), underscores (`_`), and dashes (`-`) are permitted.
* **MIME Type Whitelisting:** The script only serves files with recognized extensions (e.g., jpg, pdf, mp3, zip) and maps them to their correct Content-Type.

---

## Configuration

To serve files, the script requires a defined **ROOT** directory. This is configured in the `dr_path.def` file located in your database folder:
`.../bases/[database_name]/dr_path.def`.

### The ROOT Parameter

The `ROOT` parameter defines the starting point for media searches. It supports the `%path_database%` variable for portability.

```ini
/* Example 1: Standard images folder */
ROOT=%path_database%nvbsodr/images

/* Example 2: Secure FTP upload folder */
ROOT=%path_database%nvbsodr/ftp_nvbsodr/files

```

:::important Configuration Logic

1. **If `dr_path.def` exists:** The `ROOT` parameter is **mandatory**. If it is missing or empty, the script will terminate with a configuration error.
2. **If `dr_path.def` does not exist:** The script defaults to the database's root folder (`%path_database%[databasename]`).
:::

---

## Usage in PFT (ISIS Formatting Language)

You can call this script within your `.pft` display files to render links or embedded media. The script requires two URL parameters: `image` (the path) and `base` (the database name).

### 1. Simple Download/View Link

This creates a text link that opens the file in the current window.

```pft
if p(v160) then 
    '<tr><td><b>File:</b></td>'
    '<td><a href="/central/common/show_image.php?image='v160'&base=nvbsodr">'v160'</a></td></tr>' 
fi/

```

### 2. Intelligent Media Embedding (PDF vs. Images)

This advanced example detects the file extension to decide whether to use an `<embed>` tag for PDFs or a clickable thumbnail for images.

```pft
'<tr><td style="text-align:center" width="250px">'
(if right(v160,4)='.pdf' then 
    /* PDF View */
    '<a href="/central/common/show_image.php?image='v160'&base=nvbsodr">Show PDF</a>'
    '<embed src="/central/common/show_image.php?image='v160'&base=nvbsodr" width=350 height=300>'
else if p(v160) then 
    /* Image View */
    '<a href="/central/common/show_image.php?image='v160'&base=nvbsodr">'
    '<embed src="/central/common/show_image.php?image='v160'&base=nvbsodr" width=225></a>' 
fi/ /fi/)

/* Default image if field is empty */
(if a(v160) then '<img src="/assets/images/no_image_nl.jpg" width=120>' fi/)
'</td>'

```

---

## Technical Specifications

### Supported File Types

The script includes a comprehensive `switch` block to handle various formats:

* **Images:** jpg, jpeg, gif, png, bmp, tiff.
* **Documents:** pdf, doc, txt, rtf, html, xls, xlsx, ppt.
* **Archives/Multimedia:** zip, exe, mp3, wav, avi, mpeg.

### Security Updates

* **2023-01-04:** Added lowercase extension conversion to ensure compatibility with Linux servers.
* **2026-02-28:** Implemented `realpath` validation to block Path Traversal.
* **2026-03-08:** Added `HTTP_REFERER` checks and enhanced filename sanitization.

Would you like me to generate a specific PFT example for a different database field or explain how to customize the error messages in this script?

Aliás, para liberar as funcionalidades de todos os apps, ative a [Atividade nos apps do Gemini](https://myactivity.google.com/product/gemini).