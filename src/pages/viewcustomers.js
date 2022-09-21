
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import "./App.css";
function ViewCustomers() {
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
  return (
    <div>
      <h1 className="heading">Customer information</h1>
   
      <MaterialTable
        title="View All Customer Information"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
        
        
         
        }}
      />
    </div>
  );
}

export default ViewCustomers;
