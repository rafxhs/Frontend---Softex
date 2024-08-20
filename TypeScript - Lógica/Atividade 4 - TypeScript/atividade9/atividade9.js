/* 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
obesa ou muito obesa.*/
var peso = Number(prompt("Digite o seu peso: "));
var altura = Number(prompt("Digite a sua altura: "));
var imc = peso / (Math.pow(altura, 2));
if (imc < 18.5) {
    alert("IMC = " + imc.toFixed(2) + " ,você está abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
    alert("IMC = " + imc.toFixed(2) + " ,seu peso está normal");
}
if (imc >= 25 && imc <= 29.9) {
    alert("IMC = " + imc.toFixed(2) + " ,você está com sobrepeso");
}
else {
    alert("IMC = " + imc.toFixed(2) + " ,você está com obesidade");
}
