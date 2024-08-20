// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como parâmetro e retorne a idade atual.

function calcularIdade(nascimento: number){

    if(nascimento === 0){

        alert ("Nenhum ano de nascimento foi inserido.");
    }

    if(nascimento !== 0){
        
        const anoAtual: number = 2024;
        const idade: number = anoAtual - nascimento;

        alert (`Você tem ${idade} anos`);
    }

}

const nascimento = Number (prompt("Digite o ano do seu nascimento:"));

calcularIdade(nascimento);
