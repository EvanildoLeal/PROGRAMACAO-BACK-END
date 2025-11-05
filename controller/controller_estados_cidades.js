/******************************************************************************************************************************************
 * Objetivo: Funções para manipular dados de estados e cidades do Brasil
 * Data: 04/11/2025
 * Autor: Evanildo Leal
 * Versão: 1.0
 * ****************************************************************************************************************************************/

//Import do arquivo de dados de estados e cidades
const dados_estados_cidades = require('../modulo/estados_cidades.js');


//Retorna a lista de estados do Brasil
const getListEstados = function () {
    //Cria uam variavel do tipo Array
    let arrayListaDeEstados = [];

    let jsonEstados = {};
   
    dados_estados_cidades.listaDeEstados.estados.forEach(function (estado) {
        //Cria uma variavel do tipo JSON
        let jsonListaDeEstados = {};
        //Cria os atributos do JSON
        jsonListaDeEstados.uf = estado.sigla;
        jsonListaDeEstados.description = estado.nome;

        //Adiciona o JSON com o estado dentro do Array
        arrayListaDeEstados.push(jsonListaDeEstados);

    })
    
    //Padronizando a saída da função para ser sempre um JSON
    jsonEstados.estados = arrayListaDeEstados;
    jsonEstados.count = arrayListaDeEstados.length;

    return jsonEstados;
}




console.log(getListEstados());