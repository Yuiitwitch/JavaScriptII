// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

const cifras = (numero) => {
    if (numero=0  && !numero.includes(".")){
resultado = numero.toString().length;
        return "El numero" + numero + "contiene" + resultado + " numeros enteros positivos";
    }else{
        return "el numero no es entero positivo";
    }
}
resulta= cifras(numero);
alert(resultado);