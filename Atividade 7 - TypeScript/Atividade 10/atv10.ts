/* 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa como parâmetro 
e retorne o valor do imposto de renda a ser pago, considerando as seguintes faixas de renda:
a. Até R$ 1.903,98: isento
b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
e. Acima de R$ 4.664,68: alíquota de 27,5% */

function calcularImpostoRenda(salario: number,){

    if ((salario > 0) && (salario <= 1903.98)){

        alert("Isento");
    }

    if ((salario >= 1903.99) && (salario <= 2826.65)){

        let impostoDeRenda1: number = salario * 0.075;

        alert(`Você pagará ${impostoDeRenda1} de imposto de renda`);
    }

    if ((salario >= 2826.66) && (salario <= 3751.05)){

        let impostoDeRenda2: number = salario * 0.15;

        alert(`Você pagará ${impostoDeRenda2} de imposto de renda`);
    }

    if ((salario >= 3751.06) && (salario <= 4664.68)){

        let impostoDeRenda3: number = salario * 0.225;

        alert(`Você pagará ${impostoDeRenda3} de imposto de renda`);
    }

    if (salario >= 4664.68){

        let impostoDeRenda4: number = salario * 0.275;

        alert(`Você pagará ${impostoDeRenda4} de imposto de renda`);
    }

    else if(salario == 0){

        alert("Digite um valor de salário válido!!");
    }
}

let salario = Number (prompt("Digite o seu salário e saiba quanto de imposto de renda você deve pagar:"));

calcularImpostoRenda (salario);