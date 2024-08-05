
// const user = JSON.parse(localStorage.getItem('user'));

const boody = document.querySelector('body');

// if (user.rol === 1) {
// ADMIN: can edit all items

const editButtonHTML = `
    <div class='edit__button'>
        <figure>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50px' height='50px'>
                <path
                    d='M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z' />
            </svg>
        </figure>
    </div>
    `;
boody.innerHTML += editButtonHTML;

const editButton = document.querySelector('.edit__button');
editButton.addEventListener('click', () => {

    const editModalHTML = `
        <div class='edit__modal'>
            <form>
            <button class='close__modal'>X</button>
            <h2>Edit Item</h2>
                <input type='text' placeholder='Name' id="name" />
                <input type='number' placeholder='Price' id="price"/>
                <input type='text' placeholder='Description' id="description"/>
                <div class='edit__modal__images'>
                    <input type='text' placeholder='Link to image' id="link_image"/>
                </div>
                <div class="actions">
                    <div> 
                        <div id ='add-more' >+</div>
                        <div id ='remove' >-</div>
                    </div>
                    <div id ='delete' >Eliminar</div>
                </div>
                <button type='submit' class="submit__modal" >Save</button>
            </form>
        </div>
        `;

    boody.innerHTML += editModalHTML;


    const addMore = document.getElementById('add-more');
    const deleteImage = document.getElementById('remove');
    const modalImages = document.querySelector('.edit__modal__images');

    addMore.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Link to image';
        input.id = 'link_image';
        modalImages.appendChild(input);
        deleteImage.style.display = 'flex';
    });

    deleteImage.addEventListener('click', () => {
        const input = document.querySelector('#link_image');
        input.remove();
    });


    const deleteItem = document.getElementById('delete');

    deleteItem.addEventListener('click', () => {
        // fetch('http://localhost:3000/items', {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(item),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        console.log('delete item');
    });





    const close = document.querySelector('.close__modal');
    close.addEventListener('click', () => {
        const editModal = document.querySelector('.edit__modal');
        editModal.remove();
        window.location.reload(); 

    });

    const save = document.querySelector('.submit__modal');

    save.addEventListener('click', (e) => {

        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const images = document.querySelectorAll('#link_image');

        const imagesArray = [];
        images.forEach((image) => {
            imagesArray.push(image.value);
        });

        const item = {
            name,
            price,
            description,
            images: imagesArray,
        };

        console.log(item);

        // send item data to server
        // fetch('http://localhost:3000/items', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(item),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

        // Recargar pagina
        // window.location.reload(); 

    });





    // get item id

    // fetch item data
    // fill edit form
    // send updated data

});






// } else {
//     // USER: cant edit nothing
// }

