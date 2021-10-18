// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// rellenar valores y otro para mostrar.

let numeros= [];

for (let i = 1; i <=10; i++) {
    numeros.push(prompt("Indicame 10 numeros"));
    
}
for (let i = 0; i < numeros.length; i++) {
    console.log((numeros[i]));
    
}
