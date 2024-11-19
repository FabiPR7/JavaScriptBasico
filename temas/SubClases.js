//subclases

//CLASE
class Persona{
    constructor(name, surnmame){
        this._name = name;
        this._surnmame = surnmame;
    }
    
     andar() {
        return name + " esta caminando";
    }
    cargar(carga){
        return name + " esta cargando "+ carga;
    }
}

//SUBCLASE
// ES LO MISMO PERO AGREGAMOS EL EXTENDS DE LA CLASE 

class Niño extends Persona{
    constructor(name,surname,age){
        super(name,surname); // las derivadas de la clase
        this._age = age;
    }
    jugar(){
        return name + " esta a jugando a sus "+ age +" años";
    }
}

let nino1 = new Niño("Fabi", "Padi",12);
let mensaje1 = nino1.cargar(); // las funciones de la clase padre tambien los hereda
let mensaje2 = nino1.jugar(); 

