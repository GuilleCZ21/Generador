/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Golden",
        imagen: "./imagenes/Golden.jpeg",
        descripcion: "Del álbum Fine Line",
    },
    {
        id: 2,
        nombre: "Two Ghosts",
        imagen: "./imagenes/Twoghots.jpg",
        descripcion: "Del álbum Harry Styles",
    },
    {
        id: 3,
        nombre: "Daylight",
        imagen: "./imagenes/Daylight.jpeg",
        descripcion: "Del álbum Harry's House",
    },
    {
        id: 4,
        nombre: "Only Angel",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "Del álbum Harry Styles",
    },
    {
        id: 5,
        nombre: "Kiwi",
        imagen: "./imagenes/Kiwi.jpg",
        descripcion: "Del álbum Harry Styles",
    },
    {
        id: 6,
        nombre: "Matilda",
        imagen: "./imagenes/Matilda.jpg",
        descripcion: "Del álbum Harry's House",
    },
    {
        id: 7,
        nombre: "Satellite",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "Del álbum Harry's House",
    },
    {
        id: 8,
        nombre: "Watermelon Sugar",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "Del álbum Fine Line",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

/* Función que recorre el listado de las cartas */
function generarCartas(){
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
                <article class="card">
                    <img src=${carta.imagen} alt="Imagen del proyecto">
                    <div class="info">
                      <h2>${carta.nombre}</h2>
                      <p>${carta.descripcion}</p>
                    </div>
                </article>`
    )
}


function agregarCartas() {
    const nombre = prompt("Nombre")
    const imagen = prompt ("Imagen")
    const descripción = prompt ("Descripción")

    const carta = {nombre,imagen,descripción}

    listadoCartas.push (carta)
    generarCartas()
}
generarCartas()