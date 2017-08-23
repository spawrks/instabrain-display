utils = require('./utils');

components = {};

class Dummy extends React.Component {
  render() {
    return (
      <div>
      <h1>{utils.test}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      A dummy string is [{this.props.dummy}].
      </div>
    );
  }
}

components.Dummy = Dummy;

module.exports = components;
