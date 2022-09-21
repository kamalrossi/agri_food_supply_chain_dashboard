import React, { Component } from 'react';

import ShipmentBasic from './ShipmentBasic';
import ShipmentDetail from './ShipmentDetail';
import ShipmentConfirm from './ShipmentConfirm';
import ShipmentSuccess from './ShipmentSuccess';

export class ShipmentForm extends Component {
state = {
step: 1,
source:'',
destination:'',
arrival:'',
departure:'',
 };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
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
    const {id, source, destination, arrival,departure } = this.state;
    const values = {id, source, destination, arrival,departure };

    switch (step) {
      case 1:
        return (
          <ShipmentBasic
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ShipmentDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ShipmentConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <ShipmentSuccess />;
      default:
        (console.log('Shipment'))
    }
  }
}

export default ShipmentForm;
