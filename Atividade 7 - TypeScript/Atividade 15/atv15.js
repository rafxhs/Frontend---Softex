// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a tabuada desse número de 1 a 10 no console.
function gerarTabuada(numero) {
    if (numero < 0) {
        alert("Por favor, ensira um número positivo.");
    }
    if (numero >= 0) {
        var resultado = "";
        for (var i = 1; i <= 10; i++) {
            var tabuada = numero * i;
            resultado += "".concat(numero, " x ").concat(i, ": ").concat(tabuada, "\n");
        }
        alert(resultado);
    }
}
var numero = Number(prompt("Digite um número e saiba a sua tabuada"));
gerarTabuada(numero);
