// Author : Alfonso Lara 
// Version 1.0


//Input

var figura = prompt("Introduce que figura quieres calcular:\ncirculo\ntriangulo\ncuadrado");

const PI = 3.1416;

if (figura == "circulo") {
    var radio = prompt("Introduce el radio del círculo");
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