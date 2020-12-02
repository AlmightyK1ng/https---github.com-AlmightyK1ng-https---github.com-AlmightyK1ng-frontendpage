import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const NewNotification = () => {
  let url = "/react-backend/business/notification.php";

  const [messageData, setMessageData] = useState([]);

  const registrationHandler = () => {
    let newMessage = new FormData();
    newMessage.append("subject", messageData.subject);
    newMessage.append("message", messageData.message);

    axios.post(url, messageData).then((res) => {
      console.log(res);
    });
  };

  const onChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
    console.log(messageData);
  };

  return (
    <div>
      <Form className='form' onValidSubmit={registrationHandler}>
        <Label>
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

              {" "}
              <Button color='success'>Send</Button>{" "}

        </FormGroup>
      </Form>
    </div>
  );
};

export default NewNotification;
