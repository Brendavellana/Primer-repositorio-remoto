/* 1er ejercicio */

let carreritas = ["Lucia", "Roberto,", "Maria","Jesus", "Andrea", "jose"]
console.log(carreritas);

carreritas.unshift ()



carreritas.splice (2,2, "Andrea")
console.log(carreritas);

carreritas.pop()
console.log(carreritas);

let carreritas = ["lucia", "Roberto", "Maria", "jesus", "Andrea", "jose"]
console.log(carreritas);

carreritas.unshift ("federico");
carreritas.pop ("jose");

carreritas.splice (3,4,"Maria");


carreritas.splice (5,2,"Andrea");


carreritas.splice (5,5,"jesus");


carreritas.splice (2,0, "Cristóbal", "Fernando", "Armando");
console.log( "al final de la carrera las posiciones del primer al ultim lugar fueron " + carreritas);
ese es le código del 1





/* Crea una calculadora para convertir un valor ingresado por el usuario a grados Celsius, Fahrenheit y Kelvin.

Considera:

Solicitar el valor por medio de un prompt
Crear funciones para realizar los cálculos
Mostrar los resultados mediante alertas
 */

function convertirCelciusaFahrenherit (celcius){
    let resultado =celcius + 9 / 5.0 + 32; //unidades
}


function  convertirFahrenheritaCelcius(Fahrenheit){
    let resultado = Fahrenheit + 
}


/* segundo ejemplo */

let f = prompt('Cuantos grados que quieres convertir')

if (f){
    f = f - 32
    f = f/ 1.8
    console.log(`Estos son tus grados en celsius ${f}`)
}

let c = prompt('Cuantos grados celsius quieres convertir')

if (c){
    c = c + 273.15
    console.log(`Estos son tus grados en K ${c}`)
}
mira ese ya comparte
mas bien ya sirve



/* otro ejercicio */

const pesoPayasos = 112
const pesoMuñecas = 75
let ventaPayasos = prompt("Ingresa el número de payasos")
let ventaMuñecas = prompt("Ingresa el número de muñecas")
let pesoPack = ((pesoMuñecas * ventaMuñecas) + (pesoPayasos * ventaPayasos))

numeroPacks= (pesoPack / 1000)

if (numeroPacks < 1){
    alert("Se enviara 1 paquete");
}else if (numeroPacks > 1){
   alert("Se enviaran "+ numeroPacks + " paquetes");
}

alert("El peso total de paquetes es: " + pesoPack + " gramos");



