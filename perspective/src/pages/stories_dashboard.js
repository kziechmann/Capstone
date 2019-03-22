import React, { Component } from 'react';

import '../App.css';

class Stories extends Component {
  

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

      { this.props.stories.map((story, id)=>
            
            <li key={story.title} id={story.title} style={{marginTop: '20px'}} className={this.props.viewTitle === story.title? "collection green story" : "collection story"} onClick={(event)=>this.props.setView(story)}>
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
    <ul class="pagination center-align">
      <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
      <li class="active green"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
    </ul>
    </div>
    </div>
    );
  }
}

export default Stories;
