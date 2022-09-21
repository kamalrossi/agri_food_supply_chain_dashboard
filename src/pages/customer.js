import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./App.css";
import React from 'react'

function Customer() {
	const history = useHistory();

	const viewcustomers = () => {
		history.push("/viewcustomers")
	}
       const customerform = () => {
		history.push("/customerform")
	}


	const editcustomer = () => {
		history.push("/editcustomer")
	}
       const deletecustomer = () => {
		history.push("/deletecustomer")
	}

	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Customer Page</h1>
				
				<hr className="my-4" />
				<p>
					Customer Information
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={customerform}>Add Customer
					</button>

                                        <button className="btn btn-success"
						onClick={viewcustomers}>View Customer
					</button>


                                        <button className="btn btn-success"
						onClick={editcustomer}>Edit Customer
					</button>

                                        <button className="btn btn-success"
						onClick={deletecustomer}>Delete Customer
					</button>

				</p>

			</div>
		</>
	)
}

export default Customer