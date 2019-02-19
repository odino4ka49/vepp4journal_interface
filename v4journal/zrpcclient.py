import zerorpc
import threading
from . import consumers
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


channel_layer = get_channel_layer()
"""await channel_layer.send("channel_name", {
    "type": "chat.message",
    "text": "Hello there!",
})"""

def sendDeployments(pv, value):
    type = "renderDeployments"
    #message = pv + "," + str(value)
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        'send_message',
        {'type': 'send_message', 'pv': pv, 'value': value}
    )

class Subscriber(zerorpc.Subscriber):
    def testing(self, a, b):
        #pv.send_message(a)
        sendDeployments(a,b)


def testsubscriber():
    print("start subscriber")
    subscriber = Subscriber()
    subscriber.connect("tcp://0.0.0.0:4243")
    subscriber.run()


thread1 = threading.Thread(target=testsubscriber)
thread1.start()