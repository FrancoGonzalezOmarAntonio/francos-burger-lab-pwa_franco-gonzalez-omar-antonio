// csr.js — Renderizado en el Cliente (CSR)
// "CSR" significa que el HTML llega casi vacío y es ESTE archivo JavaScript,
// ya corriendo en el navegador del usuario, quien construye el contenido.

// 1) Buscamos los contenedores vacíos que dejamos en index.html
const contenedorCatalogo = document.getElementById("catalogo");
const navCategorias = document.getElementById("categorias");

// Ícono que acompaña el título de cada categoría de catalogo.json
const ICONOS_CATEGORIA = {
  "Hamburguesas": "🍔",
  "Acompañamientos": "🍟",
  "Bebidas y postres": "🥤",
};

// Convierte "Bebidas y postres" en "bebidas-y-postres" para usarlo como id del ancla
function crearSlug(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// Crea la tarjeta <div class="producto"> de un producto, desde JavaScript puro
function crearTarjeta(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "producto";
  tarjeta.dataset.categoria = producto.categoria;

  // usamos el propio objeto "producto" para llenar el texto (sin plantillas de servidor)
  tarjeta.innerHTML = `
    <div class="producto__media">
      <img class="producto__foto" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      <span class="producto__etiqueta">${producto.categoria}</span>
    </div>
    <div class="producto__info">
      <strong>${producto.nombre}</strong>
      <p>Disponibles: ${producto.stock}</p>
      <div class="producto__pie">
        <span class="precio">$${producto.precio}</span>
        <button type="button" data-id="${producto.id}"><span aria-hidden="true">+</span> Agregar</button>
      </div>
    </div>
  `;

  // conectamos el botón con la función agregarAlCarrito() de carrito.js
  // (carrito.js se activa en el avance 2: mientras tanto el botón no truena en consola)
  tarjeta.querySelector("button").addEventListener("click", () => {
    if (typeof agregarAlCarrito === "function") agregarAlCarrito(producto);
  });

  return tarjeta;
}

// 2) fetch() le pide el archivo catalogo.json al servidor (aquí simula una API real).
//    fetch() devuelve una "promesa": un valor que llegará más adelante, no de inmediato.
fetch("catalogo.json")
  .then((respuesta) => respuesta.json()) // convierte el texto recibido en un array de objetos JS
  .then((productos) => {
    // 3) Ya tenemos los productos: borramos las tarjetas esqueleto y dibujamos las reales
    contenedorCatalogo.innerHTML = "";
    contenedorCatalogo.removeAttribute("aria-busy");
    contenedorCatalogo.removeAttribute("aria-label");

    // 4) Agrupamos los productos por categoría, respetando el orden de catalogo.json
    const categorias = new Map();
    productos.forEach((producto) => {
      if (!categorias.has(producto.categoria)) categorias.set(producto.categoria, []);
      categorias.get(producto.categoria).push(producto);
    });

    // 5) Por cada categoría: un botón de acceso rápido arriba y un bloque con su título y sus tarjetas
    categorias.forEach((lista, categoria) => {
      const slug = "cat-" + crearSlug(categoria);
      const icono = ICONOS_CATEGORIA[categoria] || "⭐";

      const enlace = document.createElement("a");
      enlace.href = "#" + slug;
      enlace.className = "categorias__chip";
      enlace.textContent = `${icono} ${categoria}`;
      navCategorias.appendChild(enlace);

      const bloque = document.createElement("div");
      bloque.className = "categoria";
      bloque.id = slug;
      bloque.innerHTML = `
        <h3 class="categoria__titulo">
          <span aria-hidden="true">${icono}</span> ${categoria}
          <span class="categoria__total">${lista.length} productos</span>
        </h3>
        <div class="grid"></div>
      `;

      const grid = bloque.querySelector(".grid");
      lista.forEach((producto) => grid.appendChild(crearTarjeta(producto)));
      contenedorCatalogo.appendChild(bloque);
    });
  })
  .catch((error) => {
    // si algo falla (por ejemplo, sin conexión y sin caché), avisamos en pantalla
    contenedorCatalogo.innerHTML = "<p>No se pudo cargar el catálogo. Intenta más tarde.</p>";
    contenedorCatalogo.removeAttribute("aria-busy");
    contenedorCatalogo.removeAttribute("aria-label");
    console.error("Error al cargar catálogo:", error);
  });
