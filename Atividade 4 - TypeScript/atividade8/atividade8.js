// 8. 
var numero1 = Number(prompt("Digite o primeiro número: "));
var numero2 = Number(prompt("Digite o segundo número: "));
var numero3 = Number(prompt("Digite o terceiro número: "));
if ((numero1 <= numero2) && (numero2 <= numero3)) {
    alert(numero1 + " " + numero2 + " " + numero3);
}
/*else if((numero1 <= numero3)  && (numero3 <= numero2)){

    alert(numero1 + " " + numero3 + " " + numero2);

}*/
else if ((numero2 <= numero1) && (numero1 <= numero3)) {
    alert(numero2 + " " + numero1 + " " + numero3);
}
else if ((numero2 <= numero3) && (numero3 <= numero1)) {
    alert(numero2 + " " + numero3 + " " + numero1);
}
else if ((numero3 <= numero1) && (numero1 <= numero2)) {
    alert(numero3 + " " + numero1 + " " + numero2);
}
else if ((numero3 <= numero2) && (numero2 < numero1)) {
    alert(numero3 + " " + numero2 + " " + numero1);
}
