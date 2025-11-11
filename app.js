/*********************************************************************************************************************************
 * Objetivo: API->aplication programming interface - responsável pela saída de dados de estados e cidades do Brasil
 * Data: 11/11/2025
 * Autor: Evanildo Leal
 * Versão: 1.0
 ********************************************************************************************************************************/

/*
    Para criar uma API, precisamos instalar:
        express     - npm install express --save
        cors        - npm install cors --save
        body-parser - npm install body-parser --save
        npm install express cors body-parser --save
*/

//Import das dependências do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Criando um objeto do tipo express
const app = express()

//Definindo as permissões do CORS
//request -> chegará na API
//response -> retorno da API

app.use((request, response, next) => {
    //Permitir que qualquer domínio acesse a API
    response.header('Access-Control-Allow-Origin', '*')
})