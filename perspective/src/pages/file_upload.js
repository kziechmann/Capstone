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
    if(field.viewURL){
      const file = document.getElementById('viewURL').files[0]
      this.setState({
          viewUrl: URL.createObjectURL(file)
      })
    }
    this.setState(field)
    console.log(this.state)
  }


  componentDidUpdate(){

  }


  async submitUpload(){
    const imageInput = document.getElementById('viewURL')
    const image = imageInput.files[0]
    let formData  = new FormData()
    formData.append('image', image)

    const response = await fetch('http://localhost:5000/images/', { 
      method: 'POST',
      mode:"cors",
      body: formData
    })
    const imageRes = await response.json()
    console.log('response:  ',imageRes.imageUrl)
    const formJSON = {
      title: document.getElementById('viewTitle').value,
      url: "https://s3-us-west-2.amazonaws.com/perspective360photos/1553201169492",
      description: document.getElementById('description').value,
      GPS: document.getElementById('GPS').value,
    }
    
    console.log('formJSON:  ',formJSON)
    this.props.changePage("stories") 
    const users_images = await fetch('http://localhost:5000/users_images/1', { 
      method: 'POST',
      mode:"cors",
      body: formJSON
    })
    const userJson = await users_images.json()
    console.log('users_images:  ',userJson)
    
  };

  render() {
    return (
        <div className="fileUpload container collection">
        <div className="row" style={{marginTop:"50px"}}>
            <div className="col s12 center-align">
            <span>
            {this.state.viewURL !== ""? 
            <img id="preview" alt="Upload Preview" className="preview obj" src={this.state.viewURL} style={{width:"500px",height:"250px", marginTop:"-30px"}}/>
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
                    <input id="viewURL" type="file" accept="image/jpg" onChange={e=>this.updateField(e)}></input>
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
