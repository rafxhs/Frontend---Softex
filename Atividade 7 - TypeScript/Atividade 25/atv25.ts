// 25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
// string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".

function inverterString(palavra: string){

    alert(palavra.split('').reverse().join(''));

}

let palavraDoUsuário = (prompt("Digite a palavra 'hello' toda em minúsculo:"));

if (palavraDoUsuário !== null) {
    inverterString(palavraDoUsuário);
}

