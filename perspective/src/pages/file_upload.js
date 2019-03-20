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

  submitChanges(){
    alert("successfully uploaded image!")
    this.props.changePage("stories")
  }

  render() {
    return (
        <div className="fileUpload container collection">
        <div className="row">
            <div className="col s12 center-align">
            <span>
            {this.state.viewURL? 
            <img src={this.state.viewURL} style={{width:"500px",height:"250px", marginTop:"-30px"}}/>
             :<i className="material-icons left" style={{fontSize:"100px", color:"white", marginLeft:"45%"}}>screen_share</i>}
            </span>
            </div>
       </div>
        <div className="row">
    <form className="col s12">
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
                    <input type="file"></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate white-text" type="text"></input>
                </div>
            </div>
            <div className="row center-align active">
        <a className="waves-effect waves-light green darken-2 btn " href="/#" onClick={()=>this.submitChanges()} style={{   marginRight:'20px'}}><i className="material-icons left">create</i>  Upload Story </a>
        </div>
    </form>
  </div>
        </div>
    )
  }
}

export default Upload;
