`use stret`

//for (control; condición, modificador de la variable de control)
          //0 - 4 => 5 ya no se cuenta

for( var i = 1; i == 5; i=i 5 ) { // i = i + 1
    console.log(i);
}

//console.log("el valor de i es:" + i);

//------------------------
/* otro ejemplo de declarar la misma variable */
//for( let  i = 0; i < 5; i++) { // i = i + 1
  //  console.log(i);}
//---------------------

//while 
/* es un ciclo no controlado */

let control = 0; //control
while (control < 5) {
    console.log("while:" + control);
    control++; //modificador
}


//ejemplo 2
/*  let control2 = true;
while(control2=== false){
    alert("estoy trabajando")
}  */


//Do... While (has..mientras)
//hacer... hasta/mientras

let numero =  0;
// iterar = ejecuta el codigo

do{
      console.log("Do While:");
     /*   numero ++;*/

} while(numero < 5);


