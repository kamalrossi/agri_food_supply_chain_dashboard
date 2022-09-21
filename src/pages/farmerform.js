import React, { Component } from 'react';
import FarmerBasic from './farmerbasic';
import FarmerConfirm from './farmerconfirm';
import FarmerSuccess from './farmersuccess';
export class FarmerForm extends Component {
state = {
step: 1,
id:'',
name:'',
address:'',
age:'',
phone:'',

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
    const {id,name,address,age,phone} = this.state;
    const values = {id, name,address,age,phone};

    switch (step) {
      case 1:
        return (
          <FarmerBasic
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    
      case 2:
        return (
          <FarmerConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <FarmerSuccess />;
      default:
        (console.log('Farmer'))
    }
  }
}

export default FarmerForm;