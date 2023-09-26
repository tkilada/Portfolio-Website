import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import FullWidthButton from './Buttons/FullWidthButton';

function Signup({ updateToken }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault()
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
   
    let url = 'http://application-0-uowoa.mongodbstitch.com/user/signup'
    let bodyObject = JSON.stringify({ firstName, lastName, email, password })
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      headers: myHeaders,
      body: bodyObject,
      method: "POST"
    }
    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      if(data.message === 'success') {
        updateToken(data.token)
        //navigate to another page
        navigate('/rooms')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name: </Label>
          <Input 
            innerRef={firstNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name: </Label>
          <Input 
            innerRef={lastNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email: </Label>
          <Input 
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password: </Label>
          <Input 
            innerRef={passwordRef}
            type="password"
          />
        </FormGroup>
        <FullWidthButton>
          <Button type='submit' color='primary'>Sign Up</Button>
        </FullWidthButton>
      </Form>
    </>
  )
}

export default Signup