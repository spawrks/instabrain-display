var io = require('socket.io-client'),
  Shapes = require('react-shapes');

class FeedbackComponent extends React.Component {
  constructor(props) {
    super(props);

    var that = this;
    that.state = {
      value: 0.1
    };

    that.MAX_SIZE = 200;
    that.MIN_SIZE = 50;

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
    var radius = Math.min(this.state.value * this.MAX_SIZE, this.MIN_SIZE);
    return (
      <div className='experiment-container'>
      <div className='experiment-max'>
      <Shapes.Circle r={this.MAX_SIZE} fill={{color:'#000000'}} stroke={{color:'#286e28'}} strokeWidth={3} />
      </div>
      <div className='experiment-target'>
      <Shapes.Circle r={radius} fill={{color:'#286e28'}} stroke={{color:'#286e28'}} strokeWidth={3} />
      </div>
      </div>
    );
  }
};

module.exports = FeedbackComponent;
// <h2>It is {new Date().toLocaleTimeString()}.</h2>
// A dummy string is [{this.props.dummy}] and my state is {this.state.value}.
// <Shapes.Rectangle width={100} height={100}/>
