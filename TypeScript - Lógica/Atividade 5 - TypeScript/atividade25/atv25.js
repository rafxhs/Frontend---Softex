// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
var digitos = Number(prompt("Digite um número"));
var arrayDosDigitos = digitos.toString();
var soma = 0;
for (var i = 0; i < arrayDosDigitos.length; i++) {
    var digito = Number(arrayDosDigitos[i]);
    if (digito % 2 === 0) {
        soma += digito;
    }
}
alert("A soma dos d\u00EDgitos \u00E9 = ".concat(soma));
