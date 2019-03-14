import React, { Component } from 'react';
import Login from './pages/login_page'
import Upload from './components/file_upload'
import './App.css';

class App extends Component {
  state = {
    loggedIn: false
  }

  attemptLogin(event){
    event.preventDefault()
    this.setState({logedIn:true})
  }

  render() {
    return (
      <div className="App">
        {!this.state.login? <Login attemptLogin={this.attemptLogin}/> : ""}
      </div>
    );
  }
}

export default App;
