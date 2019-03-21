import React, { Component } from 'react';
import '../App.css';

class Edit extends Component {
  state={
    viewURL: "",
    viewTitle: "",
    GPS: [],
    description: ""
  }

  componentDidMount(){
    this.setState({
      description:this.props.description,
      viewTitle:this.props.viewTitle,
      GPS: this.props.GPS
    })
  }

  updateField(event){
    let field = {[event.target.id]:event.target.value}
    if(field.GPS) field.GPS = event.target.value.split(",")
    this.setState(field)
  }

  submitChanges(){
    let viewTitle = document.getElementById('viewTitle').value
    let description = document.getElementById('description').value
    let GPS = document.getElementById('GPS').value
    let formData  = {
        viewTitle: viewTitle,
        description: description,
        GPS: GPS,
    }
    fetch('http://localhost:5000/images/1', { // Your POST endpoint
      method: 'PATCH',
      mode:"cors",
      body: formData// This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        alert("successfully uploaded image!" , success 
        )
        return  this.props.changePage("stories")
      }// Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  }

  render() {
    return (
    <div className="fileUpload container collection ">
      <div className="row center-align">
          <div className="col s12 ">
          <img alt="To Edit" className="preview" src={this.props.viewURL}  ></img>
          </div>
     </div>
      <form className="col s12">
      <div className="row center-align active">
          <div className="input-field col s12 ">
          <span className="white-text"> Title </span>
            <input id="viewTitle" type="text" className="validate white-text" placeholder={this.state.viewTitle} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <label htmlFor="viewTitle"></label>
          </div>
        </div>
        <div className="row center-align active">
          <div className="col s12 ">
          <span className="white-text"> Description </span>
            <input id="description" type="text" className="validate white-text materialize-textarea " placeholder={this.state.description} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <label htmlFor="description"></label>
          </div>
        </div>
        <div className="row center-align active">
          <div className="input-field col s12">
          <span className="white-text"> Location </span>
            <input id="GPS" type="text" className="validate white-text" placeholder={this.state.GPS} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <label htmlFor="GPS"></label>
          </div>
        </div>
        <div className="row center-align active">
        <a className="waves-effect waves-light green darken-2 btn " href="/#" onClick={()=>this.submitChanges()} style={{   marginRight:'20px'}}><i className="material-icons left">create</i>    Save Details </a>
        </div>
      </form>
  </div>
    )
  }
}

export default Edit;
