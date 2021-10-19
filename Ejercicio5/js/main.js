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
let binarioHecho = "";

const pasarBinario = (num) => {
        if (num == 0) {
                numero = parseInt(num);
                binario.push(0);
        }

        while (num > 0) {
                binario.push(num % 2);
                num = parseInt(num / 2);

        }

        binario = binario.reverse(binario);
        for (let i = 0; i < array.lengt; i++) {
                binarioHecho = binarioHecho + (binario[i]);


        }


}
pasarBinario(numero);
console.log(binarioHecho);
