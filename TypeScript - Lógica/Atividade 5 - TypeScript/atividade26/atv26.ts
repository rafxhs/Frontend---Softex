// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.

let numero: number = Number (prompt("Digite uma sequência de números:"));
let numeroEmString: string = numero.toString();
let numeroInvertido: string = '';

for (let i = numeroEmString.length - 1; i >= 0; i--) {
    
    numeroInvertido += numeroEmString[i];
}

let inversaoDoNumero: number = parseInt(numeroInvertido, 10);

alert(`Número lido: ${numero} \n Número invertido: ${inversaoDoNumero}`);