import React, { Component } from 'react';
import OrderBasic from './orderbasic';
import OrderConfirm from './orderconfirm';
import OrderSuccess from './ordersuccess';
export class OrderForm extends Component {
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
          <OrderBasic
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    
      case 2:
        return (
          <OrderConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <OrderSuccess />;
      default:
        (console.log('Order'))
    }
  }
}

export default OrderForm;