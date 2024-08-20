// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como parâmetro e retorne a idade atual.
function calcularIdade(nascimento) {
    if (nascimento === 0) {
        alert("Nenhum ano de nascimento foi inserido.");
    }
    if (nascimento !== 0) {
        var anoAtual = 2024;
        var idade = anoAtual - nascimento;
        alert("Voc\u00EA tem ".concat(idade, " anos"));
    }
}
var nascimento = Number(prompt("Digite o ano do seu nascimento:"));
calcularIdade(nascimento);
