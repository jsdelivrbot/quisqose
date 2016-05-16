var React = require('react');
var Projects = require('Projects');
var Skills = require('Skills');
// var Data = require('Data');



var Portfolio = React.createClass({

    render: function(){

        return (
            <div className="header">
                <h3 className="heading">Kevin Tokheim</h3>
                <Skills skillList={this.props.profileData.skillList}/>
                <Projects projectList={this.props.profileData.projectList}/>
            </div>
        );
    }
});

module.exports = Portfolio;
