/* 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).*/
var operacao = Number(prompt("Escolha uma dessas operações: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão"));
var numeroInteiro1 = Number(prompt("Digite o primeiro número inteiro: "));
var numeroInteiro2 = Number(prompt("Digite o segundo número inteiro: "));
switch (operacao) {
    case 1:
        alert("O resultado da soma é = " + (numeroInteiro1 + numeroInteiro2));
        break;
    case 2:
        alert("O resultado da subtração é = " + (numeroInteiro1 - numeroInteiro2));
        break;
    case 3:
        alert("O resultado da multiplicação é = " + (numeroInteiro1 * numeroInteiro2));
        break;
    case 4:
        alert("O resultado da divisão é = " + (numeroInteiro1 / numeroInteiro2));
        break;
}
