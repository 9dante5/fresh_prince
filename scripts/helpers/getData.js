<<<<<<< HEAD
const getData = async (url) => {
    try {
        const data = await fetch(url);
        const files = data.json(data);
        return files;
    } catch (error) {
        console.log("Hay un error en el sistema", error)
    }
}

export default getData;
=======
// es para leer la información que tengo en la url es decir leer mi data.json

const getData = async (url) => {
    try {
        const { data } = await axios.get(url)
        return data
    }
    catch (error) {
        console.error(error)
    }
}

export default getData
>>>>>>> 51d2704616328d525943bf3e82cf224b86a0c5de
