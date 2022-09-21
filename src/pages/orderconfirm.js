import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from "axios";

export class OrderConfirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //

 const orderObject = {
      text: "rossi",
      day: "rossi",
      
    };
    axios.post('http://localhost:8080/createorder', orderObject);


    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { id,productname,productcategory,customerphone,customeraddress
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
            <AppBar title="Confirm Order Information" />
            <List>
              <ListItem>
                <ListItemText primary="Product Name" secondary={productname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Product Category" secondary={productcategory} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customer Phone" secondary={customerphone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customer Address" secondary={customeraddress} />
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

export default OrderConfirm;
