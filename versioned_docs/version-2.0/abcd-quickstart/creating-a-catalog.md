---
sidebar_position: 1
title: Creating your first catalog
---

# Fast start guide: creating your first catalog

Este guia irá orientá-lo através dos passos essenciais para criar um novo catálogo (base de dados) no ABCD e importar seus primeiros registros. O ABCD oferece a flexibilidade de criar um catálogo a partir de modelos pré-definidos (como o MARC) ou começar um completamente do zero.

### Opção 1: Criar um Catálogo a partir de um Modelo (Recomendado para Iniciantes)

Usar um modelo é a maneira mais rápida de começar, pois ele já vem com uma estrutura de campos bibliográficos pronta.

#### 1. Acesse o Módulo de Administração
Após fazer o login no ABCD, você estará na tela principal. Na seção **Administração**, clique em **Criar Base de Dados**.

#### 2. Defina as Informações da Nova Base de Dados
Você será direcionado para uma tela onde deve preencher as seguintes informações:

* **Nome da base de dados:** Insira um nome curto e sem espaços. Este será o nome técnico da base. Por exemplo, `meucatalogo`.
* **Descrição:** Dê um nome descritivo que aparecerá nas listas e menus para os operadores. Por exemplo, `Meu Primeiro Catálogo MARC`.
* **Criar desde:** No menu suspenso, selecione um dos modelos disponíveis. Para este guia, escolha **MARC**.

Clique em **Continuar**. O sistema irá executar o processo de criação, copiando todos os arquivos de definição necessários. Ao finalizar, clique em **Regresar** para voltar ao menu principal.

### Opção 2: Criar um Catálogo do Zero (Avançado)

Esta opção oferece total liberdade para definir sua própria estrutura de dados, mas requer um entendimento dos conceitos do ISIS (FDT, FST, PFT).

1.  No menu **Criar Base de Dados**, preencha o **Nome** e a **Descrição**.
2.  Em **Criar desde**, selecione **Nova base de dados** e clique em **Continuar**.
3.  O sistema irá guiá-lo por várias etapas de configuração:
    * **Tabela de Definição de Campos (FDT):** Aqui você define cada campo (tag), seu nome, tipo (texto, data, etc.), se é repetível e se possui subcampos.
    * **Tabela de Seleção de Campos (FST):** Defina quais campos serão indexados para permitir a busca e como eles serão indexados (por palavra, pela frase inteira, etc.).
    * **Formato de Exibição (PFT):** Crie o layout de como os registros serão exibidos na tela.
    
Para um guia detalhado sobre a criação de uma estrutura do zero, consulte a seção **Módulos &rarr; Catalogação &rarr; Estrutura da Base de Dados**.

### Próximo Passo: Importando Registros

Agora que a base de dados está criada (usando qualquer uma das opções acima), o próximo passo é populá-la com registros.

1.  Na tela principal do ABCD, **selecione o seu novo catálogo** na lista de bases de dados.
2.  Clique em **Entrada de Dados**. Você será levado para a interface de catalogação, que estará vazia.
3.  Na barra de ferramentas superior, clique no ícone de **Utilitários** e, no menu que aparece, selecione **Importar ISO**.
4.  Na tela de importação:
    * Clique em **Examinar** (ou "Browse") e localize seu arquivo de registros no formato ISO 2709 (geralmente com extensão `.iso` ou `.mrc`).
    * **Marque a opção "Gerar lista Invertida"**. Isso é muito importante para que os registros se tornem pesquisáveis após a importação.
    * Clique no botão **Seleccionar** (um ícone de "check" verde) para confirmar o arquivo que você subiu.
    * O sistema pedirá uma confirmação final para iniciar o processo. Clique em **Sim**.

O sistema exibirá o progresso da importação. Ao final, você pode navegar pelos registros usando as setas de navegação na barra de ferramentas. Seu primeiro catálogo está criado e pronto para uso!