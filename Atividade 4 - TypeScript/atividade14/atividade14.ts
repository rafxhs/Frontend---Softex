/* 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
switch/case.*/

const numero: number= Number(prompt("Digite algum valor entre 1 e 5: "));
const mensagens: string []= ['Muito bom', 'Bom', 'Regular', 'Insuficiente', 'Muito insuficiente'];

switch(numero){

    case 1:
    alert("Seu desempenho foi:" + " '" + mensagens[0] + "'");

    break;

    case 2:
    alert("Seu desempenho foi:" + " '" + mensagens[1] + "'");

    break;

    case 3:
    alert("Seu desempenho foi:" + " '" + mensagens[2] + "'");

    break;

    case 4:
    alert("Seu desempenho foi:" + " '" + mensagens[3] + "'");

    break;

    case 5:
    alert("Seu desempenho foi:" + " '" + mensagens[4] + "'");

    break;

}