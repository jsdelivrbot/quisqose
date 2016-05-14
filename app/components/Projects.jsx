var React = require('react');

var Projects = React.createClass({
    render: function(){
            var projects = this.props.projectList.map(function(project, index){
                return (<li key={index}>{project}</li>);
            });

            return (
                <div>
                    <h5>Things Ive Done:</h5>
                    <ul>
                    {projects}
                    </ul>
                </div>
        );
    }
});

module.exports = Projects;
