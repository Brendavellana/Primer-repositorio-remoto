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

//cuarto ejemplo
//para buscar numeros
let texto01 = "o = 9";
let buscar =/[1 - 5]/;
console.log(buscar.test(texto01));

//ejemplo de busqueda

let texto01 = "los numeros primos son 2 3 5 7 dentro de los 10 primeros numeros";
let buscar =/\d{3}/;
console.log(buscar.test(texto01));



//ejemplo
//para buscar correo electronico

let texto01 = "usuario@survidi.com";
let buscar = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;

console.log(buscar.test(texto01));



