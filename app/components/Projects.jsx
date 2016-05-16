var React = require('react');
// var Data = require('Data');


var Projects = React.createClass({
    // debugger;

    render: function(){
            var projects = this.props.projectList.map(function(project, index){
                return (<li key={index}>{project}</li>);
            });

            return (
                <div>
                    <h5>Things Ive Done:</h5>
                    <ul className="menu simple projects inline-list">
                        {projects}
                    </ul>
                </div>
        );
    }
});

module.exports = Projects;
