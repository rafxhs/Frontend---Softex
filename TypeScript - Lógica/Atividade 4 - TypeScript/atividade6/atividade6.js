/* 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/
var _a, _b;
var nome1 = Number((_a = prompt("Digite o seu nome: ")) === null || _a === void 0 ? void 0 : _a.length);
var nome2 = Number((_b = prompt("Digite o seu nome: ")) === null || _b === void 0 ? void 0 : _b.length);
if (nome1 > nome2) {
    alert("O primeiro nome possui maior número de caracteres");
}
if (nome2 > nome1) {
    alert("O segundo nome possui maior número de caracteres");
}
