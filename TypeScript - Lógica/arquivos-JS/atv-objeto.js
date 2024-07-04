"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: "Rafaela",
    idade: 22,
    endereco: "Rua Santa Rosa"
};
console.log("Nome: " + pessoa.nome);
const novaPropriedade = { profissao: "Desenvolvedor Web" };
const novoObjeto = Object.assign({}, pessoa, novaPropriedade);
pessoa.idade = 23;
const animal1 = {
    nome: "Simba",
    especie: "Felis catus",
    cor: "Branco com laranja"
};
const livro1 = {
    titulo: "A Biblioteca da Meia-noite",
    autor: "Matt Haig",
    ano: 2020
};
console.log("Autor do livro: " + livro1.autor);
livro1.ano = 2021;
delete livro1.titulo;
