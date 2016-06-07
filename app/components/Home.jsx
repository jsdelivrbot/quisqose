var React = require('react');
var Portfolio = require('Portfolio');
var {Link, IndexLink} = require('react-router');


var Home = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Portfolio</h3>
        <Link to='portfolio' activeClassName='active'><img className=" picture text-center" src={"img/eeyore.jpeg"}/></Link>
      </div>
    )
  }
});

module.exports = Home;
