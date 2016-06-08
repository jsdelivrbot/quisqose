var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');
var Home = require('Home');

var RouteHandler = React.createClass({
  render: function () {
    //debugger;

    return (
      <div>
        <Home />
      </div>
    );
  }
});

module.exports = RouteHandler;
