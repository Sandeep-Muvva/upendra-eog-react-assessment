
import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const cardStyles = theme => ({
    root: {
      background: theme.palette.primary.main
    },
    title: {
      color: "white"
    }
  });
  const CardHeader = withStyles(cardStyles)(CardHeaderRaw);
  
  const styles = {
    card: {
      margin: "5% 25%"
    }
  };


  const Dashboard=(props)=>{
      const {classes}=props;
      return(
        <Card className={classes.card}>
      <CardHeader title=  {props.label} />
      <CardContent>
        <List>
          <ListItem>
             <ListItemText primary="Temperature" secondary={props.temperature} />
          </ListItem>
          <ListItem>
              <ListItemText primary="Latitude" secondary={props.latitude} />
          </ListItem>
          <ListItem>
             <ListItemText primary="Longitude" secondary={props.longitude} />
          </ListItem>

          <ListItem>
             <ListItemText primary="Updated" secondary={`4 seconds ago`} />
          </ListItem>
        </List>
      </CardContent>
    </Card>



      );
  }

  export default withStyles(styles)(Dashboard);