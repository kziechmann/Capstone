import React, { Component } from 'react';
import Login from './pages/login_page';
import Nav from './components/navbar';
import Stories from './pages/stories_dashboard';
import View360 from './pages/360view';
import Upload from './pages/file_upload';
import Edit from './pages/edit';
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    page: "stories",
    viewURL: "",
    viewTitle: "",
    GPS: [],
    description : "",
    user: {
            userID: "",
            name: "",
            email: "",
            picture: ""
          }
  }

  attemptLogin = (user) =>{
    this.setState({
      loggedIn:true,
      user:{
        userID: user.userID,
        name: user.name,
        email: user.email,
        picture: user.picture
      }
    })
  }

  attemptLogout = (event) =>{
    this.setState({
      loggedIn:false,
      page: "stories",
      viewURL: "",
      viewTitle: "",
      GPS: [],
      description : "",
      user: {
              userID: "",
              name: "",
              email: "",
              picture: ""
            }
    })
  }

  changePage = (page) =>{
    this.setState({page:page})
  }

  setView = (story) =>{
    this.setState({
      viewURL:story.url,
      viewTitle:story.title,
      GPS: story.location.split(","),
      description: story.description
    })
  }

  

  render() {
    return (
      <div className="App">
      <div className='background_photo'>
      </div >
        {!this.state.loggedIn? <Login attemptLogin={this.attemptLogin} loggedIn={this.state.loggedIn}/> : ""}
        <div className="container">
        <div className="row">
        <div className="col m2">
          {this.state.loggedIn ? <Nav attemptLogout={this.attemptLogout}  changePage={this.changePage} switchToView={this.switchToView} GPS={this.state.GPS.map(coord=>Number(coord))} user={this.state.user} loggedIn={this.state.loggedIn}/> : ""}
        </div>
        <div className="col m8">
          {this.state.loggedIn && this.state.page === "stories"? <Stories changePage={this.changePage} setView={this.setView} viewTitle={this.state.viewTitle}/> : ""}
          {this.state.loggedIn && this.state.page === "viewer"? <View360 view={this.state.viewURL}/> : ""}
          {this.state.loggedIn && this.state.page === "upload"? <Upload changePage={this.changePage}/> : ""}
          {this.state.loggedIn && this.state.page === "edit"? <Edit viewURL={this.state.viewURL} viewTitle={this.state.viewTitle} GPS={this.state.GPS} description={this.state.description} changePage={this.changePage}/> : ""}
        </div>
        <div className="col md2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
