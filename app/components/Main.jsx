//Main component for portfolio
var React = require('react');
var Nav = require('Nav');
var About = require('About');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                {props.children}
            </div>
        </div>
    );
};

module.exports = Main;
