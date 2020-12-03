import React, { useEffect, useState } from "react";
import { AvForm, AvField, AvCheckbox } from "availity-reactstrap-validation";
import { Button, FormGroup, Label } from "reactstrap";
import axios from "axios";
import "../Business/business.css";
import { Link } from "react-router-dom";

export default function NewAlert() {
  // Get Patron Data for Dropdown Menu
  let url = "/react-backend/business/displayCheckIn.php";
  // Store into list
  const [patrons, setPatrons] = useState([]);
  // Store Final Alert as a Const
  const [alert, setAlert] = useState({
    recipients: [],
  });

  // Runs on Page Load
  useEffect(() => {
    axios.get(url).then((json) => {
      setPatrons(json.data);
      console.log(json.data);
    });
  }, []);

  return (
    <div>
      <p></p>
      <h1>REPORT CASE</h1>
      <h3>ALL CUSTOMERS IN SELECTED DATE RANGE WILL BE NOTIFIED</h3>

      <AvForm className='form'>
        <FormGroup>
          <AvField label='Start' type='date' name='start_date' />

          <AvField label='End' type='date' name='end_date' />
        </FormGroup>
        <FormGroup>
          <AvField
            label='Date of Positive Test'
            type='date'
            name='dateOfCase'
          />
        </FormGroup>
        <FormGroup>
          <Button color='danger'>
            <i style={{ color: "white" }} class='fas fa-exclamation-triangle' />{" "}
            Report
          </Button>
          <Button tag={Link} to='/BusinessMain'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
    </div>
  );
}
