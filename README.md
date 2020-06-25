# tindev
Semana Omnistack 8.0 - Tindev: Aplicação integrada a API do GitHub para encontrar e facilitar o contato entre Desenvolvedores.

<h3 align="center">
    <img alt="Capa" title="#capa" width="500px" src=".github/logo_tindev.png">
</h3>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Resultados](#resultados)
- [Como Usar](#como-usar)

<a id="sobre"></a>

## Sobre

O <strong>Tindev</strong> é um monorepo de uma aplicação clone do Tinder com versão Web e Mobile integrada a API do Github para encontrar e facilitar o contato entre Desenvolvedores, com o objetivo de auxiliar no Networwing dos usuários.

Essa aplicação foi construída na <strong>Semana Omnistack 8.0</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/).

## Tecnologias Utilizadas

- [Javascript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [MongoDB](https://www.mongodb.com/)

## Resultados

### Resultado WEB:

<h1 align="center">
    <img alt="Web" src=".github/Home.png" width="450px">
    <img alt="Web" src=".github/Main.png" width="900px">
    <img alt="Web" src=".github/Match.png" width="900px">
</h1>

### Resultado MOBILE:

<h1 align="center">
    <img alt="Mobile" src=".github/home_app.png" width="300px">
    <img alt="Mobile" src=".github/main_app.png" width="300px">
</h1>

## Como usar

- ### **Pré-requisitos**

  - É necessário possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina;
  - E também ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**;

1. Clonando o Projeto :

```sh
  $ git clone https://github.com/alonsofritz/tindev.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ yarn

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```

## Ministrado por:

**[Diego Fernandes](https://github.com/diego3g)** para a **Omnistack 08**.

## License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

</br>
</br>

<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.svg">
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-green">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

---
<h4 align="center">
    :rocket: Feito por <a href="https://www.linkedin.com/in/alonsofritz/" target="_blank">Alonso Fritz</a>
</h4>