//*****constantes*****
const lista = document.querySelector("#lista");
const texto = document.querySelector("input[type='text']");
const tareas = document.querySelector("#tareas");

//*****variables*****
let valorId =  0;
let tareasCompletadas = 0; 
let tareasIncompletadas = 0;


//******eventos******
//Agrega tarea completada
lista.addEventListener("click",(event)=>{
    if(event.srcElement.nodeName == "INPUT"){
       cambioTarea(tareasIncompletadas,tareasCompletadas);
    }
});

//agrega tarea del formulario
userInput.addEventListener("submit",(event)=>{
    event.preventDefault();
    addtask();}
);

//elimina tarea
lista.addEventListener("click",(event)=>{
    if(event.srcElement.nodeName == "I"){
        eliminarTarea(event.srcElement.parentNode.id);
       cambioTarea(tareasIncompletadas,tareasCompletadas);
    }
});

//******funciones******* 
//agrega tarea a la lista de tareas
let addtask = () => {
    let text = texto.value;
        lista.innerHTML += `<div class="task-container" id="${valorId}">
            <input type="checkbox"> <label>${text}</label>  
            <i class="fa-solid fa-trash"></i>
        </div>`; 
        tareasIncompletadas++;
        valorId++;
        cambioTarea(tareasIncompletadas,tareasCompletadas);
}

//cambia las variables de las tareas
let cambioTarea = (ni)=>{
    let tareasC = document.querySelectorAll("input[type='checkbox']:checked");
    tareas.innerHTML = `Tareas Peniendtes: ${ni}    Tareas completadas: ${tareasC.length}`;
}

//Eliminamos tarea
let eliminarTarea = (id) => {
    let nominado = document.getElementById(id);
    lista.removeChild(nominado);
}

    