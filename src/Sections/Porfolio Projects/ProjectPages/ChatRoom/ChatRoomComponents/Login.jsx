import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import FullWidthButton from "./Buttons/FullWidthButton"

function Login({updateToken}) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const email = emailRef.current.value
    const password = passwordRef.current.value

    let url = 'http://application-0-uowoa.mongodbstitch.com/user/login'
    let bodyObject = JSON.stringify({ email, password })
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
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label>Email: </Label>
          <Input 
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password: </Label>
          <Input 
            type="password"
            innerRef={passwordRef}
          />
        </FormGroup>
        <FullWidthButton>
          <Button type='submit' color='primary'>Login</Button>
        </FullWidthButton>
      </Form>
    </>
  )
}

export default Login