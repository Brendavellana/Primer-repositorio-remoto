`use stret`

/* Arreglos */
/* Coleccion de elementos */
//cada elemento ocupa una posición
//esa posición se conoce como indice 
//y comienza a partir de cero

let arr = [1,2,3,4];
console.log(arr);

//prodiedades- describen el objeto
// metodos- son las accciones que puede realizar un objeto

console.log(arr[2][0]);
arr[4] = 190;
arr[4] ="Hola"
console.log(arr);

//métodos de arreglos
//se utilizan para manipular información
//y se usan muy bien con los ciclos

const arreglo = ["adios"];


           //push()
//push() nos permite agregar arreglos al final
// de nuestra variable

arreglo.push(2);
arreglo.push(true);

let num = 500;

console.push(num);
console.log(arreglo);

           //unshift()
//agrega elementos al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B")

console.log(arreglo);

console.log(typeof (arreglo[4]));


         //pop()
//Metodos para quitar elementos
//pop()  -- Quita un elemento final del arreglo

 let dato1 = arreglo.pop();
 console.log(dato1);

console.log(arreglo);

             //shif()
//Quitar un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

      //splice()
//nos permite quitar una parte de cualquier
//posición de nuestro arreglo
//permite reemplazar un elemento
//permite insertar un elemento en una posición en especifico

arreglo.splice(1, 1,"parangaricutirimicuaro" , 568980);
//splice ( )
//(posición de inicio, 
//cantidad de elemtos a afectar)
// elemento ó elementos que queremos insertar o agregar

console.log(arreglo);


// todos los metodos ateriores modifican el arrglo original


/*  Hay metodos que no modifican el arreglo final
solo hacen una copia y modifican esa copia*/
        // a continuación

        //slice()
//corta partes de un arreglo
//slice// --->/*posición a partir de la cual va a cortar*/
 let dato3 = arreglo.slice(0,2);
 
 
// debemos indicar un rango

 console.log(dato3);

 console.log(arreglo);


//filter
//map
//
