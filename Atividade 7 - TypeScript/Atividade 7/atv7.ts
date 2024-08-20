// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.

function media(nota1: number, nota2: number, nota3: number){

    const mediaAritmetica: number = (nota1 + nota2 + nota3) / 3

    alert(mediaAritmetica.toFixed(1));
}

let nota1 = Number (prompt("Digite a primeira nota:"));
let nota2 = Number (prompt("Digite a segunda nota:"));
let nota3 = Number (prompt("Digite a terceira nota:"));

media(nota1, nota2, nota3);