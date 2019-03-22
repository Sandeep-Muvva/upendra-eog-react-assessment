
import React from 'react';
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react';
const mapStyles={
  width:'70%',
  height:'80%',
  margin:'15%',
  border:'5px solid black'
};
  export class MapContainer extends React.Component{
   render(){
    return(
      <Map
      google={this.props.google}
      zoom={5}
      style={mapStyles}
      initialCenter={{
        lat:29.76328,
        lng:-95.36327
      }}
      >
      <Marker 
      position={{lat:this.props.latitude,lng:this.props.longitude}}
      />
      </Map>
    )
  }
  }
 
  export default GoogleApiWrapper({
    apiKey:`AIzaSyCh7P4iuuOiBzuHISZHZnvUVt4BIMxPjKg`
  })(MapContainer);