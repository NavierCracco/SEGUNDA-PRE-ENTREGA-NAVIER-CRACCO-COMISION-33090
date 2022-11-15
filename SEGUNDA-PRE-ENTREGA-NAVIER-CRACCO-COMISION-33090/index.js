// Le preguntamos al posible cliente y le damos la bienvenida 

let nombre = (prompt("Cómo te llamas?"));
alert(`Bienvenido ${nombre}, éstos son nuestros productos destacados!`)


const productos = [
    {tipo: "remera", marca: "nike", precio: 1500 },
    {tipo: "remera", marca: "adidas", precio: 1000 },
    {tipo: "zapatillas", marca: "jordan", precio: 5000 },
    {tipo: "zapatillas", marca: "vans", precio: 3000 },
    {tipo: "camisa", marca: "lacoste", precio: 6000 },
    {tipo: "jean", marca: "levis", precio: 4000 },
];


let producto1 = "Remera Nike de $1500";
let producto2 = "Remera Adidas de $1000";
let producto3 = "Zapatillas Jordan de $5000";
let producto4 = "Zapatillas Vans de $3000";
let producto5 = "Camisa Lacoste de $6000";
let producto6 = "Jean Levis de $4000";

// Con un alert le mostramos en una lista los productos que tenemos disponible al cliente 

let listaProductos = productos.map((producto) => `${producto.tipo} ${producto.marca} $${producto.precio}`);
alert(`Productos: \n ${listaProductos.join(" \n ")}`);

/* Le preguntamos al cliente cuanto presupuesto tiene 
y con los ifs depende que presupuesto nos diga le daremos una sugerencia
*/


let dineroCliente = Number(prompt("Dinos tu presupuesto y haremos una sugerencia de lo que puedes comprar!"));

if (dineroCliente >= 1000 && dineroCliente < 1500){
    alert(`Puedes comprar una ${producto2}`);

}else if(dineroCliente >= 1500 && dineroCliente < 2500){
    alert(`Puedes comprar una ${producto1}`);

}else if (dineroCliente >= 2500 && dineroCliente < 4000){
    alert(`Puedes comprar unas ${producto4}`);

}else if (dineroCliente >= 4000 && dineroCliente < 5000){
    alert(`Puedes comprar un ${producto6}`);

}else if (dineroCliente >= 5000 && dineroCliente < 6000){
    alert(`Puedes comprar unas ${producto3}`);

}else if (dineroCliente >= 6000){
    alert(`Puedes comprar una ${producto5}`);

}else {
    alert("Todo bien, pero solo pasaba a mirar...");
}


// Carrito //

alert(`Puedes agregar productos a tú carrito!!`);
let seleccion = prompt(`Ingrese "si" o "no" si desea agregar productos a tu carrito.`).toLowerCase();

let carrito = [];

while(seleccion != "no"){
    let agregandoProductos = prompt(`Lista de Productos: \n ${listaProductos.join(" \n ")} \n \n Ingrese la MARCA de el producto que quieras a tu carrito`);
    let precio = 0;
    let asignando = productos.find((producto) => producto.marca == agregandoProductos);

    if(asignando){
        switch(asignando) {
            case productos[0]:
                precio = 1500;
                break;
            case productos[1]:
                precio = 1000;
                break;
            case productos[2]:
                precio = 5000;
                break;
            case productos[3]:
                precio = 3000;
                break;
            case productos[4]:
                precio = 6000;
                break;
            case productos[5]:
                precio = 4000;
                break;
            default:
                break;
        }
        
        let unidades = parseInt(prompt(`¿Cuántas unidades quieres llevar?`));

        carrito.push({agregandoProductos, unidades, precio});
        console.log(carrito);

    } else {
        alert(`No contamos con ese producto.`);
    }

    seleccion = prompt(`¿Desea seguir comprando?`).toLowerCase();

    while (seleccion === "no") {

        let cadaProducto = carrito.map((carritoProducto) => `Producto: ${carritoProducto.agregandoProductos}, unidades: ${carritoProducto.unidades}, total a pagar por productos: $${carritoProducto.unidades * carritoProducto.precio}`);
        const precioTotal = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);

        alert(`Estos son tus productos!`);
        alert(`Este es tu carrito, ${nombre} :) \n ${cadaProducto.join(" \n ")} \n \n El costo total de tu compra es de: $${precioTotal}`);
        break;
    }
}


alert(`Vuelva prontos :)`);