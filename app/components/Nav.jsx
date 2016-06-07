var React = require('react');
var {Link, IndexLink} = require('react-router');

//React-router allows us to create links with var {Link} - ES6 destructuring
//IndexLink prevents the '/' path from inheriting the active style when it is not active
//Rule of Thumb: when using IndexRoute, use IndexLink as well (in the main component)

var Nav = React.createClass({

    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Kevin Tokheim</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                  <a href="https://github.com/kevintokheim">Github</a>
                  <a href="https://www.linkedin.com/in/kevintokheim">LinkedIn</a>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
