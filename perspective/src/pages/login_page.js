import React, { Component } from 'react';

import '../App.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
      <div className='background_photo'>
      </div>
      <div className="container login-form center-align valign" >
      <div className="row ">
      <form className="col s12 m6" onSubmit={(e)=>this.props.attemptLogin(e)}>
        <div className="card green darken-4">
          <div className="card-content white-text ">
            <span className="card-title">
              <h3 className="login-title">
              <i className="material-icons main-icon" >language</i> 
               Perspectiv
              </h3>
            </span>
            <p> Geotag and upload your 360 photos</p>
          </div>
          <div className="card-action">
        <div>
          <div className="input-field col s6">
              <input placeholder="User" id="user_name" type="text" className="validate"></input>
              <label for="user_name"> <i className="material-icons left">account_box</i> Username</label>
          </div>
          <div className="input-field col s6">
          <input placeholder="Email" id="email" type="text" classNameName="validate"></input>
              <label for="email"><i className="material-icons left">mail_outline</i> Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"></input>
            <label for="password">Password</label>
          </div>
        </div>
          <div className="row">
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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
