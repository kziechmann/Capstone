import React, { Component } from 'react';
import '../App.css';

class Upload extends Component {
  state = {}

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
          <input id="view_title" type="text" className="validate white-text"/>
          <label for="view_title">Image Title</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="description" type="text" className="validate white-text"/>
          <label for="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate white-text"/>
          <label for="email">Location / GPS Coordinates</label>
        </div>
      </div>
      <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate white-text" type="text"></input>
                </div>
            </div>
    </form>
  </div>
        </div>
    )
  }
}

export default Upload;
