var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

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
