//1. Implemente o código do slide de número 5.
//2. Implemente o código do slide de número 13.
//3. Implemente o código do slide de número 16.
//4. Implemente o código do slide de número 23.
//5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
var nome = prompt("Digite seu nome:");
alert("Seja Bem-vindo, " + nome + "!!");
/*6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
inteiro.*/
var idade = Number(prompt("Digite a sua idade:"));
console.log(idade);
//7. Receba um número inteiro do usuário e converta-o em um número decimal (float).
//Obs.: o float não existe em Javascript!!
var numInt = Number(prompt("Digite um número:"));
//8. Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
var numInt1 = Number(prompt("Digite o primeiro número:"));
var numInt2 = Number(prompt("Digite o segundo número:"));
var operacao = numInt1 + numInt2;
alert("A soma dos dois números é = " + operacao);
//9. Receba um número decimal do usuário e calcule o seu quadrado.
var numDec = Number(prompt("Digite um número para calcularmos o seu quadrado:"));
alert(Math.pow(numDec, 2));
//10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
var nascimento = Number(prompt("Digite o seu ano de nascimento"));
var idadeDoUsuario = 2024 - nascimento;
alert("Sua idade é: " + idadeDoUsuario);
