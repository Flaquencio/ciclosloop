/*Estructuira de ciclo for
esta me pertmite repetir n veces una seccion de codigos
Este tiene 3 parametros como:
Inicio 
Fin 
Incremento
La sintaxis basica es la siguiente 
for(inicio, incremento, fin)
    bloque de codigo a repetir
*/

/*Operadores Aritmeticos
+ Suma
- Resta
* Multiplicacion
/ Division
% Modulo (residuo de la division )*/

/*varible let cuando se necesita que el dato se utilizado dentro
de una seccion de codigo, este va estar disponible en la seccion
en donde fue creado */

/*Variable de tipo var= Esta variable puede ser utilizada y estar disponible en todo el programa */





/* Ejercicio de tabla y notas

var tamaño =prompt("Ingrese el tama;o de la tabla")
tamaño = parseInt(tamaño)
var notas = [tamaño]
for(j=0; j<=tamaño; j++){
    notas[j]=parseInt(prompt("Ingrese la nota" + j+1))
}
 
document.write(notas);

*/

var numeros =[];
var mayor;
var menor;


for (var i = 0; i < 5; i++) { 
    var numero = parseFloat(prompt("Ingrese el número " + (i + 1) 
    + ":")); 
    numeros.push(numero); 
} 

mayor = numeros[0];
menor = numeros[0];

for(var j=1; j < numeros.length; j++){
    if (numeros[j] > mayor){
        mayor = numeros[j];
    }
    if(numeros[j] < menor){
        menor = numeros[j];
    }
}

document.write("El numero mayor es: " + mayor +"<br>")
document.write("El numero menor es: " + menor +"<br>")
