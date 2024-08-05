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