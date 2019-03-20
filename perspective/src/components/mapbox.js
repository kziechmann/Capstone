
import React, { Component } from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ppZWNobWFubiIsImEiOiJjanRhaGRlcXowYjBiNDVvODh1NXZ1MWR4In0.sv1u0Rd9zfNEnjrsmrxwNQ';



class MapBox extends Component {

    componentDidMount=()=>{
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9'
          });
    }

    componentWillUnmount= ()=> {
        this.map.remove()
    }

    componentWillUpdate(){
      this.map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', (error, image)=> {
      if (error) throw error;
      this.map.addImage('cat', image);
      this.map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
      "type": "geojson",
      "data": {
      "type": "FeatureCollection",
      "features": [{
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [this.props.GPS[1], this.props.GPS[0]]
      }
      }]
      }
      },
      "layout": {
      "icon-image": "cat",
      "icon-size": 0.15
      }
      })
      })
      }

  render() {
    const style = {
        bottom: '100%',
        width: '300px',
        height: '200px'
      };
    
    return (
        <React.Fragment>
        <div style={style} ref={el => this.mapContainer = el} />
        <div className="center-align valign-center white-text" >
        {this.props.GPS[0]? `(${this.props.GPS[0]} , ${this.props.GPS[1]})`: "(0,0)"}
        </div> 
        </React.Fragment>
    )
  }
}

export default MapBox;
