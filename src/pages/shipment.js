import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./App.css";
import React from 'react'

function Shipment() {
	const history = useHistory();

	const viewshipments = () => {
		history.push("/viewshipments")
	}
       const addshipment = () => {
		history.push("/shipmentform")
	}


	const editshipment = () => {
		history.push("/editshipment")
	}
       const deleteshipment = () => {
		history.push("/deleteshipment")
	}

	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Shipment Page</h1>
				
				<hr className="my-4" />
				<p>
					View All Shipments
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={shipmentform}>Add Shipment
					</button>

                                        <button className="btn btn-success"
						onClick={viewshipments}>View Shipment
					</button>


                                        <button className="btn btn-success"
						onClick={editshipment}>Edit Shipment
					</button>

                                        <button className="btn btn-success"
						onClick={deleteshipment}>Delete Shipment
					</button>

				</p>

			</div>
		</>
	)
}

export default Shipment
