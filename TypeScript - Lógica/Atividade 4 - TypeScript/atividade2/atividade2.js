// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
var idade = Number(prompt("Digite a sua idade:"));
if (idade >= 18) {
    alert("Você é maior de idade");
}
if (idade >= 0 && idade < 18) { // Utilizei o ">= 0", pois levei em consideração os bebês que não possuem anos de vida ainda.
    alert("Você é menor de idade");
}
else if (idade < 0) {
    alert("Digite uma idade válida");
}
