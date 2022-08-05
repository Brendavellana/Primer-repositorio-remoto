`use striet`

/* Funciones como Objetos */
/* Concretamente son objetos Function */
//ejemplo 1
function miFunción (a , b){
return (a * b);
}

/* ejemplo 2  mismo planteamiento*/
/* LOS PARAMETROS SON LA LISTA DE VARIABLES 
QUE DETERMINA ESTA FUCION  */
/* TENEMOS TRES PROPIEDADES UNA ACCIÓN */
function miFunción (a=6, b = 7){
    let res = 0;// propiedad
     res (a * b); // accion o proceso
return res;
}
console.log(typeof miFunción);
var miFunciónTexto = miFunción.toString();
console.log(miFunciónTexto);
