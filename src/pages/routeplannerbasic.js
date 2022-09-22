import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class RouteplannerBasic extends Component {
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

            <AppBar title="Enter Routeplanner Details" />
            <TextField
              placeholder="Enter id"
              label="id"
              onChange={handleChange('id')}
              defaultValue={values.id}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter  Order ID"
              label="Order ID"
              onChange={handleChange('orderId')}
              defaultValue={values.orderId}
              margin="normal"
              fullWidth
            />
            <br />
  
          <TextField
              placeholder="Enter CustomerPhone"
              label="Customer Phone"
              onChange={handleChange('customerPhone')}
              defaultValue={values.customerPhone}
              margin="normal"
              fullWidth
            />
            <br />


           <TextField
              placeholder="Enter Source Address"
              label="Source Address"
              onChange={handleChange('sourceAddress')}
              defaultValue={values.sourceAddress}
              margin="normal"
              fullWidth
            />
            <br />


           <TextField
              placeholder="Enter Destination Address"
              label="Destination Address"
              onChange={handleChange('destinationAddress')}
              defaultValue={values.destinationAddress}
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
export default RouteplannerBasic;
