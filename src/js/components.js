io = require('socket.io-client');
svg = require('svg.js');
utils = require('./utils');

components = {};

function draw() {
  var drawing = SVG('root').size(300, 300);
  var rect = drawing.rect(100, 100).attr({ fill: '#f06'  });
  return rect;
};

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
      <svg>{draw().svg()}</svg>
      </div>
    );
  }
};

console.log(draw().svg());

components.Dummy = Dummy;

module.exports = components;
