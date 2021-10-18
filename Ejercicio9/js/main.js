// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
// método para rellenar el array(que tenga como parámetros los números entre los que
// tenga que generar) y otro para mostrar el contenido y la suma del array.


let array = [];
let numerosArray = prompt("indicamos cuantos numeros quieres que tenga el array");
numerosArray = parseInt(numerosArray);
let suma = 0;

const rellenarArray = () =>{
    for (let i = 1; i <= numerosArray; i++) {
        array.push(parseInt(Math.random() * (10 - 0)));
    }
}

const mostrarDatos = () =>{
    for (let i = 0; i < numerosArray.length; i++) {
        console.log("La posición " + i + " del array es " + numerosArray[i]);
        suma = suma + (numerosArray[i]);
        
    }
    console.log(`La seman de todos los numeros ${suma}`);
}