// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).

const notas: number[] = [];
let soma = 0;

for(let i = 1; i <= 5; i++){

    const nota: number = Number (prompt(`Digite a ${i}º nota:`));

    notas.push(nota);
    soma += nota;

}

const mediaDasNotas = soma / notas.length;

alert(`A média é: ${mediaDasNotas.toFixed(1)}`);