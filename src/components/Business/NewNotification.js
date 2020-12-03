import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const NewNotification = () => {
  let url = "/react-backend/business/sendemail/messageByDate.php";

  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    selected_date: "",
  });

  const registrationHandler = () => {
    let newMessage = new FormData();
    newMessage.append("subject", messageData.subject);
    newMessage.append("message", messageData.message);
    newMessage.append("selected_date", messageData.selected_date);

    axios
      .post(url, newMessage)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
    console.log(messageData);
  };

  return (
    <AvForm className='form' onValidSubmit={registrationHandler}>
      {/* <Label>
        <h1>New Message</h1>
      </Label>
      <FormGroup>
        <Label>Subject</Label>
        <Input
          type='text'
          name='subject'
          onChange={(e) => {
            onChange(e);
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label for='exampleText'>Message</Label>
        <Input
          type='textarea'
          name='message'
          onChange={(e) => {
            onChange(e);
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label>Date</Label>
        <Input
          type='date'
          name='selected_date'
          onChange={(e) => {
            onChange(e);
          }}
        /> */}
      <FormGroup check>
        <h1>Send an email to patrons</h1>
        <AvField
          label='Subject'
          type='text'
          name='subject'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <AvField
          type='textarea'
          name='message'
          label='Message'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <FormGroup>
          <AvField
            label='Date'
            type='date'
            name='selected_date'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        {" "}
        <Button color='success'>Send</Button>{" "}
        <Button tag={Link} to='/BusinessMain'>
          Back
        </Button>{" "}
      </FormGroup>
    </AvForm>
  );
};

export default NewNotification;
