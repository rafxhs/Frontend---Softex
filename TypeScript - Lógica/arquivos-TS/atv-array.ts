//1. Crie um array vazio chamado "numeros".

let numeros: number []= [];


//2. Adicione os números 1, 2, 3 e 4 ao array "numeros".

numeros.push(1, 2, 3, 4);

//3. Acesse o valor do segundo elemento do array "numeros".

console.log(numeros[1]);

//4. Atualize o valor do terceiro elemento do array "numeros" para 10.

numeros[2]= 10;

//5. Remova o último elemento do array "numeros" utilizando a função ".pop".

numeros.pop();

//6. Verifique o comprimento do array "numeros".

console.log(numeros.length);

//7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".

let frutas: string []= ["maçã", "banana", "laranja"];

//8. Acesse o valor do primeiro elemento do array frutas.

console.log(frutas[0]);

//9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".

frutas.push("uva");

/*10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.*/

type aluno= {

    nome: string;
    idade: number;

}

const aluno: aluno= {

    nome: "Maria",
    idade: 30
};

let alunos: any []= [];

alunos.push(aluno);

//11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".

console.log(aluno.nome);

//12. Adicione mais três objetos do tipo "aluno" ao array "alunos".

alunos.push({endereco: 'Rua da Aurora', altura: 1.68, peso: 70});

/*13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. 
Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.*/

let produtos: string []= ["Carne", "Arroz", "Manteiga", "Ovos", "Alho", "Coentro", "Repolho", "Tomate", "Cebola", "Pepino"];

let posicoesPares= produtos.filter (Element => produtos.length %2==0);

console.log(posicoesPares); 
