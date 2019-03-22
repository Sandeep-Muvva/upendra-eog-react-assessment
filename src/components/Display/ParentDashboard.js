import React from "react";
import Dashboard from './Dashboard';

import LinearProgress from '@material-ui/core/LinearProgress';
import * as actions from './../../store/actions'
import {connect} from 'react-redux';

class ParentDashboard extends React.Component{
    componentDidMount(){
        this.reload=setInterval(()=>this.props.onLoad()
    ,4000); 
    }
  

    render(){
        const {
            loading,
            name,
            weather_state_name,
            temperatureinFahrenheit
          } = this.props.weather;
//          console.log(this.props.drone);
          if (loading) return <LinearProgress />;
    return(
        <Dashboard
            label={`Weather in ${name}: ${weather_state_name}`}
            temperature={`${temperatureinFahrenheit}`}
            latitude={this.props.drone.latitude }
            longitude={this.props.drone.longitude}
            updated={this.state.curr_time-this.state.prev_time}
            />
    );
 }
}

const mapStateToProps=(state)=>{
    return{
        weather: state.weather,
        drone:state.drone

    };
};
const mapDispatch=(dispatch)=>({
    onLoad:()=>
    dispatch({
        type:actions.FETCH_DRONE
    })
});

export default connect(
    mapStateToProps,
    mapDispatch)(ParentDashboard);