let nombre = prompt("Ingrese su nombre");
let cuotas = parseInt(prompt(`Hola  ${nombre}, Ingrese la cantidad de cuotas`))

let obra1 = 250000
let obra2 = 300000
let obra3 = 500000

/* if (cuotas === 1) {
    console.log("El valor en un pago es: ", obra1);
} else if (cuotas === 3) {
    let resultado3 = obra1 / 3
    console.log("El valor en tres pagos es ", Math.ceil(resultado3));

} else if (cuotas === 6) {
    let resultado6 = obra1 / 6
    console.log("El valor en tres pagos es ", Math.ceil(resultado6))

} else {
    console.log("Si ingresa 1, 3 o 6 las cuotas son sin interés")
} */


for (let i = 0; i <= cuotas; i++) {
    if (i === cuotas) {
        console.log("cantidad de cuotas ingresadas: ", i)
        alert(`el valor final es: , ${cuotas + cuotas*29 /100}`)
        break
    }
}

