// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno é representado por um objeto 
// com os atributos "nome" e "nota". A função deve calcular e retornar a média das notas de todos os alunos.

interface Aluno {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: Aluno[]){

    let somaNotas: number = 0;

    for (const aluno of alunos){

        somaNotas += aluno.nota;
    }

    const media = somaNotas / alunos.length;

    alert(`A média das notas é: ${media}`);
}

function obterDadosAlunos(): Aluno[] {

    const alunos: Aluno[] = [];
    const numeroDeAlunos = Number(prompt("Quantos alunos você deseja cadastrar?"));

    if (isNaN(numeroDeAlunos) || numeroDeAlunos <= 0) {

        alert("Número inválido de alunos.");
        return alunos;
    }

    for (let i = 0; i < numeroDeAlunos; i++){

        const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
        const notaParaString = prompt(`Digite a nota do aluno ${i + 1}:`);

        if (!nome || isNaN(Number(notaParaString))) {
            alert("Entrada inválida. Tente novamente.");
            i--; 
            continue;
        }

        const nota = Number(notaParaString);
        alunos.push({ nome, nota });
    }

    return alunos;
}

const alunos = obterDadosAlunos();
calcularMediaAlunos(alunos);