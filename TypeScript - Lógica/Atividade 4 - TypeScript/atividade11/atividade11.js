/* 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%.*/
var salario = Number(prompt("Digite o seu sálario: "));
var aumentoSuperior = salario * 0.1;
var novoSalario1 = salario + aumentoSuperior;
var aumentoInferior = salario * 0.15;
var novoSalario2 = salario + aumentoInferior;
if (salario >= 1500) {
    alert("Seu aumento foi de " + "R$ " + aumentoSuperior + ", " + " e seu novo salário é = " + "R$ " + novoSalario1);
}
if (salario < 1500) {
    alert("Seu aumento foi de " + "R$ " + aumentoInferior + ", " + " e seu novo salário é = " + "R$ " + novoSalario2);
}
