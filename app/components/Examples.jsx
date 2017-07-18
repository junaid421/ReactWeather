var React = require('react');
var {Link} = require('react-router');

// var Example = React.createClass({
// render: function(){
//     return(
//       <h2>Example Component</h2>
//     );
// }
// });

var Example = (props) => {
    return(
     <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
            <li>
                <Link to='/?location=Islamabad'>Islamabad, Pak</Link>
            </li>
            <li>
                <Link to='/?location=Chicago'>Chicago, Us</Link>
            </li>
        </ol>
     </div>
    );
}

module.exports = Example;