import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';

export default class GoogleButton extends Component {
    responseGoogle = async (response) => {
        console.log(response)
        this.props.attemptLogin({
            userID: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        // const usersInfo = await fetch('https://perspective360-backend.herokuapp.com/users', {  
        //         method: 'POST',
        //         body: JSON.stringify({
        //             firstName: response.name.split(" ")[0],
        //             lastName: response.name.split(" ")[1],
        //             email: response.email,
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        // })
        // const json = await usersInfo.json()
        // this.props.getStories(json.id)
    }


  render() {

    let googleContent;

    if (this.props.loggedIn) {
      googleContent = ""
    } else {
      googleContent = (
        <GoogleLogin
            clientId="217350164277-ltlc4trmm97r91tk74g3749f1tcb5k3b.apps.googleusercontent.com"
            buttonText="Login"
            render={renderProps => (
                <button class="waves-effect waves-light red darken-1 btn"><i className="fa fa-google"></i> Login with Google</button>
              )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
        />
      )
    }
    return (
           <React.Fragment>{googleContent}</React.Fragment>
    )
  }
}
