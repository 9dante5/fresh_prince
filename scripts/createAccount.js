import getData from "./helpers/getData.js";
import postData from "./helpers/posData.js";
import { usuarios } from "./helpers/urls.js";
import validate from "./modules/validateUser.js";

const formNewAccount = document.getElementById("formNewAccount");

formNewAccount.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombreCrea").value;
    const correo = document.getElementById("correoCrea").value;

    const userList = await getData(usuarios);
    const existeUsuario = validate(correo, userList);

    if (existeUsuario >= 0) {
        alert("El correo " + correo.toLowerCase() + " ya existe")
        formCrearCuenta.reset();
    } else {
        let nuevoUsuario = {
            "name": nombre.toLowerCase(),
            "email": correo.toLowerCase(),
        }

        await postData(usuarios, nuevoUsuario);
        formCrearCuenta.reset();
        location.href ="../index.html"
    }
})