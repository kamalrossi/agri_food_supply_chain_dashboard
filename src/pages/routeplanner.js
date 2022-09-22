import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./App.css";
import React from 'react'

function Routeplanner() {
	const history = useHistory();

	const viewrouteplanners = () => {
		history.push("/viewrouteplanners")
	}
       const routeplannerform = () => {
		history.push("/routeplannerform")
	}


	const editrouteplanner = () => {
		history.push("/editrouteplanner")
	}
       const delete = () => {
		history.push("/deleterouteplanner")
	}

	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Order Page</h1>
				
				<hr className="my-4" />
				<p>
				 Routeplanner Information
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={routeplannerform}>Add Routeplanner
					</button>

                                        <button className="btn btn-success"
						onClick={viewrouteplanners}>View Routeplanner
					</button>


                                        <button className="btn btn-success"
						onClick={editrouteplanner}>Edit Routeplanner
					</button>

                                        <button className="btn btn-success"
						onClick={deleterouteplanner}>Delete Routeplanner
					</button>

				</p>

			</div>
		</>
	)
}

export default Routeplanner