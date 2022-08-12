`use strue`
//ejercicio
/*Objeto persona que tenga
correo electronico
apellido
edad
nombre
e instarciarlos/llamarlos */
/* this es una palabra reservada que se usa en muchos lenguajes de programación, se usa para indicar o apuntar a cierta variable o función en particular
 */
/* this lo entiende porque está adentro del mismo objeto,
 */

let x = 10;
console.log(x.length);

let persona= {
    nombre: "Brenda",
    apellido: "Flores",
    edad: 25,
    email: "brendavellaneda@gmail.com",
   /* nombreCompleto: function(){
       return this.nombre + " " + this.apellido;// hacemos referencia con la palabra this
            
    }  */

     idioma: "es",
get leng (){
    return this.idioma.toUpperCase(); //mayusculos
    },
set leng(lang){  // 
    this.idioma = lang.toLowerCase(); //minusculos
    }
}
//console.log(persona.leng);
persona.lang = "Es";
console.log(persona.leng);
console.log(persona.idioma);

persona.tel = "5540850993";
persona.tel = "5556424340";

console.log(perssona);
console.log(persona.nombre);
console.log(persona.nombreCompleto);


// for in
//como visualizar un atributo con tipo Json

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona)
console.log(persona.String);



//metodo get 
//es una funcion que puede retornar el valor mofificado que se hace en el get
// se encarga de recibir un valor





