import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
/*
PHP Code    
$display_table[$i] = ["name" => $business_row['name'], "type" => $business_row['type'],
 "email" => $business_row['email'], "phone" => $business_row['phone'], 
 "street" => $business_row['street'], "town" => $business_row['town'], 
 "zip" => $business_row['zip'], "temperature" => $spreadsheet_row['temperature'], 
 "sheet_date" => $spreadsheet_row['sheet_date']];
*/
const PatronMain = () => {
  let url = "/react-backend/patron/displayVisitedLocation.php";

  // The actual data fetched
  const [rows, setRows] = useState([]);

  // Column headings for MDBreact table
  const columns = [
    {
      label: "Business",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Type",
      field: "type",
      sort: "asc",
      width: 270,
    },
    {
      label: "Email",
      field: "email",
      sort: "des",
      width: 200,
    },
    {
      label: "Phone",
      field: "phone",
      sort: "desc",
      width: 100,
    },
    {
      label: "Street",
      field: "street",
      sort: "asc",
      width: 150,
    },
    {
      label: "Town",
      field: "town",
      sort: "des",
      width: 200,
    },
    {
      label: "Zip",
      field: "zip",
      sort: "desc",
      width: 100,
    },
    {
      label: "Temperature",
      field: "temperature",
      sort: "des",
      width: 200,
    },
    {
      label: "Date",
      field: "sheet_date",
      sort: "desc",
      width: 100,
    },
  ];

  // Fetching the data
  useEffect(() => {
    axios.get(url).then((json) => {
      setRows(json.data);
      //console.log(json.data);
    });
  });

  // Merge columns + rows so it works with MDBDataTable
  const tableData = { columns, rows };

  // Render Table Function. Creates Sortable Table with MDB React
  const renderTable = () => {
    return <MDBDataTable striped bordered data={tableData} />;
  };

  return (
    <div>
      <h1>This is the table</h1>
      {renderTable()}
    </div>
  );
};

export default PatronMain;
