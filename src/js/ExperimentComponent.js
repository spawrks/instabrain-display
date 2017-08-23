var io = require('socket.io-client'),
  Enum = require('enumify').Enum,
  utils = require('./utils');

var Shapes = require('react-shapes');
var InstructionComponent = require('./InstructionComponent');
var FeedbackComponent = require('./FeedbackComponent');

class Phase extends Enum {}
Phase.initEnum([
  'INSTRUCTION',
  'FEEDBACK'
])

class ExperimentComponent extends React.Component {
  constructor(props) {
    super(props);
    var that = this;

    that.state = {
      value: 0,
      phase: Phase.INSTRUCTION
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
    if (this.state.phase === Phase.INSTRUCTION) {
      return (
        <div>
        <h1>{utils.test}</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        A dummy string is [{this.props.dummy}] and my state is {this.state.value}.
        <InstructionComponent />
        </div>
      );
    } else {
      return (
        <FeedbackComponent />
      )
    }
  }
};

module.exports = ExperimentComponent;
