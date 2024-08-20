/* 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
informando se é um dia útil ou um fim de semana.*/

const diaDasemana: string= String (prompt("Digite um dia da semana (por extenso): "));

const dia1: string= "Segunda";
const dia2: string= "Terça"; 
const dia3: string= "Quarta"; 
const dia4: string= "Quinta";
const dia5: string= "Sexta";
const dia6: string= "Sábado";
const dia7: string= "Domingo";

if(diaDasemana == dia1){

    alert("É um dia útil");
}
if(diaDasemana == dia2){

    alert("É um fim de semana");
}
