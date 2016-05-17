var React = require('react');
var About = require('About');
var {Link, IndexLink} = require('react-router');

//React-router allows us to create links with var {Link} - ES6 destructuring
//IndexLink prevents the '/' path from inheriting the active style when it is not active
//Rule of Thumb: when using IndexRoute, use IndexLink as well (in the main component)
// var Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>Nav Component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                 <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = React.createClass({

    onSearch: function(e){
        e.preventDefault();
        alert('Houston, we have a problem...');
    },
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Submit"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
