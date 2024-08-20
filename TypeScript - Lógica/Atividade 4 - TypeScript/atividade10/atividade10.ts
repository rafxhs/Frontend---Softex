// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.

const mes: number= Number (prompt("Digite um número de mês: "));
const meses: string  []= ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let mesExibicao = meses.find((_, index) => index == (mes - 1));

alert(mesExibicao);


//Exercício resolvido com switch/case:

/*switch(mes){

    case 1:
    alert(meses[0]);

    break;

    case 2:
    alert(meses[1]);

    break;

    case 3:
    alert(meses[2]);

    break;

    case 4:
    alert(meses[3]);

    break;

    case 5:
    alert(meses[4]);

    break;

    case 6:
    alert(meses[5]);

    break;

    case 7:
    alert(meses[6]);

    break;

    case 8:
    alert(meses[7]);

    break;

    case 9:
    alert(meses[8]);

    break;

    case 10:
    alert(meses[9]);

    break;

    case 11:
    alert(meses[10]);

    break;

    case 12:
    alert(meses[11]);

    break;
}*/