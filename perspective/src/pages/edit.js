import React, { Component } from 'react';
import '../App.css';

class Edit extends Component {
  state={
    viewURL: "",
    viewTitle: "",
    GPS: [],
    description: ""
  }

  componentDidMount(){
    this.setState({
      description:this.props.description,
      viewTitle:this.props.viewTitle,
      GPS: this.props.GPS
    })
  }

  render() {
    return (
      <div className="fileUpload container collection">
      <div className="row">
          <div className="col s12 center-align">
          <img src={this.props.viewURL} style={{width:"500px",height:"250px" , marginTop:"-30px"}}></img>
          </div>
     </div>
      <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <span className="white-text"> Title </span>
        <input id="view_title" type="text" className="validate white-text" placeholder={this.state.viewTitle}></input>
        <label for="view_title"></label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12 ">
      <span className="white-text"> Description </span>
        <input id="description" type="text" className="validate white-text" placeholder={this.state.description}></input>
        <label for="description"></label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
      <span className="white-text"> Location </span>
        <input id="location" type="text" className="validate white-text" placeholder={this.state.GPS}></input>
        <label for="location"></label>
      </div>
    </div>
  </form>
</div>
      </div>
    )
  }
}

export default Edit;
