// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

let numero=prompt("Dime un número");
let cifras = Array.from(numero);

console.log(cifras.length);
