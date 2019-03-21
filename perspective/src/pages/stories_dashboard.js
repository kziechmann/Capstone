import React, { Component } from 'react';

import '../App.css';

class Stories extends Component {
  state={
      stories: [
        {   title: "SKIING RED MOUNTAIN",
            description: "Spring Skiing in the backcountry of Colorado.",
            location:  "39.4817,-106.0384",
            url:"https://s3-us-west-2.amazonaws.com/perspective360photos/Red_Mountain_360.jpg"},
        {   title: "FIRST FLATIRON SUMMIT",
            description: "From the top of the first flatiron near Boulder,CO.",
            location:  "39.9905,-105.2947",
            url: "https://s3-us-west-2.amazonaws.com/perspective360photos/Flatirons_360.jpg"},
        {   title: "CANYONLANDS MOAB",
            description: "Sunset from Canyonlands National Park near Moab, UT.",
            location:  "38.3269,-109.8783",
            url:"https://s3-us-west-2.amazonaws.com/perspective360photos/Moab_360.jpg"}
    ]
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:5000/images/')
    const json = await response.json()
    console.log(json)
    // this.setState({stories:json})
  }

  render() {
    return (
      <div className=" storyDash container" >
    <div className="row">
    <ul className="center-align ">
      <li className="collection green darken-4 ">
          <div className="row">
            <div className="col s4 column-head" >
              <h5> <i className="material-icons story-header" >landscape</i> View</h5>
            </div>
            <div className="col s4 column-head">
                <h5> Details</h5>
            </div>
            <div className="col s4 column-head">
                <h5> Manage</h5>
            </div>
          </div>
      </li>

      { this.state.stories.map((story, id)=>
            
            <li key={story.title} id={story.title} className={this.props.viewTitle === story.title? "collection green story" : "collection story"} onClick={(event)=>this.props.setView(story)}>
            <div  className="row">
                <div className="col s5 left-align">
                <a href="#">
                  <img  className="thumb" onClick={e=>this.props.changePage("viewer")} src={story.url} width="300px" height="150px" style={{marginTop: '20px'}}></img>
                </a>
                </div>
                <div className="col s4 left-align">
                <p><strong>Location: </strong>{story.location}</p>
                <p><strong>Description: </strong> {story.description}</p>
                </div>
                <div className="col s3 left-align ">
                <h6>{story.title}</h6>
                <a className="waves-effect waves-light green darken-2 btn " href="/#" onClick={e=>this.props.changePage("edit")} style={{   marginRight:'20px'}}><i className="material-icons left">create</i>    Edit Story </a>
                <a className="waves-effect waves-light red darken-2 btn " href="/#" style={{   marginTop:"20px", marginRight:'20px'}}><i className="material-icons left">delete</i>    Delete Story </a>
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
