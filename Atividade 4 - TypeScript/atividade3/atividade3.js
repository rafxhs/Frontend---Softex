// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
var num1 = Number(prompt("Digite um número inteiro: "));
var num2 = Number(prompt("Digite um número inteiro: "));
if (num1 > num2) {
    alert(num1 + " é maior que " + num2);
}
if (num2 > num1) {
    alert(num2 + " é maior que " + num1);
}
else if (num1 == num2) {
    alert("Os dois números são iguais");
}
