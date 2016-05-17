var React = require('react');
var Nav = require('Nav');

//Refactoring the above render function to an ES6 arrow function
//This can be refactored as an arrow function because it
//only defines the render method and it doesn't maintain state
var About = () => {
    return (
        <div>
            <h1 className="text-center">This is the weather app FOR THE FUTURE</h1>
            <p className="text-center">We know you've been waiting for this super duper
            cool weather app.</p>
            <br/>
            <p className="text-center">Now, the wait is over.</p>
        </div>
    );
};

module.exports = About;
