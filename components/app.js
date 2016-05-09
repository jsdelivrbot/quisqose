// App.js
import React, { Component } from 'react'

//var App is the parent component. It contains all the child components that make up this app.
//App is rendered at the bottom by the ReactDOM.render method.
var App = React.createClass({
    render: function(){
        return (
            <div>
                <Profile
                    name={this.props.profileData.name}
                    imgURL={this.props.profileData.imgURL}
                />
                <Skills
                    skillList={this.props.profileData.skillList}
                />
                <Projects
                    projectList={this.props.profileData.projectList}
                />
            </div>
        );
    }
});
