// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
var alturas = [];
var soma = 0;
for (var i = 1; i <= 5; i++) {
    var altura = Number(prompt("Para calcular a m\u00E9dia de altura de 5 pessoas. Digite a ".concat(i, "\u00BA altura:")));
    alturas.push(altura);
    soma += altura;
}
var mediaDasAlturas = soma / alturas.length;
alert("A m\u00E9dia \u00E9: ".concat(mediaDasAlturas.toFixed(2)));
