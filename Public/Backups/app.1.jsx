var Greeter = React.createClass({

  getDefaultProps : function(){
      return {
        name:'React'
      };
  },
  getInitialState: function(){
    return {
      name: this.props.name
    }
  },

  onButtonClick : function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value='';
    if(typeof name === 'string' && name.length >0){
 this.setState({
      name:name
    });
    }
    
    
   
  },

  render: function(){
    var userName = this.state.name;
    return (
      <div>
        <h1>Hello {userName}</h1>
        <p>This is from a component!</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('root'));