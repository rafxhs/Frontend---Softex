// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro 
// e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.
function contarDigitosParesImpares(numero) {
    var numeroParaString = Math.abs(numero).toString();
    var pares = 0;
    var impares = 0;
    for (var i = 0; i < numeroParaString.length; i++) {
        var caractere = numeroParaString[i];
        var caractereParaNumero = parseInt(caractere);
        if (caractereParaNumero % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    alert("D\u00EDgitos pares: ".concat(pares, ", D\u00EDgitos \u00EDmpares: ").concat(impares));
}
var numero = Number(prompt("Digite um número inteiro:"));
contarDigitosParesImpares(numero);
