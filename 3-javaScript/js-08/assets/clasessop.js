`use estrue`

// constructor crea el objeto e inicia y pone un estado a las variables
//por fuera de la clase, cuando se llama al constructor, se va a ingresar el valor que va a llegar hasta el atributo this.nombre
// cada objeto es una copia de la clase Persona, y cada uno tiene sus propios valores

// el guin _ sirve para hacer publico a un valor

class Persona{
     constructor(nombre,apellido){  // atributos estan encapsulados o privados
     this._nombre= nombre;
     this._apellido= apellido;
  }
get nombre(){
    return this._nombre;
  }
   set_nombre(nombre){
    this._nombre = nombre;
   }
}
 
let persona1 = new Persona("Adhali","Camacho"); //forma clasica de implementar un ejemplo 
console.log(persona1);

persona1.nombre = "Adhali";
console.log(persona1.nombre);



let persona2 = new Persona("Pablo","Sanchez"); //forma clasica de implementar un ejemplo 
console.log(persona2);



------------------------
codigo bien davis


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }
}

let persona1 = new Persona('David','Castellanos');

console.log(persona1);

persona1.nombre = 'David Guzman'

console.log(persona1.nombre);

let persona2 = new Persona ('Arturo', 'Guzman');
console.log(persona2);
