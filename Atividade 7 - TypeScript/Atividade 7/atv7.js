// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.
function media(nota1, nota2, nota3) {
    var mediaAritmetica = (nota1 + nota2 + nota3) / 3;
    alert(mediaAritmetica.toFixed(1));
}
var nota1 = Number(prompt("Digite a primeira nota:"));
var nota2 = Number(prompt("Digite a segunda nota:"));
var nota3 = Number(prompt("Digite a terceira nota:"));
media(nota1, nota2, nota3);
