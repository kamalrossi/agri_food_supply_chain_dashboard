import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from "axios";

export class ShipmentConfirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //

 const categoryObject = {
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
      values: {source, destination, arrival, departure}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm Shipment Data" />
            <List>
              <ListItem>
                <ListItemText primary="Arrival" secondary={arrival} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Departure" secondary={departure} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Source" secondary={source} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Destination" secondary={destination} />
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

export default ShipmentConfirm;
