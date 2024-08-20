// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro 
// e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.
function calcularMediaArredondada(listaDeNumeros) {
    var soma = 0;
    for (var i = 0; i < listaDeNumeros.length; i++) {
        soma += listaDeNumeros[i];
    }
    var media = soma / listaDeNumeros.length;
    return Math.round(media);
}
function calcularMedia() {
    var listaDeNumeros = [];
    for (var i = 0; i < 5; i++) {
        var numeros = prompt("Digite o ".concat(i + 1, "\u00BA n\u00FAmero:"));
        if (numeros !== null) {
            var numero = Number(numeros);
            if (!isNaN(numero)) {
                listaDeNumeros.push(numero);
            }
            else {
                alert("Por favor, insira um número.");
                i--;
            }
        }
        else {
            alert("Por favor, insira um número.");
            i--;
        }
    }
    var mediaArredondada = calcularMediaArredondada(listaDeNumeros);
    alert("A m\u00E9dia arredondada \u00E9: ".concat(mediaArredondada));
}
calcularMedia();
