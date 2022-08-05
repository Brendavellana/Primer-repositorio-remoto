`use striet`

/* control de Flujo */
/* dirigir nuestro codigo a cierto resultado */
/* Condicionales */
/* If */
let condicion = "false" //asignación

//== igual que, devuelve un verdadero cuando se cumple la condicion ==//


if (condition === "10") { // si 
      /* Codigo que se hace si se cumple 
       la condición A */
    
       console.log("Entro en la condición A");
 

} else if (conditionB) {
      /* Codigo que se hace si se cumple 
      la condición B */

} else if (conditionC) {
       /* Codigo que se hace si se cumple 
        la condición C */

    console.log("entro en la condición C");
} else{

       /*Codigo que se hace si no se cumple
      ninguna de las condiciones anteriores
      Condicion por defecto*/

  console.log("No cumple con ninguna");
}

function dividir (a, b) {
    if(b === 0){
        console.log("No se puede realizar la operación");
    }
    else{
     console.log(a/b);

    }
}
dividir(10,0)


/* Switch */
/*  */

let nuevaCondición = 156;
/*  == o === regresa un true si la condición se cumple */
/* se ocupa para evaluar expresiones si es x o y o z 
por asi decirlo */


let edad = 18;
console.log(9 == 20); // false
console.log(24 ==24); // true (verdadero)

switch (false){

      case "true": //valor 
        console.log("Buenos dias");
        console.log("Espero que te encuentres bien");
        break

      case "false":
        console.log("Nos vemos");
        break

      case"20":
        console.log("Te mando un saludo");
           break 

      case "15":
        console.log("Caso false");


      default: //valor por defecto
        console.log("No entendi tu mensaje");
        /* ennesta parteya no es necesario poner el break
        solo por buenas practicas se puede poner
        no afecta en nada */

        /* defaul valor por defecto */
   }




/* otro ejemplo */

let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }


/* ejemplo 1 */
    switch(elegir){

        case "sumar":
            console.log("Vamos a sumar");
            break
    
        case "restar":
            console.log("Vamos a restar");
            break
    
        case "dividir":
            console.log("Vamos a dividir");
            break
    
        case "multiplicar":
            console.log("Vamos a multiplicar");
            break
    
        default:
            console.log("No entiendo");
}

/* ejemplo 2 mismo problema */
/* en if tiene que especificar  */ 
    if(elegir === "sumar"){
    
        console.log("Vamos a sumar");
    
    }else if(elegir == "restar"){
    
        console.log("Vamos a restar");
    
    }else if(elegir == "dividir"){
    
        console.log("Vamos a dividir");
    
    }else if(elegir == "multiplicar"){
    
        console.log("Vamos a multiplicar");
    
    } else {
    
        console.log("No entiendo");
    
    }
    