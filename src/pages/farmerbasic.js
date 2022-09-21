import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FarmerBasic extends Component {
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

            <AppBar title="Enter Order Information" />
            <TextField
              placeholder="ID"
              label="ID"
              onChange={handleChange('ID')}
              defaultValue={values.ID}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Name"
              label="name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter Age"
              label="Age"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
              fullWidth
            />
            <br />


            <TextField
              placeholder="Enter Phone"
              label="phone"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              fullWidth
            />
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

export default FarmerBasic;
