// COMO CONECTAR A UNA API

//TENEMOS 2 FORMAS 

//THEN CATCH

fetch("/esta/es/miapi.com")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));


//await async
try{
const res = await fetch("/esta/es/miapi.com");
const data = await miApi.json();
console.log(data);
}
catch(error){
    console.log(error);
}