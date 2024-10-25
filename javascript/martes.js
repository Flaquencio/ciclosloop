
//js ingrese un numero por teclado el numero inicla de un rango
//y el numero final de un rango

var inicio = prompt("Escriba desde que numero quiere empezar:");
var fin = prompt("Escriba en que numero quiere acabar:");
var primos = [];
//indicamos en donde queremos los numeros inicien, terminen y sume 
for (var numero = inicio; numero <= fin; numero++) {
    var residuo = 0;
    
    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            residuo = residuo + 1;
        }
    }
    
    //ayuda a que si encuentre dos nuemros en 0 los guarde 
    if (residuo === 2) {
        primos.push(numero);
    }
}


document.write("Los numeros primos entre " + inicio + " y " + fin + " son: <br>");
document.write(primos.join(", "));