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
          },
    stories: [],
    newGPS: [0,0]
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:5000/users/1')
    const json = await response.json()
    const stories = json.map(story=> (
        {title: story.title,
        description: story.description,
        location: story.GPS.split(","),
        url: story.url}
      ))
    let newState = this.state
    newState.viewURL = stories[0].url
    newState.GPS = stories[0].location
    newState.viewTitle = stories[0].title
    newState.description = stories[0].description
    newState.stories = stories
    this.setState(newState)
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
      GPS: story.location,
      description: story.description
    })
  }

  clearGPS =()=>{
    this.setState({GPS:[]})
  }

  setNewGPS =(e)=>{
    this.setState({newGPS:[e.lngLat.lat,e.lngLat.lng]})
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
          {this.state.loggedIn ? <Nav attemptLogout={this.attemptLogout}  changePage={this.changePage} switchToView={this.switchToView} GPS={this.state.GPS.map(coord=>Number(coord))} user={this.state.user} loggedIn={this.state.loggedIn} setNewGPS={this.setNewGPS}/> : ""}
        </div>
        <div className="col m8">
          {this.state.loggedIn && this.state.page === "stories"? <Stories stories={this.state.stories} changePage={this.changePage} setView={this.setView} viewTitle={this.state.viewTitle}/> : ""}
          {this.state.loggedIn && this.state.page === "viewer"? <View360 stories={this.state.stories} view={this.state.viewURL}/> : ""}
          {this.state.loggedIn && this.state.page === "upload"? <Upload changePage={this.changePage} clearGPS={this.clearGPS} newGPS={this.state.newGPS}/> : ""}
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
