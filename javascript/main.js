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

//Ejercico mio
/*
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
*/

/*
//Ejercicio del maestro

//ingresando por teclado el tama;o del arreglo
var tamanio = parseInt(prompt("ingrese el tamaño del arreglo"))
//Iniciando el tama;o del arreglo
var arreglo =[tamanio]
//Inicializamos la variable mayor
mayor=arreglo[0]
//Inicializamos la variable menos
menor=arreglo[0]
//ingreso de los datos por teclado mediante un ciclo for
for(i=0; i < tamanio; i++){
    arreglo[i]=parseInt(prompt("Ingrese el numero " + (i+1))); 
}
//Imprir en pantalla los datos
document.write(arreglo + "<br>")

//Recorremos el arreglo
for(i=0; i< tamanio; i++){
    if(arreglo[i]>mayor){
        mayor=arreglo[i]
    }
    if(arreglo[i]<menor){
        menor=arreglo[i]
    }
}

document.write("El numero mayor es: " + mayor + "<br>")
document.write("El numero menor es: " + menor + "<br>")*/

//Quiero un programa en JS donde el ususario ingrese
//un numero por teclado y verifique que si ese nuemro
//es primo o no.
//Un numero es primo cuando es divisible para 1 y si mismo

var numero= prompt("Ingrese el numero")
//va a contar las veces que se repite el numero 0
var contador = 0
//realizo un ciclo desde uno hasta el numero ingresado y se va incrementando en 1
for(i=1; i<numero; i++){
    modulo = numero%i
    if(modulo == 0){
        contador = contador+1
    }
    document.write(modulo + "<br>")
}

if(contador==2){
    document.write("El numero es primo")
}else{
    document.write("El numero no es")
}