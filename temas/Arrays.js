//Arrays

let myArray = [1,2,3,4,5];// definicion de array
let myArrayMultiDimensional = 
[
["PEPE","JUAN","JOSE"],
[18,22,29],
[true,false,false]
];  //DEFINICION DE ARRAY MULTIDIMENSIONAL


console.log(myArray);
//acceder a un valor especificio
console.log(myArray[1]);
//acceder en array multidimesional
console.log(myArrayMultiDimensional[1][2]);


myArray.unshift(0); // unshift agrega al principio
console.log(myArray);

myArray.shift(); // shift quita al principio
console.log(myArray);

myArray.push(6); // push agrega al final
console.log(myArray);

myArray.pop() // quita agrega al final
console.log(myArray);
 
myArray[4] = 4; // se puede cambiar el valor