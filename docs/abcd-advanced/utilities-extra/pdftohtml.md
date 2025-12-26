---
title: pdftohtml Utility
description: Documentation for the PDF to HTML conversion utility distributed with ABCD.
---

# Utility `pdftohtml`

The `pdftohtml` utility is a command-line tool included in some distributions of ABCD. It is not part of the original CISIS suite but is used for converting PDF documents into HTML or XML formats, often to facilitate full-text indexing or browser-based viewing.

It is based on **Xpdf version 3.00** and was originally developed by Gueorgui Ovtcharov and Rainer Dorsch.

## Usage

```bash
pdftohtml [options] <PDF-file> [<html-file> <xml-file>]

```

If the output filenames are not specified, the tool will generate files based on the input filename in the current directory.

## Options

| Option | Description |
| --- | --- |
| **`-f <int>`** | Specifies the **first** page to convert. |
| **`-l <int>`** | Specifies the **last** page to convert. |
| **`-q`** | Quiet mode: do not print any messages or errors. |
| **`-h`** / **`-help`** | Prints usage information. |
| **`-p`** | Exchanges `.pdf` links with `.html` links in the output. |
| **`-c`** | Generates a complex document (includes frames and navigation). |
| **`-i`** | Ignores images (does not extract them). |
| **`-noframes`** | Generates output without frames. |
| **`-stdout`** | Sends the output to standard output (console) instead of a file. |
| **`-zoom <fp>`** | Sets the zoom factor for the document (Default: `1.5`). |
| **`-xml`** | Generates output in **XML** format (useful for post-processing/indexing). |
| **`-hidden`** | Outputs hidden text (useful for extracting text while preserving layout). |
| **`-nomerge`** | Does not merge paragraphs (preserves original line breaks). |
| **`-enc <string>`** | Sets the output text encoding (e.g., `UTF-8`, `ISO-8859-1`). |
| **`-dev <string>`** | Sets the output device for Ghostscript (e.g., `png16m`, `jpeg`). |
| **`-v`** | Prints copyright and version information. |
| **`-opw <string>`** | Owner password (for encrypted PDF files). |
| **`-upw <string>`** | User password (for encrypted PDF files). |

## version Info

* **Version:** 0.39
* **Base:** Xpdf version 3.00
* **Copyright:** 1999-2003 Gueorgui Ovtcharov and Rainer Dorsch; 1996-2004 Glyph & Cog, LLC.
