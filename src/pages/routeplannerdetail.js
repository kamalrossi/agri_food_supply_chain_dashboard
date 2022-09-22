import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class RouteplannerDetail extends Component {
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
            <AppBar title="Enter Routeplanner Details" />
              <TextField
              placeholder="Enter First Departure Spot"
              label="firstdeparturespot"
              onChange={handleChange('firstdeparturespot')}
              defaultValue={values.firstdeparturespot}
              margin="normal"
              fullWidth
            />
            <br />


   <TextField
              placeholder="Enter First Departure Time"
              label="First Departure Time"
              onChange={handleChange('firstdeparturetime')}
              defaultValue={values.firstdeparturetime}
              margin="normal"
              fullWidth
            />
            <br />

       

   <TextField
              placeholder="Enter Last Arrival Spot"
              label="Last Arrival Spot"
              onChange={handleChange('lastarrivalspot')}
              defaultValue={values.lastarrivalspot}
              margin="normal"
              fullWidth
            />
            <br />



         <TextField
              placeholder="Enter Last Arrival Time"
              label="Last Arrival Time"
              onChange={handleChange('lastarrivaltime')}
              defaultValue={values.lastarrivaltime}
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
export default RouteplannerDetail;
