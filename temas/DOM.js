//DOM DOCUMENT OBJECT MANIPULATION

//ES APRENDER A MANIPULAR LOS ELEMENTOS DE HTML DESDE JAVASCRIPT

let porID = document.getElementById("parrafo1");// es solo para uno
let porClase = document.getElementsByClassName("parrafo");// devuelve un array siempre
let porEtiqueta = document.getElementsByTagName("p");// devuelve un array siempre
let bodys = document.getElementsByTagName("body");

//colocar texto 
porID.innerHTML = "POR ID";
porClase[0].innerHTML = "POR CLASE";
porEtiqueta[2].innerHTML = "POR ETIQUETA";


//asi se modifica el estilo (no se puede por etiqueta)
porID.style.backgroundColor = "blue";
porClase[0].style.color = "red";
