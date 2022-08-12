//crear un elemento
const imagen = document.createElement("img");

console.log(imagen);

//modificar los atributos html del elemento


imagen.src = "https://placeimg.com/200/200/animals";
imagen.alt =  "imagenes aleatorias";


//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);


// forma correcta de insertar este elemento
// 1.- se crea el elemento que contendra la imagen
// 2.- debemos seleccionar el elemento padre

const padreImg = document.getElementById("padreImg");

//3.- crear el elemento

const imagen2 = document.createElement("img");

//4.- modificamos los atributos del elemento 

imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = "Imagenes de la naturaleza";


//5 - insertar elemento
padreImg.appendChild(imagen2);

//Utilizar forEach para pintar datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limon", "Granada", "Melon", "Platano", "Guayaba"];


const listaFrutas = document.getElementById("frutas");

("frutas");


//forma 1
   /*frutas.forEach((Element) => {
    const li = document.createElement("li");
    listaFrutas.appendChild(li)

}); */


//forma 2
frutas.forEach((el) => {
 listaFrutas.innerHTML = `<li>${el}</li`;

});


