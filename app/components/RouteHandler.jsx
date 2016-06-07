var React = require('react');
var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');

var RouteHandler = React.createClass({
  render: function () {
    //debugger;

    return (
      <div>
        <Portfolio />
        <Travelbug />
      </div>
    );
  }
});

module.exports = RouteHandler;
