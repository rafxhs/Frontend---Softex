// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.
function imc(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        alert("Digite um número válido");
    }
    alert("Seu imc é " + (peso / Math.pow(altura, 2)).toFixed(2));
}
var peso = Number(prompt("Digite o seu peso:"));
var altura = Number(prompt("Digite a sua altura:"));
