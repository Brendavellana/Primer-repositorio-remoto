// URL a consumir:

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";



// Elementos del DOM:

const imgPokemon = document.getElementById("img-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon");

const listaHabilidades = document.getElementById("Lista-hablidades");

const listaTipos = document.getElementById("Lista-tipos");

console.log(formulario);

// eventos 

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon);

    const nuevaBusqueda = urlPokemon + inputPokemon.value
    console.log(nuevaBusqueda);


})


//Funciones:

asyc function name(params) {
    
}




async function obtenerPokemon(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  /*     console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default);
 */

  const pokemon = {
    nombre: datos.forms[0].name,
    habilidad: datos.abilities,
    id: datos.id,
    tipos: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default,
  };


  //imagen, nombre y ID
  imgPokemon.src = pokemon.imagen;
  idPokemon.textContent = `ID: ${pokemon.id}`; //cONCATENAMOS EL VALOR JALADO CON EL ID:
  nombrePokemon.textContent = pokemon.nombre;

//Habilidades
console.log(pokemon.habilidad);

let temple = ` `

for(let i=0; i <pokemon.habilidad.length; i++){

    const nombreHabilidad = pokemon.habilidad[i].ability.name
   
    console.log(pokemon.habilidad);

    temple = `<li class="List-group-item"> {nombreHabilidad} </li>`

}

listaHabilidad.innerHTML += templete;

    //tipos

    let 
    pokemon.tipos.forEach((tipo)=>{

       constnombreTipo = tipo.type.name;
       temple = `<li class="List-group-item"> {nombreHabilidad} </li>`

    })
listaTipos.innerHTML += templateTipos

}catch{
    alert("Pokemon")
}
obtenerPokemon(urlPokemon)


