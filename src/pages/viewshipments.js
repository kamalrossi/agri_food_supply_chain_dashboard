import React from 'react'
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import "./App.css";

import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'  
import axios from "axios";

function ViewShipments() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
      fetchData();
  }, []);
  const fetchData = () => {
      axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then(res =>{
          setTableData(res.data);
      });
      console.log(tableData);
  };
  const columns = [
    { title: "Name", field: "name", cellStyle: { background:"#e6ffe6" }, headerStyle: { color: "#fff" } },
    { title: "Email", field: "email" },
    { title: "Role", field: "role"},
  ]
  return (
    <div className="App">
      {/* <h1 align="center">Riyaz ItGuy</h1> */}
      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)
          })
        }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right",  paging: true, pageSizeOptions: [2, 5, 10], pageSize: 10,
          paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom",
         actionsColumnIndex: -1, selection: true,
          headerStyle: { background: "#00e600",color:"#fff"}  
        }}
        title="Admin UI"/>
    </div>
  );
}
export default ViewShipments;
