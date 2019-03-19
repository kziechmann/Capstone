import React, { Component } from 'react';

import '../App.css';

class Stories extends Component {
  state={
      stories: [
        {   title: "SKIING RED MOUNTAIN",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url:"https://s3-us-west-2.amazonaws.com/perspective360photos/Red_Mountain_360.jpg"},
        {   title: "FIRST FLATIRON SUMMIT",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url: "https://s3-us-west-2.amazonaws.com/perspective360photos/Flatirons_360.jpg"},
        {   title: "BLACK SAND BEACH",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url:"https://s3-us-west-2.amazonaws.com/perspective360photos/Moab_360.jpg"},
       ,
        
    ]
  }
  render() {
    return (
      <div className=" storyDash container" >
    <div className="row">
    <ul className="collection center-align ">
      <li className="collection-item green darken-4 ">
          <div className="row">
            <div className="col s4 column-head" style={{marginTop:'-40px'}}>
              <h5> <i className="material-icons main-icon" >language</i> View</h5>
            </div>
            <div className="col s4 column-head">
                <h5> Details</h5>
            </div>
            <div className="col s4 column-head">
                <h5> Manage</h5>
            </div>
          </div>
      </li>

      { this.state.stories.map(story=>
            
            <li className="collection-item blue-grey story">
            <div className="row">
                <div className="col s5 left-align">
                <a href="#">
                  <img onClick={(e)=>this.props.setView(e,story.url)} className="thumb" src={story.url} width="300px" height="150px" style={{marginTop: '20px'}}></img>
                </a>
                </div>
                <div className="col s4 left-align">
                <p><strong>Location: </strong>{story.location}</p>
                <p><strong>Description: </strong> {story.description}</p>
                </div>
                <div className="col s3 left-align ">
                <h5>{story.title}</h5>
                <a className="waves-effect waves-light green btn " href="/#" style={{  paddingRight:'55px'}}><i className="material-icons left">create</i>    Edit Story </a>
                </div>
            </div>
            </li>
            )
        }
      
      
    </ul>
    </div>
    </div>
    );
  }
}

export default Stories;
