// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
var numero = Number(prompt("Digite um número inteiro: "));
if (numero > 0) {
    alert("O número é positivo");
}
if (numero < 0) {
    alert("O número é negativo");
}
else if (numero == 0) {
    alert("O número é igual a zero");
}
