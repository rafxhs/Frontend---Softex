// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
var numeros = [];
var maior = 0;
var menor = 0;
for (var i = 0; i < 10; i++) {
    var number = Number(prompt("Digite o ".concat(i + 1, "\u00BA n\u00FAmero: ")));
    numeros.push(number);
    if (number > maior) {
        maior = number;
    }
    else if (number < menor) {
        menor = number;
    }
}
alert("O maior valor \u00E9: ".concat(maior, " \n O menor valor \u00E9: ").concat(menor));
