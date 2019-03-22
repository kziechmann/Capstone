import React, { Component } from 'react';

import '../App.css';

class View360 extends Component {

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
        
      <li className="collection-item grey darken-4 ">
        
            <a-scene embedded >
            <div id="loader" className="loading" style={{marginLeft: "345px",marginTop: "200px" }}>
            </div>
            <a-sky id="scene" src={this.props.view}></a-sky>
            </a-scene>
      </li>
     
    </ul>
    </div>
    <div class="container collection center-align valign-center">
        <div className="row">
        <a class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_back</i></a>
        <a class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_downward</i></a>
        <a class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_upward</i></a>
        <a class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_forward</i></a>

        </div>
        </div>
    </div>
    );
  }
}

export default View360;
