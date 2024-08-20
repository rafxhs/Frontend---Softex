/* 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).*/
var verificacaoIdade = Number(prompt("Digite a sua idade: "));
if ((verificacaoIdade >= 0) && (verificacaoIdade <= 1)) {
    alert("Você é um bebê");
}
if ((verificacaoIdade > 1) && (verificacaoIdade <= 12)) {
    alert("Você é uma criança");
}
if ((verificacaoIdade >= 13) && (verificacaoIdade < 18)) {
    alert("Você é um adolescente");
}
if (verificacaoIdade >= 18) {
    alert("Você é um adulto");
}
else if (verificacaoIdade < 0) {
    alert("Digite uma idade válida");
}
