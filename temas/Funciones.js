//funciones

//declaracion de funcion

function myFunction(){}

//funcion que requiere valores
function myFunction2(name, age){}

//funcion que requiere valores pero con valores por defecto si no ingresa nada
function myFunction3(name="pepe", age=18){}

//funcion que retorna algo
function myFunction4(name="pepe", age=18){
    let frase = pepe + age + "";
    return(frase);
}

// el llamado a las funciones

myFunction();

myFunction2("Juan", 21);

myFunction3();

let mi_frase = myFunction4();