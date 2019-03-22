import React, { Component } from 'react';
import FacebookButton from '../components/facebook';
import GoogleButton from '../components/google';
import '../App.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
      
      <form className="container center-align valign">
        <div className="card green row login-form" style={{height:"400px"}}>
          <div className="card-content white-text ">
           
              <img alt="logo" className="logo" src="https://s3-us-west-2.amazonaws.com/perspective360photos/P360_logo_1.png"></img>
              <strong> Communicate spacially with this platform to upload and share your geo-tagged 360 photos.</strong>
           
           
          </div>
        <div className=" card-action green darken-4 ">
        <div className="row">
          <FacebookButton attemptLogin={this.props.attemptLogin} loggedIn={this.props.loggedIn}/>
          
          </div>
          <div className="row">
          {/* <button className="btn waves-effect waves-light green" type="submit" name="action">Login
            <i className="material-icons right">send</i>
          </button> */}
          <GoogleButton attemptLogin={this.props.attemptLogin} loggedIn={this.props.loggedIn}/>
          </div>
          
          </div>
          
        </div>
    </form>
    </React.Fragment>
    );
  }
}

export default Login;
