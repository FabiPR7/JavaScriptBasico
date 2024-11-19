//ES PARA IDENTIFICAR LOS ELEMENTOS DEL HTML DE MANERA DISTINTA EL GETELEMEENT

//VAMOS A IMAGINAR QUE TENEMOS UN HTML CON  PARRAFOS 
// PARRAFO 1 = ID="parrafo1"; | PARRAFO 2 = class="parrafos" |PARRAFO 3 = <p>PARRAFO 3</p>

//iniciamos con una variable o constante asi

//con id se pone el nombre de la id pero delante se pone un numeral
let parrafo1 = document.querySelector("#parrafo1");

// para las clases se pone el selector pero con el "All" que asi almacena todos los 
//valores con esta clase 
let parrafo2 = document.querySelectorAll(".parrafos");

//para las etiquetas se pone el nombre de la etiqueta y se pone lo mismo que en las clases
let parrafos3 = document.querySelectorAll("p");


// en la seleccion de etiquetas y clases al coger a todos con este valor se guarda en un NodeList
// es meejor trabajar con Arrays asi que es recomendable convertirlo asi

                        //conversion en array
let parrafoClasesArray = [...parrafo2];
let parrafoEtiquetaArray = [...parrafos3];