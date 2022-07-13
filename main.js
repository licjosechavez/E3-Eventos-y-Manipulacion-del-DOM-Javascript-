/*
CONSIGNA
Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado
en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. 
*/

const arrayPizzas=[
    {
      id:1,
      nombre:"Napolitana",
      ingredientes:["muzarella","tomates","oregano"],
      precio:900,
    },
    {
      id:2,
      nombre:"Barbacoa",
      ingredientes:["cebolla","bacon","parmesano"],
      precio:1000,
    },
    {
      id:3,
      nombre:"Muzzarella",
      ingredientes:["muzarella","oregano","huevo"],
      precio:500,
    },
    {
      id:4,
      nombre:"Rúcula",
      ingredientes:["rúcula","queso","tomate"],
      precio:750,
    },
    {
      id:5,
      nombre:"Albahaca",
      ingredientes:["albahaca","queso","aceitunas"],
      precio:550,
    },{
      id:6,
      nombre:"Fugazzeta",
      ingredientes:["muzarella","cebolla","oregano"],
      precio:800,
    }
    ];

const idPizza = document.getElementById("idPizza");
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const imgPizza = document.getElementById("imgPizza");
const buscar = document.getElementById("buscar");

const pizza = [
    { id: 1, nombre: "MUZZARELLA", ingredientes: ["salsa", "muzzarela", "oregano"], precio: 400, img: "/img/muzzarella.jpg" },
    { id: 2, nombre: "NAPOLITANA", ingredientes: ["salsa", "muzzarela", "tomate", "ajo"], precio: 800, img: "/img/napolitana.jpg" },
    { id: 3, nombre: "MORRON", ingredientes: ["salsa", "muzzarela", "jamon", "morron"], precio: 500, img: "/img/morron.jpg" },
    { id: 4, nombre: "FUGAZZETA", ingredientes: ["muzzarela", "cebolla", "aceite de oliva"], precio: 600, img: "/img/fugazzeta.jpg" },
    { id: 5, nombre: "CALABRESA", ingredientes: ["salsa", "muzzarela", "longaniza"], precio: 650, img: "/img/calabresa.jpg" },
    { id: 6, nombre: "ANANA", ingredientes: ["salsa", "muzzarela", "ananá"], precio: 700, img: "/img/muzzarella.jpg", },
]

buscar.addEventListener("click", buscarPizza);

function buscarPizza() {
    const inputParse = parseInt(idPizza.value);
    idPizza.value = "";

    for (let i = 0; i < pizza.length; i++) {

        if (pizza[i].id === inputParse) {

            nombrePizza.innerHTML = pizza[i].nombre;
            precioPizza.innerHTML = "$" + pizza[i].precio;
            imgPizza.innerHTML = "Hola";
            let img = document.createElement("img");
            img.src = pizza[i].img;
            
            imgPizza.appendChild(img);
            return;
        } else {
            nombrePizza.innerHTML = "No hay pizza con este ID";
            precioPizza.innerHTML = "";
            imgPizza.innerHTML = "";
        }
    }
}