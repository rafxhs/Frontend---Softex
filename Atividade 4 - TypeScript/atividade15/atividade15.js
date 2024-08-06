/* 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
Domingo, 2 - Segunda-feira, etc.).*/
var numero = Number(prompt("Digite algum valor entre 1 e 7: "));
var diasDasemana = ['1 - Domingo', ' 2 - Segunda-feira', '3 - Terça-feira', ' 4 - Quarta-feira', ' 5 - Quinta-feira', '6  - Sexta-feira', '7 - Sábado'];
var diaEmExibicao = diasDasemana.find(function (_, index) { return index == (numero - 1); });
alert(diaEmExibicao);
//Exercício resolvido com switch/case:
/*switch(numero){

    case 1:
    alert(diasDasemana[0]);

    break;

    case 2:
    alert(diasDasemana[1]);

    break;

    case 3:
    alert(diasDasemana[2]);

    break;

    case 4:
    alert(diasDasemana[3]);

    break;

    case 5:
    alert(diasDasemana[4]);

    break;

    case 6:
    alert(diasDasemana[5]);

    break;

    case 7:
    alert(diasDasemana[6]);

    break;
}*/ 
