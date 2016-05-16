var React = require('react');

var Data = {
    "name": "Kevin Tokheim",
    "imgURL": "../../img/eeyore.jpg",
    "skillList": [
                <i className="icon devicon-javascript-plain colored"></i>,
                <i className="icon devicon-php-plain colored"></i>,
                <i className="icon devicon-laravel-plain-wordmark colored"></i>,
                <i className="icon devicon-react-original-wordmark colored"></i>
            ],
    "projectList": [<a href="http://infinite-badlands-99742.herokuapp.com/"><img src="img/travelbugthumb1.jpeg"/>Travelbug</a>,
                  <a href="http://kevintokheim.github.io/Circles-and-Squares-of-Doom/"><img src="img/doomthumb1.jpeg"/>Circles and Squares of Doom</a>,
                  <a href="http://dev-come-along-test.pantheon.io/"><img src="img/comealongthumb1.jpeg"/>Come Along</a>
              ]
}

module.exports = Data;
