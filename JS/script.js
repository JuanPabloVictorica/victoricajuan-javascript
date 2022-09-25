let nombreProductoA = 'Reloj'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Anillo'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Cadena'
let precioProductoC = 20
let stockProductoC = 50

let precioTotal = 0

function bienvenidos(){
    alert("Bienvenidos")
}

bienvenidos()


alert("Estos son nuestros productos: \n - Reloj\n - Anillo\n - Cadena")



let opcion = prompt("Ingrese que es lo que quiere comprar o ESC para salir")

while(opcion != "ESC"){
    
    if(opcion == 'Reloj'){
        let cantidadProductoReloj = parseInt(prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:"))
        if(cantidadProductoReloj <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoReloj * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(opcion == 'Anillo'){
        let cantidadProductoAnillo = parseInt(prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:"))
        if(cantidadProductoAnillo <= stockProductoB){
            precioTotal = precioTotal + (cantidadProductoAnillo * precioProductoB)
        }
        else{
            alert("Actualmente tenemos " + stockProductoB + " unidades de este producto")
        }
    }
    else if(opcion == 'Cadena'){
        let cantidadProductoCadena = parseInt(prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:"))
        if(cantidadProductoCadena <= stockProductoC){
            precioTotal = precioTotal + (cantidadProductoCadena * precioProductoC)
        }
        else{
            alert("Actualmente tenemos " + stockProductoC + " unidades de este producto")
        }
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que producto quiere comprar: \n - Reloj\n - Anillo\n - Cadena\n - ESC")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

