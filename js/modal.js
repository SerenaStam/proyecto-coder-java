

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.add('modal-active');
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active');
});

modalContenedor.addEventListener('click', (e) => {
    if (e.target === modalContenedor) {
        cerrarCarrito.click();
    }
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value);
    }
});
