// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

const notas: number[] = [];
let soma = 0;

for(let i = 1; i <= 5; i++){

    const nota: number = Number (prompt(`Digite a ${i}º nota:`));

    notas.push(nota);
    soma += nota;

}

const mediaDasNotas = soma / notas.length;

alert(`A média é: ${mediaDasNotas.toFixed(1)}`);