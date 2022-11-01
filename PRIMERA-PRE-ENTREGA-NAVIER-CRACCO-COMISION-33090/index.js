let nombre = (prompt("Cómo te llamas?"));
alert(`Bienvenido ${nombre}, éstos son nuestros productos destacados!`)

let producto1 = "Remera Nike $";
let producto2 = "Remera Adidas $";
let producto3 = "Zapatillas Jordan $";
let producto4 = "Zapatillas Vans Classic $";
let producto5 = "Camisa Lacoste $";
let producto6 = "Jean Levis $";

let precio1 = 1500;
let precio2 = 1000;
let precio3 = 5000;
let precio4 = 3000;
let precio5 = 6000;
let precio6 = 4000;


alert(`Productos:\n ${producto1} ${precio1}\n ${producto2} ${precio2}\n ${producto3} ${precio3}\n ${producto4} ${precio4}\n ${producto5} ${precio5}\n ${producto6} ${precio6}`);

let dineroCliente = Number(prompt("Dinos tu presupuesto y haremos una sugerencia de lo que puedes comprar!"));

if (dineroCliente >= 1000 && dineroCliente < 1500){
    alert(`Puedes comprar una ${producto2} de ${precio2}`);

}else if(dineroCliente >= 1500 && dineroCliente < 2500){
    alert(`Puedes comprar una ${producto1} de ${precio1}`);

}else if (dineroCliente >= 2500 && dineroCliente < 4000){
    alert(`Puedes comprar unas ${producto4} de ${precio4}`);

}else if (dineroCliente >= 4000 && dineroCliente < 5000){
    alert(`Puedes comprar un ${producto6} de ${precio6}`);

}else if (dineroCliente >= 5000 && dineroCliente < 6000){
    alert(`Puedes comprar unas ${producto3} de ${precio3}`);

}else if (dineroCliente >= 6000){
    alert(`Puedes comprar una ${producto5} de ${precio5}`);

}else {
    alert("Todo bien, pero solo pasaba a mirar...");
}


let combinacion = prompt ("Si quieres hacer una combinación de productos pon: SI, si quieres o NO, si no") .toLowerCase();
if (combinacion === "si"){
    alert("Qué combinacion quieres? En las siguientes dos alertas pon el monto del producto y estas te daran el total de tu compra");
}else {
    alert("ok")
}


function calculador (eleccion1, eleccion2){
    return eleccion1 + eleccion2;
}

let eleccion1 = parseInt(prompt("Ingrese el monto del producto que desees"));
let eleccion2 = parseInt(prompt("Ingrese el monto del producto que desees"));
let precioTotal = calculador(eleccion1, eleccion2);
alert(`El costo total de tu compra es de $${precioTotal}`);

