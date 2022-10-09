/* let nombreProductoA = 'Reloj'
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

 */














let precioTotal = 0;
 
function bienvenidos(){
    alert("Bienvenidos")
}

bienvenidos()

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Reloj", 100, 20)
let productoB = new Producto("Anillo", 10, 10)
let productoC = new Producto("Cadena", 20, 15)
let productoD = new Producto("Oro", 30)
let productoE = new Producto("Plata", 40)


let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}


let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))


for (let i = 0; i < cantidadCompra; i = i + 1) {
	let productoCompra = prompt(
		"Ingrese que producto quiere comprar: \n - Reloj\n - Anillo\n - Cadena",
	);

	if (productoCompra.toUpperCase() == "RELOJ") {
		let cantidadProductoReloj = prompt(
			"ingrese que cantidad de " + productoA.nombre + " desea comprar:",
		);
		calculoStock(cantidadProductoReloj, productoB.stock, productoA["precio"]);
		productoA.restarStock(cantidadProductoReloj);
	} else if (productoCompra == "ANILLO") {
		let cantidadProductoAnillo = prompt(
			"ingrese que cantidad de " + productoB.nombre + " desea comprar:",
		);
		calculoStock(cantidadProductoAnillo, productoB.stock, precioProductoB);
		productoB.restarStock(cantidadProductoAnillo);
	} else if (productoCompra == "CADENA") {
		let cantidadProductoCadena = prompt(
			"ingrese que cantidad de " + productoC.nombre + " desea comprar:",
		);
		calculoStock(cantidadProductoCadena, stockProductoC, precioProductoC);
		productoC.restarStock(cantidadProductoCadena);
	} else {
		alert("No tenemos ese producto a la venta");
    }
}



/* for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Reloj\n - Anillo\n - Cadena")
    
    if(productoCompra.toUpperCase() == 'Reloj'){
        let cantidadProductoReloj = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoReloj, productoA.stock, precioProductoA)
        productoA.restarStock(cantidadProductoReloj)
    }
    else if(productoCompra == 'Anillo'){
        let cantidadProductoAnillo = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoAnillo, productoB.stock, precioProductoB)
        productoB.restarStock(cantidadProductoAnillo)
    }
    else if(productoCompra == 'Cadena'){
        let cantidadProductoCadena = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoCadena, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoCadena)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    
} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}
 */
 