---
sidebar_position: 2
---

# Guia de Instalação em Linux (Ubuntu/Debian)

[cite_start]Este guia descreve o processo de instalação e configuração do ABCD em um servidor Linux, utilizando como base o Ubuntu 12.04 (ou superior) e o Debian 6 (ou superior)[cite: 8225, 8219].

### Passo 1: Preparação do Servidor

1.  **Conecte-se ao seu servidor** via SSH ou terminal. [cite_start]É recomendável ter permissões de administrador (root ou sudo)[cite: 8217, 8228].

2.  **Atualize os pacotes do sistema:**
    ```bash
    sudo apt-get update
    sudo apt-get upgrade
    ```
    [cite_start][cite: 8236, 8237]

### Passo 2: Instalação das Dependências

1.  [cite_start]**Instale o Apache, PHP e as extensões necessárias** com um único comando[cite: 8239]:
    ```bash
    sudo apt-get install apache2 libapache2-mod-php5 libxml2-dev libapache2-mod-proxy-html libpng12-dev libjpeg62-dev zlib1g-dev libtidy-dev libxslt1-dev curl php5-dev php-pear libyaz-dev php5-gd php5-xmlrpc php5-xsl
    ```

2.  [cite_start]**Instale o Java** (necessário para o EmpWeb e a funcionalidade de Documentos Digitais com Tika)[cite: 8241]:
    ```bash
    sudo apt-get install openjdk-7-jre
    ```

### Passo 3: Instalação do ABCD

1.  [cite_start]**Baixe o pacote de instalação do ABCD** para Linux (`.deb`) do site oficial[cite: 8243, 8244].

2.  [cite_start]**Dê permissões de execução** para o arquivo baixado[cite: 8245]:
    ```bash
    # Para 32 bits
    chmod 777 abcd_1.3t_i386.deb

    # Para 64 bits
    chmod 777 abcd_1.3t_amd64.deb
    ```
    [cite_start][cite: 8246, 8248]

3.  [cite_start]**Instale o pacote ABCD** usando o `dpkg`[cite: 8248]:
    ```bash
    # Para 32 bits
    sudo dpkg -i abcd_1.3t_i386.deb

    # Para 64 bits
    sudo dpkg -i abcd_1.3t_amd64.deb
    ```
    [cite_start][cite: 8251, 8253]

### Passo 4: Configuração do Apache (Virtual Host)

1.  [cite_start]**Crie um arquivo de configuração de Virtual Host** para o ABCD[cite: 8255]:
    ```bash
    sudo nano /etc/apache2/sites-available/abcd
    ```

2.  [cite_start]**Cole o seguinte conteúdo no arquivo.** Lembre-se de substituir `yourabcd.com` pelo domínio ou IP do seu servidor e `serveradmin@domain.com` pelo seu e-mail[cite: 8258, 8260, 8263, 8264]:
    ```apache
    <VirtualHost *>
        ServerAdmin serveradmin@domain.com
        DocumentRoot "/opt/ABCD/www/htdocs"
        <Directory "/opt/ABCD/www/htdocs">
            Options Indexes FollowSymLinks MultiViews
        </Directory>
        ServerName yourabcd.com
        DirectoryIndex index.htm index.php homepage.htm
        ScriptAlias /cgi-bin/ "/opt/ABCD/www/cgi-bin/"
        <Directory "/opt/ABCD/www/cgi-bin/">
            AllowOverride None
            Options None
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
    ```

3.  [cite_start]**Habilite o novo site** criando um link simbólico[cite: 8274]:
    ```bash
    sudo ln -s /etc/apache2/sites-available/abcd /etc/apache2/sites-enabled/
    ```

4.  [cite_start]**Reinicie o serviço do Apache** para aplicar as mudanças[cite: 8282]:
    ```bash
    sudo /etc/init.d/apache2 restart
    ```

Sua instalação do ABCD agora deve estar acessível através do endereço que você configurou.