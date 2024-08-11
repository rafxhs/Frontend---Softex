/*31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
adicionando o símbolo de moeda da sua escolha.*/
var nomeDoProduto = prompt("Escolha um desses produtos e digite abaixo o nome do produto escolhido: 1.Feijão 2.Arroz 3.Macarrão.");
alert(nomeDoProduto + " " + "R$ 8,00");
/*32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro
desse número.*/
var numeroInteiro2 = Number(prompt("Digite um número inteiro: "));
var dobroDonumero = Math.pow(numeroInteiro2, 2);
alert("O dobro do número digitado é: " + dobroDonumero);
/*33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
agradecimento personalizada.*/
var email = prompt("Digite o seu e-mail: ");
alert("Seu e-mail é: " + email + " .Agradecemos por nos informar!");
/*34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
(divisão inteira) entre eles.*/
var num1 = Number(prompt("Digite o primeiro número inteiro: "));
var num2 = Number(prompt("Digite o segundo número inteiro: "));
num1 = Number(num1);
num2 = Number(num2);
var diferenca = num1 - num2;
alert("A soma dos dois número é= " + (num1 + num2) + "\n Quociente: " + (num1 / num2) + "\n Diferença: " + diferenca);
/*35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do
triângulo.*/
var base = Number(prompt("Digite o valor que será para a base do triângulo: "));
var altura = Number(prompt("Digite o valor que será para a altura do triângulo: "));
var area = (base * altura) / 2;
alert("A área do triângulo é= " + area);
//36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
var raio = Number(prompt("Digite o valor que será para o raio da circuferência: "));
var perimetro = 2 * 3.14 * raio;
alert("O perímetro é = " + perimetro);
/*37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
perímetro do retângulo.*/
var base1 = Number(prompt("Digite o valor que será para a base do retângulo: "));
var altura1 = Number(prompt("Digite o valor que será para a altura do retângulo:"));
var perimetro1 = 2 * (base1 + altura1);
alert("O perímetro do retângulo é = " + perimetro1);
/*38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
aritmética desses números.*/
var numDecimal1 = Number(prompt("Diga um número decimal"));
var numDecimal2 = Number(prompt("Diga um segundo numero decimal"));
var numDecimal3 = Number(prompt("Diga um terceiro numero decimal"));
var media = (numDecimal1 + numDecimal2 + numDecimal3) / 3;
alert("A média é = " + media);
/*39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
viveu (considerando um ano com 365 dias).*/
var idade1 = Number(prompt("Digite a sua idade: "));
alert("Você já viveu: " + idade1 * 365 + " dias e " + idade1 * 365 / 12 + " meses.");
/*40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
para dólares e exiba o resultado.*/
var real = Number(prompt("Digite um valor em reais: "));
var dolar = Number(prompt("Digite um valor em dólar: "));
alert("Na conversão, você tem " + real / dolar + " doláres.");
//41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
var numDec = Number(prompt("Digite um número decimal: "));
numDec = Math.round(numDec);
alert("O arredondamento do número decimal para o valor mais próximo é = " + numDec);
/*42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *
n3.*/
var num1Int = Number(prompt("Digite o primeiro número inteiro: "));
var num2Int = Number(prompt("Digite o segundo número inteiro: "));
var num3Int = Number(prompt("Digite o terceiro número inteiro: "));
alert("Resultado da operação é = " + (num1Int + num2Int) * num3Int);
/*43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
a fórmula: Fahrenheit = (Celsius * 9/5) + 32.*/
var temperatura = Number(prompt("Digite uma temperatura em Celsius: "));
var fahrenheit = (temperatura * 9 / 5) + 32;
alert("A temperatura em Fahrenheit é de " + fahrenheit + " " + "F°");
