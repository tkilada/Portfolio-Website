import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function MessageCreate({token, fetchMessages}) {
  const bodyRef = useRef()
  let {id} = useParams()

  const handleSubmit = async(e) => {
    e.preventDefault() 
    const body = bodyRef.current.value 

    let url = `http://localhost:4000/message/create/${id}`

    let bodyObject = JSON.stringify({body})

    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", token)
    const requestOptions = {
      headers: myHeaders,
      body: bodyObject,
      method: "POST"
    }
    try {
      const response = await fetch(url, requestOptions)
      console.log('response: ', response)
      const data = await response.json()
    } catch (error) {
      console.log(error.message)
    }
    fetchMessages()
    bodyRef.current.value = ''
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
          <Label for='messageContent' hidden/>
          <Input 
            type='text' 
            placeholder='Type your message here...' 
            innerRef={bodyRef}
            onKeyDown={handleKeyPress}
          />
        </FormGroup>
        <Button color='primary'>Send Message</Button>
      </Form>
    </div>
  )
}

export default MessageCreate