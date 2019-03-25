import React, { Component } from 'react';
import ConfirmDelete from '../components/confirm_delete'
import '../App.css';

class Stories extends Component {
  state = {
    currentPage: 1,
    numPages: Math.ceil(this.props.stories.length/3)+2,
  }


  changePage(page){
    this.setState({currentPage:page})
  }

  nextPage(){
    if(this.state.currentPage < this.state.numPages){
      this.setState({currentPage:this.state.currentPage+1})
    }
  }

  prevPage(){
    if(this.state.currentPage !== 1){
      this.setState({currentPage:this.state.currentPage-1})
    }
  }


  render() {
    return (
      <div className=" storyDash container" >
    <div className="row">
    <ul className="center-align ">
      <li className="collection green darken-4 " style={{padding: '15px'}}>
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
      
      
      { this.props.stories.slice((this.state.currentPage-1)*3,(this.state.currentPage)*3).map((story, id)=>
            
            <li key={story.title} id={story.title} className={this.props.viewTitle === story.title? "collection green story" : "collection story"} onClick={(event)=>this.props.setView(story)} style={{marginTop: '30px'}}>
            <div  className="row">
                <div className="col s5 left-align">
                <a href="#">
                  <img alt="thumbnail"  className="thumb" onClick={e=>this.props.changePage("viewer")} src={story.url} width="300px" height="150px" style={{marginTop: '20px'}}></img>
                </a>
                </div>
                <div className="col s4 left-align">
                <p><strong>Location: </strong>{story.location}</p>
                <p><strong>Description: </strong> {story.description}</p>
                </div>
                <div className="col s3 left-align ">
                <h6>{story.title}</h6>
                <a className="waves-effect waves-light green darken-2 btn " href="/#" onClick={e=>this.props.changePage("edit")} style={{   marginRight:'20px'}}><i className="material-icons left">create</i>    Edit Story </a>
                <ConfirmDelete deleteStory={this.props.deleteStory} title={this.props.viewTitle}></ConfirmDelete>
                </div>
            </div>
            </li>
            )
        }
    </ul>
    <ul className="pagination center-align">
      <li id="prev" className={this.state.currentPage === 1? "waves-effect" : "disabled"}><a href="#!" onClick={()=>this.prevPage()}><i className="material-icons">chevron_left</i></a></li>
      {this.props.stories.map((story,idx) => {
          return idx%3 === 0? <li key={idx} id={(idx/3)+1} className={this.state.currentPage === (idx/3)+1 ? "active green" : "waves-effect disabled"}><a href="#!" onClick={()=>this.changePage((idx/3)+1)}>{(idx/3)+1}</a></li> : ""
      })}
      <li id="next" className={this.state.currentPage < this.state.numPages?  "disabled": "waves-effect" }><a href="#!" onClick={()=>this.nextPage()}><i className="material-icons">chevron_right</i></a></li>
    </ul>
    </div>
    </div>
    );
  }
}

export default Stories;
