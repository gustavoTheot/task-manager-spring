### 	:grey_question: Sobe a aplicação
A aplicação é um sistema de gerenciamento de atividades que oferece recursos para criar, editar, visualizar e excluir tarefas. É possível visualizar as atividades de diferentes maneiras, como por ID, título ou situação.
O repositório contém dois pacotes. O "task-manager-api" inclui a API da aplicação, contendo todas as regras, testes e conexão com o banco de dados. O pacote "task-manager-front" é responsável pela parte visual da aplicação.

### :hammer: Tecnologias utilizadas :
- Java: utilizado para construir a API CRUD.
- Spring Boot: framework utilizado em conjunto com suas dependências, como Spring Data JPA, Spring Web e PostgreSQL Driver, entre outros, para a construção da API.
- Testes unitários utilizando SpringBootTest. :test_tube:
- <a href="https://react.dev/" target="_blank">ReactJS</a> com <a href="https://www.typescriptlang.org/"  target="_blank">TypeScript</a>: utilizado para desenvolver o front-end. :electron:
- Biblioteca <a href="https://zod.dev/" target="_blank">Zod</a> e <a href="https://react-hook-form.com/">React-hook-form</a>: utilizadas para a validação do formulário no front-end.
- <a href="https://axios-http.com/ptbr/docs/intro" target="_blank">Axios</a>: utilizado para a conexão entre a API e o front-end. :card_file_box:
- Biblioteca <a href="https://styled-components.com/" target="_blank">Styled-components</a>: utilizada para a estilização.  :art:

### :package: Instruções de uso:
- Certifique-se de ter o <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank">JDK</a> instalado em sua máquina. :outbox_tray:
- Certifique-se de ter o <a href="https://nodejs.org/en">Node</a> instalado em sua máquina. :outbox_tray:
- Certifique-se de ter o <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">PostregreSQL</a> instalado na sua máquina.
- Clone o repositório. :octocat:
- Altere o arquivo application.properties para conectar sua aplicação back-end ao banco de dados passando sua `url`, `username` e `password`, no seguinte diretório dentro de `task-manager-api`: `src/main/java/resources/application.properties`
- Execute a API na sua IDE, localizada no pacote "task-manager-api" (por exemplo, Eclipse, IntelliJ ou qualquer outra de sua preferência).
- Abra o pacote "task-manager-front" no prompt de comando e execute o comando `npm install` para instalar as dependências necessárias (node_modules).
- Execute o comando npm run dev no prompt de comando para iniciar o front-end.
- Pressione `Ctrl + clique` esquerdo do mouse no local exibido no prompt para abrir a aplicação.
