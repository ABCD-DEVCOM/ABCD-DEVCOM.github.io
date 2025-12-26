---
sidebar_position: 2
title: Instalação
lang-ref: abcd-installation
---

# Pré-requisitos de Instalação

Antes de instalar o ABCD, é essencial garantir que seu servidor atenda aos seguintes pré-requisitos de software.

## Requisitos Obrigatórios

* **Servidor Web:** O ABCD é testado e otimizado para o **Apache Web Server**. É recomendável usar a versão mais recente para minimizar problemas de segurança. A instalação mínima do Apache para o ABCD requer os seguintes módulos:
    * `mod_cgi`: Para permitir a execução de scripts CGI.
    * `mod_rewrite`: Para permitir regras de reescrita no arquivo `.htaccess`.

* **PHP:** A implementação Unicode do ABCD requer **PHP 7.4.x**. O sistema ainda não foi testado no PHP 8. As seguintes extensões do PHP são necessárias:
    * `mbstring`: Suporte para strings multibyte, essencial para a funcionalidade Unicode.
    * `gd` ou `gd2`: Para funções de manipulação de imagem. O nome pode variar dependendo da sua implementação do PHP.

## Requisitos Opcionais (Habilitar conforme a necessidade)

As seguintes extensões e módulos são necessários apenas se você planeja usar funcionalidades específicas do ABCD:

* **Para o Módulo Site:**
    * Extensão PHP `xmlrpc`
    * Extensão PHP `xsl`

* **Para o Cliente Z39.50 (na Catalogação):**
    * Extensão PHP `yaz`: Permite baixar registros de outros catálogos via protocolo Z39.50.

* **Para a "Ponte" com o DSpace:**
    * Extensão PHP `curl`: Usada para baixar registros de repositórios DSpace.

* **Para Autenticação via LDAP:**
    * Extensão PHP `ldap`: Habilita o login de usuários através de um servidor LDAP.

* **Para Documentos Digitais (Biblioteca Digital):**
    * **Apache Tika:** Este kit de ferramentas de análise de conteúdo é usado para extrair texto de documentos. É necessário ter o Java instalado para executar o arquivo `tika-app***.jar`. Você pode baixá-lo em [tika.apache.org/download.html](https://tika.apache.org/download.html).

* **Para Conexão Segura (HTTPS):**
    * Módulo Apache `mod_ssl`: Habilita o uso de certificados SSL e o protocolo `https`.