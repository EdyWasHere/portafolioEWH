from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/visit_counter/$', consumers.VisitCounterConsumer.as_asgi()),
]
