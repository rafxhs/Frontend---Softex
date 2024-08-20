/* 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
mensagem informando se é solteiro, casado, divorciado ou viúvo.*/
var estadoCivil = prompt("Digite o seu estado civil:");
switch (estadoCivil) {
    case "solteiro":
        alert("Você é " + estadoCivil + "(a)");
        break;
    case "solteira":
        alert("Você é " + estadoCivil + "(o)");
        break;
    case "casado":
        alert("Você é " + estadoCivil + "(a)");
        break;
    case "casada":
        alert("Você é " + estadoCivil + "(o)");
        break;
    case "divorciado":
        alert("Você é " + estadoCivil + "(a)");
        break;
    case "divorciada":
        alert("Você é " + estadoCivil + "(o)");
        break;
    case "viúvo":
        alert("Você é " + estadoCivil + "(a)");
        break;
    case "viúva":
        alert("Você é " + estadoCivil + "(o)");
        break;
}
