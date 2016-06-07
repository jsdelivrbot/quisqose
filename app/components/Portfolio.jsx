var React = require('react');

var Portfolio = React.createClass({

    render: function(){

        return (
            <div className="header">
                <h3 className="name text-center">Portfolio</h3>
                <img className=" picture text-center" src={"img/eeyore.jpeg"}/>
            </div>
        );
    }
});

module.exports = Portfolio;
