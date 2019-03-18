
import React, { Component } from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ppZWNobWFubiIsImEiOiJjanRhaGRlcXowYjBiNDVvODh1NXZ1MWR4In0.sv1u0Rd9zfNEnjrsmrxwNQ';



class MapBox extends Component {
    state = {map: null}

    componentDidMount=()=>{
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9'
          });
    }

    componentWillUnmount= ()=> {
        this.map.remove()
    }

  render() {
    const style = {
        bottom: '100%',
        width: '300px',
        height: '200px'
      };
    return (
        <div style={style} ref={el => this.mapContainer = el} />
    )
  }
}

export default MapBox;
