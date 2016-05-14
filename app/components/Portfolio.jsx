var React = require('react');
var Projects = require('Projects');
var Skills = require('Skills')

var Portfolio = React.createClass({
    render: function(){
        return (
            <div className="header">
                <h3 className="heading">{this.props.name}</h3>
                <img className="picture" src={this.props.imgURL} />
            </div>
        );
    }
});

module.exports = Portfolio;
