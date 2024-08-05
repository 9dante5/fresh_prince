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
