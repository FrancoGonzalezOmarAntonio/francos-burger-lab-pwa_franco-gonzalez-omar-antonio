"""
Rutas propias de la app "catalogo".

Django separa las rutas por app para que cada una sea independiente
y reutilizable en otros proyectos.
"""
from django.urls import path
from . import views  # importamos las funciones definidas en views.py de esta misma carpeta

urlpatterns = [
    # el proyecto ya antepone "catalogo/" (ver ssr_FRANCOSBURGER_FGOA/urls.py), así que
    # http://127.0.0.1:8000/catalogo/  ->  ejecuta la función vista_ssr()
    path('', views.vista_ssr, name='catalogo_FGOA'),
]
