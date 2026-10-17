from django.shortcuts import render

# "Base de datos" falsa: una lista de diccionarios en memoria.
# En un proyecto real esto vendría de un modelo (models.py) y una tabla,
# pero para ENTENDER qué es SSR no necesitamos base de datos: lo importante
# es que estos datos se insertan en el HTML *antes* de enviarlo al navegador.
PRODUCTOS = [
  {"id":1,"nombre":"Clásica Lab","categoria":"Hamburguesas","precio":135,"stock":20,"imagen":"img/clasica-lab.jpg"},
  {"id":2,"nombre":"Doble smash","categoria":"Hamburguesas","precio":165,"stock":20,"imagen":"img/doble-smash.jpg"},
  {"id":3,"nombre":"BBQ bacon","categoria":"Hamburguesas","precio":170,"stock":20,"imagen":"img/bbq-bacon.jpg"},
  {"id":4,"nombre":"Jalapeño fire","categoria":"Hamburguesas","precio":160,"stock":20,"imagen":"img/jalapeno-fire.jpg"},
  {"id":5,"nombre":"Hawaiana","categoria":"Hamburguesas","precio":150,"stock":20,"imagen":"img/hawaiana.jpg"},
  {"id":6,"nombre":"Papas a la francesa","categoria":"Acompañamientos","precio":55,"stock":20,"imagen":"img/papas-a-la-francesa.jpg"},
  {"id":7,"nombre":"Papas gajo con queso","categoria":"Acompañamientos","precio":75,"stock":20,"imagen":"img/papas-gajo-con-queso.jpg"},
  {"id":8,"nombre":"Aros de cebolla","categoria":"Acompañamientos","precio":65,"stock":20,"imagen":"img/aros-de-cebolla.jpg"},
  {"id":9,"nombre":"Boneless (6 pzs)","categoria":"Acompañamientos","precio":95,"stock":20,"imagen":"img/boneless-6-pzs.jpg"},
  {"id":10,"nombre":"Papas trufadas","categoria":"Acompañamientos","precio":85,"stock":20,"imagen":"img/papas-trufadas.jpg"},
  {"id":11,"nombre":"Malteada de vainilla","categoria":"Bebidas y postres","precio":70,"stock":20,"imagen":"img/malteada-de-vainilla.jpg"},
  {"id":12,"nombre":"Malteada Oreo","categoria":"Bebidas y postres","precio":80,"stock":20,"imagen":"img/malteada-oreo.jpg"},
  {"id":13,"nombre":"Limonada mineral","categoria":"Bebidas y postres","precio":45,"stock":20,"imagen":"img/limonada-mineral.jpg"},
  {"id":14,"nombre":"Refresco","categoria":"Bebidas y postres","precio":35,"stock":20,"imagen":"img/refresco.jpg"},
  {"id":15,"nombre":"Brownie con helado","categoria":"Bebidas y postres","precio":75,"stock":20,"imagen":"img/brownie-con-helado.jpg"}
]


def vista_ssr(request):
    """
    Vista con Renderizado en Servidor (SSR).

    request: el objeto que representa la petición que hizo el navegador.

    render() hace tres cosas:
      1) toma la plantilla 'catalogo/catalogo_ssr.html'
      2) le inyecta el diccionario de "contexto" (aquí: la lista de productos)
      3) devuelve el HTML final, YA CON LOS DATOS DENTRO, listo para el navegador.

    Por eso es "servidor": el HTML que llega al navegador ya trae escritos
    los nombres y precios. Si haces clic derecho > "Ver código fuente de la
    página" verás los productos en el HTML, aunque JavaScript esté desactivado.
    Compáralo con la vista CSR de la Parte B, donde el HTML llega vacío y es
    JavaScript quien dibuja los productos DESPUÉS, ya en el navegador.
    """
    contexto = {"productos": PRODUCTOS}
    return render(request, 'catalogo/catalogo_FGOA.html', contexto)