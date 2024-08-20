// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

const alturas: number[] = [];
let soma = 0;

for(let i = 1; i <= 5; i++){

    const altura: number = Number (prompt(`Para calcular a média de altura de 5 pessoas. Digite a ${i}º altura:`));

    alturas.push(altura);
    soma += altura;

}

const mediaDasAlturas = soma / alturas.length;

alert(`A média é: ${mediaDasAlturas.toFixed(2)}`);