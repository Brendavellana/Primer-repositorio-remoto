`use stret`
/* Ejercicio #3 Escriba bucles mientras hace lo siguiente: */

/*imprime el valor de la variable xValue, disminuyéndolo en 0.5 cada vez,
siempre que xValue siga siendo positivo.*/

/* - Escriba un método mRepeatedly con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 escribe [1] [2] [3] [4] [5] [6]*/

/* - Escriba un método con un bucle while que calcule la suma de los primeros n enteros positivos:
suma = 1 + 2 + 3 + … + norte
Ejemplos:
n = 5 suma = 15
n = 19 suma = 190 */

 let xvalue = 5;

while (xvalue > 0){
    xvalue  = xvalue - .05;
    console.log(xvalue);

}

let numero = 0;
while (numero> 0 && numero < 100) {
    numero++
    if(numero%2 !==0){
        console.log(numero);
    }
}




