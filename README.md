# Blogs API

## Descrição 

Nesse projeto precisei arquiteturar e desenvolver uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, desenvolvi alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados.

## Habilidades

Neste projeto verificou-se minhas habilidades de construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e minhas capacidades de:
 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir endpoints para consumir os models que criar ;
 - Fazer um `CRUD` com o `ORM`.

## Tecnologias utilizadas

- `Node.js`
- `MySQL`
- `Sequelize`

## Como instalar esse projeto localmente na sua máquina

Antes de tudo é preciso fazer o clone do projeto para sua máquina (é necessário ter o git instalado), escolha uma pasta no seu pc, entre nela e pelo terminal execute o seguinte comando: 


```bash
git clone https://github.com/andersonleite1/blogs-api.git 
```
Após ter feito o clone entre na pasta `cd blogs-api` e pelo terminal já dentro da pasta execute: 

```bash 
npm install 
```

*Esse comando irá instalar as dependências do projeto. Para esse comando funcionar você precisa ter o [node](https://nodejs.org/) instalado na sua máquina.* 

## Como executar o projeto 

Com os passos anteriores já cumpridos agora basta configurar as variáveis de ambiente do projeto, para isso crie um arquivo `.env` no diretório raiz do mesmo (use o arquivo `.env.example` como base) em seguida execute o seguinte comando no terminal (você precisa está na raiz do projeto `cd blogs-api`): 

```bash 
npm start 
```

Você já está com o `Blogs API`  rodando na sua máquina local é só aproveitar :smile: 