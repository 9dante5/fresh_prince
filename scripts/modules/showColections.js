import { productos } from "../helpers/url.js";
import getData from "../helpers/getData.js";

const products = await getData(productos)
console.log(products)
const coleccion = document.getElementById('categorias')
const container = document.getElementById('main')
let colecciones = ""

products.forEach((dato) => {
    colecciones += `<option value="${dato.coleccion}">${dato.coleccion}</option>`;
})

coleccion.innerHTML = colecciones

let selectedvalue = ""

coleccion.addEventListener('change', (e) => {
    container.innerHTML=""
    let html = ""
    console.log(e.target.value)
    selectedvalue = e.target.value
    let category = products.filter((product) => product.coleccion == selectedvalue)
    console.log(category)
    category.forEach(cat => {
        const { id, nombre, precio, imgmodelo } = cat
        const card = document.createElement('div')
        card.classList.add('cards')
        card.setAttribute('id', id)
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${imgmodelo}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h4 class="card-text">${nombre}</h4>
                    <p>${precio}</p>
                </div>
            </div>
        `
        card.innerHTML = html
        container.appendChild(card)
    });
    
    
})