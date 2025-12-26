---
title: Apache Tika Utility
description: Technical documentation for the text extraction engine used in ABCD Digital Libraries.
---

# Apache Tika Utility

**Apache Tika** is a toolkit from the Apache Software Foundation that detects and extracts metadata and text from over a thousand different file types (such as PPT, XLS, and PDF).

In the context of ABCD, Tika is the engine that powers the **Full Text Indexing** capabilities of the Digital Library module (e.g., DubCore database). It is not part of the original CISIS suite but is distributed as an external Java dependency (`tika-app.jar`).

## Role in ABCD

Unlike standard bibliographic databases where data is typed manually, Digital Libraries (repositories) require the system to "read" the content of uploaded documents.

* **Extraction:** When a file is uploaded via the **Batch Import** utility, ABCD executes a system call to the Tika JAR file.
* **Conversion:** Tika reads the binary format (PDF, Word, etc.) and converts it into a standard HTML or text stream.
* **Storage:** This extracted text is injected into **Tag 99** (Text Word) of the Dublin Core record.
* **Indexing:** Finally, the WXIS engine indexes this content, making the full document searchable via the OPAC.

## Prerequisites

Since Tika is a Java application, the server running ABCD must have:
1.  **Java Runtime Environment (JRE)** installed and accessible via the system `PATH`.
2.  The `tika-app.jar` file located in the configured utilities folder (often `cgi-bin` or `central/dataentry/wxis`).
3.  Correct permissions for the web server user (`www-data` or `IUSR`) to execute Java.

## Usage (Command Line)

Although ABCD handles the execution automatically during imports, administrators can use Tika manually for testing or debugging.

**Syntax:**
```bash
java -jar tika-app.jar [options] [file...]

```

### Common Options

Based on Tika version 2.1.0+:

| Option | Description |
| --- | --- |
| **`-x`** or **`--xml`** | Output XHTML content (Default). Preserves some structure. |
| **`-h`** or **`--html`** | Output HTML content. |
| **`-t`** or **`--text`** | Output plain text content. Useful for pure indexing without markup. |
| **`-m`** or **`--metadata`** | Extracts only metadata (Author, Creation Date, etc.). |
| **`-l`** or **`--language`** | Detects the language of the file. |
| **`--gui`** | Starts the Apache Tika GUI (requires graphical environment). |
| **`--fork`** | Uses "Fork Mode" for out-of-process extraction (safer for batch stability). |

### Example: Manual Extraction

To test if Tika is working correctly on your server, try extracting text from a sample PDF:

```bash
java -jar tika-app.jar -t sample_document.pdf

```

*If this command outputs the text of the PDF to the console, your Java environment is correctly set up.*

## Configuration in ABCD

To enable Tika integration, you must configure the path in the central configuration file (`config.php` or `dr_path.def`).

* **`IMPORTPDF=Y`**: Enables the import toolbar icon.
* **Collection Path**: Defines where physical files are stored.

## Troubleshooting

* **"Java command not found"**: Ensure JRE is installed and added to the environment variables.
* **Slow Import**: On Linux, starting the JVM for every file can be slow. Using the `--fork` option or running Tika in server mode (if supported by the script) can improve performance.
* **Memory Errors**: Large PDF files may require increasing the Java heap size (e.g., `java -Xmx1g -jar ...`).

## References

* **Official Site:** [tika.apache.org](https://tika.apache.org/)
* **ABCD Module:** [Dublin Core Repository](https://www.google.com/search?q=../modules/dublincore)
