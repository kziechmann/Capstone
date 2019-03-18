import React, { Component } from 'react';

import '../App.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
      
      <div className="container login-form center-align valign" >
      <div className="row ">
      <form className="col s12 m6" onSubmit={(e)=>this.props.attemptLogin(e)}>
        <div className="card green">
          <div className="card-content white-text ">
            <span className="card-title">
              <h3 className="login-title">
              <i className="material-icons main-icon" >language</i> 
               Perspectiv
              </h3>
            </span>
            <p> Geotag and upload your 360 photos</p>
          </div>
          <div className="card-action green darken-4">
        <div>
          <div className="input-field col s6">
              <input placeholder="User" id="user_name" type="text" className="validate white-text"></input>
              <label htmlFor="user_name"> <i className="material-icons left">account_box</i> Username</label>
          </div>
          <div className="input-field col s6">
          <input placeholder="Email" id="email" type="text" className="validate white-text"></input>
              <label htmlFor="email"><i className="material-icons left">mail_outline</i> Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate white-text"></input>
            <label htmlFor="password">Password</label>
          </div>
        </div>
          <div className="row">
          <button className="btn waves-effect waves-light green" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
          </div>
          </div>
        </div>
      </form>
    </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Login;
