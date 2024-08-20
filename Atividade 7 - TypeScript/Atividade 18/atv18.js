/* 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a "margem de lucro" desejada
(em percentual) e o "valor do frete" como parâmetros. A função deve calcular e retornar o preço de venda do produto, considerando
que o preço de venda é igual ao custo acrescido da margem de lucro e do valor do frete.*/
function calcularPrecoProduto(valorDeCusto, margemDeLucro, valorDoFrete) {
    var margemLucro = valorDeCusto * (margemDeLucro / 100);
    var precoDeVenda = valorDeCusto + margemLucro + valorDoFrete;
    alert("O pre\u00E7o de venda do produto \u00E9: R$ ".concat(precoDeVenda.toFixed(2)));
}
var valorDeCusto = Number(prompt("Digite o custo do produto:"));
var margemDeLucro = Number(prompt("Digite o percentual de lucro desejado:"));
var valorDoFrete = Number(prompt("Digite o valor do frete:"));
var precoDeVenda = calcularPrecoProduto(valorDeCusto, margemDeLucro, valorDoFrete);
