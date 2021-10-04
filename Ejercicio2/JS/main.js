//Crear una aplicacion que nos genere numeros aleatorios

//Pedir al usuario cuantos numeros aleatorios desea crear
//Pedir numero maximo y minimo al usuario
//Crear metodo que devuelve numero aleatorio
//Mostrar los numeros por consola.


// Author: Alfonso lara 
// version: 1.0

var numeros=prompt("¿Cuantos numeros aleatorios deseas crear?");

var maximos=prompt("Numeros maximos");
var minimos=prompt("Numeros minimos");

//proceso

function calcularAleatorios(maximo,minimo) {
    return Math.random() * (maximo - minimo) + minimo;
}

//output
for (let index = 0; index <= numeros; index++) {
    alert(parseInt(calcularAleatorios(maximos,minimos)));
}
