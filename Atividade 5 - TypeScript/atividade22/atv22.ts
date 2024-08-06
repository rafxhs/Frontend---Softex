// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.

const numero: number = 20;

for(let i= 0; i < numero; i++){

    if(numero % i == 0){

        console.log(i);
    }
}