//Esto es para crear elementos desde el Archivo js y no el html
// es asi
    //  creamos el el elemnto que querramos
const elemento1 = document.createElement("p");
const elemento2 = document.createElement("h1");
const elemento3 = document.createElement("span");
const elemento4 = document.createElement("h5");

// para agregarle texto a cada uno hay 2 formas 
//forma 1
elemento1.innerHTML = "soy un parrafo";

//forma 2
const texto = document.createTextNode("Soy un titulo h1");
elemento2.appendChild(texto);

//Para agregarlos al html debe ser por medio de un elemento padre ya sea un main, div, body
// o una clase padre 

//elemnto padre imaginario
let padre = document.querySelector("#padre");

//agregar estos datos
padre.appendChild(elemento1); //  si es uno
padre.append(elemento1,elemento2); // si son mas


//podemos tambien tener varios elementos dentro de un elemento padre y queremos ponerlo en un posicion 
//especifica, como ejemplo:

/**CLASS PADRE: 
 * PARRAFO 1
 * PARRAFO 3
 * PARRAFO 4
 */

//para agregar en una posicion podemos usar el insertBefore("elemento a agregar","elemento de referencia")
// este agregara el elemento antes del elemento mencionado 

padre.insertBefore(elemento2,elemento3);
//asi agregariamos el parrafo 2 antes del parrafo 3

//Otra manera que tenemos  seria insertAdjacentElement("posicion", elemento)
/**
 * en la posicion tienes que poner entre comillas y tienes 4 valores
 * beforebegin: agrega el elemento antes del padre osea fuera del div
 * afterbegin: este lo agrega ya como elemento hijo al principio
 * beforeend: este lo agrega dentro del div pero al final
 * afterend: este lo agrega despues de terminar el div lo imprime fuera
 */
padre.insertAdjacentElement("afterbegin",elemento1);

//Atributos
//Para agregar ya sea id o class a un elemento es asi

//            el nomrbre del atributo - el elmento
elemento1.setAttribute("class","parrafo");


//eliminar
//ejemplo borrando el elemento1
//para eliminar podemos hacerlo desde la clase padre eliminando el hijo
padre.removeChild(elemento1);

//podemos eliminarlo directamente
elemento1.remove();

//tambien podemos remplazarlos asi 

    //el que queremos poner - el que quremos borrar
padre.replaceChild(elemento2,elemento1);