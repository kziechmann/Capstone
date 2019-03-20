import React, { Component } from 'react';
import Login from './pages/login_page';
import Nav from './components/navbar';
import Stories from './pages/stories_dashboard';
import View360 from './pages/360view';
import Upload from './components/file_upload';
import Edit from './pages/edit';
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    page: "stories",
    viewURL: "",
    viewTitle: "",
    GPS: []
  }

  attemptLogin = (event) =>{
    event.preventDefault()
    this.setState({loggedIn:true})
  }

  attemptLogout = (event) =>{
    alert("LOUGOUTOTUT")
    this.setState({loggedIn:false})
  }

  changePage = (page) =>{
    this.setState({page:page})
  }

  setView = (story) =>{
    this.setState({
      viewURL:story.url,
      viewTitle:story.title,
      GPS: story.location.split(",")
    })
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
          {this.state.loggedIn ? <Nav attemptLogout={this.attemptLogout}  changePage={this.changePage} switchToView={this.switchToView}/> : ""}
        </div>
        <div className="col m8">
          {this.state.loggedIn && this.state.page === "stories"? <Stories changePage={this.changePage} setView={this.setView} viewTitle={this.state.viewTitle}/> : ""}
          {this.state.loggedIn && this.state.page === "viewer"? <View360 view={this.state.viewURL}/> : ""}
          {this.state.loggedIn && this.state.page === "upload"? <Upload /> : ""}
          {this.state.loggedIn && this.state.page === "edit"? <Edit viewURL={this.state.viewURL}/> : ""}
        </div>
        <div className="col md2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
