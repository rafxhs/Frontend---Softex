/*21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
"Você é casado(a)", "Você é solteiro(a)", etc.).*/

const estadoCivil= prompt("Qual seu estado civil?");

alert("Você é " + estadoCivil + "(a)");

/*22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e
exiba o resultado.*/

const base= Number (prompt("Digite o valor que será para a base do retângulo: "));
const altura= Number (prompt("Digite o valor que será para a altura do retângulo: "));

alert("A área do retângulo é= " + base*altura);

/*23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
sua escolha).*/

const nomeDaCidade= prompt("Digite o nome da sua cidade: ")?.trim().toLowerCase();

if((nomeDaCidade) && (nomeDaCidade[0]) === "s" ){

    alert("O nome da sua cidade começa com S");

}
else{

    alert("O nome da sua cidade não começa com S");
}

//24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.

let numDecimal1= Number(prompt("Digite o primeiro número decimal: "));
let numDecimal2= Number(prompt("Digite o segundo número decimal: "));
let resto= numDecimal1%numDecimal2

alert("O resto da divisão de" + numDecimal1 + "e" + numDecimal2 + "é" + resto);

//25. Solicite ao usuário um número decimal e converta-o em um número inteiro.

const numeroDecimal= Number (prompt("Digite um número decimal: "));

alert("O número inteiro fica: " + Math.trunc(numeroDecimal));

/*26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
novamente para uma string antes de exibi-lo.*/

const numString= prompt("Digite um número: ");
const numInt= Number(numString);
const numSoma= numInt + 10
const somaString= String(numSoma);

alert("A soma do número +10 é = " + somaString);

/*27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
separadamente, convertendo-os em números inteiros.*/

const data1= prompt("Digite sua data de nascimetno no formato dd/mm/aaaa");
const data2= data1?.split("/");

if ((data2) && (data2).length === 3){

    const dia= data2[0];
    const mes= data2[1];
    const ano= data2[2];

    alert("Você nasceu no dia " + dia + "no mês" + mes + "no ano" + ano);
}

/*28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
mensagem completa, como "Você mora em [cidade], [estado].".*/

const nomeDaCidade1= prompt("Digite o nome da sua cidade: ");
const nomeDoEstado= prompt("Digite o nome do seu estado: ");

alert("Você mora em " + nomeDaCidade + "," + " " + nomeDoEstado);

/*29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".*/

const anoDeNascimento= prompt("Digite o em que você nasceu: ");

alert("Bem-vindo ao nosso programa, nascido em " + anoDeNascimento);

/*30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
string, separando-os com um espaço.*/

const numInteiro= prompt("Digite um número inteiro: ");
const string1= prompt("Digite qualquer frase");

alert(numInteiro + " " + string1);