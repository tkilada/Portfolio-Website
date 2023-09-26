import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Badge } from 'reactstrap'
import RoomCreate from './RoomCreate'
import RoomTable from './RoomTable'


function RoomIndex({token}) {
  const [rooms, setRooms] = useState([])
  const fetchRooms = async() => {
    const url = `http://localhost:4000/room/`
    let myHeaders = new Headers()
    myHeaders.append("Authorization", token)
    const requestOptions = {
      method: "GET",
      headers: myHeaders
    };
    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      setRooms(data.room);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    if(token) {
      fetchRooms();
    }
  }, [rooms, token]) 
  
  
  return (
   <div style={{ padding: '40px'}}>
    <Container>
      <Row>
        <Col md="4">
          <RoomCreate token={token}/>
        </Col>
        <Col md="8">
          <RoomTable rooms={rooms}/>
        </Col>
      </Row>
    </Container>
   </div>
  )
}

export default RoomIndex