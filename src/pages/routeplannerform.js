import React, { Component } from 'react';

import RouteplannerBasic from './routeplannerbasic';
import RouteplannerDetail from './routeplannerdetail';
import RouteplannerConfirm from './routeplannerconfirm';
import RouteplannerSuccess from './routeplannersuccess';


export class RouteplannerForm extends Component {
state = {
step: 1,
id:'',
orderid:'',
customerphone:'',
source:'',
destination:'',
firstdeparturespot:'',
firstdeparturetime:'',
lastarrivalspot:'',
lastarrivaltime:'',
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
    const {id,orderid,customerphone,source,destination,firstdeparturespot,firstdeparturetime,lastarrivalspot,lastarrivaltime
 } = this.state;
    const values = {id,orderid,customerphone,source,destination,firstdeparturespot,firstdeparturetime,lastarrivalspot,lastarrivaltime
 };

    switch (step) {
      case 1:
        return (
          <RouteplannerBasic
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <RouteplannerDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <RouteplannerConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <RouteplannerSuccess />;
      default:
        (console.log('Routeplanner'))
    }
  }
}

export default RoueplannerForm;

