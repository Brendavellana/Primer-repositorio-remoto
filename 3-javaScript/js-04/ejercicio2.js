`use stret`

/* Ejercicio #2
Escriba un programa JavaScript para construir el siguiente patrón, utilizando un bucle anidado para.

*  
* *  
* * *  
* * * *  
* * * * *             
-------------------------------*/
//
for(let i=1; i<= 5; ++i) { //indica la altura el primer for
      let resultado = "";

      for(let j =1; j <= i; ++j) { //la j es una variable de iteración
        resultado += "* "; //se esta sumando constantemente

      }
       
      console.log(resultado);

}

