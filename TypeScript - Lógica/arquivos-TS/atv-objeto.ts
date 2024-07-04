/*1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua
valores a elas.*/

type Pessoa= {

    nome: string;
    idade: number;
    endereco: string;

}

const pessoa: Pessoa= { 
    
    nome: "Rafaela",
    idade: 22,
    endereco: "Rua Santa Rosa"

};

//2. Acesse o valor da propriedade "nome" do objeto "pessoa".

console.log("Nome: " + pessoa.nome);

//3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.

const novaPropriedade= { profissao: "Desenvolvedor Web"};
const novoObjeto= Object.assign({}, pessoa, novaPropriedade)

//4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.

pessoa.idade= 23;

/*5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua
valores a elas.*/

type Animal= {

    nome: string;
    especie: string;
    cor: string;

}

const animal1: Animal= {

    nome: "Simba",
    especie: "Felis catus",
    cor: "Branco com laranja"
}

/*6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a
elas.*/

type Livro= {

    titulo?: string;
    autor: string;
    ano: number;

}

const livro1: Livro= { 
   
    titulo: "A Biblioteca da Meia-noite",
    autor: "Matt Haig",
    ano: 2020

};

//7. Acesse o valor da propriedade "autor" do objeto livro.

console.log("Autor do livro: " + livro1.autor);

//8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor.

livro1.ano= 2021;

//9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete"

delete livro1.titulo




