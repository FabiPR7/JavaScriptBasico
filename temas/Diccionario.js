// MAPAS O DICCIONARIOS


//diccionario basico

let numeros = {
uno : 1,
dos : 2,
tres : 3
};

//agregar datos 
numeros.cuatro = 4

// borrar datos
delete numeros.tres;

//consultar si existe datos

console.log(numeros.hasOwnProperty("dos"));

// asi se accede al valor con la clave
console.log(numeros.uno);

//diccionario complejo- Puede haber mas diccionarios dentro de un diccionario
let persona = {
nombre: "Fabian",
apellido : "Padilla",
edad : 21,
idiomas : ["Espñaol", "Boliviano", "Ingles"],
padres : [
    {
        nombre_Madre: "Anair",
        edadMadre: 40
    },
    {
        nombrePadre: "Richard",
        edadPadre: 42
    }
]
}
//Para acceder a estos datos
console.log(persona.padres[0].nombre_Madre);
