import json
import zerorpc
import threading
from . import consumers
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


def sendDeployments(pv, value):
    type = "renderDeployments"
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        'send_message',
        {'type': 'send_message', 'pv': pv, 'value': value}
    )


class Subscriber(zerorpc.Subscriber):
    def testing(self, a, b):
        a = a.decode('utf-8')
        sendDeployments(a,b)


def testsubscriber():
    print("start subscriber")
    subscriber = Subscriber()
    subscriber.connect("tcp://192.168.176.16:4243") #192.168.144.66:4243")# 
    subscriber.run()

def mysubscriber():
    client = zerorpc.Client()
    client.connect("tcp://192.168.176.16:4243")
    # Subscribe to new client eventsclient.on_new_client = on_new_client
    client.subscribe("new_client")
    # Wait for new client events
    while True:
        pass

#thread1 = threading.Thread(target=mysubscriber)
thread1 = threading.Thread(target=testsubscriber)
thread1.start()

