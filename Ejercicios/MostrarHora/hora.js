let mi_fecha = document.getElementById('fecha');
let mi_hora = document.getElementById('reloj');
let dates = new Date();
let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let mesesDelAno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mi_fecha.innerHTML = `${diasDeLaSemana[dates.getDay()-1]} ${dates.getDate()} de ${mesesDelAno[dates.getMonth()]} del ${dates.getFullYear()}`;
setInterval(()=>{ let hora = new Date();
mi_hora.innerHTML = hora.toLocaleTimeString();})
