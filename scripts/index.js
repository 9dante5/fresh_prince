import getData from "./helpers/getData.js";
import { usuarios } from "./helpers/urls.js";
import validate from "./modules/validateUser.js";

const formInicioSesion = document.getElementById("formLogin");

formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("correo").value;
    const userList = await getData(usuarios);
    const existeUsuario = validate(email, userList);
    const datosUsuario = []

    if (existeUsuario >= 0) {
        const { id, name, email } = userList[existeUsuario]

        const usuarioLeido = {
            id: id,
            name: name,
            email: email, 
        }

        datosUsuario.push(usuarioLeido)
        
        sessionStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
        
        location.href ="./pages/landingPage.html"
    } else {
        alert("el correo " + email.toLowerCase() + " no existe")
    }

    formInicioSesion.reset();
})