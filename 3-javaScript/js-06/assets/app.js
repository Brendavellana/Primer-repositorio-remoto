//console.log(document.URL);//
// tipos de elementos

       //getElementById()

console.log(document.getElementById("parrafo1").textContent);

const parrafo1 = document.getElementoById("parrafo1");

console.log(parrafo1);

parrafo1.textContent = "Hola desde el parrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";


        //querySelector()
//etiqueta = p
//clase = .parrafo
//id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

// \n --- este signo inserta un salto de linea === <br>
//también son expresiones regulares llamados caracteres de escape

// \t --- para tabulación


          //queryselectorAll()
//nos regresa una lista de nodos- nodeList

const parrafos = document.querySelectorAll("p");
   console.log(parrafos);

   parrafo2[2].style.fontSize = "2rem";

   //css - font-size 
   //js- fontSize - Lower camel case


   //Modificar los atributos de html
const enlace = documet.getElementById("enlace");
console.log(enlace.href);

enlace.href = "https://www.youtube.com/"
enlace.target = "_blank";
enlace.textContent = "Enlace de Youtube"



// Reemplazar contenido
// nodeName -- nos permite saber el nombre del nodo que estamos utilizando
//
const parrafo4 = getElementById ("parrafo4")

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);// para cambiar texto
console.log(parrafo4.innerHTML); // muestra html que haya en el interior del elemento
console.log(parrafo4.outerHTML);//muestra el contenido html, incluyendo al elemento


//parrafo4.outerHTML =`a; href="http:/google.com">enlace</a`>;// reemplaza el elemento completo

//parrafo4.innerHTML =`a; href="http:/google.com">enlace</a`>;// reemplaza el  contenido del elemento


//parrafo4.outerHTML = `<div class= "elemento">Este es un div</div`;


//Js permite modificar las clases css
// utilizando style


console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add(`elemento`);

const cambiarColor = () =>{
    parrafo4.classList.toggle(`elemento`);

}
 cambiarColor();//se agrega la clase
 cambiarColor();//se quita la clase

 