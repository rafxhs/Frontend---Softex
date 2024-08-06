// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

const digitos = Number (prompt("Digite um número"));
const arrayDosDigitos= digitos.toString();
let soma= 0;

for (let i = 0; i < arrayDosDigitos.length; i++) {

      soma+= Number (arrayDosDigitos[i])
}

alert(`A soma dos dígitos é = ${soma}`);