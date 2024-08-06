/* 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado.*/

const nota1: number= Number (prompt("Digite qual foi a sua nota de português: "));
const nota2: number= Number (prompt("Digite qual foi a sua nota de matemática: "));
const nota3: number= Number (prompt("Digite qual foi a sua nota de inglês: "));
const media: number= (nota1 + nota2 + nota3)/3;

if(media < 7){

    alert("Sinto muito, você está reprovado!");
}
if(media >= 7){

    alert("Parabéns! Você foi aprovado!!");
}