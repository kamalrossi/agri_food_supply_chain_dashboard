import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ShipmentBasic extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
              placeholder="Enter source"
              label="source"
              onChange={handleChange('source')}
              defaultValue={values.source}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter  destination"
              label="Destination"
              onChange={handleChange('destination')}
              defaultValue={values.destination}
              margin="normal"
              fullWidth
            />
            <br />
  
 
            <br />
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
export default ShipmentBasic;
