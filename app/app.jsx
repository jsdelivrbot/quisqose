var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var RouteHandler = require('RouteHandler');
var Home = require('Home');
var Portfolio = require('Portfolio');



//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={RouteHandler}/>
        </Route>
        <Route path="portfolio" component={Portfolio}></Route>
    </Router>,
    document.getElementById('app')
);
