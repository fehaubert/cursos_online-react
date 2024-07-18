# Lista de Cursos Online

## Descrição do Projeto

A aplicação "Lista de Cursos Online" permite aos usuários gerenciar uma lista de cursos, oferecendo funcionalidades para adicionar, editar e remover cursos. Esta aplicação foi desenvolvida utilizando React e inclui uma interface amigável e responsiva.

## Tecnologias Utilizadas

- ReactJS
- CSS

## Funcionalidades

- Adicionar novos cursos
- Editar cursos existentes
- Remover cursos da lista

## Criação do react

Para criar o react:

### Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passo a Passo

1. ```sh
    npx create-react-app cursos_online
    ```

2. ```sh
    cd cursos_online
    ```

3. ```sh
    code .
    ```

4. ```sh
    npm start
    ```

5. A aplicação estará disponível no navegador em `http://localhost:3000`.

## Uso

### Navegação

Ao iniciar a aplicação, você verá uma barra de navegação fixa no topo com links para "Home", "Cursos" e "Contato".

### Adicionando um Curso

- Utilize o campo de texto abaixo do título "Lista de Cursos Online" para adicionar um novo curso.
- Digite o nome do curso e clique em "Adicionar".

### Editando um Curso

- Clique no botão "Editar" ao lado do curso que deseja editar.
- O nome do curso será carregado no campo de texto, permitindo que você faça as alterações.
- Clique em "Editar" para salvar as alterações.

### Removendo um Curso

- Clique no botão "Remover" ao lado do curso que deseja excluir.

## Componentes

### `AdicionarCurso`

Este componente é responsável por renderizar o formulário de adição e edição de cursos.

- **Hooks Utilizados:**
  - `useState`: para gerenciar o estado do campo de texto.
  - `useEffect`: para carregar o nome do curso no campo de texto quando está sendo editado.
- **Principais Funções:**
  - `handleSubmit`: lida com o envio do formulário para adicionar ou editar um curso.

### `CursosOnline`

Este componente é o contêiner principal que gerencia a lista de cursos.

- **Hooks Utilizados:**
  - `useState`: para gerenciar a lista de cursos e o índice do curso a ser editado.
  - `useCallback`: para criar funções de callback para adicionar, remover e editar cursos.
- **Principais Funções:**
  - `adicionarCurso`: adiciona um novo curso ou atualiza um curso existente.
  - `removerCurso`: remove um curso da lista.
  - `editarCurso`: define o índice do curso a ser editado.

### `ListaDeCursos`

Este componente é responsável por renderizar a lista de cursos e os botões de ação (editar e remover).

- **Props Recebidas:**
  - `cursos`: lista de cursos a ser renderizada.
  - `removerCurso`: função de callback para remover um curso.
  - `editarCurso`: função de callback para editar um curso.

- **Principais Funções:**
  - `onClick` no botão "Editar": chama a função `editarCurso` passando o índice do curso a ser editado.
  - `onClick` no botão "Remover": chama a função `removerCurso` passando o índice do curso a ser removido.

## Link do surge

1. ```sh
    pointless-goldfish.surge.sh
    ```