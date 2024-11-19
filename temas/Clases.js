class Persona{
    constructor(name, surnmame){
        this._name = name;
        this._surnmame = surnmame;
    }
    // FUNCIONES DE LA CLASE
     andar() {
        return  this._name + " esta caminando";
    }
    cargar(carga){
        return  this._name + " esta cargando "+ carga;
    }
}

let persona1 = new Persona("fABIAN", "PADILLA");

let mensaje1 = persona1.andar();
let mensaje2 = persona1.cargar("sillas");

// Con datos estaticos son los que no se pueden acceder desde el objeto si no desde la clase
//con el mismo ejemplo
class Persona2{

    //usamos el static en el valor
    static estado = "vivo";

    constructor(name, surnmame){
        this._name = name;
        this._surnmame = surnmame;
    }
    // FUNCIONES DE LA CLASE
     andar() {
        return this._name + " esta caminando";
    }
    cargar(carga){
        return this._name + " esta cargando "+ carga;
    }
      // FUNCIONES ESTATICAS DE LA CLASE 
        static esPersona(){
            return "Esta vivo";
        }
}

let personita1 = new Persona2("fABIAN", "PADILLA");
console.log(persona1.estado); //asi no puedo acceder a los estaticos
console.log(Persona2.estado); //asi si
// lo mismo con las funciones o metodos
console.log(personita1.esPersona); // asi no me deja
console.log(Persona2.esPersona()); // asi si
