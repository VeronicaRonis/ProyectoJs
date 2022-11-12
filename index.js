

let obras = [{
    artista: "Nan Goldin",
    precio: 1000,
    fecha: "15/7/1992",
    información: "Lorem Ipsum"
},

{
    artista: "Alessandra Sanguinetti",
    precio: 1000,
    fecha: "15/8/1997",
    información: "Lorem Ipsum"
},
{
    artista: "Adriana Lestido",
    precio: 900,
    fecha: "15/6/1997",
    información: "Lorem Ipsum"
}

]

function recorrer() {
    let nombre = prompt("Ingrese su nombre");
    let pregunta = alert(`Hola ${nombre} te presentamos las obras disponibles `)
    let finalString = "Si desea comprar la obra de arte, ingrese 'comprar', de lo contrario escriba 'no'. Si desea salir escriba 'salir' "

    for (i = 0; i < obras.length; i++) {
        let datos = prompt(obras[i].artista + ' ' + 'precio: ' + ' ' + obras[i].precio + finalString)
        if ( datos === "comprar") {
            let cuotas = parseInt(prompt(`Hola  ${nombre}, Ingrese la cantidad de cuotas`))
            alert(`el valor final es: , ${cuotas + cuotas * 29 / 100}`)
        } else if (datos === "salir"){
            break
        } else
        { console.log(obras) }



    }

}
recorrer()
/* 
let cuotas = parseInt(prompt(`Hola  ${nombre}, Si quiere comprar, ingrese la cantidad de cuotas`))
for (let i = 0; i <= cuotas; i++) {
    if (i === obras[].precio) {
        console.log("cantidad de cuotas ingresadas: ", i)
        alert(`el valor final es: , ${cuotas + cuotas*29 /100}`)
        break
    }
}  */