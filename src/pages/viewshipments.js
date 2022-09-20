import React from 'react'
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import "./App.css";


function ViewShipments() {
const history = useHistory();
const shipmenthome = () => {
		history.push("/shipment");
	}
  const columns = [
    { title: "ID", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Empty" : true },
    { title: "Source", field: "username", validate: rowData => rowData.username === undefined || rowData.username === "" ? "Empty" : true },
    { title: "Destination", field: "email", validate: rowData => rowData.email === undefined || rowData.email === "" ? "Empty" : true },
    { title: "Departure Time", field: "phone", validate: rowData => rowData.phone === undefined || rowData.phone === "" ? "Empty" : true },
    { title: "Arrival Time", field: "website", validate: rowData => rowData.website === undefined || rowData.website === "" ? "Empty" : true }
  ];
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err.message);
      })
  }, []);
  return (
    <div>
      <h1 className="heading">View Shipment </h1>
      <p className="heading">Do Operation</p>
      <MaterialTable
        title="Users Table"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: newData => new Promise((resolve, reject) => {
            fetch(url, {
              method: "POST",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            })
              .then(response => response.json())
              .then(response => {
                const addData = [...data, { ...response }];
                setData(addData);
                console.log(data);
                resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            fetch(url + "/" + oldData.id, {
              method: "PATCH",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            })
              .then(resp => resp.json())
              .then(resp => {
                const dataUpdate = [...data];
                dataUpdate[oldData.tableData.id] = resp;
                setData(dataUpdate);
                resolve()
              })
          }),
          onRowDelete: oldData => new Promise((resolve, reject) => {
            fetch(url + "/" + oldData.id, {
              method: "DELETE",
              headers: {
                'Content-type': "application/json"
              },

            })
              .then(resp => resp.json())
              .then(resp => {
                const deletedatda = data.filter(item => item.id !== oldData.id)
                setData(deletedatda);
                resolve()
              })
          })
        }}
      />
    </div>

  );
}

export default ViewShipments;
