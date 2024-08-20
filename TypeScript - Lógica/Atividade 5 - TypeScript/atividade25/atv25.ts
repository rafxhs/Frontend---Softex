// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

const digitos = Number (prompt("Digite um número"));
const arrayDosDigitos= digitos.toString();
let soma= 0;

for (let i = 0; i < arrayDosDigitos.length; i++) {


      let digito = Number (arrayDosDigitos[i]);

      if(digito % 2 === 0){

        soma+= digito;
      }
}

alert(`A soma dos dígitos é = ${soma}`);