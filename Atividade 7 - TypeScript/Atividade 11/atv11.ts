// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro 
// e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.

function calcularMediaArredondada(listaDeNumeros: number[]){

    let soma = 0;

    for (let i = 0; i < listaDeNumeros.length; i++) {

        soma += listaDeNumeros[i];
    }
    
    const media = soma / listaDeNumeros.length;

    return Math.round(media);
}

function calcularMedia(){

    const listaDeNumeros: number[] = [];
    
    for (let i = 0; i < 5; i++) {

        const numeros = prompt(`Digite o ${i + 1}º número:`);

        if (numeros !== null){

            const numero = Number(numeros);

            if (!isNaN(numero)) {

                listaDeNumeros.push(numero);

            } else {

                alert("Por favor, insira um número.");
                i--; 

            }
        } else {

            alert("Por favor, insira um número.");
            i--;

        }
    }

    const mediaArredondada = calcularMediaArredondada(listaDeNumeros);

    alert(`A média arredondada é: ${mediaArredondada}`);
}

calcularMedia();