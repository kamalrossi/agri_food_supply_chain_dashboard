import React, { Component } from 'react';
import CustomerBasic from './customerbasic';
import CustomerConfirm from './customerconfirm';
import CustomerSuccess from './customersuccess';
export class CustomerForm extends Component {
state = {
step: 1,
name:'',
phone:'',
address:'',
email:'',
};

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

 
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {step } = this.state;
    const {name, phone,address,email } = this.state;
    const values = {name,phone,address,email };

    switch (step) {
      case 1:
        return (
          <CustomerBasic
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    
      case 2:
        return (
          <CustomerConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <CustomerSuccess />;
      default:
        (console.log('Order'))
    }
  }
}

export default CustomerForm;
