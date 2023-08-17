const productos =
[
    {
        id: 1,
        nombre: "Top Cool",
        tipo: "top",
        desc: "El outfit perfecto",
        precio: 1200,
        talle: "L",
        imagen: './public/images/9c5d9415eaac7b53ab917b5023bfe95b.jpg',
        cantidad:1
    },

    {
        id: 2,
        nombre: "Conjunto",
        tipo: "conjunto",
        desc: "El outfit perfecto",
        precio: 500,
        talle: "L",
        imagen: './public/images/68d378b4c99ef788459bab621ea6016e.jpg',
        cantidad:1
    },

    {
        id: 3,
        nombre: "Top D",
        tipo: "topd",
        desc: "El outfit perfecto",
        precio: 900,
        talle: "S",
        imagen: './public/images/a0e6300a65f676336cd33843272af48b.jpg',
        cantidad:1
    },

    {
        id: 4,
        nombre: "Conjunto Jean",
        tipo: "Conjunto",
        desc: "El outfit perfecto",
        precio: 1600,
        talle: "L",
        imagen: './public/images/c5785e72977d423da885add582b6657d.jpg',
        cantidad:1
    },

    {
        id: 5,
        nombre: "Top Lana",
        tipo: "top",
        desc: "El outfit perfecto",
        precio: 1200,
        talle: "L",
        imagen: './public/images/e94f25268d1dee4d88c824912b959d6c.jpg',
        cantidad:1
    },

    {
        id: 6,
        nombre: "Mini Cuero",
        tipo: "mini",
        desc: "El outfit perfecto",
        precio: 500,
        talle: "L",
        imagen: './public/images/edb8e2e0bd470dee376475f52ece0b20.jpg',
        cantidad:1
    }
];

const productosJSON = JSON.stringify(productos);

console.log(productosJSON);



fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json(); 
    })
    .then(productosObtenidos => {
        
        const todosLosProductos = [...productosObtenidos, ...JSON.parse(productosJSON)];
        
        console.log(todosLosProductos); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
