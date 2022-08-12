
/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/

const urlGatos = "https://api.thecatapi.com/v1/images/search"

//elementos del DOM
const imagenGato = document.getElementById("imgGatito");

console.log(imgGatito);


//funciones
 async function obtenergatitoaleatorio(url){

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos[0].id); 
    console.log(datos[0].url);

    imagGatito.src = datos[0].url;

 }
    obtenergatitoaleatorio(urlGatos)

