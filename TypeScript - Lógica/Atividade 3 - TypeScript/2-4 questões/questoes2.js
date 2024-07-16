/*11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
concatene-os em uma única string e exiba o nome completo.*/
var primeiroNome = prompt("Digite o seu primeiro nome:");
var sobrenome = prompt("Digite o seu sobrenome:");
alert("Seu nome completo é: " + primeiroNome + " " + sobrenome);
/*12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
foram digitados.*/
var numeros = prompt("Digite uma sequência de números separados por espaço:");
var condicao = numeros === null || numeros === void 0 ? void 0 : numeros.split(" ");
var numerosSemEspacos = condicao === null || condicao === void 0 ? void 0 : condicao.join("");
alert("A quantidade de números é: " + numerosSemEspacos);
/*13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
animal foi digitado.*/
var nomeDoAnimal = prompt("Digite o nome de um animal: ");
alert("O animal que você digitou o nome foi: " + nomeDoAnimal);
/*14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
invertido (sobrenome, nome).*/
var primeiroNome1 = prompt("Digite o seu primeiro nome:");
var sobrenome1 = prompt("Digite o seu sobrenome:");
alert("Seu nome completo invertido é: " + sobrenome1 + " " + primeiroNome1);
//15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
var letra = prompt("Digite qualquer coisa:");
alert("A quantidade de caracteres presente no que foi digitado é= " + (letra === null || letra === void 0 ? void 0 : letra.length));
//16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
var numeroInteiro = Number(prompt("Digite um número inteiro:"));
if (numeroInteiro % 2 == 0) {
    alert(numeroInteiro + " " + "é par");
}
if (numeroInteiro % 2 != 0) {
    alert(numeroInteiro + " " + "é ímpar");
}
//17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
var numeroInteiro1 = Number(prompt("Digite um número inteiro: "));
if (numeroInteiro1 >= 0) {
    alert(numeroInteiro1 + " " + "é positivo");
}
if (numeroInteiro1 < 0) {
    alert(numeroInteiro1 + " " + "é negativo");
}
//18. Peça ao usuário que insira dois números e exiba o maior deles.
var num1 = Number(prompt("Digite o primeiro número:"));
var num2 = Number(prompt("Digite o segundo número:"));
if (num1 > num2) {
    alert(num1 + " " + "é maior que" + " " + num2);
}
if (num2 > num1) {
    alert(num2 + " " + "é maior que" + " " + num1);
}
else if (num1 == num2) {
    alert("Não há número maior, pois os númeors são iguais");
}
/*19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.*/
var peso = Number(prompt("Digite o seu peso:"));
var altura = Number(prompt("Digite a sua altura"));
var imc = peso / (altura * altura);
alert("O seu IMC é: " + imc.toFixed(2));
//20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
var nome1 = (prompt("Digite o seu nome: "));
if (nome1) {
    if (nome1.length > 5) {
        alert("O seu nome contém mais de 5 caracteres.");
    }
    else {
        alert("O seu nome contém 5 caracteres ou menos.");
    }
}
else {
    alert('Você não digitou nenhum nome.');
}
