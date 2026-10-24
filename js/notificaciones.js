// notificaciones.js — Notification API
// Esta es la API del NAVEGADOR (no del sistema push completo, que necesitaría
// un servidor con claves VAPID). Sirve para mostrar avisos del lado del cliente
// y para entender el permiso que el usuario debe conceder.

const ICONO_NOTIFICACION = "icons/logo_franco-gonzalez-omar-antonio_96c097726f.png";

// Notificación útil: la llama agregarAlCarrito() de carrito.js cada vez que se
// agrega un producto. Solo se muestra si el usuario YA dio permiso con el botón.
function notificarPedidoAgregado(producto, cantidad) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  new Notification("Pedido agregado 🍔", {
    body: `${producto.nombre} ($${producto.precio}) — llevas ${cantidad} en tu pedido.`,
    icon: ICONO_NOTIFICACION,
    tag: "pedido-agregado", // mismo tag = reemplaza la anterior en vez de apilar muchas
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-notificar");
  const mensaje = document.getElementById("notificaciones-mensaje");

  // Si el permiso ya se dio en una visita anterior, lo indicamos desde el inicio
  if ("Notification" in window && Notification.permission === "granted") {
    mensaje.textContent = "Notificaciones activadas.";
  }

  boton.addEventListener("click", () => {
    // "Notification" no existe en todos los navegadores/contextos; lo comprobamos primero
    if (!("Notification" in window)) {
      mensaje.textContent = "Este navegador no soporta notificaciones.";
      return;
    }

    // Notification.requestPermission() abre el diálogo del navegador
    // ("bloquear" / "permitir"). Devuelve una promesa con la respuesta del usuario.
    Notification.requestPermission().then((permiso) => {
      if (permiso === "granted") {
        // Creamos una notificación de prueba. title, luego un objeto con opciones.
        new Notification("Franco's Burger Lab", {
          body: "¡Listo! Te avisaremos cada vez que agregues algo a tu pedido.",
          icon: ICONO_NOTIFICACION,
        });
        mensaje.textContent = "Notificaciones activadas.";
      } else {
        mensaje.textContent = "No diste permiso para notificaciones.";
      }
    });
  });
});
