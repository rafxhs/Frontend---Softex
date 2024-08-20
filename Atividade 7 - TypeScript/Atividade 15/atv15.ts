// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a tabuada desse número de 1 a 10 no console.

function gerarTabuada(numero: number){

    if(numero < 0){

        alert ("Por favor, ensira um número positivo.");
    }

    if(numero >= 0){

        let resultado: string = "";

        for(let i = 1; i <= 10; i++){

            let tabuada: number = numero * i;

            resultado += `${numero} x ${i}: ${tabuada}\n`;
        }

        alert (resultado);
    }
}

let numero = Number(prompt("Digite um número e saiba a sua tabuada"));

gerarTabuada(numero);