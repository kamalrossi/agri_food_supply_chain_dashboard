import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from "axios";


export class RouteplannerConfirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //

 const shipmentObject = {
      text: "rossi",
      day: "rossi",
      
    };
    axios.post('http://localhost:8080/createshipment', shipmentObject);


    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {id,orderid,customerphone,source,destination,firstdeparturespot,firstdeparturetime,lastarrivalspot,lastarrivaltime}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >


            <AppBar title="Confirm Routeplanner Data" />
            <List>
              <ListItem>
                <ListItemText primary="ID" secondary={id} />
              </ListItem>


              <ListItem>
                <ListItemText primary="Order ID" secondary={orderid} />
              </ListItem>

              <ListItem>
                <ListItemText primary="customerphone" secondary={customerphone} />
              </ListItem>


              <ListItem>
                <ListItemText primary="Source" secondary={source} />
              </ListItem>


              <ListItem>
                <ListItemText primary="Destination" secondary={destination} />
              </ListItem>



              <ListItem>
                <ListItemText primary="First Departure Spot" secondary={firstdeparturespot} />
              </ListItem>


              <ListItem>
                <ListItemText primary="First Departure Time" secondary={firstdeparturetime} />
              </ListItem>


              <ListItem>
                <ListItemText primary="Last Arrival Spot" secondary={lastarrivalspot} />
              </ListItem>
             

             <ListItem>
                <ListItemText primary="Last Arrival Time" secondary={lastarrivaltime} />
              </ListItem>



            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default RouteplannerConfirm;
