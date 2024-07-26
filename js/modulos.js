//JavaScript modulos
import saludar, { PI, usuario, Saludar } from "./constante.js ";
import { aritmetica as calculo } from "./aritmetica.js";
console.log("Archivo modulo.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(5,5));
console.log(calculo.sumar(5, 5));
saludar();
let saludo = new Saludar();
saludo;

