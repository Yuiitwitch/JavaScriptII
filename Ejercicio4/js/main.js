//EJERCICIO 4 DESARROLLO//

//Crear una aplicacion que nos calcule el factorial
    //de un numero por prompt
//1. Solicitar al usuario , que numero quiere calcular
//. Ejemplo factorial 5!=5.4.3.2.1=120
//2. Definir la funcion para calcular el numero factorial
//3. Devolver mediante un alert al usuario el resultado.

let numero = prompt("Indicame un numero para factorizarlo");
let factorial = [];
let numFinal = 1;

for (let i = 1; i <= numero; i++) {
    factorial.push(i);
    
}

for (let i = 0; i < factorial.length; i++) {
    numFinal = numFinal * factorial[i];
    
}

console.log (numFinal);