---
slug: isis-history-and-technical-background
title: Some ISIS-Software History and Technical Background
authors:
  - name: Egbert de Smet
    title: University of Antwerp
    url: https://github.com/ABCD-DEVCOM
tags: [history, architecture, cisis, nosql]
date: 2010-02-01
---

While free and open source software is gaining momentum in library automation, it is still not a trivial event to launch a full-blown integrated library system (ILS), given today's high demands on such library systems.

In this article, we describe the ISIS-software origins of the ABCD software. Many librarians, especially younger ones, have never heard about ISIS, its relevance, and its technological concepts, so we will try to shed some light on this in order for librarians to better judge the meaning of the ABCD software.

**Editor's Note:** *This article was originally published in LIBER QUARTERLY 19 (3/4), February 2010. It serves as the foundational manifesto for the ABCD project.*

---

## The Origins of the ISIS Software

For those who know about ISIS (or, with its full name: **CDS/ISIS**), there is often a partly correct but also partly incorrect association with "old DOS-software", "UNESCO" and "developing countries".

The software indeed has a history of many decades. Its roots go back to the **International Labour Organisation (ILO)** in Geneva which developed an 'Integrated Set of Information Systems' (ISIS) in the early 1960s. This system was meant to run on the mainframe computers of that era.

This system was picked up by **UNESCO** (United Nations Educational, Scientific and Cultural Organization) towards the end of the 1960s to manage their database of projects, consultants and publications. UNESCO further developed the software and named it **CDS/ISIS**: *Computerised Documentation Service / Integrated Set of Information Systems*.

### The Micro-Computer Revolution
In 1985, a version for "mini-computers" (the PDP-11 series of Digital Equipment Corporation) was produced (MINISIS) in cooperation with the Canadian IDRC, but more importantly: a version for the upcoming "micro-computers" (running on MS-DOS) was released: **Micro-CDS/ISIS**.

This version became immensely popular worldwide because:
1.  **It was free:** UNESCO distributed it free of charge to non-profit organizations.
2.  **It was efficient:** It ran remarkably well on the modest hardware of that time (IBM PC/XT/AT).
3.  **It was flexible:** It allowed the management of non-structured, variable-length text data, ideal for bibliographic information.

## Technical Philosophy: The "NoSQL" Precursor

Technologically, the software relies on very specific concepts which are currently being 'reinvented' as **"NoSQL"** databases.

In the relational database world (SQL), databases are sets of two-dimensional tables (Rows and Columns). This structure is rigid: a column must be defined with a fixed type and length. This causes issues for libraries:
* *How long is a title?* It can be 5 characters or 500.
* *How many authors does a book have?* It can be one, none, or twenty.

ISIS solved this decades ago with a different storage architecture:

### 1. The Master File (`.MST`)
Instead of tables, ISIS stores records in a linear file.
* Each record has a unique number: **MFN** (Master File Number).
* Fields are stored with a **Directory** (Tag, Length, Position) followed by the data.
* Fields are **Variable Length**: They only take up the space they need.
* Fields are **Repeatable**: You can have multiple occurrences of the same field (e.g., multiple authors) without creating new tables.

### 2. The Cross-Reference File (`.XRF`)
This is a simple index (Pointer) file. It tells the system exactly where (byte offset) each MFN starts in the Master File, allowing for instant access to any record by its number.

### 3. The Inverted File (`.IFP`)
This is the B*Tree index that makes searching fast.
* It functions like the index at the back of a book.
* It maps **Terms** (Words, Phrases) to the **MFNs** that contain them.
* It is created based on a **FST (Field Selection Table)**, which extracts data from the records using the Formatting Language.

### 4. The Formatting Language (PFT)
ISIS includes a powerful scripting language (Print Format Technology) that can:
* Display data conditionally (e.g., *only show the edition if it exists*).
* Format data (e.g., *convert authors to Uppercase*).
* Generate complex outputs like HTML, XML, or catalog cards.

## Evolution: Windows and the Web

As technology moved from DOS to Windows, UNESCO released **WinISIS**. However, the real challenge was the Internet.

In 1995, during the World Congress on Health Information, **BIREME** (the PAHO/WHO center in Brazil) launched the **ISIS-DLL**, a library that allowed developers to interact with ISIS databases from Windows applications.

From this, **WXIS** (Web eXtended ISIS) was born. WXIS allowed ISIS databases to be queried and updated via a Web Server (CGI), effectively bringing ISIS to the Internet. This technology powers the **BVS (Biblioteca Virtual em Saúde)**, one of the largest networks of health information in the world.

## The Birth of ABCD

Despite these advances, the ISIS community lacked a modern, integrated tool. Users had the *engine* (CISIS/WXIS) but had to build the *car* (the interface) themselves.

In 2007, a consortium of **VLIR/UOS** (Belgium) and **BIREME** (Brazil) started the **ABCD Project**:
* **A**utomatisación de
* **B**ibliotécas y
* **C**entros de
* **D**ocumentación

### Goals of ABCD
1.  **Full Integration:** Combine the cataloging power of ISIS with circulation (loans), acquisitions, and serials management.
2.  **Web-Based:** run entirely in a browser.
3.  **FOSS:** Released as Free and Open Source Software.
4.  **Multilingual:** Designed from the start to support multiple languages.

### Architecture
ABCD uses **Central** (the management interface) and **iAH/EmpWeb** (the public interface). It utilizes the **CISIS** utilities (created by BIREME) to perform high-speed indexing and data manipulation, ensuring that even large databases (millions of records) can be managed on modest servers.

## Conclusion

The release of ABCD brings a modern solution to the thousands of libraries worldwide that still rely on ISIS technology. It proves that the "NoSQL" concepts pioneered by ISIS in the 1960s are still valid and highly efficient for managing unstructured text data in the 21st century.

By combining the proven stability of the ISIS storage engine with modern web technologies (PHP, JavaScript), ABCD offers a powerful, low-cost alternative to commercial Library Systems, empowering libraries in developing countries to manage their information with autonomy.