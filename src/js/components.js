io = require('socket.io-client');
utils = require('./utils');

components = {};

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    var that = this;

    that.state = {
      value: 0
    };

    var url = 'http://' + document.domain + ':' + location.port
    console.log(url);
    var socket = io.connect(url);

    socket.on('connect', function() {
      console.log('connected!')
      socket.emit('event', {data: 'connected!'});
    });

    socket.on('response', function(msg) {
      console.log('hello!')
      console.log(msg.data);
      that.setState({
        value: msg.data
      })
    });
  }

  render() {
    return (
      <div>
      <h1>{utils.test}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      A dummy string is [{this.props.dummy}] and my state is {this.state.value}.
      </div>
    );
  }
}

components.Dummy = Dummy;

module.exports = components;
