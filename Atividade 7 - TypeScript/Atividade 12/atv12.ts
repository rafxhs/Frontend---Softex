// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro 
// e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.

function contarDigitosParesImpares(numero: number) {

    const numeroParaString = Math.abs(numero).toString();

    let pares: number = 0;
    let impares: number = 0;

    for (let i: number = 0; i < numeroParaString.length; i++) {

        const caractere: string = numeroParaString[i]; 
        const caractereParaNumero: number = parseInt(caractere); 

        if (caractereParaNumero % 2 === 0) {

            pares++;

        } else {

            impares++;

        }
    }

    alert(`Dígitos pares: ${pares}, Dígitos ímpares: ${impares}`);
}

let numero = Number (prompt("Digite um número inteiro:"));

contarDigitosParesImpares(numero);
