import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class ConfirmUpload extends Component {
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
           <div className="row center-align active">
        <a data-target="modal3" className="waves-effect waves-light green darken-2 btn modal-trigger" href="/#"  style={{   marginRight:'20px'}}><i className="material-icons left">create</i>  Upload Story </a>
       
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal3"
          className="modal green darken-4 collection"
        >
          <div className="modal-content center-align">
            <h4>Upload successfully submitted:</h4>
            <p style={{fontSize:'1.5em'}}>(  {this.props.title}  )</p>
          </div>
          <div className="white center-align" style={{padding: '5px'}}>
            
            <a className="modal-close waves-effect btn-large green large" style={{margin: '25px'}}  onClick={()=>this.props.changePage('stories')}>
              Ok
            </a>
            </div>
        </div>
      </div>
    );
  }
}

export default ConfirmUpload;
