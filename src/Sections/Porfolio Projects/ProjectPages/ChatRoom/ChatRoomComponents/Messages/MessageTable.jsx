import React from 'react'
import { Button, Container, Table } from "reactstrap"
import MessageDelete from './MessageDelete';
import MessageEdit from './MessageEdit';
function MessageTable({messages, fetchMessages, token}) {

  return (
    <>
      <Container style = {{overflow:"scroll",scrollBehavior: "inherit", maxHeight: "30rem", minHeight: "30rem", display: 'flex', flexDirection: 'column-reverse'}}>
      <Table striped>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {messages.map((message) => (
        <tr key = {message._id}>
          <th scope='row'>{message.when}: {message.user.email}</th>
          <td>{message.body}</td>
          <td>
            <MessageDelete message={message} fetchMessages={fetchMessages} token={token} />
            <br></br>
            <MessageEdit  message={message} fetchMessages={fetchMessages} token={token} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
      </Container>
    </>
  )  
}
export default MessageTable;