# Franco's Burger Lab — PWA de ventas

| Dato | Valor |
|---|---|
| **Alumno** | FRANCO GONZÁLEZ OMAR ANTONIO (apellido paterno: Franco · apellido materno: González · nombres: Omar Antonio) |
| **Grupo** | IDGS10-1 |
| **Negocio** | Franco's Burger Lab |
| **Giro** | Hamburguesería |
| **Repositorio** | https://github.com/FrancoGonzalezOmarAntonio/francos-burger-lab-pwa_franco-gonzalez-omar-antonio |
| **GitHub Pages** | https://francogonzalezomarantonio.github.io/francos-burger-lab-pwa_franco-gonzalez-omar-antonio/ |

## Descripción

Aplicación Web Progresiva (PWA) de ventas para **Franco's Burger Lab**, hamburguesería en Hermosillo, Sonora.
El catálogo de 15 productos (hamburguesas, acompañamientos, bebidas y postres) se carga desde `catalogo.json`
y se dibuja en el navegador con JavaScript (Renderizado en el Cliente, CSR).

## Estructura del repositorio

```
index.html        App Shell (encabezado, catálogo, pie de página)
catalogo.json     15 productos: id, nombre, categoria, precio, stock, imagen
css/estilos.css   Paleta de marca y diseño responsivo
js/csr.js         fetch() de catalogo.json y pintado de tarjetas
js/               carrito, notificaciones, geolocalización, app (se activan por avance)
icons/            Logo e íconos de la PWA
img/              15 fotografías de los productos
```

## Probar en local

Abre la carpeta en VS Code y usa **Live Server** sobre `index.html`
(`fetch()` no funciona abriendo el archivo con doble clic, necesita un servidor).

## Historial de avances

| Avance | Hash del commit entregado | Fecha |
|---|---|---|
| 1 | 2194f94 | 11/10/2026 |
| 2 | | 18/10/2026 |
| 3 | | 25/10/2026 |
| 4 | (se escribe en el reporte PDF) | 01/11/2026 |

> El README no puede contener el hash de su propio commit (al guardarlo cambia el hash):
> aquí se anotan los hashes de los avances anteriores.
