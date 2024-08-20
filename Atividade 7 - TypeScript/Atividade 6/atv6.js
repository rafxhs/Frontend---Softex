// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.
function isPar(numeroInt) {
    if (numeroInt % 2 == 0) {
        console.log("true");
    }
    else if (numeroInt % 2 != 0) {
        console.log("false");
    }
}
isPar(10);
