/* 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado.*/
var nota1 = Number(prompt("Digite qual foi a sua nota de português: "));
var nota2 = Number(prompt("Digite qual foi a sua nota de matemática: "));
var nota3 = Number(prompt("Digite qual foi a sua nota de inglês: "));
var media = (nota1 + nota2 + nota3) / 3;
if (media < 7) {
    alert("Sinto muito, você está reprovado!");
}
if (media >= 7) {
    alert("Parabéns! Você foi aprovado!!");
}
