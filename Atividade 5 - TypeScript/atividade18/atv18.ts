// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

const numeros: number[] = [];
let maior = 0;
let menor = 0;

for(let i= 0; i < 10; i++){

    const number = Number (prompt(`Digite o ${i + 1}º número: `));

    numeros.push(number);

    if( number > maior){

        maior = number;

    }

    else if( number < menor){

        menor = number;
    }
}

alert(`O maior valor é: ${maior} \n O menor valor é: ${menor}`);
