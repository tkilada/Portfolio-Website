import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Container, Row, Col } from 'reactstrap'

function Auth({updateToken}) {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            {/* I added update token to the signup we did not do this in class */}
            <Signup updateToken={updateToken}/>
          </Col>
          <Col md="6">
            <Login updateToken={updateToken} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Auth