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
    viewerOpen: false,
    viewURL: "",
    viewTitle: ""
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
    this.setState({viewerOpen:true})
  }

  switchToStories = (event) =>{
    event.preventDefault()
    this.setState({viewerOpen:false})
  }

  setView = (id, url) =>{
    this.setState({viewURL:url, viewTitle:id})
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
          {this.state.loggedIn && !this.state.viewerOpen? <Stories switchToStories={this.switchToStories} setView={this.setView} viewTitle={this.state.viewTitle}/> : ""}
          {this.state.loggedIn && this.state.viewerOpen? <View360 view={this.state.viewURL}/> : ""}
        </div>
        <div className="col md2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
