/*1. Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o
conteúdo da variável "nome" no terminal.*/

const nome: string= "Rafaela";

console.log(nome);

/*2. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o
comprimento da string armazenada na variável "frase".*/

const frase1: string= "Me chamo";

console.log(frase1.length); //lenght é uma propriedade relacionada a comprimento/tamanho, espaço também será contado.

/*3. Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a
primeira letra da palavra armazenada na variável "palavra".*/


const palavra: string= "R, A, F, E, L";

console.log(palavra[0]);

/*4. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a
frase em letras maiusculas.*/

const frase2: string= "As letras que há no meu nome são:";

console.log(frase2.toUpperCase(), palavra); //toUpperCase() é um método do tipo string

/*5. Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida,
sobrescreva o valor da variável para um outro endereço e verifique no terminal o valor atual da
variável.*/

let endereco: string= "Rua Santa Rosa, 100";

endereco= "Rua Alberto Figueiro";

console.log(endereco);
