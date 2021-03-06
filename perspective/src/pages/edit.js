import React, { Component } from 'react';
import ConfirmEdit from '../components/confirm_edit'
import '../App.css';

class Edit extends Component {
  state={
    viewURL: "",
    viewTitle: "",
    GPS: [],
    description: "",
    gpsValid: true
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
    if(field.GPS) {
      if(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(field.GPS.split(" ").join(""))){
        this.setState({gpsValid: true})
        field.GPS = event.target.value.split(",")
      } else {
        this.setState({gpsValid: false})
      }
    }
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
    fetch('https://perspective360-backend.herokuapp.com/images/1', { // Your POST endpoint
      method: 'PATCH',
      mode:"cors",
      body: formData// This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        return  this.props.changePage("stories")
      }// Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );

  }

  render() {
    return (
    <div className="fileUpload container collection " style={{width:'65vw', height:'80vh', marginTop:'10%'}}>
      <div className="row center-align" style={{marginTop:"75px"}}>
          <div className="col s12 ">
          <img alt="To Edit" className="preview" src={this.props.viewURL}  ></img>
          </div>
     </div>
      <form className="col s12">
      <div className="row center-align active">
          <div className="col s12 ">
          <span className="white-text" style={{marginLeft:"10%", marginRight:"10%"}}> Title </span>
            <input id="viewTitle" type="text" className=" white-text" placeholder={this.state.viewTitle} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <label htmlFor="viewTitle"></label>
          </div>
        </div>
        <div className="row center-align active">
          <div className="col s12 ">
          <span className="white-text"> Description </span>
            <input id="description" type="text" className=" white-text materialize-textarea " placeholder={this.state.description} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <label htmlFor="description"></label>
          </div>
        </div>
        <div className="row center-align active">
          <div className="input-field col s12">
          <span className="white-text"> Location </span>
            <input id="GPS" type="text" className={this.state.GPS[0]? this.state.gpsValid? "valid white-text" : "invalid white-text" :"white-text"} placeholder={this.state.GPS} onChange={e=>this.updateField(e)} style={{margin:"-30px"}}></input>
            <span class="helper-text" data-error="Coordinates should be formatted: 150.00 , -150.00"></span> 
            <label htmlFor="GPS"></label>
          </div>
        </div>
        <ConfirmEdit submitChanges={this.submitChanges} title={this.state.viewTitle}></ConfirmEdit>
      </form>
  </div>
    )
  }
}

export default Edit;
