//EJERCICIO5 DESARROLLO//

//Crear una aplicacion que convierta un numero en base 
//decimal a binario.

//1. Solicitar al usuario un numero decimal.
//mediante un prompt.
//2. Definir metodo o funcion.
//3.Definir el numero como parametro
//4. Devolver un String (con un return) con el numero
//convertido a binario.
//ejemplo//numbinario=numero/2 resultado/2
//Definir el resultado(numero/2)
//El resto de cada division formara el numero binario
//Devolver al usuario numero binario.

let numero = prompt("Indicame un numero entero");
let binario = [];

if (numero == 0) {
        numero = parseInt(numero);
        binario.push(0);
}

while (numero > 0) {
        binario.push(numero % 2)
        numero = parseInt(numero / 2)

}

        binario.reverse(binario);
console.log(binario);


