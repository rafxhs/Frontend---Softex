/* 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
exibindo uma mensagem apropriada.*/
var numInt = Number(prompt("Digite um número inteiro: "));
if ((numInt % 3 == 0) && (numInt % 5 == 0)) {
    alert(numInt + " é divisível por 3 e por 5");
}
