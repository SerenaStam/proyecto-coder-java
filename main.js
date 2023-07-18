
alert (`Bienvenido a Apres Indumentaria!`)

const productos = [
  { id: 1, nombre: "Top Rider", precio: 10000, stock: 10 },
  { id: 2, nombre: "Pollera Ride", precio: 50000, stock: 10  },
  { id: 3, nombre: "Top Jean", precio: 20000, stock: 10  },
  { id: 4, nombre: "Conjunto Ema", precio: 100000, stock: 10  },
  { id: 5, nombre: "Top Jack", precio: 9500, stock: 10  },
  { id: 6, nombre: "Campera Mini", precio: 100000, stock: 10  },
  { id: 7, nombre: "Conjunto Grey", precio: 100000, stock: 10  },
  { id: 8, nombre: "Top White", precio: 10000, stock: 10  },
  { id: 9, nombre: "Top Lu", precio: 80000, stock: 10  },
];

const carrito = [];


const ordenarMenorMayor = () => {
    productos.sort((a,b)=> a.precio - b.precio);
    
    mostrarListaOrdenada();
}


const ordenarMayorMenor = () => {
    productos.sort((a,b)=> b.precio - a.precio);
    
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });

    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
}

const comprarProductos = (listaOrdenada) => {
    let otroProducto = false
    let productoNombre = ''
    let productoCantidad = ''

    do {
        productoNombre = prompt('¿Que producto desea comprar?'+'\n\n'+listaOrdenada.join('\n'))
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'))

        const existeProducto = productos.some(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())

        if (existeProducto) {
            const producto = productos.find(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())
            agregarAlCarrito(producto, productoCantidad)
        } else {
            alert('El producto no se encuentra disponible.')
        }

        otroProducto = confirm('¿Desea seguir comprando?')

    } while (otroProducto);

    mostrarCarrito();
};


const agregarAlCarrito = (producto, productoCantidad) => {
  const productoId = producto.id;
  const productoRepetido = carrito.find(producto => producto.id === productoId);

  if (!productoRepetido) {
    if (productoCantidad > producto.stock) {
      alert('No hay suficiente stock disponible para este producto.');
      return;
    }
    producto.stock -= productoCantidad;
    carrito.push({ ...producto, cantidad: productoCantidad });
  } else {
    if (productoCantidad > producto.stock - productoRepetido.cantidad) {
      alert('No hay suficiente stock disponible para este producto.');
      return;
    }
    producto.stock -= productoCantidad;
    productoRepetido.cantidad += productoCantidad;
  }
};

const mostrarCarrito = () => {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }

  let carritoInfo = 'Carrito de compras:\n\n';
  let totalPrecio = 0;

  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    carritoInfo += `- ${item.nombre} x ${item.cantidad} $${subtotal}\n`;
    totalPrecio += subtotal;
  });

  carritoInfo += '\nTotal: $' + totalPrecio;
  alert(carritoInfo);
};

ordenarMayorMenor();