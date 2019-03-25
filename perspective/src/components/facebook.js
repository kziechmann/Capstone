import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookButton extends Component {
    responseFacebook = async (response) => {
        this.props.attemptLogin({
            userID: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        const usersInfo = await fetch('https://perspective360-backend.herokuapp.com/users', {  
                method: 'POST',
                body: JSON.stringify({
                    firstName: response.name.split(" ")[0],
                    lastName: response.name.split(" ")[1],
                    email: response.email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await usersInfo.json()
        this.props.getStories(json.id)
    }

    componentClicked = () => {
    }



  render() {

    let fbContent;

    if (this.props.loggedIn) {
      fbContent = (
        <React.Fragment >
        <li className="row collection-item avatar green" >
          <img className="circle avCircle" src={this.props.user.picture} alt={this.props.user.name} />
          <h6 ><strong>{this.props.user.name? this.props.user.name : "AnonymousUser"}</strong></h6>
          <a className="btn green darken-4 white-text" style={{height:"30px", fontSize:"13px"}} onClick={()=> {this.props.attemptLogout()}}>
         Log Out
        </a>
        </li>
        </React.Fragment>
      )
    } else {
      fbContent = (
          
        <FacebookLogin
          appId="253135068901164"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class waves-effect waves-light blue darken-3 btn"
          icon="fab fa-facebook-square"
           />

      )
    }
    return (
           <React.Fragment>{fbContent}</React.Fragment>
    )
  }
}
