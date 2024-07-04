"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = [];
numeros.push(1, 2, 3, 4);
console.log(numeros[1]);
numeros[2] = 10;
numeros.pop();
console.log(numeros.length);
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);
frutas.push("uva");
const aluno = {
    nome: "Maria",
    idade: 30
};
let alunos = [];
alunos.push(aluno);
console.log(aluno.nome);
alunos.push({ endereco: 'Rua da Aurora', altura: 1.68, peso: 70 });
let produtos = ["Carne", "Arroz", "Manteiga", "Ovos", "Alho", "Coentro", "Repolho", "Tomate", "Cebola", "Pepino"];
let posicoesPares = produtos.filter(Element => produtos.length % 2 == 0);
console.log(posicoesPares);
