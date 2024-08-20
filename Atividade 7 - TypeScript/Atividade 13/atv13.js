// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno é representado por um objeto 
// com os atributos "nome" e "nota". A função deve calcular e retornar a média das notas de todos os alunos.
function calcularMediaAlunos(alunos) {
    var somaNotas = 0;
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var aluno = alunos_1[_i];
        somaNotas += aluno.nota;
    }
    var media = somaNotas / alunos.length;
    alert("A m\u00E9dia das notas \u00E9: ".concat(media));
}
function obterDadosAlunos() {
    var alunos = [];
    var numeroDeAlunos = Number(prompt("Quantos alunos você deseja cadastrar?"));
    if (isNaN(numeroDeAlunos) || numeroDeAlunos <= 0) {
        alert("Número inválido de alunos.");
        return alunos;
    }
    for (var i = 0; i < numeroDeAlunos; i++) {
        var nome = prompt("Digite o nome do aluno ".concat(i + 1, ":"));
        var notaParaString = prompt("Digite a nota do aluno ".concat(i + 1, ":"));
        if (!nome || isNaN(Number(notaParaString))) {
            alert("Entrada inválida. Tente novamente.");
            i--;
            continue;
        }
        var nota = Number(notaParaString);
        alunos.push({ nome: nome, nota: nota });
    }
    return alunos;
}
var alunos = obterDadosAlunos();
calcularMediaAlunos(alunos);
