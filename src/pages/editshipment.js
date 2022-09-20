import React from 'react'
import "./App.css";
import { useHistory } from "react-router-dom";
function EditShipment() {
	const history = useHistory();
	const shipmenthome = () => {
		history.push("/shipment");
	}
	return (
		<>
			<div className="card " >
				<h1>Edit Shipment Page </h1>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Source
					</li>
					<li className="list-group-item">
						Destination
					</li>
					<li className="list-group-item">
						Departture Time
					</li>
					<li className="list-group-item">
						Arrival Time
					</li>
				</ul>
			</div>
			<button className="btn btn-success" onClick={shipmenthome}>
				Back to Shipment
			</button>
		</>
	)
}

export default EditShipment
