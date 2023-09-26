import React from 'react'
import { useState, useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import FullWidthButton from '../Buttons/FullWidthButton'

function RoomCreate({token}) {
  const nameRef = useRef()
  const descriptionRef = useRef()

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    let url = `http://localhost:4000/room/newroom`

    let bodyObject = JSON.stringify({name, description})
    
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token)

    const requestOptions = {
      headers: myHeaders,
      body: bodyObject,
      method: "POST"
    }
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Room Name</Label>
          <Input innerRef={nameRef}/>
        </FormGroup>
        <FormGroup>
          <Label>Room Description</Label>
          <Input 
            type='text' 
            innerRef={descriptionRef}
            onKeyDown={handleKeyPress}  
          />
        </FormGroup>
        <FullWidthButton>
          <Button color='primary'>Create Room</Button>
        </FullWidthButton>
      </Form>
    </div>
  )
}

export default RoomCreate