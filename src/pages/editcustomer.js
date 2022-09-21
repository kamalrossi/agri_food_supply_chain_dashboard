import React from 'react'
import "./App.css";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";



function EditCustomer() {
const columns = [
    { title: "ID", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Empty" : true },
    { title: "Name", field: "username", validate: rowData => rowData.username === undefined || rowData.username === "" ? "Empty" : true },
    { title: "Phone", field: "email", validate: rowData => rowData.email === undefined || rowData.email === "" ? "Empty" : true },
    { title: "Email", field: "phone", validate: rowData => rowData.phone === undefined || rowData.phone === "" ? "Empty" : true },
    { title: "Address", field: "website", validate: rowData => rowData.website === undefined || rowData.website === "" ? "Empty" : true }
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

	const history = useHistory();
	const customerhome = () => {
		history.push("/customer");
	}
	return (
<div>
      <h1 className="heading">Customer Information</h1>
      <p className="heading">Edit Customer</p>
      <MaterialTable
        title="Edit Customer"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
         
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
          })
        
        }}
      />
    </div>
		
	)
}

export default EditCustomer
