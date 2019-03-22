import React from "react";
import Dashboard from './Dashboard';

import LinearProgress from '@material-ui/core/LinearProgress';
import * as actions from './../../store/actions'
import {connect} from 'react-redux';

class ParentDashboard extends React.Component{
constructor(props){
    super(props);
  this.state={
    curr_time:Date.now(),
    prev_time:Date.now()
};

}

 update=()=>{
    const var1=Date.now();
    this.setState((prevState)=>({
        prev_time:prevState.curr_time,
        curr_time:var1
    }))
}
    componentDidMount(){
        this.reload=setInterval(()=>{
            this.props.onLoad();
            this.update();
        },4000); 
    
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
            updateTime={(Math.floor((this.state.curr_time-this.state.prev_time)/1000))}
            />
    );
 }
}

const mapStateToProps=(state)=>{
    return{
        weather: state.weather,
        drone:state.drone
        }
    };
const mapDispatch=(dispatch)=>({
    onLoad:()=>{
    dispatch({
        type:actions.FETCH_DRONE
    })
    }
});

export default connect(
    mapStateToProps,
    mapDispatch)(ParentDashboard);