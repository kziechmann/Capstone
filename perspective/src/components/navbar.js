import React, { Component } from 'react';
import FacebookButton from './facebook';
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
      <FacebookButton attemptLogout={this.props.attemptLogout} user={this.props.user} loggedIn={this.props.loggedIn} style={{fontSize: '35px', marginTop: '-2px', marginLeft:'8px'}} />

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
      <MapBox GPS={this.props.GPS}/>
      </div>
    
      </div>
      
    </React.Fragment>
    );
  }
}

export default Nav;
