//SetInterval y setTimeOut
function suma(a){
return a++;
}

//  setTimeOut: sirve para realizar una funcion con una espera de un tiempo determinado
//setTimeOut--Funcion--tiempo de espera--parametros que recibe la funcion 
setTimeout(suma,1000,5);
//Aqui esperara 1 segundo y sumara 5 y fin.

//setinterval: Sirve para hacer que una funcion sea repetitiva con un tiempo de espera determinado
//setInterval--Funcion--Tiempo de espera-- Parametros de la funcion
setInterval(suma,1000,5);
//esto se repetira indefinidamente hasta que le pongas fin 

//A cada uno se lo puede detener guardadndolo en una variable asi.
let timeout = setTimeout(suma,1000,5);
clearTimeout(timeout);
let interval = setInterval(suma,1000,5);
clearInterval(timeout);
// el clear los detiene si lo pones antes del mismo no se ejecutara

//se hacen mejor con funciones flecha
let numero = 1;
setTimeout(()=>{
numero++;
},1000);

let numero2 = 1;
let interval2 =setInterval(()=>{
                                numero2++;
                                if(numero2==100){
                                clearInterval(interval2);
                                }
                                },1000);
