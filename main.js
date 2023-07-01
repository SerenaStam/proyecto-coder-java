
alert (`Bienvenido a Apres Indumentaria!`)

const comprarProductos = () => {

    let producto = ''
  
    let cantidad = 0
  
    let precio = 0
  
    let subtotal = 0
  
    let seguirComprando = true

  
    do {
  
      producto = prompt('¿Queres comprar top rider, pollera ride, top jean , conjuntos ema, top jack, campera mini, conjunto grey, top white o top lu?')
  
      cantidad = parseInt(prompt('¿Cuantos queres comprar?'))

      

      let cantidadValidada = validarCantidad (cantidad)
    
  
   
  
      switch (producto) {
  
        case 'top rider':
  
          precio = 10000
  
          break;
  
        case 'pollera ride':
  
          precio = 50000
  
          break;
  
        case 'top jean':
  
          precio = 20000
  
          break;
        
        case 'conjunto ema':
  
          precio = 100000
  
          break;
        
        case 'top jack':
  
          precio = 9500
  
          break;

        case 'campera mini':
  
          precio = 100000
  
          break;

        case 'conjunto grey':
  
          precio = 100000
  
          break;
        
        case 'top white':
  
          precio = 100000
  
          break;
        
        case 'top lu':
  
          precio = 80000
  
          break;
  
        default:
  
          alert('Alguno de los datos ingresados no son correctos')
  
          precio = 0
  
          cantidad = 0
  
      }

        subtotal += precio * cantidadValidada
  
   
  
      seguirComprando = confirm('¿Desea seguir comprando?')
  
    } while (seguirComprando);

    return subtotal
  
  }

  const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
    alert ("Debe agregar una cantidad valida!")
    cantidad = parseInt(prompt('¿Cuantos queres comprar?'))}

    return cantidad
}

  let resultado = comprarProductos()
  console.log (resultado)



