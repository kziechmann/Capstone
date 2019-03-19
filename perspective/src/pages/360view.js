import React, { Component } from 'react';

import '../App.css';

class View360 extends Component {
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

  componentDidMount(){
    document.getElementById('scene').addEventListener('loaded', function () {
        document.getElementById('loader').style = "display:none;"
     })
  }

  render() {
    

    return (
      <div className=" storyDash container" >
      
    <div className="row">
    <ul className="collection center-align">
        
      <li className="collection-item green darken-4 ">
        
            <a-scene embedded >
            <div id="loader" className="loading" style={{marginLeft: "345px",marginTop: "200px" }}>
            </div>
            <a-sky id="scene" src={this.props.view}></a-sky>
            </a-scene>
      </li>
     
    </ul>
    </div>
    </div>
    );
  }
}

export default View360;
