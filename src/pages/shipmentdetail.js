import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./App.css";

export class ShipmentDetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            

            <AppBar title="Enter Shipment Details" />
      
              <TextField
              placeholder="Enter Arrival"
              label="Arrival"
              onChange={handleChange('arrival')}
              defaultValue={values.arrival}
              margin="normal"
              fullWidth
            />
            <br />


   <TextField
              placeholder="Enter Departure"
              label="Departure"
              onChange={handleChange('departure')}
              defaultValue={values.departure}
              margin="normal"
              fullWidth
            />
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
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ShipmentDetail;
