var React = require('react');
var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');
var {Link, IndexLink} = require('react-router');


var Home = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Portfolio</h3>
        <Link to='portfolio'><img className="text-center" src={"img/eeyore.jpeg"}/></Link>
        <h3>Travelbug</h3>
        <Link to='travelbug'><img className="text-center" src={"img/travelbugthumb1.jpeg"}/></Link>
        <h3>pathHop</h3>
        <Link to='pathhop'><img className="text-center" src={"img/comealongthumb1.jpeg"}/></Link>
        <h3>React Weather</h3>
        <Link to='weather'><img className="text-center" src={"img/comealongthumb1.jpeg"}/></Link>
        <h3>Circles and Squares of Doom</h3>
        <Link to='circles'><img className="text-center" src={"img/doomthumb1.jpeg"}/></Link>
      </div>
    )
  }
});

module.exports = Home;
