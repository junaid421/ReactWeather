var React = require('react');

// var About = React.createClass({
// render: function(){
//     return(
//       <h2>About Component</h2>
//     );
// }
// });

var About = (props) => {
  return (
    <div>
    <h3>About</h3>
    <p>Welcome to the examples page!</p>
    </div>
  )
}

module.exports = About;