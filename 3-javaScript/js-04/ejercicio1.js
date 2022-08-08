`use stret`
/* Ejercicio #1
Parte 1
Hay tres personas esperando al banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden.*//


//* Parte 2
/*Dos personas más se agregan al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?*/


/*Parte 3
Resulta que David estaba guardando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Una persona más (Elena) aparece y va al final de la línea. ¿Cómo es la cola? */


const arreglo = ("Sofia","David","Juan")
console.log(arreglo);


arreglo.push("Sara", "Agustin")
arreglo.shift();

console.log(arreglo);


 arreglo.splice(1,0, "Renata");
 arreglo.push ("elena");
 
 console.log(arreglo);


