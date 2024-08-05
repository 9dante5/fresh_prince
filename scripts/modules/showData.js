const showData = async (datos, container) => {

    datos.forEach(dato => {
        const { id, nombre, precio, imgmodelo } = dato
        const card = document.createElement('div')
        card.classList.add('cards')
        card.setAttribute('id', id)

        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${imgmodelo}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h4 class="card-text">${nombre}</h4>
                    <p>${precio}</p>
                </div>
            </div>
        `
        container.appendChild(card)
    });
}

export default showData;