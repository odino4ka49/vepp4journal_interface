from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import simplejson

class PvConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        async_to_sync(self.channel_layer.group_add)('send_message',self.channel_name)

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)('send_message',self.channel_name)

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = simplejson.loads(text_data)
        message = text_data_json['message']
        print(message)

    # Receive message from room group
    def send_message(self, message):
        #print(type(message),message)
        # Send message to WebSocket
        self.send(text_data=simplejson.dumps({
            'type': "websocket.send",
            'message': message
        },ignore_nan=True))

