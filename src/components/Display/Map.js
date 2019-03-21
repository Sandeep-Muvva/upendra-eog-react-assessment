
import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import {GoogleMap,Marker,withGoogleMap,withScriptjs} from 'react-google-maps';
import {compose,withProps} from 'recompose';
const cardStyles = theme => ({
    root: {
      background: theme.palette.primary.main
    },
    title: {
      color: "white"
    }
  });
  const CardHeader = withStyles(cardStyles)(CardHeaderRaw);
  const Map=(props)=>{
    return(
      <div>
        
      </div>
    )
  }

 
  export default Map;