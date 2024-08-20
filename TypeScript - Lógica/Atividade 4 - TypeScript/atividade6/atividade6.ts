/* 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/

const nome1: number= Number (prompt("Digite o seu nome: ")?.length);
const nome2: number= Number (prompt("Digite o seu nome: ")?.length);

if(nome1 > nome2){

    alert("O primeiro nome possui maior número de caracteres");
}
if(nome2 > nome1){

    alert("O segundo nome possui maior número de caracteres");
}
