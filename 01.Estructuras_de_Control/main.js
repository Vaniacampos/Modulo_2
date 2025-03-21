//Vamos a escribir un programa donde guardemos la edad en una variable y sepamos si es mayor o menor de edad



//Esto ya esta Harcodeado 
let age=20;
//Declaramos variable e implementamos una ondicional //
//EJERCICIO 1
// if(age>=18) {
//     console.log ("Eres menor de Edad");


// }else{
//     console.log("Eres menor de Edad");
// }

//Vamos a escribir un prograa que le pida o solicite a un usuario//
//que ingrese su edad y saber si esa persona es mayor o menor de edad 

//prompt nos srve para pedirle datos al ususario palabraa/string/cadena 
//EJERCICIO2

// let ageUser = window.prompt("Cuantos años tienes");

// if(ageUser>=18){
//     console.log("ERES MEYOR DE EDAD");


// }else(ageUser<18){
//     console.log("ERES MENOR DE EDAD");
// }

//EJERCICIO3
//Vamos a escribir un progtrama para que un usuario nos de su nombre 
//y vamos a guardar ese dato y vamos a solicitar que nos de su nombre de nuevo 
//y vamos a comparar si es igual o no 

//1.pedirle al usuario que nos de su nombre 
const user= window.prompt ("Cual es tu nombre?");
const baseDeDatos = "Adriana";

//2. mostraremos mensajes en consola, para ello usamos 
//console.log() nos sirve para mostrar mensajes en consola y nos ayuda a ver los datos que se tyienen al instante en el codigo
console.log("El usuario es el mismo__");
console.log( user==baseDeDatos);// true o false 

console.log("si son diferentes, debo hecharlo de la app")
console.log(user != baseDeDatos); //true o false 

console.log("el usuario es bienvenido a la app");
//validamos una condicion para saber si es el usuario correcto 
if(user != baseDeDatos){
console.log("el usuario no es el mismo");
alert("Adioos!, no eres bienvenido a la app");
}
else {
    console.log("el usuario es el mismo")
    alert("Bienvenido a la app");

}