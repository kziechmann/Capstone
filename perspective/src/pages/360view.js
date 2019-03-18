import React, { Component } from 'react';

import '../App.css';

class Stories extends Component {
  state={
      stories: [
        {   title: "SKIING RED MOUNTAIN",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url:"https://perspectiveapp360photos.s3.amazonaws.com/PANO_20180128_142447.jpg?AWSAccessKeyId=AKIAI2MLWHVQZ25KOA4A&Expires=1552688837&Signature=1qhQizi1whxm6So8d55bBldY8%2Bw%3D"},
        {   title: "FIRST FLATIRON SUMMIT",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url: "https://perspectiveapp360photos.s3.amazonaws.com/PANO_20180308_170130.jpg?AWSAccessKeyId=AKIAI2MLWHVQZ25KOA4A&Expires=1552688837&Signature=G02cd6fQ3UpnfIh6kDWjduEXJSY%3D"},
        {   title: "BLACK SAND BEACH",
            description: "From the top of Denali looking acrosss the Alaska range in all of its glory.",
            location:  "63.0865043,-150.6297594",
            url:"https://perspectiveapp360photos.s3.amazonaws.com/PANO_20181019_014544.jpg?AWSAccessKeyId=AKIAI2MLWHVQZ25KOA4A&Expires=1552688837&Signature=812%2BZ1F0xbGcB09Tv%2FpS%2FsHGXjo%3D"},
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
      {/* <li className="collection-item green avatar" >
        <span className="row">
        <div className="col s-3">
        <i className="material-icons main-icon circle" style={{fontSize: '35px', marginTop: '-2px', marginLeft:'8px'}} 
        >account_circle</i></div>
        <div className="col s-9">
        <p style={{ marginLeft:'10px'}}>User Name<br/>
        </p>
        </div>
        
        <p className="title" onClick={(e)=>this.props.attemptLogout(e)}>log out</p>
        </span>
      </li> */}

      { this.state.stories.map(story=>
            
            <li className="collection-item blue-grey story">
            <div className="row">
                <div className="col s5 left-align">
                <a href="#"><img className="thumb" src={story.url} width="300px" height="150px" style={{marginTop: '20px'}}></img></a>
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
