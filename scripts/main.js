import getData from "./helpers/getData.js";
import {productos} from "./helpers/url.js"
import showData from "./modules/showData.js";

const products = await getData(productos)
const container = document.getElementById('principal')

console.log(products)

showData(products,container)

