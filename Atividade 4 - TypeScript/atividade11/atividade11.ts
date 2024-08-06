/* 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%.*/

let salario= Number (prompt("Digite o seu sálario: "));
let aumentoSuperior: number=  salario * 0.1;
let novoSalario1: number= salario + aumentoSuperior;
let aumentoInferior: number= salario * 0.15;
let novoSalario2: number= salario + aumentoInferior;

if(salario >= 1500){

    alert("Seu aumento foi de " + "R$ " + aumentoSuperior + ", " + " e seu novo salário é = " + "R$ " + novoSalario1);
}
if(salario < 1500){

    alert("Seu aumento foi de " + "R$ " + aumentoInferior + ", " + " e seu novo salário é = " + "R$ " + novoSalario2);
}