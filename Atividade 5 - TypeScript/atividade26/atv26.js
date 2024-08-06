// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.
var numero = Number(prompt("Digite uma sequência de números:"));
var numeroEmString = numero.toString();
var numeroInvertido = '';
for (var i = numeroEmString.length - 1; i >= 0; i--) {
    numeroInvertido += numeroEmString[i];
}
var inversaoDoNumero = parseInt(numeroInvertido, 10);
alert("N\u00FAmero lido: ".concat(numero, " \n N\u00FAmero invertido: ").concat(inversaoDoNumero));
