import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from "axios";

export class CustomerConfirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //

 const customerObject = {
      text: "rossi",
      day: "rossi",
      
    };
    axios.post('http://localhost:8080/createcustomer', customerObject);


    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { id,name,phone,address,email
 }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm Customer Information" />
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
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

export default CustomerConfirm;
