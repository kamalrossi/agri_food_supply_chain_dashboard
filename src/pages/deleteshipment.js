import React from 'react'
import "./App.css";
import { useHistory } from "react-router-dom";

function DeleteShipment() {
	const history = useHistory();
	const shipmenthome = () => {
		history.push("/shipment");
	}
	return (
		<>
			<div className="card " >
				<h1>Delete Shipment </h1>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Source
					</li>
					<li className="list-group-item">
						Destination
					</li>
					<li className="list-group-item">
						Arrival
					</li>
					<li className="list-group-item">
						Departure
					</li>
				</ul>
			</div>
			<button className="btn btn-success" onClick={shipmenthome}>
				Back to Home
			</button>
		</>
	)
}

export default DeleteShipment
