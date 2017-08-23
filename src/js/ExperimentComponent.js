var Enum = require('enumify').Enum,
  utils = require('./utils');

var Shapes = require('react-shapes');
var InstructionComponent = require('./InstructionComponent');
var FeedbackComponent = require('./FeedbackComponent');

class Phase extends Enum {}
Phase.initEnum([
  'INSTRUCTION',
  'FEEDBACK'
]);

class ExperimentComponent extends React.Component {
  constructor(props) {
    super(props);
    var that = this;
    that.state = {
      phase: Phase.FEEDBACK
    };

    // TODO: this is pretty horrendous. Really, we should have this in the
    // InstructionComponent and lift up state (Google it) from there.
    // But we're in a rush...
    window.onkeyup = function(e) {
      if (that.state.phase === Phase.INSTRUCTION) {
        that.setState({
          value: 0,
          phase: Phase.FEEDBACK
        });
      }
    };
  }

  render() {
    if (this.state.phase === Phase.INSTRUCTION) {
      return (
        <InstructionComponent />
      );
    } else {
      return (
        <FeedbackComponent dummy={this.props.dummy} />
      );
    }
  }
};

module.exports = ExperimentComponent;
