---
sidebar_position: 1
---

# Installation Prerequisites

Before installing ABCD, it is essential to ensure that your server meets the following software prerequisites.

## Required requirements

* **Web server:** ABCD is tested and optimized for ** Apache Web Server **.It is recommended to use the latest version to minimize security problems.ABCD Apache minimum installation requires the following modules:
    * `mod_cgi`: to allow the execution of CGI scripts.
    * `mod_rewrite`: to allow rewriting rules in the` .htaccess` file.

* **PHP:** A implementação Unicode do ABCD requer **PHP 7.4.x**. O sistema ainda não foi testado no PHP 8. As seguintes extensões do PHP são necessárias:
    * `mbstring`: Suporte para strings multibyte, essencial para a funcionalidade Unicode.
    * `gd` ou `gd2`: Para funções de manipulação de imagem. O nome pode variar dependendo da sua implementação do PHP.

## Optional Requirements (Enable as needed)

The following extensions and modules are necessary only if you plan to use specific ABCD features:

* **For the Site Module:**
    * PHP extension `xmlrpc`
    * PHP extension `xsl`

* **To update the system by the ABCD interface itself:**
    * PHP extension `zip`

* **PFor Customer Z39.50 (in cataloging):**
    * PHP extension `yaz`: Permite baixar registros de outros catálogos via protocolo Z39.50.

* **For the "bridge" with the dspace:**
    * PHP extension `curl`: Used to download DSPACE repositories records.

* **For LDAP Authentication:**
    * PHP Extension `ldap`: enables user login through an LDAP server.

* **For digital documents (Digital Library):**
    * **Apache Tika:** ESte Content Analysis Tool Kit is used to extract document text.You need to have the java installed to run the `tika-app *** file. Jar`.You can download it at [tika.apache.org/download.html ce(https://tika.apache.org/download.html).

* **For safe connection (https):**
    * Apache module `mod_ssl`: enables the use of SSL certificates and the` https` protocol.