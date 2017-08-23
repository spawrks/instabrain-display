import os
import random
from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit


app = Flask(__name__,
            template_folder=os.path.abspath('src/templates'))
app.config['SECRET_KEY'] = 'crazy_secret'

socketio = SocketIO(app, async_mode=None)


@app.route('/')
def index():
    # TODO: remove random seed from here and index.html
    return render_template('index.html', random_seed=random.randint(1, 9999))


@app.route('/rt_data/', methods = ['POST'])
def rt_data():
    data=request.get_json(force=True)
    feedback_value = data['clf_outs'][int(data['target_class'])-1]
    trial_num = data['trial_num']
    socketio.emit('response',{'data':feedback_value})
    return 'data_received'


@socketio.on('connect')
def test_message():
    print('Client connected')
    emit('response', {'data': 42})


@socketio.on('data')
def test_data(message):
    emit('response', {'data': message})
    print('Received data: ' + message)


@socketio.on('event')
def test_event(message):
    print('Event!')


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')


if __name__ == '__main__':
    socketio.run(app, debug=True)
