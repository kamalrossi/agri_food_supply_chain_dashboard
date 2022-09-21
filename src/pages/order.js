import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./App.css";
import React from 'react'

function Order() {
	const history = useHistory();

	const vieworders = () => {
		history.push("/vieworders")
	}
       const orderform = () => {
		history.push("/orderform")
	}


	const editorder = () => {
		history.push("/editorder")
	}
       const deleteorder = () => {
		history.push("/deleteorder")
	}

	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Order Page</h1>
				
				<hr className="my-4" />
				<p>
				 Order Information
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={orderform}>Add Order
					</button>

                                        <button className="btn btn-success"
						onClick={vieworders}>View Order
					</button>


                                        <button className="btn btn-success"
						onClick={editorder}>Edit Order
					</button>

                                        <button className="btn btn-success"
						onClick={deleteorder}>Delete Order
					</button>

				</p>

			</div>
		</>
	)
}

export default Order