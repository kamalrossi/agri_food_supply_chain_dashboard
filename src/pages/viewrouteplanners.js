
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import "./App.css";
function ViewRouteplanners() {
  const columns = [
    { title: "ID", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Empty" : true },
    { title: "Order ID", field: "username", validate: rowData => rowData.username === undefined || rowData.username === "" ? "Empty" : true },
    { title: "CustomerPhone", field: "email", validate: rowData => rowData.email === undefined || rowData.email === "" ? "Empty" : true },
    { title: "First Departture Time", field: "website", validate: rowData => rowData.website === undefined || rowData.website === "" ? "Empty" : true },
    { title: "Last Arrival Time", field: "website", validate: rowData => rowData.website === undefined || rowData.website === "" ? "Empty" : true }


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
      <h1 className="heading">Routeplanner information</h1>
   
      <MaterialTable
        title="View All Routeplanner Information"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
        
        
         
        }}
      />
    </div>
  );
}

export default ViewRouteplanner;
