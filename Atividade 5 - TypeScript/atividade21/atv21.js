// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
var digitos = Number(prompt("Digite um número"));
var arrayDosDigitos = digitos.toString();
var soma = 0;
for (var i = 0; i < arrayDosDigitos.length; i++) {
    soma += Number(arrayDosDigitos[i]);
}
alert("A soma dos d\u00EDgitos \u00E9 = ".concat(soma));
