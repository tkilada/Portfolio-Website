import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import MessageCreate from '../Messages/MessageCreate';
import MessageTable from '../Messages/MessageTable';
function RoomChat({token}) {
  const [messages, setMessages] = useState([]);
  
  let { id } = useParams()
  const fetchMessages = async() => {
    const url = `http://localhost:4000/message/allmessages/${id}`
    let myHeaders = new Headers()
    myHeaders.append("Authorization", token)
    const requestOptions = {
      method: "GET",
      headers: myHeaders
    };
    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      setMessages(data.message)
    } catch (error) {
      console.log(error.message)
    }
  };
 
  useEffect(() => {
    if(token) {
      fetchMessages();
    }
  }, [token])

  return (
    <div>
      hello
      <Container>
        <Row>
          <Col md='4' color='#eee'>
            [Display users in the room here]
          </Col>
          <Col md='8'>
            <MessageTable messages={messages} fetchMessages={fetchMessages} token={token}/>
          </Col>
        </Row>
        <Row>
          <Col md='4'>
          </Col>
          <Col md='8'>
            <MessageCreate token={token} fetchMessages={fetchMessages}/>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default RoomChat