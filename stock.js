let stockProductos = [
    {id: 1, nombre: "Aritos 1", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 8, talle: "1", img: './img/aritos.jpg'},
    {id: 2, nombre: "Aritos 2", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 10, talle: "1", img: './img/aritos.jpg'},
    {id: 3, nombre: "Aritos 3", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 20, talle: "2", img: './img/aritos.jpg'},
    {id: 4, nombre: "Aritos 4", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 25, talle: "2", img: './img/aritos.jpg'},
    {id: 5, nombre: "Aritos 5", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 14, talle: "3", img: './img/aritos.jpg'},
    {id: 6, nombre: "Aritos 6", tipo: "aritos", cantidad: 1, desc: "Un arito que re va con vos", precio: 12, talle: "3", img: './img/aritos.jpg'},
    {id: 7, nombre: "Pulsera 1", tipo: "pulsera", cantidad: 1, desc: "Una pulsera que re va con vos", precio: 500, talle: "1", img: './img/pulsera.jpg'},
    {id: 8, nombre: "Pulsera 2", tipo: "pulsera", cantidad: 1, desc: "Una pulsera que re va con vos", precio: 30, talle: "1", img: './img/pulsera.jpg'},
    {id: 9, nombre: "Pulsera 3", tipo: "pulsera", cantidad: 1, desc: "Una pulsera que re va con vos", precio: 500, talle: "2", img: './img/pulsera.jpg'},
    {id: 10, nombre: "Pulsera 4", tipo: "pulsera", cantidad: 1, desc: "Una pulsera que re va con vos", precio: 700, talle: "2", img: './img/pulsera.jpg'},
    {id: 11, nombre: "Pulsera 5", tipo: "pulsera", cantidad: 1,desc: "Una pulsera que re va con vos", precio: 700, talle: "3", img: './img/pulsera.jpg'},
    {id: 12, nombre: "Pulsera 6", tipo: "pulsera", cantidad: 1, desc: "Una pulsera que re va con vos", precio: 700, talle: "3", img: './img/pulsera.jpg'},
    {id: 13, nombre: "Cadena 1", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 900, talle: "1", img: './img/cadenas.jpg'},
    {id: 14, nombre: "Cadena 2", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 1400, talle: "1", img: './img/cadenas.jpg'},
    {id: 15, nombre: "Cadena 3", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 7000, talle: "2", img: './img/cadenas.jpg'},
    {id: 16, nombre: "Cadena 4", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 777, talle: "2", img: './img/cadenas.jpg'},
    {id: 17, nombre: "Cadena 5", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 234, talle: "3", img: './img/cadenas.jpg'},
    {id: 18, nombre: "Cadena 6", tipo: "cadena", cantidad: 1, desc: "Una cadena que re va con vos", precio: 155600, talle: "3", img: './img/cadenas.jpg'},
    {id: 19, nombre: "Anillo 1", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 1600, talle: "1", img: './img/anillo.jpg'},
    {id: 20, nombre: "Anillo 2", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 3200, talle: "1", img: './img/anillo.jpg'},
    {id: 21, nombre: "Anillo 3", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 2300, talle: "2", img: './img/anillo.jpg'},
    {id: 22, nombre: "Anillo 4", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 5600, talle: "2", img: './img/anillo.jpg'},
    {id: 23, nombre: "Anillo 5", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 1700, talle: "3", img: './img/anillo.jpg'},
    {id: 24, nombre: "Anillo 6", tipo: "anillo", cantidad: 1, desc: "Una anillo que re va con vos", precio: 800, talle: "3", img: './img/anillo.jpg'},
]


const getDolarBlue = async () => {
    return async () => {
        const rs = await fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue", {
            mode: 'no-cors'
        });
        const data = await rs.json();
        console.log(data);
    }
}

Swal.fire({
    title: 'Bienvenidos!',
    text: '',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

export {stockProductos, getDolarBlue}