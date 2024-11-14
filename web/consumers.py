import json
from channels.generic.websocket import AsyncWebsocketConsumer

class VisitCounterConsumer(AsyncWebsocketConsumer):
    # Mantendremos un contador estático de visitas
    current_visits = 0

    async def connect(self):
        # Aceptamos la conexión de WebSocket
        self.room_group_name = "visit_counter"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        # Incrementar el contador de visitas
        VisitCounterConsumer.current_visits += 1

        # Enviar el contador de visitas a todos los usuarios conectados
        await self.send_json({
            'type': 'visit_count',
            'visits': VisitCounterConsumer.current_visits
        })

    async def disconnect(self, close_code):
        # Decrementar el contador de visitas cuando se desconecta un cliente
        VisitCounterConsumer.current_visits -= 1

        # Enviar el nuevo contador de visitas a todos los usuarios conectados
        await self.send_json({
            'type': 'visit_count',
            'visits': VisitCounterConsumer.current_visits
        })

        # Dejar el grupo de WebSocket
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        # Si es necesario, aquí puedes manejar mensajes de los clientes
        pass

    async def send_visit_count(self):
        # Enviar el contador actualizado a todos los usuarios conectados
        await self.send_json({
            'type': 'visit_count',
            'visits': VisitCounterConsumer.current_visits
        })
