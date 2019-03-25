import React, { Component } from 'react';

import '../App.css';

class View360 extends Component {
  state = {
    x:0,
    y:0,
    z:0
  }

  componentDidMount(){
    document.getElementById('scene').addEventListener('loaded', function () {
        document.getElementById('loader').style = "display:none;"
     })
     document.addEventListener('keydown', event=>this.handleKeyDown(event));
  }

  handleKeyDown(event){
    let pressed
    let rotation = {
      x: this.state.x,
      y: this.state.y,
      z: this.state.z
    }
    switch(event.keyCode){
      case 37 :
        pressed = document.getElementById('leftArrow')
        rotation.y === 0? rotation.y = 345 : rotation.y -= 15
        break;
      case 38 :
        pressed = document.getElementById('upArrow')
        if(rotation.y === 180  || rotation.y === 360){
          rotation.x === 360? rotation.x = 15 : rotation.x += 15
        } else if(rotation.y === 90  || rotation.y === 270){
          rotation.z === 360? rotation.z = 15 : rotation.z += 15
        }
        break;
      case 39 :
        pressed = document.getElementById('rightArrow')
        rotation.y === 360? rotation.y = 15 : rotation.y += 15
        break;
      case 40 :
        pressed = document.getElementById('downArrow')
        if(rotation.y === 180  || rotation.y === 360){
          rotation.x === 0? rotation.x = 345 : rotation.x -= 15
        } else if(rotation.y === 90  || rotation.y === 270){
          rotation.z === 0? rotation.z = 345 : rotation.z -= 15
        }
        break;
      default:
        return ""
    }
    pressed.className = "btn-floating green BTN360"
    window.setTimeout(()=>pressed.className="btn-floating yellow darken-1 BTN360",200)
    this.setState(rotation)
    console.log(rotation)
  }

  render() {
    

    return (
      <div className="storyDash container" >
      
    <div className="row" style={{marginTop:"35px"}}>
    <ul className="collection center-align" >
        
      <li className="collection-item grey darken-4 ">
            
              <a-scene embedded >
              <div id="loader" className="loading" style={{marginLeft: "345px",marginTop: "200px" }}>
              </div>
              
              <a-entity rotation={`${this.state.x} ${this.state.y} ${this.state.z}`}><a-sky id="scene" src={this.props.view}></a-sky></a-entity>
              </a-scene>
            
      </li>
     
    </ul>
    </div>
    <div class="container collection center-align valign-center">
        <div className="row">
        <a id="leftArrow" class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_back</i></a>
        <a id="downArrow" class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_downward</i></a>
        <a id="upArrow" class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_upward</i></a>
        <a id="rightArrow" class="btn-floating yellow darken-1 BTN360"><i class="material-icons">arrow_forward</i></a>
        </div>
        </div>
    </div>
    );
  }
}

export default View360;
