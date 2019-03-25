import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class ConfirmDelete extends Component {
  componentDidMount() {
    const options = {
    //   onOpenStart: () => {
    //     console.log("Open Start");
    //   },
    //   onOpenEnd: () => {
    //     console.log("Open End");
    //   },
    //   onCloseStart: () => {
    //     console.log("Close Start");
    //   },
    //   onCloseEnd: () => {
    //     console.log("Close End");
    //   },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.65,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect red darken-2 btn modal-trigger"
          data-target="modal1"
          style={{ marginTop:'20px',  marginRight:'20px'}}><i className="material-icons left">delete</i>
        
          Delete Story
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal green darken-4 collection"
        >
          <div className="modal-content center-align">
            <h4>Delete this story?</h4>
            <p style={{fontSize:'1.5em'}}>(  {this.props.title}  )</p>
          </div>
          <div className="white center-align" style={{padding: '5px'}}>
            
          
          <a className="modal-close waves-effect btn-large red " style={{margin: '25px'}} onClick={()=>this.props.deleteStory(this.props.title)}>
              Delete
            </a>
            <a className="modal-close waves-effect btn-large green large" style={{margin: '25px'}}>
              Cancel
            </a>
            </div>
        </div>
      </div>
    );
  }
}

export default ConfirmDelete;
