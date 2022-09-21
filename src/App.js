import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/home";
import Farmer from "./pages/farmer";
import Marketer from "./pages/marketer";
import Shipment from "./pages/shipment";
import Routeplanner from "./pages/routeplanner";
import Order from "./pages/order";
import ViewShipments from "./pages/viewshipments";

import AddShipment from "./pages/addshipment";
import EditShipment from "./pages/editshipment";
import DeleteShipment from "./pages/deleteshipment";
import ShipmentForm from "./pages/shipmentform";

import EditOrder from "./pages/editorder";
import DeleteOrder from "./pages/deleteorder";
import ViewOrders from "./pages/vieworders";
import OrderForm from "./pages/orderform";

import Customer from "./pages/customer";
import EditCustomer from "./pages/editcustomer";
import DeleteCustomer from "./pages/deletecustomer";
import ViewCustomers from "./pages/viewcustomers";
import CustomerForm from "./pages/customerform";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/farmer" component={Farmer} />
        <Route path="/marketer" component={Marketer} />
        <Route path="/shipment" component={Shipment} />
        <Route path="/routeplanner" component={Routeplanner} />
        <Route path="/order" component={Order} />
          

        <Route path="/viewshipments" component={ViewShipments} />
        <Route path="/editshipment" component={EditShipment} />
        <Route path="/shipmentform" component={ShipmentForm} />
        <Route path="/deleteshipment" component={DeleteShipment} />
      
        <Route path="/vieworders" component={ViewOrders} />
        <Route path="/editorder" component={EditOrder} />
        <Route path="/orderform" component={OrderForm} />
        <Route path="/deleteorder" component={DeleteOrder} />
        
        <Route path="/customer" component={Customer} />
        <Route path="/viewcustomers" component={ViewCustomers} />
        <Route path="/editcustomer" component={EditCustomer} />
        <Route path="/customerform" component={CustomerForm} />
        <Route path="/deletecustomer" component={DeleteCustomer} />     

       </Switch>
    </Router>
  );
}
export default App;
