---
sidebar_position: 1
---

# Configuração: Operadores e Perfis de Acesso

O ABCD gerencia o acesso ao sistema através de um sistema de **perfis de usuário**, que definem quais módulos, bases de dados e formulários um operador pode acessar.

### Níveis de Permissão

Existem dois tipos principais de usuários no sistema de administração do ABCD:

* [cite_start]**Administrador:** Tem acesso completo a todas as áreas do ABCD-Site, incluindo Estrutura, Componentes e Acesso[cite: 145].
* [cite_start]**Conteúdo:** Tem acesso restrito, geralmente limitado à área de Componentes para gerenciar o conteúdo do site[cite: 149].

### Administrando Perfis

1.  No menu principal do ABCD Central, na seção **Administração**, clique em **Administração de usuários**.
2.  [cite_start]Selecione a opção **Criar/editar perfis**[cite: 2669].

Nesta tela, você pode definir um novo perfil de acesso:

* **Nome do perfil:** Um nome curto e identificador.
* **Descrição do perfil:** Uma breve explicação da finalidade do perfil.
* [cite_start]**Permissões de Bases de Dados:** Para cada base de dados listada, você pode marcar quais formatos de visualização (PFTs) estarão disponíveis para este perfil[cite: 2501, 2533].
* [cite_start]**Permissões de Módulos:** Ative as caixas de seleção correspondentes às funções (ex: criar registros, deletar registros, etc.) que os operadores com este perfil poderão executar em cada módulo (Catalogação, Circulação, Aquisições)[cite: 2534].

### Gerenciando Usuários (Operadores)

1.  Para criar, editar ou remover um operador, vá para **Administração de usuários** e selecione a opção **Administração de usuários**.
2.  Você verá uma lista dos operadores existentes. Clique no ícone de edição ao lado de um usuário para modificar suas informações ou clique em **Criar** para adicionar um novo.

O formulário de edição de usuário contém os seguintes campos:

* **Nome de usuário:** O nome completo do operador.
* **Login:** O nome de usuário curto que será usado para acessar o sistema.
* **Senha:** A senha do operador.
* [cite_start]**Perfil:** Selecione um dos perfis previamente criados para atribuir as permissões a este usuário[cite: 2730].
* **Válido até:** Defina uma data de expiração para a conta do usuário, se necessário.

> [cite_start]**Importante:** Por razões de segurança, é crucial alterar as senhas padrão (`adm`/`x` e `doc`/`x`) que vêm com a instalação do ABCD[cite: 150].