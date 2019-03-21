import React, { Component } from 'react';
import '../App.css';

class Upload extends Component {
  state={
    viewURL: "",
    viewTitle: "",
    GPS: [],
    description: ""
  }

  updateField(event){
    let field = {[event.target.id]:event.target.value}
    if(field.GPS) field.GPS = event.target.value.split(",")
    this.setState(field)
  }

  submitUpload(){
    let imageInput = document.getElementById('image')
    let viewTitle = document.getElementById('viewTitle').value
    let description = document.getElementById('description').value
    let GPS = document.getElementById('GPS').value
    let image = imageInput.files[0]
    let formData  = new FormData()
    formData.append('image', image)
    formData.append('viewTitle', viewTitle)
    formData.append('GPS', GPS)
    formData.append('description', description)
    for (var value of formData.values()) {
      console.log(value); 
    }
    // fetch('http://localhost:5000/images/1', { // Your POST endpoint
    //   method: 'POST',
    //   mode:"cors",
    //   body: formData// This is your file object
    // }).then(
    //   response => response.json() // if the response is a JSON object
    // ).then(
      
    //   success => {
    //     alert("successfully uploaded image!" , success 
    //     )
    //     return  this.props.changePage("stories")
    //   }// Handle the success response object
    // ).catch(
    //   error => console.log(error) // Handle the error response object
    // );
    // alert("successfully uploaded image!")
   
  };

  render() {
    return (
        <div className="fileUpload container collection">
        <div className="row">
            <div className="col s12 center-align">
            <span>
            {this.state.viewURL? 
            <img alt="Upload Preview" src={this.state.viewURL} style={{width:"500px",height:"250px", marginTop:"-30px"}}/>
             :<i className="material-icons left" style={{fontSize:"100px", color:"white", marginLeft:"45%"}}>screen_share</i>}
            </span>
            </div>
       </div>
        <div className="row">
    <form id="uploadForm" className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="viewTitle" type="text" className="validate white-text" onChange={e=>this.updateField(e)}/>
          <label for="viewTitle">Image Title</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="description" type="text" className="validate white-text" onChange={e=>this.updateField(e)}/>
          <label for="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="GPS" type="text" className="validate white-text" onChange={e=>this.updateField(e)}/>
          <label for="GPS">Location / GPS Coordinates</label>
        </div>
      </div>
      <div className="file-field input-field">
                <div className="btn green">
                    <span>File</span>
                    <input id="image" type="file" accept="image/jpg"></input>
                </div>
                <div className="file-path-wrapper" >
                    <input  className="file-path validate white-text" type="text" onChange={e=>this.updateField(e)}></input>
                </div>
            </div>
            <div className="row center-align active">
        <a className="waves-effect waves-light green darken-2 btn " href="/#" onClick={()=>this.submitUpload()} style={{   marginRight:'20px'}}><i className="material-icons left">create</i>  Upload Story </a>
        </div>
    </form>
  </div>
        </div>
    )
  }
}

export default Upload;
