var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Portfolio = require('Portfolio');
var About = require('About');

// var SKILLS = [
//             <i className="icon devicon-javascript-plain colored"></i>,
//             <i className="icon devicon-php-plain colored"></i>,
//             <i className="icon devicon-laravel-plain-wordmark colored"></i>,
//             <i className="icon devicon-react-original-wordmark colored"></i>
//         ];
// var PROJECTS = [
//               <a href="http://infinite-badlands-99742.herokuapp.com/"><img src="img/travelbugthumb1.jpeg"/>Travelbug</a>,
//               <a href="http://kevintokheim.github.io/Circles-and-Squares-of-Doom/"><img src="img/doomthumb1.jpeg"/>Circles and Squares of Doom</a>,
//               <a href="http://dev-come-along-test.pantheon.io/"><img src="img/comealongthumb1.jpeg"/>Come Along</a>
//           ];



//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <IndexRoute component={Portfolio}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
