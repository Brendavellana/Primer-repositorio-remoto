const url = "https://dog.ceo/api/breeds/image/random"

//respuesta de la petición
fetch(url).then(() =>{
    console.log(respuesta);
})

//obtener la información de la petición de una base de datos
//forma 1
fetch(url)
.then((resp) => resp.json())
.then((datos) => {

    console.log(datos);
})

//obtener la información de la petición de una base de datos
//forma 2

 async function obtenerPerritoAleatorio() {

    try{
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);

}catch(error){
    console.log(error);
}

 }

 
obtenerPerritoAleatorio()