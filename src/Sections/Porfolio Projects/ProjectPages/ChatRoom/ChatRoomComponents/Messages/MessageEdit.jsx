import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function MessageEdit({ token, message, fetchMessages }) {
  const [body, setBody] = useState(message.body);
  const [successMessage, setSuccessMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = message._id;
    let url = `http://localhost:4000/message/update/${id}`;
    let bodyObject = JSON.stringify({ body });

    let myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      headers: myHeaders,
      body: bodyObject,
      method: "PUT",
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log("data: ", data);
      if (data.message === "success") {
        console.log(data);
        setBody(data.updateMessage.body);
        setAlertMessage("Message Updated");
        setTimeout(() => setSuccessMessage(false), 5000);
      } else {
        alert('unable to update message')
      }
    } catch (error) {
      console.log(error);
    }
    fetchMessages();
    toggle();
    console.log('body: ', body)
  };

  const handleChange = (e) => {
    setBody(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div> 
     
      <Button onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} message={message}>
        <ModalHeader toggle={toggle}>{body}</ModalHeader>
        <ModalBody>
      <Form onSubmit = {handleSubmit}>
         <Label>
          <Input 
            type="text"
            value={body}
            onChange={handleChange}
          />
         </Label> 
        </Form>
        </ModalBody>
       <ModalFooter>
          <Button
            color="warning"
            onClick={handleSubmit}
            onKeyDown={handleKeyPress}
          >
            Update
          </Button>
          
          <Button>Cancel</Button>
     
        </ModalFooter>
      </Modal>
    
    </div>
  );
}

export default MessageEdit;

{
  /* <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='messageContent' hidden/>
          <Input 
            type='text' 
            placeholder='Type your message here...' 
            value={body}
            onKeyDown={handleKeyPress}
          />
        </FormGroup>
        <Button color='primary'>Update Message</Button>
      </Form> */
}
