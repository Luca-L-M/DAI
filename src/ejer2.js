//La siguiente línea importa funciones para luego utilizarlas.

import {PI, sumar, restar, multiplicar, dividir} from './modules/matematica.js';
var nums = ["dos", "cuatro", "ocho", "diez"];

console.clear();
console.log(`La constante PI vale '${PI}'`);
console.log(`contenido del array: ${nums}`);
console.log(`sumar(2, 8) = ${sumar(2, 8)}`);
console.log(`restar(8, 2) = ${restar(8, 2)}`);
console.log(`multiplicar(2, 4) = ${multiplicar(2, 4)}`);
console.log(`dividir(10, 2) = ${dividir(10, 2)}`);