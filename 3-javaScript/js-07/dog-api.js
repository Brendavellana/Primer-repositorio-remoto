`use strict`


//URLs para consumir
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

//elementos del DOM
const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);

const btn = document.getElementById("btn-perrito")
console.log(btn);

//eventos
btn.addEventListener("click", () =>{
    console.log("Boton presionado");

    //agregar la funcionalidad
    obtenerPerritoaleatorio(urlAleatorios)

})

//funciones
 async function obtenerPerritoaleatorio(url){

    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message); 
    console.log(datos.status);

    imagenPerrito.src = 
}

//obtenerPerritoALeatorio(urlAleatorios)
