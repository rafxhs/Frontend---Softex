// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.

function calcularDesconto(valorDoProduto: number, percentualDeDesconto: number){

    if (valorDoProduto < 0 || percentualDeDesconto < 0) {

        alert("O valor do produto e o percentual de desconto devem ser maiores ou iguais a zero.");
        return;
    }

    const desconto = valorDoProduto * (percentualDeDesconto / 100);

    const valorComDesconto = valorDoProduto - desconto;

    alert (`Valor do produto com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    
}

let valorDoProduto = Number (prompt("Digite um valor do produto:"));
let percentualDeDesconto = Number (prompt("Digite o percentual de desconto a ser aplicado (sem '%'):"));

calcularDesconto(valorDoProduto, percentualDeDesconto);