import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Badge, Button, Container, Table } from 'reactstrap'

function RoomTable({rooms}) {
  const [addedUsers, setAddedUsers] = useState([])
  const handleClick = () => {
    
  }
  return (
    <>
      <Container  style = {{overflow:"scroll",scrollBehavior: "auto", maxHeight: "30rem", minHeight: "30rem", display: 'flex', flexDirection: 'column-reverse'}}>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr>
              <th scope='row'>{room.name}</th>
              <td>{room.description}</td>
              <td>
                <Badge pill>{room.addedUsers.length} Chatting</Badge>
              </td>
              <td>
                <Link to={room._id}>
                  <Button color='success'>Enter Chat</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </>
    // <div>
    //   {rooms.map(room => (
    //   <ListGroup>
    //     <ListGroupItem className='justify-content-center' color='warning'>
    //       {room.name}: {room.description}
    //       <Badge pill>{room.addedUsers.length}</Badge>
    //     </ListGroupItem>
    //   </ListGroup>
    //   ))}
    // </div>
  )
}

export default RoomTable