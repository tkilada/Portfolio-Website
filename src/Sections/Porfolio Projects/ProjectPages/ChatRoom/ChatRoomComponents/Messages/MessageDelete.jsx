import { Button } from "reactstrap"
import { useParams } from "react-router-dom"

function MessageDelete({token, message,fetchMessages}) {

  

  const handleClick = async(e) => {
    e.preventDefault()
    let id = message._id
    let url = `http://localhost:4000/message/delete/${id}`

    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", token)
    const requestOptions = {
      headers: myHeaders,
      method: "DELETE"
    }
    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      if(data.message === 'message was deleted') {
        fetchMessages()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Button onClick={handleClick} color="danger">
        DELETE
      </Button>
    </div>
  )
}

export default MessageDelete