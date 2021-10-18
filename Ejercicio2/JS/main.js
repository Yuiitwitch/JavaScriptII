//Crear una aplicacion que nos genere numeros aleatorios

//Pedir al usuario cuantos numeros aleatorios desea crear
//Pedir numero maximo y minimo al usuario
//Crear metodo que devuelve numero aleatorio
//Mostrar los numeros por consola.


// Author: Alfonso lara 
// version: 1.0

let numeros=prompt("¿Cuantos numeros aleatorios deseas crear?");

let maximos=prompt("Numeros maximos");
let minimos=prompt("Numeros minimos");

//proceso

function calcularAleatorios(maximo,minimo) {
    return Math.random() * (maximo - minimo) + minimo;
}

//output
for (let i = 1; i<= numeros; i++) {
    console.log(parseInt(calcularAleatorios(maximos,minimos)+minimos));
}
