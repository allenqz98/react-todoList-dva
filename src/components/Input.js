import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      text: ""
    }
  
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const str = target.value
    this.setState({text: str})
  }

   handleSubmit(e) {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <form >
        <div className="container-fluid">
          <div className="row">
          <input type="text" value={this.state.text} onChange={this.handleInputChange} className="form-control col-10" />
          <button onClick={this.handleSubmit} className="col-2 btn btn-primary" >Add</button>
          </div>
        </div>
      </form>
    );
  }
  
}


export default Input;
