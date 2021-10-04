//Calcular figuras (cuadrado, circulo, triangulo)
//pedir informacion al usuario
    //definir prompt 
//Que informacion le pido al usuario
    //que figura quieres cancular? Tipo de figura quiere calcular
    //definir variable figura
//Que valores le voy a pedir al usuario segun la figura
    //Si es cuadrado el valor del lado. Guardo en una variable *lado
    //Si es circulo el valor del radio. Guardo en una variable *radio
    //Si es triangulo , la base y la altura. Guardo en una variable *bya
//Definir metodo o funcion , calcular cuadrado.
//Definir metodo o funcion , calcular triangulo
//Definir metodo o funcion, calcular circulo
//Que te devuelve el valor en cada uno de ellos
//Imprimir o mostrar por consola.


// Author : Alfonso Lara 
// Version 1.0


//Input
var figura;
figura = prompt("Introduce que figura quieres calcular:\ncirculo\ntriangulo\ncuadrado");

const PI = 3.1416;

if (figura == "circulo") {
    var radio;
    radio = prompt("Introduce el radio del círculo");
    radio = parseFloat(radio);
}

if (figura == "triangulo") {
    var base = prompt("Introduce la base del triángulo");
    base = parseFloat(base);
    var altura = prompt("Introduce la altura del triángulo");
    altura = parseFloat(altura);
}

if (figura == "cuadrado") {
    var lado = prompt("Introduce el lado del cuadrado");
    lado = parseFloat(lado);
}

//Proceso

function Circulo(radio) {
    return (radio ** 2) * PI;    
}

function Triangulo(base, altura) {
    return (base * altura) / 2;
}

function Cuadrado(lado) {
    return lado * lado;
}

//Output

switch (figura) {
    case "circulo":
        console.log(Circulo(radio));
        break;
    case "triangulo":
        console.log(Triangulo(base, altura));
        break;
    case "cuadrado":
        console.log(Cuadrado(lado));
        break;
    default:
        break;
}