var io = require('socket.io-client'),
  Shapes = require('react-shapes');

class FeedbackComponent extends React.Component {
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
      console.log(msg.data);
      that.setState({
        value: msg.data
      });
    });
  }

  render() {
    console.log(this.props.dummy)
    console.log(this.state.value)
    return (
      // <div>
      // <h2>It is {new Date().toLocaleTimeString()}.</h2>
      // A dummy string is [{this.props.dummy}] and my state is {this.state.value}.
      // <Shapes.Rectangle width='100' height='100'/>
      // </div>
      Hello, world!
    );
  }
};

module.exports = FeedbackComponent;
