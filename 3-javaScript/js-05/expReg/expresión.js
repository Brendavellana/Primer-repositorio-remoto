`use stret`

//Expresion regular
//consiste en un patron encerrado entre diagonales /   /
//              /sol/

let texto = "hoy parece que va a salir el sol";

let buscar= /sol/;
console.log(buscar, test(texto));

// segundo ejemplo 
//     

let texto01= "la espera en el aeropuerto de la LA";
console.log(buscar, test(texto));
let buscar= /LA/;

//tercer ejemplo
//   /[eo]/
//busca dentro de la cadena de texto eo 
// y marca el primer simbolo

let texto01= "te marque anoche";
let buscar = /[eo];

console.log(buscar.test(texto01));


