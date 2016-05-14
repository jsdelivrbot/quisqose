//Skills component
var Skills = React.createClass({
    //use the map method to create arrays of projects and skills
    render: function(){
            var skills = this.props.skillList.map(function(skill, index){
                return (<li key={index}>{skill}</li>);
            });

            return (
                <div>
                    <h5>Things I Like to Do:</h5>
                    <ul>
                    {skills}
                    </ul>
                </div>
        );
    }
});
