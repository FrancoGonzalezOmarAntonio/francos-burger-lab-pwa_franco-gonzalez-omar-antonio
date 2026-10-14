"""
WSGI config for ssr_FRANCOSBURGER_FGOA project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ssr_FRANCOSBURGER_FGOA.settings')

application = get_wsgi_application()
