var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hellow , {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(e){
    debugger;
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value ='';
      this.props.onNewName(name,'name');
    }
    if(message.length > 0){
      this.refs.message.value ='';
      this.props.onNewName(message,'message');
    }

  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <br/>
          <textarea type="text" ref="message" />
          <br/>
          <button>Set Name</button>
        </form>
    );
  }
});
var Greeter = React.createClass({

  getDefaultProps : function(){
      return {
        name:'React',
      message:'This is default message!'
      };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message : this.props.message
    }
  },

  handleNewName : function(name,type){  
    debugger;
    if(type === 'name'){
      this.setState({
            name:name
          });
    }
    if(type === 'message'){
      this.setState({
            message:name
          });
    }
  },

  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('root'));