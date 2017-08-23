// var svg = require('svg.js');
var ExperimentComponent = require('./ExperimentComponent');
// var CircleComponent = require('./CircleComponent');

// root = SVG('root').size(300, 300);
// console.log(root);

// ReactDOM.render(
// <CircleComponent root='asdf' />,
// <CircleComponent root={(function() return root)()} />,
// document.getElementById('root')
// );

ReactDOM.render(
  <ExperimentComponent dummy='ruh roh' />,
  document.getElementById('root')
);

