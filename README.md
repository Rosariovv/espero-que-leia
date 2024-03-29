<h1 align="center">
  <img src="src\image\espero que leia.png" alt="logo espero que leia" width="500">
<p align="center">Espero que leia<p>
</h1>


## *Sumário*

- [Apresentação](#apresentação)
- [Contextualização](#contextualização)
- [Funcionalidades](#funcionalidades)
- [Documentação das rotas](#documentação-das-rotas)
- [Tecnologias, bibliotecas e dependências](#tecnologias-bibliotecas-e-dependências)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Features e rotas](#features-e-rotas)
- [Referências](#referências)

## *Apresentação*

O "Espero que leia" é o projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/).  Essa é uma API que tem por objetivo fomentar a doação de livros entre leitores.

A ideia é que os livros que estejam parados em casa possam ser doados e lidos por outras pessoas, para que essas histórias circulem e os livros sigam o seu objetivo de disseminar o conhecimento.

## *Contextualização*
Sempre fui uma leitora assídua desde criança, comecei pelos gibis da turma da mônica, revistas adolescentes, até chegar na literatura e apesar do advento dos ebooks, ainda gosto de folhear os livros físicos e acredito que eles devem ser compartilhados. Com o Espero que leia, os leitores tem a oportunidade de doar livros e ao mesmo tempo receber doações, criando uma rede colaborativa.

## *Funcionalidades*

- [X] Cadastro de leitores
- [X] Cadastro de livros
- [X] Lista de todos os leitores
- [X] Lista de todos os livros
- [X] Livro por id
- [X] Leitor por id
- [X] Atualização de cadastro de livros
- [X] Atualização de cadastro de leitores
- [X] Remoção de cadastro de livro
- [X] Remoção de cadastro de leitores


## _Documentação das rotas_

| Feature                                | Método | Rota                         |
| -------------------------------------- | ------ | ---------------------------- |
| Cadastro de leitor                     | POST   | `/leitor`                    |
| Cadastro de livro                      | POST   | `/livro`                     |
| Buscar livros                          | GET    | `/livro/:id`                 |
| Buscar leitores                        | GET    | `/leitor/:id`                |
| Buscar livro por id                    | GET    | `/livro/:id`                 |
| Buscar leitor por id                   | GET    | `/leitor/:id`                |
| Atualizar livro                        | PATCH  | `/livro/:id`                 |
| Atualizar leitor                       | PATCH  | `/leitor/:id`                |
| Apagar livro                           | DELETE | `/livro/:id`                 |
| Apagar leitor                          | DELETE | `/leitor/:id`                |


## *Tecnologias, bibliotecas e dependências*

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-greendark">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-greendark">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-greendark">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-greendark">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-greendark">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-greendark">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-greendark">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-greendark">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-greendark">
  </a> 
</p>

## *Instruções para instalação e contribuições no projeto*

- Faça um `fork` do projeto através do link (<https://github.com/Rosariovv/espero-que-leia>);

- Copie o código do fork realizado e, no prompt de comando da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma branch para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `9000`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o commit com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo Pull Request com as contribuições para o projeto original.

## *Features e rotas*

Esta API está sendo escutada na `porta 9000` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:9000/` antes dos endpoints de requisição.
Link do Heroku para o projeto com deploy: `https://esperoqleia.herokuapp.com`



## *Referências*

[{reprograma} - Projeto Final](https://github.com/reprograma/on7-porto-s17-s18-projeto-livre)


<hr>

Criado com por *Rosário Vieira* 

[![Linkedin Badge](https://img.shields.io/badge/-Rosário%20Vieira-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/maria-do-rosario-vieira-b8259125)

