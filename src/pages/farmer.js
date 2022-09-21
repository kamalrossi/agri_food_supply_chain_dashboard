import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./App.css";
import React from 'react'

function Farmer() {
	const history = useHistory();
	const viewfarmers = () => {
		history.push("/viewfarmers")
	}
       const farmerform = () => {
		history.push("/farmerform")
	}


	const editfarmer = () => {
		history.push("/editfarmer")
	}
       const deletefarmer = () => {
		history.push("/deletefarmer")
	}

	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Farmer Page</h1>
				
				<hr className="my-4" />
				<p>
					Farmer Information
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={farmerform}>Add Farmer
					</button>

                                        <button className="btn btn-success"
						onClick={viewfarmers}>View Farmer
					</button>


                                        <button className="btn btn-success"
						onClick={editfarmer}>Edit Farmer
					</button>

                                        <button className="btn btn-success"
						onClick={deletefarmer}>Delete Farmer
					</button>

				</p>

			</div>
		</>
	)
}

export default Farmer