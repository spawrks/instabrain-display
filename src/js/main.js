io = require('socket.io-client');
components = require('./components');

const element = <components.Dummy dummy='ruh roh'/>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

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
});
