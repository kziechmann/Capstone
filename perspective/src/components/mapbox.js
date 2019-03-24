
import React, { Component } from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ppZWNobWFubiIsImEiOiJjanRhaGRlcXowYjBiNDVvODh1NXZ1MWR4In0.sv1u0Rd9zfNEnjrsmrxwNQ';



class MapBox extends Component {

    componentDidMount= async ()=>{
        this.map = await new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/kziechmann/cjtkhbym50qv01fok6kak65a2',
            center: [-105.2947,39.9905],
            zoom:1
          });
         this.map.addControl(new mapboxgl.FullscreenControl());
          this.map.loadImage('https://s3-us-west-2.amazonaws.com/perspective360photos/PMarker.png',(error, image)=> {
            if (error) throw error;
            
            this.map.addImage('p360', image);
            this.map.addLayer({
            "id": "tracker",
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
            "icon-image": "p360",
            "icon-size": 0.15
            }
            })
            
            })
        this.map.on('click', (e) => {
          this.props.setNewGPS(e)
          });
      }

    componentWillUnmount= ()=> {
        this.map.remove()
    }

    componentDidUpdate(){
      
      this.map.loadImage('https://s3-us-west-2.amazonaws.com/perspective360photos/PMarker.png',async (error, image)=> {
            if (error) throw error;
      this.map.removeLayer("tracker")
      this.map.removeSource("tracker")
      this.map.addImage('p360', image);
            this.map.addLayer({
            "id": "tracker",
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
            "icon-image": "p360",
            "icon-size": 0.15
            }
            })
            })
    
    }

  render() {
    const style = {
        marginTop: '10px',
        width: '300px',
        height: '250px'
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
