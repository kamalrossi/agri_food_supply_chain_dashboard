import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class OrderBasic extends Component {
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
              placeholder="Enter Product Name"
              label="productname"
              onChange={handleChange('productname')}
              defaultValue={values.productname}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Product Category"
              label="Product Category"
              onChange={handleChange('productcategory')}
              defaultValue={values.productcategory}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter Customer Phone"
              label="Customer Phone"
              onChange={handleChange('customerphone')}
              defaultValue={values.customerphone}
              margin="normal"
              fullWidth
            />
            <br />


            <TextField
              placeholder="Enter Customer Address"
              label="customer address"
              onChange={handleChange('customerAddress')}
              defaultValue={values.customerAddress}
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

export default OrderBasic;
