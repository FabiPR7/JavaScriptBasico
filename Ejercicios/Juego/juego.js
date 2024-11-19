let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let aciertos = document.getElementById("aciertos");
let numeroAciertos = 0;
let tiempo = document.getElementById("tiempo");
let movimientos = document.getElementById("movimientos");
let mensaje = document.getElementById("mensaje");
let resultado1;
let resultado2;
let numerosMovimientos = 0;
let tiempoRestante = 30;
let iniciar = 0;
numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
let tarjetasTiradas = 0;
let tarjeta1;
let tarjeta2;
aciertos.innerHTML = `Aciertos: ${numeroAciertos}`;
tiempo.innerHTML = `Tiempo restante: ${tiempoRestante}`;
function destapar(id){
    iniciar++;
    if(iniciar==1){
        let tiempores =  setInterval(()=>{
        tiempoRestante--;
        tiempo.innerHTML = `Tiempo restante: ${tiempoRestante}`; 
        if(numeroAciertos<8 && tiempoRestante==0){
            mensaje.innerHTML = "PERDISTE!!";
        }
        if(numeroAciertos==8){
            mensaje.innerHTML = "GANASTE!!";
        }
        if(tiempoRestante==0){
            clearInterval(tiempores);
            }
            
   },1000);}
  
    tarjetasTiradas++;
    if(tarjetasTiradas==1){
        resultado1 =  numeros[id];
        tarjeta1 = document.getElementById(id);
        tarjeta1.innerHTML =resultado1;
        tarjeta1.disabled = true; 
    }
    else if(tarjetasTiradas==2){
        resultado2=  numeros[id];
        tarjeta2 = document.getElementById(id);
        tarjeta2.innerHTML = resultado2;
        tarjeta2.disabled = true; 

        if(resultado1==resultado2)
            {
                numeroAciertos++;
                aciertos.innerHTML = `Aciertos: ${numeroAciertos}`;
                tarjetasTiradas = 0;
            }
        else{
            numerosMovimientos++;
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta2.disabled = false;
                tarjeta1.disabled = false; 
                tarjetasTiradas = 0;
                movimientos.innerHTML = `Movimientos: ${numerosMovimientos}`;
            },700);
                
        }
    }  

}

