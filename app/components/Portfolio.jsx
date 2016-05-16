var React = require('react');
var Projects = require('Projects');
var Skills = require('Skills');
// var Data = require('Data');



var Portfolio = React.createClass({

    render: function(){

        return (
            <div className="header">
                <h3 className="name text-center">Kevin Tokheim</h3>
                <img className=" picture text-center" src={"img/eeyore.jpeg"}/>
                <Skills skillList={this.props.profileData.skillList}/>
                <Projects projectList={this.props.profileData.projectList}/>
            </div>
        );
    }
});

module.exports = Portfolio;
