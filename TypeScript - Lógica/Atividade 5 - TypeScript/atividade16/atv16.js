// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
var notas = [];
var soma = 0;
for (var i = 1; i <= 5; i++) {
    var nota = Number(prompt("Digite a ".concat(i, "\u00BA nota:")));
    notas.push(nota);
    soma += nota;
}
var mediaDasNotas = soma / notas.length;
alert("A m\u00E9dia \u00E9: ".concat(mediaDasNotas.toFixed(1)));
