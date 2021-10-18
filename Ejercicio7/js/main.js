// Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros=prompt("Introduce cantidad de euros")
let moneda=prompt("A que moneda deseas cambiar: Libras, Dolares o Yenes")
const dolares = 1.286611;
const libras = 0.86;
const yenes = 129.852;

function CambioDivisas(euros, moneda) {
    

switch (moneda) {
    case "libras":
        console.log(euros * libras);
        break;
        case "yenes":
            console.log(euros * yenes);
        break;
        case "dolares":
        console.log(euros * dolares);
        break;
    default:
        break;
}
}

CambioDivisas(euros,moneda);