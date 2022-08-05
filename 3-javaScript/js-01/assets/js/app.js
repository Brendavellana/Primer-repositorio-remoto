
"use strict"
/* Javascrip de forma estricta */
´


/* Tipos de variables */
let a; //local
const b = 0; //constante y local

var c; //global

const PI =3.1416;


/* Scape - texto 
espacio en la que vive la variable*/

if(true){
    var d = 15;
}


/* var d = "hola"; */
d= "hola";

/* console.log(d);*/

/* Tipo de datos */

/* strig */
let cadena= "Hola Mundo!";
let cadena2= "Hola Mundo!"

//Number
let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

/* Boolean */
let boleano = true;
let boleano2 = false;


/* underfine-indefinido */
let variable;
console.log(variable);

//null
let vacio = null
console.log(vacio);

/* NaN Not a Number
No es un Numero
Tratar de realizar alguna operación aritmetica
con algun dato que no es un número */

/* Plantillas literales
      temple string
      literal strings */

      console.log(`Esta es una cadena ${5 + 4}`);
      console.log("Esta es una cadena normal ${5 + 4");


      let nombre = `Brenda`;

      /* Let presentación = `` */

      /* console.log("Mi nombre es" + nombre);
      console.log( `Yo me llamo ${nombre}`);


      console.log("<h1>Hola</h1>");
      console.log(`<h1>Hola</h1>`);
    */


/* Arreglos - matrices - arrays  */

let arr = [1, "A", null, undefined,[true, false]];

/* Notación de corchetes 
console.log(arr[4][0]); */

if (arr.length >=5){
   console.log("tiene mas de 5 elementos");

}

let arr2 = new Array("B", 2);
/* console. log(arr2); */


/* Objetos */
/* clave/ valor */

const persona = {
    nombre:`Brenda`, 
    edad: 31,
    hobbies: [
        "Leer",
        "Ver Srek 1 y 2",
        "comer"
    ],
    auto: {
          marca: "Seat",
          modelo: "Pointer",
          years: "2000"
    },
 saludar: function (){
    return "Hola"
 },



};

persona.nombre= "Panchito";

/* Notación de punto -
 nos permite acceder a la variable o 
 cambiar el nombre*/

console.log(`Mi nombre es ${persona.nombre}`);

console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);

console.log( `la marca de mi carro es ${persona.auto.marca}`);


console.log(`La acción que realizo es ${persona.saludar}`);


/*Arreglo de objetos*/
/* [{},{},{}] */





