var React = require('react');
var Nav = require('Nav')

var Portfolio = React.createClass({

    render: function(){

        return (
          <div>
            <Nav />
            <div className="header">
              <h3 className="name text-center">Portfolio</h3>
              <img className=" picture text-center" src={"img/eeyore.jpeg"}/>
            </div>
          </div>
        );
    }
});

module.exports = Portfolio;
