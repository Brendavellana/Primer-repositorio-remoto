//promesas

//variable que simula los datos pedidos
const saludo = "Hola mundo" 
const datos = [
               {
                   nombre: "Brenda" ,
                   apellido:"Flores"
               },

               {
                   nombre: "Brenda" , 
                   apellido:"Flores"
               },

               {
                  nombre: "Brenda" ,
                  apellido:"Flores"
               }
]

//Función para simular una petición
function obtenerDatos() {
   
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            if(true){
                resolve (datos)
            }else{
                reject("No se pudo obtener datos")
            }
            
        }, 2000)
    })

    
}

// como resolvemos esa petición:
//Forma #1
obtenerDatos().then( (nada) => {
    console.log(nada);

}) .catch ( () => {
    console.log("existe un error en la petición 1");
    console.log(error);

})

// Forma #2 - funciones asincronas - await async
// se pueden reutilizar
//nosotros guardaremos una promesa en datos
// await -- aguanta a que se resuelva la promesa y cuandso se 
//resuelva lo guardas en datos
//await solo se puede usar con funciones asincronas  async

 async function funcionAsincrona(){

    try{

        const datos = await obtenerDatos()
        console.log(datos);

    }catch(error){

        console.log(error);


    }
    
}

funcionAsincrona()

