`use striet`

function miFuncion(a,b){
    return (a+b);
}
let resultado = miFuncion (3,6);
console.log("El resultado es:"+resultado);

/* --------Función Expresión o anonima------ */
/* no tiene nombre, se especifican los parametros, se define
la accion de esa expresión */
/* funccion asignada a una variable/el nombre lo lleva
en la variable */

let suma= function (a,b){
    return(a+b)
};

let res = suma (2,3);

console.log("La suma es:" + res);


/* ejemplo 2 con la misma variable */
/* otra forma de sacar el resultado */

let suma = function (a, b ){ return (a+b)
    return(a+b)};

resultado = suma (2,3);

let caracteres = "La suma es: ";

console.log(caracteres + resultado);

/* Actividad: Hacer funciones de expresión 
para todas las operaciones aritmeticas */
/* SUMA/MULTIPLICACIÓN/DIVISIÓN */

/* RESTA */
let miResta= function (a,b){
    return(a-b)
};
let res = miResta (2,3);

console.log("La resta es:" + res);

/* MULTIPLICACIÓN */

let multi= function (a,b){
    return(a * b)
};

let res = multi(2,3);

console.log("La multiplicación es:" + res);

/* DIVISION */

let DIVISION= function (a,b){
    return(a/b)
};

let res = DIVISION (2,3);

console.log("La división es:" + res);


/*  ----------- Self Invoking------------ */
/* funcion que es invocada y no es reutilizable */
/* También se conoce como función autoejecutable
Digamos que va encapsulada */


(function (a,b){
    console.log("El resultado es: " + (a+b));
})(3, 4);





