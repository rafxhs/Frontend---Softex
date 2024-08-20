/* 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a "margem de lucro" desejada 
(em percentual) e o "valor do frete" como parâmetros. A função deve calcular e retornar o preço de venda do produto, considerando 
que o preço de venda é igual ao custo acrescido da margem de lucro e do valor do frete.*/

function calcularPrecoProduto(valorDeCusto: number, margemDeLucro: number, valorDoFrete: number){

   const margemLucro = valorDeCusto * (margemDeLucro / 100);

   const precoDeVenda = valorDeCusto + margemLucro + valorDoFrete;

   alert(`O preço de venda do produto é: R$ ${precoDeVenda.toFixed(2)}`);
}

const valorDeCusto = Number(prompt("Digite o custo do produto:"));
const margemDeLucro = Number(prompt("Digite o percentual de lucro desejado:"));
const valorDoFrete = Number(prompt("Digite o valor do frete:"));

const precoDeVenda = calcularPrecoProduto(valorDeCusto, margemDeLucro, valorDoFrete);
 

