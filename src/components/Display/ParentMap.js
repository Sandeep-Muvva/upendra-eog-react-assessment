import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../../store/actions';

import MapContainer from './MapContainer';
import LinearProgress from '@material-ui/core/LinearProgress';
 
class ParentMap extends React.Component{
state={
    longitude:-95.3698,
    latitude:29.7604
}
componentDidMount(){
    this.reload=setInterval(()=>this.props.onLoad(),4000);
}
    render() {
        const {
          loading,
          name,
          weather_state_name,
          temperatureinFahrenheit
        } = this.props.weather;
    
        if (loading) return <LinearProgress />;
 
 
    return(
        <MapContainer
            label={`Weather in ${name} : ${weather_state_name}`}
            temperature={`${temperatureinFahrenheit}`}
            latitude={this.props.drone.latitude}
            longitude={this.props.drone.longitude}
        />
    )
}

}
const mapStateToProps=(state)=>{
    return{
        weather:state.weather,
        drone:state.drone
    }
}

const mapDispatch=(dispatch)=>({
    onLoad:()=>
    dispatch({
        type:actions.FETCH_DRONE
    })
});


export default connect(mapStateToProps,mapDispatch)(ParentMap);