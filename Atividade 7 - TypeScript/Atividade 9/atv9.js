// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
function calcularDesconto(valorDoProduto, percentualDeDesconto) {
    if (valorDoProduto < 0 || percentualDeDesconto < 0) {
        alert("O valor do produto e o percentual de desconto devem ser maiores ou iguais a zero.");
        return;
    }
    var desconto = valorDoProduto * (percentualDeDesconto / 100);
    var valorComDesconto = valorDoProduto - desconto;
    alert("Valor do produto com desconto: R$ ".concat(valorComDesconto.toFixed(2)));
}
var valorDoProduto = Number(prompt("Digite um valor do produto:"));
var percentualDeDesconto = Number(prompt("Digite o percentual de desconto a ser aplicado (sem '%'):"));
calcularDesconto(valorDoProduto, percentualDeDesconto);
