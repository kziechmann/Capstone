import React, { Component } from 'react';
import Login from './pages/login_page';
import Nav from './components/navbar';
import Stories from './pages/stories_dashboard';
import Upload from './components/file_upload';
import './App.css';

class App extends Component {
  state = {
    loggedIn: true
  }

  attemptLogin = (event) =>{
    event.preventDefault()
    this.setState({loggedIn:true})
  }

  attemptLogout = (event) =>{
    alert("LOUGOUTOTUT")
    this.setState({loggedIn:false})
  }

  render() {
    return (
      <div className="App">
      <div className='background_photo'>
      </div >
        {!this.state.loggedIn? <Login attemptLogin={this.attemptLogin}/> : ""}
        <div className="container">
        <div className="row">
        <div className="col m2">
          {this.state.loggedIn? <Nav attemptLogout={this.attemptLogout}/> : ""}
        </div>
        <div className="col m8">
          {this.state.loggedIn? <Stories /> : ""}
        </div>
        <div className="col md2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
