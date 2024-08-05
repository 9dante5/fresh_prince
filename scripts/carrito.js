document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const paymentModal = document.getElementById('payment-modal');
    const closeModal = document.querySelectorAll('.close-btn');
    const itemsList = document.getElementById('items-list');
    const payButton = document.getElementById('pay-button');
    const cancelPayment = document.getElementById('cancel-payment');
    const paymentForm = document.getElementById('payment-form');
  
    // Mostrar el modal del carrito
    cartButton.addEventListener('click', async () => {
      cartModal.style.display = 'block';
      const cart = await fetchCartData();
      loadCartItems(cart);
    });
  
    // Cerrar los modales
    closeModal.forEach(btn => btn.addEventListener('click', () => {
      cartModal.style.display = 'none';
      paymentModal.style.display = 'none';
    }));
  
    // Mostrar el modal de pago desde el modal del carrito
    payButton.addEventListener('click', () => {
      cartModal.style.display = 'none'; 
      paymentModal.style.display = 'block'; 
    });
  
    // Cancelar el pago
    cancelPayment.addEventListener('click', () => {
      paymentModal.style.display = 'none';
    });
  
    // Manejar el envío del formulario de pago
    paymentForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      alert('Pago realizado exitosamente');
  
      // Cerrar modal de pago
      paymentModal.style.display = 'none';
    });
  
    // Función para obtener los datos del carrito desde el archivo JSON
    async function fetchCartData() {
      try {
        const response = await fetch('../data/item.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.productos; 
      } catch (error) {
        console.error('Error fetching the JSON data:', error);
        return []; 
      }
    }
  
    // Función para actualizar el conteo del carrito
    function updateCartCount(cart) {
      cartButton.textContent = `Carrito (${cart.length})`;
    }
  
    // Cargar ítems del carrito
    function loadCartItems(cart) {
      updateCartCount(cart);
  
      itemsList.innerHTML = '';
      cart.forEach((item) => {
        const listItem = document.createElement('li');
  
        // Imagen del producto
        const img = document.createElement('img');
        img.src = item.imgfrente; 
        img.alt = item.nombre;
        img.style.width = '100px'; 
        img.style.height = '100px'; 
        listItem.appendChild(img);
  
        // Detalles del producto
        const text = document.createElement('span');
        text.textContent = `${item.nombre} - ${item.precio}`;
        listItem.appendChild(text);
  
        // Botón para eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
          removeItemFromCart(item.id);
        });
        listItem.appendChild(deleteButton);
  
        itemsList.appendChild(listItem);
      });
    }
  
    // Eliminar ítem del carrito
    async function removeItemFromCart(itemId) {
      try {
        // Esta ruta necesita ser configurada correctamente en tu backend
        const response = await fetch(`http://localhost:3000/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Actualizar la visualización del carrito después de eliminar
        const updatedCart = await fetchCartData();
        loadCartItems(updatedCart);
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    }
});
