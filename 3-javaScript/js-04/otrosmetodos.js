
//metodo sort()
//ordenar los elementos de un arreglo


const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);

const arr2 =["Hola", "adios", "bienvenido","calle"];

arr2.sort( );

console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80];



arr3.sort((a, b)=> b - a);// odena numeros de forms descendente de menor a mayor
arr3.sort((a, b)=> a - b);// ordena numeros de mayor a menor

console.log(arr3);


//Función declarada
//hoisting
//un proceso de reacomodo automático del código

function sumar(a, b){
  return a + b;

}
console.log(sumar(5,7));

let a = 2;
console.log(a);


//función expresada
//se puede guardar dentro de una variable
//no es anonima

const multiplicar = function(a, b){
    return a * b;
}

console.log(multiplicar(3,5));


//funciones flecha
//son funciones expresadas

/* const dividir = (a,b) => {
     return a/b;
}

console.log(dividir(10, 2)); */

//ejemplo 2 de funcion flecha


const dividir = (a,b) => a / b;

console.log(dividir(10, 2));


//metodo forEach()
//forEach
//es un ciclo que recorre en automatico tod nuestro arreglo

const arrNumeros =[1,4,6,8,10,20,30];


/*for( let i=0; i< arrNumeros.length; i++){
      arrNumeros[i] = arrNumeros[i] * 2;

} */

arrNumeros.forEach((elemento) =>
 console.log(elemento *= 2)); //elemento = elemento * 2


//forEach(elemento,indice,arreglo completo)


