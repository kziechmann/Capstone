import React, { Component } from 'react';
import '../App.css';

class Upload extends Component {
  render() {
    return (
        <div>
        <form action="#">
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"></input>
                </div>
            </div>
        </form>
        </div>
    )
  }
}

export default Upload;
