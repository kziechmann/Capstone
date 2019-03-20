import React, { Component } from 'react';

import '../App.css';
import MapBox from './mapbox';


class Nav extends Component {
  render() {
    return (
      <React.Fragment>
    <div className=" nav" >
    <div className="row">
    <ul className="collection center-align ">
      <li className="collection-item green darken-4 ">
          <div className="row">
              <h4> <i className="material-icons main-icon" style={{fontSize: '35px', display: 'inline-block'}} >language</i> Perspective</h4>
          </div>
      </li>
      <li className="collection-item green avatar" >
        {/* <img src="./images/avatar.jpg" alt="Avatar" className="circle"/> */}
        <span className="row">
        <div className="col s-3">
        <i className="material-icons main-icon circle" style={{fontSize: '35px', marginTop: '-2px', marginLeft:'8px'}} 
        >account_circle</i></div>
        <div className="col s-9">
        <p style={{ marginLeft:'10px'}}>User Name<br/>
        </p>
        </div>
        
        <p className="title" onClick={(e)=>this.props.attemptLogout(e)}>log out</p>
        </span>
     </li>
      <li className="collection-item grey darken-4">
        <a className="waves-effect waves-light green btn"  href="/#" onClick={()=>this.props.changePage("stories")}><i className="material-icons left">map</i>My Stories</a>
     </li>
      <li className="collection-item grey darken-4">
       <a className="waves-effect waves-light green btn" href="/#" style={{  paddingRight:'55px'}} onClick={()=>this.props.changePage("upload")}><i className="material-icons left">backup</i>Upload</a>
      </li>
      <li className="collection-item grey darken-4">
        <a className="waves-effect waves-light green btn" href="/#" onClick={()=>this.props.changePage("viewer")} style={{  paddingRight:'65px'}}><i className="material-icons left">explore</i>View</a>
      </li>
      <li className="collection-item grey darken-4">
        <a className="waves-effect waves-light green btn"  href="/#"style={{  paddingRight:'65px'}} onClick={()=>this.props.changePage("edit")}><i className="material-icons left">create</i> Edit </a>
      </li>
      
      
    </ul>
    </div>
      <div className="collection mapBox grey darken-4">
      <MapBox/>
      </div>
    
      </div>
      
    </React.Fragment>
    );
  }
}

export default Nav;
