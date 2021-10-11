//EJERCICIO 3 - DESARROLLO//

//1.Crear una aplicacion que nos pida un numero por prompt
    //1.Solicitar al usuario un numero
    //1.Utilizar prompt para solicitarlo
//2.Crear metodo para pasarselo por un parámetro
//3.Nos tiene que indicar si es un numero primo o no.
//4.El metodo o funcion debe devolver true o false.
    //Por lo que utilizaremos un boleano.
//Numero primo solo puede debirse entre 1 y sí mismo
// Ejemplo 25(no es primo), divisible entre 5.
// Ejemplo2 17 si es primo, 17/17=1 / 17/1=17

let numero = "";
let primo = true;


numero=prompt("Indicame un número para saber si es primo o no");

for (let i = 2; i < numero; i++) {
    if (numero%i == 0 ) {
        primo = false;
    }
console.log(primo);
}