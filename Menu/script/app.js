
const menu = [
  {
    id: 1,
    titulo: "Torre de panqueques",
    categoria: "Desayuno",
    precio: 1500,
    imagen: "Imagenes\\item-1.jpeg",
    descripcion: "Riquisima torre de panqueques con mucho dulce de leche",
    ingredientes: "Panqueques de huevo, dulce de leche, crema y caramelo"
  },

  {
    id: 2,
    titulo: "Hamburguesa con bacon",
    categoria: "Almuerzo",
    precio: 2500,
    imagen: "Imagenes\\item-2.jpeg",
    descripcion: "Riquisima hamburguesa con bacon y papas",
    ingredientes: "Hamburguesa con cheddar, bacon, pepinos, ketchup y papas fritas"
  },

  {
    id: 3,
    titulo: "Milkshakecupcake",
    categoria: "Merienda",
    precio: 1800,
    imagen: "Imagenes\\item-3.jpeg",
    descripcion: "Riquisima milkshake con un cupcake arriba",
    ingredientes: "Leche, crema, frutas de estacion, cupcake con crema, chispitas de colores"
  },

  {
    id: 4,
    titulo: "Huevos con cafe",
    categoria: "Merienda",
    precio: 1700,
    imagen: "Imagenes\\item-4.jpeg",
    descripcion: "Riquisimos huevos en tostado mas cafe",
    ingredientes: "Omelette de huevo, jamon, queso, con cafe americano doble"
  },

  {
    id: 5,
    titulo: "Hamburguesa completa",
    categoria: "Cena",
    precio: 2500,
    imagen: "Imagenes\\item-5.jpeg",
    descripcion: "Riquisimo hamburguesa completa lechuga tomate huevo",
    ingredientes: "Hamburguesa de carne, pan de papa, lechuga, tomate, huevo frito y papas fritas"
  },

  {
    id: 6,
    titulo: "Milkshake",
    categoria: "Merienda",
    precio: 1700,
    imagen: "Imagenes\\item-6.jpeg",
    descripcion: "Riquisimo milkshake de frutilla",
    ingredientes: "Leche, crema, frutillas"
  },

  {
    id: 7,
    titulo: "Tostado con bacon",
    categoria: "Merienda",
    precio: 1500,
    imagen: "Imagenes\\item-7.jpeg",
    descripcion: "Riquisima tostado de huevo con bacon para la tarde",
    ingredientes: "Pan arabe, huevo revuelto en bacon y queso tybo"
  },

  {
    id: 8,
    titulo: "Hamburguesa completa con papas",
    categoria: "Cena",
    precio: 3000,
    imagen: "Imagenes\\item-8.jpeg",
    descripcion: "Riquisima hamburguesa completa con papas",
    ingredientes: "Hamburguesa de carne, pan de papa, lechuga, tomate, huevo frito, jamon, queso tybo y papas fritas"
  },
  {
    id: 9,
    titulo: "Batido para compartir",
    categoria: "Merienda",
    precio: 2000,
    imagen: "Imagenes\\item-9.jpeg",
    descripcion:
      "Riquisimo batido para compartir en la merienda, sabor  a eleccion",
      ingredientes: "Leche, crema, frutas de estacion,"
  },
  {
    id: 10,
    titulo: "Bife de chorizo con esparragos",
    categoria: "Merienda",
    precio: 3500,
    imagen: "Imagenes\\item-10.jpeg",
    descripcion: "Riquisima bife de chorizo con esparragos hervidos",
    ingredientes: "300gr de carne vacuna, esparragos hervidos y tomates rellenos"
  },
];

//Pagina cargada
window.addEventListener("DOMContentLoaded", function () {
  mostrarProductosMenu(menu);
  mostrarBotonesMenu();

 // funcionalidad de desplazar hacia arriba

const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})

// Mostrar, ocultar menu de mas experiencia


const botonVerMas = document.querySelectorAll('.ver-mas-btn');
const textElemento = document.querySelectorAll('.textoOculto');

botonVerMas.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    const textoOculto = textElemento[index];
    textoOculto.classList.toggle('mostrarTexto');
  });
});

});

const seccionCentral = document.querySelector(".seccion-central");
const contenedor = document.querySelector(".contenedor-botones");

//Funcion para mostrar el menu

function mostrarProductosMenu(productosMenu) {
  let menuDesplegable = productosMenu.map(function (item) {
    // console.log(item);

    return `<div><article class="menu-producto">
          <img src=${item.imagen} class="foto" alt=${item.titulo} />
          <div class="producto-info">
            <header>
              <h4>${item.titulo}</h4>
              <h4 class="precio">$${item.precio}</h4>
            </header>
            <p class="texto-producto">
              ${item.descripcion}
            </p>
            <span class="textoOculto">
            <p>${item.ingredientes}
            </p>
          </span><br>
          <button class="ver-mas-btn"><img
          src="Imagenes/signo-de-mas.png" width="20px"></button><br></div><br>
          </div>
        </article></div>`;
  });
  menuDesplegable = menuDesplegable.join("");

  seccionCentral.innerHTML = menuDesplegable;
}

// console.log (menuDesplegable);

//Funcion para mostrar botones dinamicamente

function mostrarBotonesMenu() {
  const categorias = menu.reduce(
    function (valores, item) {
      if (!valores.includes(item.categoria)) {
        valores.push(item.categoria);
      }
      return valores;
    }, // console.log (valores)
    ["todos"]
  );
  const botonesCategoria = categorias
    .map(function (categoria) {
      return `<button class="btn-filtrar" type="button" data-id=${categoria}>
      ${categoria}
      </button>`;
    })
    .join("");
  contenedor.innerHTML = botonesCategoria;
  const botonesFiltrar = contenedor.querySelectorAll(".btn-filtrar");

  //Productos filtrados

  botonesFiltrar.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const categoria = e.currentTarget.dataset.id;
      const menuCategoria = menu.filter(function (menuItem) {
        // console.log(menuItem.categoria);
        if (menuItem.categoria === categoria) {
          return menuItem;
        }
      });
      // console.log(categoriaMenu);
      if (categoria === "todos") {
        mostrarProductosMenu(menu);
      } else {
        mostrarProductosMenu(menuCategoria);
      }
    });
  });

};

