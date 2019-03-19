import React, { Component } from 'react';
import Login from './pages/login_page';
import Nav from './components/navbar';
import Stories from './pages/stories_dashboard';
import View360 from './pages/360view';
import Upload from './components/file_upload';
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    viewer: false,
    view: ""
  }

  attemptLogin = (event) =>{
    event.preventDefault()
    this.setState({loggedIn:true})
  }

  attemptLogout = (event) =>{
    alert("LOUGOUTOTUT")
    this.setState({loggedIn:false})
  }

  switchToView = (event) =>{
    event.preventDefault()
    this.setState({viewer:true})
  }

  switchToStories = (event) =>{
    event.preventDefault()
    this.setState({viewer:false})
  }

  setView = (event, url) =>{
    event.preventDefault()
    this.setState({view:url})
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
          {this.state.loggedIn ? <Nav attemptLogout={this.attemptLogout}  switchToStories={this.switchToStories} switchToView={this.switchToView}/> : ""}
        </div>
        <div className="col m8">
          {this.state.loggedIn && !this.state.viewer? <Stories setView={this.setView}/> : ""}
          {this.state.loggedIn && this.state.viewer? <View360 view={this.state.view}/> : ""}
        </div>
        <div className="col md2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
